import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Modal,
} from "react-native";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import scale from "utils/scale";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Text from "elements/Text";
import { ScrollView } from "react-native-gesture-handler";
import TouchablePerson from "components/TouchablePerson";
import TextInputQuestion from "components/TextInputQuestion";
import AdditionInfo from "components/AdditionInfo";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import ModalAddSomeone from "components/ModalAddSomeone";
import useModalAnimation from "hooks/useModalAnimation";
import ModalSlideBottom from "components/ModalSlideBottom";
import { dataPerson, dataAddition } from "type/healthyQuestion";
import { DATA_ADDITION, DATA_PERSON, DATA_CONDITION } from "configs/Data";
import { ICON } from "images/Icon";
import ModalCondition from "components/ModalCondition";
import { condition } from "type/condition";
import ModalMenuOption from "components/ModalMenuOption";
import ModalSuggestSimilarQuestion from "components/AskFreeQuestion/ModalSuggestSimilarQuestion";

const HealthQuestion = memo(({ route }: any) => {
  const { setOptions, navigate } = useNavigation();
  const { visible, open, close, transY } = useModalAnimation();
  const [typeModal, setTypeModal] = useState<number>(1);
  //person
  const [dataPerson, setDataPerson] = useState<Array<dataPerson>>(DATA_PERSON);
  //question
  const [question, setQuestion] = useState("");
  const [lengthText, setLengthText] = useState(0);
  //addition
  const [dataCondition, setDataCondition] = useState<Array<dataAddition>>(DATA_ADDITION);
  const [isCheckAddition, setIsCheckAddition] = useState(false);
  const [additionCurrent, setAdditionCurrent] = useState<dataAddition>(DATA_ADDITION[1]);
  const [itemCondition, setItemCondition] = useState<condition>(DATA_CONDITION[1]);
  const [typeModalCondition, setTypeModalCondition] = useState<string>("Add");
  const onAddSomeone = useCallback((item: dataPerson) => {
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
    //setDataPerson(dataPerson);
    //open();
  }, [dataPerson]);
  const onAddOrSaveCondition = useCallback((item: condition) => {
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
    }
    else {
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
            conditions: addition
          });
        }
        else {
          dataTemp.push(data);
        }
      });
      setDataCondition(dataTemp);
    }
    close();

  }, [additionCurrent, itemCondition, typeModalCondition, dataCondition, dataPerson]);
  const onPressAddition = useCallback((item: dataAddition) => {
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
      navigate(Routes.HealthSearch, { route: Routes.HealthQuestion });
    }
  }, [additionCurrent, dataCondition, itemCondition, dataPerson]);
  const onPressSomeone = useCallback((item: dataPerson) => {
    setTypeModal(1);
    if (item.isAdd) {
      open();
    } else {
      let dataTemp: Array<dataPerson> = [];
      dataPerson.map((data: dataPerson) => {
        if (data.id == item.id) {
          data.check = true;
        } else {
          data.check = false;
        }
        dataTemp.push(data);
      });
      setDataPerson(dataTemp);
    }
  }, [dataPerson]);
  const onPressDeleted = useCallback(() => {
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
          conditions: addition
        });
      }
      else {
        dataTemp.push(data);
      }
    });
    setDataCondition(dataTemp);
    close();
  }, [additionCurrent, dataCondition, itemCondition])
  const onPressEdit = useCallback(() => {
    setTypeModalCondition("Edit");
    setTypeModal(2);
  }, [additionCurrent, itemCondition, dataCondition])
  const showModalSuggest = useCallback(() => {
    setTypeModal(4);
    open();
  }, [])
  const gotoSendSuccess = useCallback(() => {
    close();
    navigate(Routes.SendSuccessful);
  }, [])
  useFocusEffect(React.useCallback(() => {
    if (route && route.params && route.params.item) {
      setItemCondition(route.params.item);
      setTypeModal(2);
      open();
    }
  }, [route.params?.item]));
  useLayoutEffect(() => {
    setOptions({
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <Text
            size={scale(17)}
            lineHeight={20}
            bold
            marginBottom={scale(10)}
            center
          >
            {"Ask Free Question"}
          </Text>
        </View>
      ),
      headerStyle: Theme.headerNavigationStyle,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: scale(16) }}>
          <TouchablePerson
            data={dataPerson}
            isYou={false}
            onPress={(item) => onPressSomeone(item)}
            style={{ borderRadius: scale(16), backgroundColor: Colors.White, marginBottom: scale(16) }}
          />
          <TextInputQuestion
            question={question}
            setQuestion={setQuestion}
            lengthText={lengthText}
            setLengthText={setLengthText}
            minChar={30}
          />
          <AdditionInfo
            data={dataCondition}
            onPress={(item) => onPressAddition(item)}
            onPressAdd={() => navigate(Routes.HealthSearch, { route: Routes.HealthQuestion })}
            onPressMore={setItemCondition}
            setModalMore={setTypeModal}
            openModalMore={open}
          />
          <Text
            marginTop={scale(16)}
            size={scale(11)}
            lineHeight={scale(18)}
            center
            color={Colors.GrayBlue}
          >
            For medical emergencies, please call 911 (or your local{"\n"}
            emergency services) or go to the nearest ER.
          </Text>
          <Text
            marginTop={scale(8)}
            size={scale(11)}
            lineHeight={scale(18)}
            center
            color={Colors.GrayBlue}
          >
            Answer on Doctor Plus are not intended for individual{"\n"}
            diagnosis, treatment of perscription.
          </Text>
        </View>
        <View
          style={styles.frame}
        >
          <View
            style={styles.styleNote}
          >
            <Image
              source={ICON.security}
              style={styles.styleIcon}
            />
            <Text
              marginLeft={scale(10)}
              size={scale(11)}
              lineHeight={scale(14)}
              center
            >
              You details will remain 100% private and secure
            </Text>
          </View>
          <ButtonLinear
            title={"Continue"}
            children={
              <Image
                source={
                  lengthText > 30 && isCheckAddition ? ICON.next : ICON.nextGray
                }
                style={styles.buttonChildren}
              />
            }
            onPress={showModalSuggest}
            styleButton={styles.buttonLinear}
            disabled={!(lengthText > 30 && isCheckAddition)}
          />
        </View>
        <Modal
          visible={visible}
          onRequestClose={close}
          transparent
          animationType={"none"}
        >
          {
            typeModal == 3 ?
              <ModalMenuOption
                close={close}
                open={open}
                transY={transY}
                deleted={onPressDeleted}
                edited={onPressEdit}
              />
              :
              <ModalSlideBottom onClose={close} transY={transY}>
                {
                  typeModal == 1 ?
                    <ModalAddSomeone
                      close={close}
                      open={open}
                      addSomeone={(item: dataPerson) => onAddSomeone(item)}
                      idCurrent={dataPerson[dataPerson.length - 1].id}
                    />
                    : typeModal == 2 ?
                      <ModalCondition
                        close={close}
                        open={open}
                        item={itemCondition}
                        addCondition={(item: condition) => onAddOrSaveCondition(item)}
                        typeModalCondition={typeModalCondition}
                      />
                      :
                      <ModalSuggestSimilarQuestion
                        close={close}
                        open={open}
                        gotoSendSuccess={gotoSendSuccess}
                      />
                }
              </ModalSlideBottom>
          }

        </Modal>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
});
export default HealthQuestion;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    paddingTop: scale(16),
  },
  frame: {
    marginTop: scale(40),
    backgroundColor: Colors.White,
    height: scale(124),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  styleNote: {
    justifyContent: "center",
    margin: scale(13),
    flexDirection: "row",
  },
  styleIcon: {
    width: scale(16),
    height: scale(16)
  },
  headerTitle: {
    flex: 1,
  },
  buttonChildren: {
    ...Theme.icons,
    marginLeft: scale(8),
  },
  buttonLinear: {
    width: scale(327),
    height: scale(50),
    marginTop: scale(0),
  },
});
