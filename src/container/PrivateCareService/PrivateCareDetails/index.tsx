import React, { memo, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import scale from "utils/scale";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Text from "elements/Text";
import {
  DATA_ADDITION,
  DATA_CONDITION,
  DATA_PERSON,
  phonesAreaCodes,
} from "configs/Data";
import { ICON } from "images/Icon";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import TouchablePerson from "components/TouchablePerson";
import TextInputQuestion from "components/TextInputQuestion";
import AdditionInfo from "components/AdditionInfo";
import ButtonChangeCode from "components/ButtonChangeCode";

import InputApp from "elements/InputApp";
import TextInput from "elements/TextInput";
import useModalAnimation from "hooks/useModalAnimation";
//type
import { dataAddition, dataPerson } from "type/healthyQuestion";
import { TcodeArea } from "type/codeArea";
import { condition } from "type/condition";
//modal
import ModalAddSomeone from "components/ModalAddSomeone";
import ModalChangePhoneCode from "components/SignUp/ModalChangePhoneCode";
import ModalSlideBottom from "components/ModalSlideBottom";
import ModalCondition from "components/ModalCondition";
import ModalMenuOption from "components/ModalMenuOption";
import ConnectionMethod from "components/PrivateCareService/ConnectionMethod";

const PrivateCareDetails = memo(({ route }: any) => {
  const { navigate, setOptions } = useNavigation();
  const [isMale, setIsMale] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<number>(1);
  const { visible, open, close, transY } = useModalAnimation();
  //phone
  const [codeArea, setCodeArea] = useState(phonesAreaCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("419-319-9837");
  //person
  const [dataPerson, setDataPerson] = useState<Array<dataPerson>>(DATA_PERSON);
  const [personChoose, setPersonChoose] = useState<dataPerson>(DATA_PERSON[0]);
  //question
  const [question, setQuestion] = useState("");
  const [lengthText, setLengthText] = useState(0);
  //addition
  const [dataCondition, setDataCondition] = useState<Array<dataAddition>>(
    DATA_ADDITION
  );
  const [isCheckAddition, setIsCheckAddition] = useState(false);
  const [additionCurrent, setAdditionCurrent] = useState<dataAddition>(
    DATA_ADDITION[1]
  );
  const [itemCondition, setItemCondition] = useState<condition>(
    DATA_CONDITION[1]
  );
  const [typeModalCondition, setTypeModalCondition] = useState<string>("Add");
  useFocusEffect(
    React.useCallback(() => {
      if (route && route.params && route.params.item) {
        setItemCondition(route.params.item);
        setTypeModal(2);
        open();
      }
    }, [route.params?.item])
  );
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
      },
      header: () => (
        <View style={styles.header}>
          <Text size={13} lineHeight={16}>
            Step 2 of 3
          </Text>
          <Text size={17} lineHeight={20} bold marginTop={scale(8)}>
            Consult Details
          </Text>
          <View style={styles.arrowLeft}>
            <ButtonIconHeader onPress={() => navigate(Routes.SelectSpecial)} />
          </View>
        </View>
      ),
    });
  }, [setOptions]);
  const onPressSomeone = React.useCallback((item: dataPerson) => {
    setTypeModal(1);
    if (item.isAdd) {
      open();
    } else {
      let dataTemp: Array<dataPerson> = [];
      DATA_PERSON.map((data: dataPerson) => {
        if (data.id == item.id) {
          data.check = true;
          setPersonChoose(data);
          setIsMale(false);
        } else {
          data.check = false;
        }
        dataTemp.push(data);
      });
      setDataPerson(dataTemp);
    }
  }, []);
  const onPressPhoneArea = React.useCallback(() => {
    setTypeModal(4);
    open();
  }, []);
  const onChangeCode = React.useCallback((item: TcodeArea) => {
    setCodeArea(item);
    close();
  }, []);
  const onAddSomeone = React.useCallback((item: dataPerson) => {
    dataPerson.pop();
    dataPerson.push(item);
    dataPerson.push({
      id: item.id + 1,
      firstName: "",
      lastName: "",
      relationshipToYou: "friend",
      birthday: "10-08-1999",
      isAdd: true,
      check: false,
    });
    setDataPerson(dataPerson);
    open();
  }, []);
  const onPressAddition = React.useCallback(
    (item: dataAddition) => {
      setAdditionCurrent(item);
      if (item.check) {
        let isCheckAdd = false;
        let dataTemp: Array<dataAddition> = [];
        dataCondition.map((data: dataAddition) => {
          if (data.id == item.id) {
            data.check = false;
          }
          dataTemp.push(data);
          if (data.check == true) {
            isCheckAdd = true;
          }
        });
        setIsCheckAddition(isCheckAdd);
        setDataCondition(dataTemp);
      } else {
        navigate(Routes.HealthSearch, { route: Routes.PrivateCareDetails });
      }
    },
    [additionCurrent, dataCondition, itemCondition]
  );
  const onAddOrSaveCondition = React.useCallback(
    (item: condition) => {
      if (typeModalCondition == "Add") {
        let isCheckAdd = false;
        let dataTemp: Array<dataAddition> = [];
        dataCondition.map((data: dataAddition) => {
          if (data.id == additionCurrent.id) {
            data.check = true;
            data.conditions.push(item);
          }
          dataTemp.push(data);
          if (data.check == true) {
            isCheckAdd = true;
          }
        });
        setIsCheckAddition(isCheckAdd);
        setDataCondition(dataTemp);
      } else {
        let dataTemp: Array<dataAddition> = [];
        dataCondition.map((data: dataAddition) => {
          if (data.id == additionCurrent.id) {
            let addition: Array<condition> = [];
            additionCurrent.conditions.map((conditison: condition) => {
              if (conditison.id == itemCondition.id) {
                addition.push(item);
              } else {
                addition.push(conditison);
              }
            });
            dataTemp.push({
              id: data.id,
              title: data.title,
              check: data.check,
              conditions: addition,
            });
          } else {
            dataTemp.push(data);
          }
        });
        setDataCondition(dataTemp);
      }
      close();
    },
    [additionCurrent, itemCondition, typeModalCondition, dataCondition]
  );
  const onPressDeleted = React.useCallback(() => {
    let dataTemp: Array<dataAddition> = [];
    dataCondition.map((data: dataAddition) => {
      if (data.id == additionCurrent.id) {
        let addition: Array<condition> = [];
        additionCurrent.conditions.map((conditison: condition) => {
          if (conditison.id == itemCondition.id) {
            //
          } else {
            addition.push(conditison);
          }
        });
        dataTemp.push({
          id: data.id,
          title: data.title,
          check: data.check,
          conditions: addition,
        });
      } else {
        dataTemp.push(data);
      }
    });
    setDataCondition(dataTemp);
    close();
  }, [additionCurrent, dataCondition, itemCondition]);
  const onPressEdit = React.useCallback(() => {
    setTypeModalCondition("Edit");
    setTypeModal(2);
  }, [additionCurrent, itemCondition, dataCondition]);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frame}
      >
        <TouchablePerson
          data={dataPerson}
          isYou={false}
          onPress={(item) => onPressSomeone(item)}
          style={{
            borderTopLeftRadius: scale(16),
            borderTopRightRadius: scale(16),
            backgroundColor: Colors.White,
          }}
        />
        <View style={styles.frameAddsomeone}>
          <View style={{ ...Theme.flexRowSpace }}>
            <Text size={15} lineHeight={18} bold>
              More about {personChoose.firstName}
            </Text>
            <Image style={styles.imgArr} source={ICON.arrBlueUp} />
          </View>
          <View style={{ ...Theme.flexRowSpace }}>
            <InputApp
              title={"First Name"}
              colorTitle={Colors.GrayBlue}
              marginTop={scale(19)}
              styleView={{ width: "45%" }}
              value={personChoose.firstName}
            />
            <InputApp
              title={"Last Name"}
              colorTitle={Colors.GrayBlue}
              marginTop={scale(19)}
              styleView={{ width: "45%" }}
              value={personChoose.lastName}
            />
          </View>
          <InputApp
            title={"Birthday"}
            colorTitle={Colors.GrayBlue}
            marginTop={scale(16)}
            value={personChoose.birthday}
            iconLeft={<Image source={ICON.calendar} style={Theme.icons} />}
            isShowIconLeft
          />
          <Text
            size={13}
            lineHeight={16}
            marginTop={16}
            color={Colors.GrayBlue}
          >
            Emergency Phone
          </Text>
          <View style={styles.phoneView}>
            <ButtonChangeCode codeArea={codeArea} onPress={onPressPhoneArea} />
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.phoneNumber}
              borderColor={Colors.Isabelline}
            />
          </View>
          <View style={{ ...Theme.flexRow, marginTop: scale(27) }}>
            <Text size={15} lineHeight={18}>
              Gender:
            </Text>
            <TouchableOpacity
              style={{ ...Theme.flexRow, marginLeft: scale(14) }}
              onPress={() => setIsMale(true)}
              disabled={isMale}
            >
              {isMale ? (
                <Image
                  style={styles.imgActive}
                  source={ICON.radioActive}
                  resizeMode={"center"}
                />
              ) : (
                <View style={styles.imgNoActive}></View>
              )}

              <Text type="H5" marginLeft={scale(8)}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...Theme.flexRow, marginLeft: scale(44) }}
              onPress={() => setIsMale(false)}
              disabled={!isMale}
            >
              {!isMale ? (
                <Image
                  style={styles.imgActive}
                  source={ICON.radioActive}
                  resizeMode={"center"}
                />
              ) : (
                <View style={styles.imgNoActive}></View>
              )}
              <Text type="H5" marginLeft={scale(8)}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInputQuestion
          question={question}
          setQuestion={setQuestion}
          lengthText={lengthText}
          setLengthText={setLengthText}
          minChar={60}
          addAttachments={true}
        />
        <AdditionInfo
          data={dataCondition}
          onPress={(item) => onPressAddition(item)}
          onPressAdd={() =>
            navigate(Routes.HealthSearch, { route: Routes.PrivateCareDetails })
          }
          onPressMore={setItemCondition}
          setModalMore={setTypeModal}
          openModalMore={open}
          selectHealthyData={true}
        />
        <ConnectionMethod
          onPressChat={() => {
              navigate(Routes.PrivateCarePayment, { type: "typeLiveChat" });
          }}
          onPressVoiceCall={() => {
              navigate(Routes.PrivateCarePayment, { type: "typeCall" });
          }}
          onPressVideocall={() => {
              navigate(Routes.PrivateCarePayment, { type: "typeVideo" });
          }}
        />
        <View style={{ ...Theme.flexRowCenter, marginTop: scale(16) }}>
          <Image
            style={{
              width: scale(16),
              height: scale(16),
              marginRight: scale(8),
            }}
            source={ICON.security}
          />
          <Text size={11} lineHeight={14}>
            You details will remain 100% private and secure
          </Text>
        </View>
        <Text
          marginTop={scale(16)}
          size={11}
          lineHeight={18}
          color={Colors.GrayBlue}
          center
        >
          For medical emergencies, please call 911 (or your local{"\n"}emergency
          services) or go to the nearest ER.
        </Text>
        <Modal
          visible={visible}
          onRequestClose={close}
          transparent
          animationType={"none"}
        >
          {typeModal == 3 ? (
            <ModalMenuOption
              close={close}
              open={open}
              transY={transY}
              deleted={onPressDeleted}
              edited={onPressEdit}
            />
          ) : (
            <ModalSlideBottom onClose={close} transY={transY}>
              {typeModal == 1 ? (
                <ModalAddSomeone
                  close={close}
                  open={open}
                  addSomeone={(item: dataPerson) => onAddSomeone(item)}
                  idCurrent={dataPerson[dataPerson.length - 1].id}
                />
              ) : typeModal == 2 ? (
                <ModalCondition
                  close={close}
                  open={open}
                  item={itemCondition}
                  addCondition={(item: condition) => onAddOrSaveCondition(item)}
                  typeModalCondition={typeModalCondition}
                />
              ) : typeModal == 4 ? (
                <ModalChangePhoneCode
                  onChangeCode={onChangeCode}
                  phonesAreaCodes={phonesAreaCodes}
                />
              ) : null}
            </ModalSlideBottom>
          )}
        </Modal>
      </ScrollView>
    </View>
  );
});
export default PrivateCareDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    paddingBottom: getBottomSpace() + scale(32),
  },
  header: {
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight() + 24,
    paddingBottom: 12,
  },
  arrowLeft: {
    position: "absolute",
    left: 24,
    bottom: 16,
  },
  frame: {
    padding: scale(16),
  },
  frameAddsomeone: {
    padding: scale(24),
    borderBottomLeftRadius: scale(16),
    borderBottomRightRadius: scale(16),
    backgroundColor: Colors.White,
    marginBottom: scale(16),
  },
  imgArr: {
    width: scale(24),
    height: scale(24),
  },
  phoneView: {
    ...Theme.flexRow,
    marginTop: 4,
  },
  phoneNumber: {
    marginLeft: 8,
    flex: 1,
  },
  imgActive: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(20),
  },
  imgNoActive: {
    width: scale(19),
    height: scale(19),
    borderRadius: scale(19),
    borderColor: Colors.GrayBoder1,
    borderWidth: scale(1),
  },
});
