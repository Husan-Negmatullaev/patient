import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import SubtitleItem from "components/Consults/SubtilteItem";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { ICON } from "images/Icon";
import Theme from "style/Theme";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { width } from "configs/Const";
import { Colors, Routes } from "configs";
import InputItem from "components/InputItem";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import useModalAnimation from "hooks/useModalAnimation";
import ModalSlideBottom from "components/ModalSlideBottom";
import ModalChangePhoneCode from "components/SignUp/ModalChangePhoneCode";
import { DATA_PERSON, LIST_HEALTH_DATA, phonesAreaCodes } from "configs/Data";
import CheckBox from "elements/CheckBox";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import AdditionalInformationQuestionItem from "components/BookAppointment/AdditionalInformationQuestion";
import ModalSelect from "components/ModalSelect";
import ModalAddNewFile from "components/ModalAddNewFile";
import useModalWithKeyboard from "hooks/useModalWithKeyboard";
import HealthDataItem from "components/BookAppointment/HealthDataItem";
import ModalChangeHealthData from "components/ModalChangeHealthData";
import AttachItem from "components/BookAppointment/AttachItem";
import { IMAGE } from "images/Image";
import ModalProcess from "components/ModalProcess";
import ImportSuccessful from "components/BookAppointment/ImportSuccessful";
import ModalAddSomeone from "components/ModalAddSomeone";
import TouchablePerson from "components/TouchablePerson";
import scale from "utils/scale";
import { dataPerson } from "type/healthyQuestion";

const ChoosenHealthData = {
  img: IMAGE.fitbitHeart,
  name: "Fitbit Health",
  comp: "",
  time: "Last update: 16:48 PM Jan, 4 2020",
};

const Attachment = {
  img: IMAGE.childDrink,
  detail: "Redness on the back of the neck",
  time: "Jan, 05 2020",
};

const ListConditionQuestion = [
  { id: 0, title: "Flu vs. Cold", date: "Jan 5, 2020" },
];
const AddListCondition = { id: 0, title: "Flu vs. Cold", date: "Jan 5, 2020" };

const menuOptions = [
  {
    id: 0,
    name: "Take a Photo",
  },
  {
    id: 1,
    name: "Take a Video",
  },
  {
    id: 2,
    name: "From Doctor Plus Library",
  },
  {
    id: 3,
    name: "From Photos",
  },
];

const BookAppointmentDetail = memo(() => {
  const { navigate } = useNavigation();
  const [typeModal, setTypeModal] = useState<number>(1);
  const [attachment, setAttachment] = useState<any>(Attachment);
  const [conditionList, setConditionList] = useState(ListConditionQuestion);
  const [conditionAdd, setConditionAdd] = useState(AddListCondition);
  const [healthData, setHealthData] = useState<any>(ChoosenHealthData);
  const [isMale, setIsMale] = useState(false);
  const [code, setCode] = useState(phonesAreaCodes[0]);
  const [birthDay, setBirthday] = useState<any>("2016-02-22");
  const [question, setQuestion] = useState<string>(
    "I think my child has been exposed tochickenpox, what should I do? How long does it take to show signs of chickenpoxafter being exposed?"
  );

  //
  const [dataPerson, setDataPerson] = useState<Array<dataPerson>>(DATA_PERSON);
  const [selectedPerson, setSelectedPerson] = useState<any>(DATA_PERSON[0]);
  const [moreAbout, setMoreAbout] = useState(true);

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

  const onPressSomeone = React.useCallback((item: dataPerson) => {
    setTypeModal(1);
    if (item.isAdd) {
      open();
    } else {
      let dataTemp: Array<dataPerson> = [];
      dataPerson.map((data: dataPerson) => {
        if (data.id == item.id) {
          setSelectedPerson(data);
          data.check = true;
          setIsMale(false);
        } else {
          data.check = false;
        }
        dataTemp.push(data);
      });
      setDataPerson(dataTemp);
    }
  }, []);

  const onMoreAbout = () => {
    setMoreAbout(!moreAbout);
  };

  //
  const onChangeQuestion = useCallback((text) => {
    setQuestion(text);
  }, []);

  const { visible, open, close, transY } = useModalAnimation();
  const {
    visible: processVisible,
    open: processOpen,
    close: processClose,
    transY: processTransY,
  } = useModalAnimation();

  const {
    visible: addVisible,
    open: addOpen,
    close: addClose,
    translateY: addTranslateY,
  } = useModalWithKeyboard(false);

  const { setOptions } = useNavigation();

  const codeOpen = () => {
    setTypeModal(2);
    open();
  };

  const onChangeCode = useCallback(
    (item) => {
      close();
      setCode(item);
    },
    [code]
  );

  const onMale = () => {
    setIsMale(true);
  };
  const onFemale = () => {
    setIsMale(false);
  };

  const attachOpen = () => {
    setTypeModal(3);
    open();
  };

  const handleAttach = () => {
    close();
    setAttachment(Attachment);
    addOpen();
  };

  const onCloseAttachment = useCallback(() => {
    setAttachment(null);
  }, [attachment]);

  const healthOpen = () => {
    setTypeModal(0);
    open();
  };

  const onPressHealthData = useCallback(() => {
    close();
    processOpen();
    setHealthData(ChoosenHealthData);
  }, [typeModal]);

  const onCloseHealth = useCallback(() => {
    setHealthData(null);
  }, [healthData]);

  const onPayment = () => {
    navigate(Routes.BookAppointmentPayment);
  };

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.White,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerTitle: () => (
        <View style={Theme.center}>
          <Text semiBold size={13} lineHeight={16} marginBottom={8}>
            Step 2 of 3
          </Text>
          <Text size={17} lineHeight={20} marginBottom={8} bold>
            Consult Details
          </Text>
        </View>
      ),
      headerRight: () => <View style={{ marginRight: 24 }} />,
    });
  });

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
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
          <View style={Theme.flexRowSpace}>
            <Text bold size={15} lineHeight={18}>
              More About {selectedPerson.lastName}
            </Text>
            {moreAbout ? (
              <TouchableOpacity
                style={styles.showIcon}
                activeOpacity={0.54}
                onPress={onMoreAbout}
              >
                <Image source={ICON.arrUp} tintColor={Colors.White} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.showIcon}
                activeOpacity={0.54}
                onPress={onMoreAbout}
              >
                <Image source={ICON.arrowDown} tintColor={Colors.White} />
              </TouchableOpacity>
            )}
          </View>
          {moreAbout ? (
            <>
              <View style={Theme.flexRowSpace}>
                <InputItem
                  labelColor={Colors.GrayBlue}
                  label="First Name"
                  value={selectedPerson.firstName}
                />
                <InputItem
                  labelColor={Colors.GrayBlue}
                  label="Last Name"
                  value={selectedPerson.lastName}
                />
              </View>
              <InputItem
                labelColor={Colors.GrayBlue}
                iconLeft={<Image source={ICON.calendar} style={Theme.icons} />}
                isShowIconLeft={true}
                label="Birthday"
                value={selectedPerson.birthday}
              />
              <InputItem
                labelColor={Colors.GrayBlue}
                label="Emergency Phone"
                value="968-926-0227"
                isPhone
                phoneCode={code}
                onPress={codeOpen}
              />
              <View style={styles.gender}>
                <Text size={15} lineHeight={18}>
                  Gender:
                </Text>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.maleCheck}
                  onPress={onMale}
                >
                  <CheckBox onPress={onMale} isRounded isCheck={isMale} />
                  <Text size={15} lineHeight={24} marginLeft={8}>
                    Male
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  style={Theme.flexRow}
                  onPress={onFemale}
                >
                  <CheckBox onPress={onFemale} isRounded isCheck={!isMale} />
                  <Text size={15} lineHeight={24} marginLeft={8}>
                    Female
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
        <SubtitleItem icon="help" title="What is your question?">
          <TextInput
            value={question}
            backgroundColor={Colors.WhiteSmoke}
            borderColor={Colors.WhiteSmoke}
            style={styles.question}
            multiline
            editable
            onChangeText={onChangeQuestion}
          />
          <View style={Theme.flexRowRight}>
            <Text
              size={11}
              lineHeight={14}
              color={Colors.GrayBlue}
              marginRight={16}
              marginBottom={16}
              marginTop={8}
            >
              Mins 60 chars
            </Text>
            <Text
              size={11}
              lineHeight={14}
              color={Colors.GrayBlue}
              marginBottom={16}
              marginTop={8}
            >
              {question.length}/1000
            </Text>
          </View>
          <View>
            {attachment != null ? (
              <AttachItem {...attachment} onClose={onCloseAttachment} />
            ) : (
              <></>
            )}
          </View>
          <ButtonBorder
            iconLeft={ICON.attach}
            iconColor={Colors.DodgerBlue}
            title="Add Attachments"
            color={Colors.GrayBlue}
            onPress={attachOpen}
          />
        </SubtitleItem>
        <SubtitleItem
          icon="additionalInformation"
          title="Additional Information"
        >
          <View style={styles.additionalInformation}>
            <AdditionalInformationQuestionItem
              title="Do you have any previous diagnosed conditions?"
              buttonTitle="Add Condition"
              list={conditionList}
            />
            <AdditionalInformationQuestionItem
              title="Do you take any medications?"
              buttonTitle="Add Medication"
            />
            <AdditionalInformationQuestionItem
              title="Do you have any allergies?"
              buttonTitle="Add Allergies"
            />
          </View>
          <Text bold size={13} lineHeight={16} marginTop={24} marginBottom={16}>
            Sync with Health Services
          </Text>
          <Text size={13} lineHeight={22} marginBottom={24}>
            By importing your health data from Smart Devices, Doctor can better
            help you.
          </Text>
          <View>
            {healthData != null ? (
              <HealthDataItem {...healthData} onClose={onCloseHealth} />
            ) : (
              <></>
            )}
          </View>
          <ButtonBorder
            title="Select Health Data"
            color={Colors.GrayBlue}
            iconLeft={ICON.healthGuide}
            iconColor={Colors.DodgerBlue}
            onPress={healthOpen}
          />
          <View style={Theme.flexRowCenter}>
            <Image source={ICON.security} />
            <Text
              color={Colors.GrayBlue}
              size={13}
              lineHeight={16}
              marginVertical={12}
              marginLeft={8}
            >
              HIPAA Secure
            </Text>
          </View>
        </SubtitleItem>
        <Text
          marginTop={16}
          size={11}
          lineHeight={18}
          color={Colors.GrayBlue}
          center
          marginHorizontal={32}
        >
          For medical emergencies, please call 911 (or your local emergency
          services) or go to the nearest ER.
        </Text>
      </ScrollView>
      <View style={styles.buttonBottom}>
        <View style={styles.textBottom}>
          <Image source={ICON.security} />
          <Text size={11} lineHeight={14} marginLeft={10}>
            You details will remain 100% private and secure
          </Text>
        </View>
        <ButtonLinear
          title="Go to Payment"
          onPress={onPayment}
          children={<Image source={ICON.next} />}
        />
      </View>
      <Modal
        visible={visible}
        onRequestClose={close}
        transparent
        animationType={"none"}
      >
        {typeModal == 1 ? (
          <ModalSlideBottom onClose={close} transY={transY}>
            <ModalAddSomeone
              close={close}
              open={open}
              addSomeone={(item: dataPerson) => onAddSomeone(item)}
              idCurrent={dataPerson[dataPerson.length - 1].id}
            />
          </ModalSlideBottom>
        ) : typeModal == 2 ? (
          <ModalSlideBottom onClose={close} transY={transY}>
            <ModalChangePhoneCode
              onChangeCode={onChangeCode}
              phonesAreaCodes={phonesAreaCodes}
            />
          </ModalSlideBottom>
        ) : typeModal == 3 ? (
          <ModalSelect
            onPressItem={handleAttach}
            choices={menuOptions}
            close={close}
          />
        ) : (
          <ModalSlideBottom onClose={close} transY={transY}>
            <ModalChangeHealthData
              healthData={LIST_HEALTH_DATA}
              onChange={onPressHealthData}
            />
          </ModalSlideBottom>
        )}
      </Modal>
      <Modal
        visible={addVisible}
        onRequestClose={addClose}
        transparent
        animationType={"slide"}
      >
        <ModalAddNewFile close={addClose} translateY={addTranslateY} />
      </Modal>
      <Modal
        visible={processVisible}
        onRequestClose={processClose}
        transparent
        animationType={"fade"}
      >
        <ModalProcess onClose={processClose} transY={processTransY}>
          <ImportSuccessful />
        </ModalProcess>
      </Modal>
    </View>
  );
});

export default BookAppointmentDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 132,
  },
  frameMoreAbout: {
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  frameAddsomeone: {
    padding: scale(24),
    borderBottomLeftRadius: scale(16),
    borderBottomRightRadius: scale(16),
    backgroundColor: Colors.White,
    marginBottom: scale(16),
  },
  buttonBottom: {
    position: "absolute",
    bottom: 0,
    paddingBottom: getBottomSpace() + 16,
    paddingTop: 13,
    width: width,
    paddingHorizontal: 24,
    backgroundColor: Colors.White,
  },
  textBottom: {
    ...Theme.flexRowCenter,
    marginBottom: 12,
  },
  gender: {
    ...Theme.flexRow,
    marginTop: 24,
  },
  maleCheck: {
    marginLeft: 14,
    marginRight: 46,
    ...Theme.flexRow,
  },
  question: {
    padding: 12,
  },
  additionalInformation: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
  },
  showIcon: {
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 4,
    padding: 4,
  },
});
