import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { ICON } from "images/Icon";
import { Colors } from "configs";
import Theme from "style/Theme";
import { AVATAR } from "images/Avatar";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { width } from "configs/Const";
import ModalChangePhoneCode from "components/SignUp/ModalChangePhoneCode";
import ModalSlideBottom from "components/ModalSlideBottom";
import useModalAnimation from "hooks/useModalAnimation";
import { GENDER, phonesAreaCodes, RELATIONSHIP } from "configs/Data";
import { TcodeArea } from "type/codeArea";
import ModalSelect from "components/ModalSelect";
import { categoryList } from "type/category";
import ModalChangeRelationship from "components/ModalChangeRelationship";
import { getBottomSpace } from "react-native-iphone-x-helper";
import MapView from "react-native-maps";
import InputItem from "components/InputItem";
import keyExtractor from "utils/keyExtractor";

const MY_RECORD_INFORMATION = {
  name: "Devin Shelton",
  avatar: "",
  gender: "Male",
  birthday: "06/07/1990",
  language: [
    {
      id: 0,
      language: "English",
    },
    {
      id: 1,
      language: "Spanish",
    },
    {
      id: 2,
      language: "Spanish",
    },
    {
      id: 3,
      language: "Spanish",
    },
    {
      id: 4,
      language: "Spanish",
    },
  ],
  contactEmail: "lehieuds@gmail.com",
  contacPhoneCode: phonesAreaCodes[0],
  contactPhone: "968-926-0227",
  contactAdress: "150 Greene St, NY 10012, NY",
  emergencyContactName: "Jane Foster",
  emergencyContactPhoneCode: phonesAreaCodes[0],
  emergencyContactPhone: "968-926-0227",
  relationship: RELATIONSHIP[0],
};

export default memo(() => {
  const { setOptions } = useNavigation();
  const [gender, setGender] = useState<any>(MY_RECORD_INFORMATION.gender);
  const [relationship, setRelationship] = useState(
    MY_RECORD_INFORMATION.relationship
  );
  const [contactCodeArea, setContactCodeArea] = useState(
    MY_RECORD_INFORMATION.contacPhoneCode
  );
  const [emergencyCodeArea, setEmergencyCodeArea] = useState(
    MY_RECORD_INFORMATION.emergencyContactPhoneCode
  );
  const {
    visible: contactPhoneModal,
    open: openContactPhoneModal,
    close: closeContactPhoneModal,
    transY: transYContact,
  } = useModalAnimation();

  const {
    visible: emergencyPhoneModal,
    open: openEmergencyPhoneModal,
    close: closeEmergencyPhoneModal,
    transY: transYEmergency,
  } = useModalAnimation();

  const {
    visible: genderPick,
    open: openGenderPick,
    close: closeGenderPick,
  } = useModalAnimation();

  const {
    visible: relationPick,
    open: openRelationPick,
    close: closeRelationPick,
    transY: transYRelation,
  } = useModalAnimation();

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.Snow,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);

  const [name, setName] = useState<any>(MY_RECORD_INFORMATION.name);
  const [contactEmail, setContactEmail] = useState<any>(
    MY_RECORD_INFORMATION.contactEmail
  );
  const [contactPhone, setContactPhone] = useState<any>(
    MY_RECORD_INFORMATION.contactPhone
  );
  const [emergencyContactName, setEmergencyContactName] = useState<any>(
    MY_RECORD_INFORMATION.emergencyContactName
  );
  const [emergencyContactPhone, setEmergencyContactPhone] = useState<any>(
    MY_RECORD_INFORMATION.emergencyContactPhone
  );

  const onChangeContactCode = useCallback((item: TcodeArea) => {
    setContactCodeArea(item);
    closeContactPhoneModal();
  }, []);
  const onChangeEmergencyCode = useCallback((item: TcodeArea) => {
    setEmergencyCodeArea(item);
    closeEmergencyPhoneModal();
  }, []);
  const onChangeGender = useCallback((item) => {
    setGender(item.name);
    closeGenderPick();
  }, []);
  const onChangeRelationship = useCallback((item: categoryList) => {
    setRelationship(item);
    closeRelationPick();
  }, []);

  const onChangeEmail = useCallback((value) => {
    setContactEmail(value);
  }, []);
  const onChangePhone = useCallback((value) => {
    setContactPhone(value);
  }, []);
  const onChangeEmergencyContactName = useCallback((value) => {
    setEmergencyContactName(value);
  }, []);
  const onChangeEmergencyContactPhone = useCallback((value) => {
    setEmergencyContactPhone(value);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: getBottomSpace() + 40 }}
    >
      <Text marginTop={24} bold size={24}>
        Basic Informations
      </Text>
      <Text size={11} marginTop={8} marginBottom={40}>
        Last updated: 01:29 PM Jan 04, 2020
      </Text>
      <View style={styles.contentView}>
        <View style={styles.contentHeader}>
          <Image source={ICON.account} style={styles.contentHeaderIcon} />
          <Text marginLeft={16} bold size={15}>
            Share Basic Information
          </Text>
        </View>
        <View style={styles.content}>
          <Image style={styles.avatar} source={AVATAR.avatar2} />
          <InputItem
            label="Full Name"
            value={MY_RECORD_INFORMATION.name}
          />
          <Text marginBottom={4} marginTop={24}>
            Birthday
          </Text>
          <TouchableOpacity activeOpacity={0.54} style={styles.touchRow}>
            <Image source={ICON.calendar} />
            <Text marginLeft={14}>{MY_RECORD_INFORMATION.birthday}</Text>
          </TouchableOpacity>
          <Text marginTop={24} marginBottom={4}>
            Biological Sex
          </Text>
          <TouchableOpacity
            activeOpacity={0.54}
            style={styles.touchSpace}
            onPress={openGenderPick}
          >
            <Text>{gender}</Text>
            <Image source={ICON.arrowDown} />
          </TouchableOpacity>
          <Text marginTop={24} marginBottom={4}>
            Language
          </Text>
          <TouchableOpacity activeOpacity={0.54} style={styles.touchLanguage}>
            <View style={{ height: 24 }} />
            {MY_RECORD_INFORMATION.language.map((item, index) => {
              const [show, setShow] = useState<boolean>(true);
              const { language } = item;
              return (
                <View key={index}>
                  {show ? (
                    <TouchableOpacity
                      style={styles.language}
                      onPress={() => {
                        setShow(false);
                      }}
                    >
                      <Text color={Colors.White} size={11} marginRight={4}>
                        {language}
                      </Text>
                      <Image
                        style={{ width: 12, height: 12 }}
                        source={ICON.close}
                      />
                    </TouchableOpacity>
                  ) : (
                    <></>
                  )}
                </View>
              );
            })}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentView}>
        <View style={styles.contentHeader}>
          <Image source={ICON.guideName} style={styles.contentHeaderIcon} />
          <Text marginLeft={16} bold size={15}>
            Contact Information
          </Text>
        </View>
        <View style={styles.content}>
          <Text marginTop={24} marginBottom={4}>
            Email
          </Text>
          <TextInput
            value={contactEmail}
            borderColor={Colors.WhiteSmoke}
            editable
            onChangeText={onChangeEmail}
          />
          <Text marginTop={24} marginBottom={4}>
            Emergency Phone
          </Text>
          <View style={Theme.flexRow}>
            <TouchableOpacity
              activeOpacity={0.54}
              style={[styles.touchSpace, { width: 112 }]}
              onPress={openContactPhoneModal}
            >
              <Text>{contactCodeArea.code}</Text>
              <Image source={ICON.arrowDown} />
            </TouchableOpacity>
            <TextInput
              style={styles.phoneTextInput}
              value={contactPhone}
              borderColor={Colors.WhiteSmoke}
              editable
              onChangeText={onChangePhone}
            />
          </View>
          <Text marginTop={24} marginBottom={4}>
            Adress
          </Text>
          <TouchableOpacity activeOpacity={0.54} style={styles.touchRow}>
            <Image source={ICON.pinMap} />
            <Text marginLeft={12} size={15}>
              150 Greene St, NY 10012, NY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentView}>
        <View style={styles.contentHeader}>
          <Image source={ICON.emergency} style={styles.contentHeaderIcon} />
          <Text marginLeft={12} size={15}>
            Emergency Contact
          </Text>
        </View>
        <View style={styles.content}>
          <Text marginTop={24} marginBottom={4}>
            Contact Name
          </Text>
          <TextInput
            value={emergencyContactName}
            borderColor={Colors.WhiteSmoke}
            editable
            onChangeText={onChangeEmergencyContactName}
          />
          <Text marginTop={24} marginBottom={4}>
            Emergency Phone
          </Text>
          <View style={Theme.flexRow}>
            <TouchableOpacity
              activeOpacity={0.54}
              style={[styles.touchSpace, { width: 112 }]}
              onPress={openEmergencyPhoneModal}
            >
              <Text>{emergencyCodeArea.code}</Text>
              <Image source={ICON.arrowDown} />
            </TouchableOpacity>
            <TextInput
              style={styles.phoneTextInput}
              borderColor={Colors.WhiteSmoke}
              value={emergencyContactPhone}
              editable
              onChangeText={onChangeEmergencyContactPhone}
            />
          </View>
          <Text marginTop={24} marginBottom={4}>
            Relationship
          </Text>
          <TouchableOpacity
            activeOpacity={0.54}
            style={styles.touchSpace}
            onPress={openRelationPick}
          >
            <Text>{relationship.name}</Text>
            <Image source={ICON.arrowDown} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={contactPhoneModal}
        onRequestClose={closeContactPhoneModal}
        transparent
        animationType={"none"}
      >
        <ModalSlideBottom
          onClose={closeContactPhoneModal}
          transY={transYContact}
        >
          <ModalChangePhoneCode
            onChangeCode={onChangeContactCode}
            phonesAreaCodes={phonesAreaCodes}
          />
        </ModalSlideBottom>
      </Modal>
      <Modal
        visible={emergencyPhoneModal}
        onRequestClose={closeEmergencyPhoneModal}
        transparent
        animationType={"none"}
      >
        <ModalSlideBottom
          onClose={closeEmergencyPhoneModal}
          transY={transYEmergency}
        >
          <ModalChangePhoneCode
            onChangeCode={onChangeEmergencyCode}
            phonesAreaCodes={phonesAreaCodes}
          />
        </ModalSlideBottom>
      </Modal>
      <Modal
        visible={genderPick}
        onRequestClose={closeGenderPick}
        transparent
        animationType={"none"}
      >
        <ModalSelect
          onPressItem={onChangeGender}
          choices={GENDER}
          close={closeGenderPick}
        />
      </Modal>
      <Modal
        visible={relationPick}
        onRequestClose={closeRelationPick}
        transparent
        animationType={"none"}
      >
        <ModalSlideBottom onClose={closeRelationPick} transY={transYRelation}>
          <ModalChangeRelationship
            onChangeRelationship={onChangeRelationship}
          />
        </ModalSlideBottom>
      </Modal>
    </ScrollView>
  );
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    paddingHorizontal: 24,
  },
  contentView: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginBottom: 16,
  },
  contentHeader: {
    ...Theme.flexRow,
    borderColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  content: {
    paddingHorizontal: 24,
  },
  avatar: {
    width: 112,
    height: 112,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 56,
  },
  touchRow: {
    ...Theme.flexRow,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WhiteSmoke,
    padding: 12,
    height: 48,
  },
  touchSpace: {
    backgroundColor: Colors.White,
    ...Theme.flexRowSpace,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WhiteSmoke,
    height: 48,
    padding: 12,
  },
  phoneTextInput: {
    width: width - 216,
    marginLeft: 8,
  },
  touchLanguage: {
    ...Theme.flexRow,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WhiteSmoke,
    padding: 12,
    paddingRight: 40,
    flexWrap: "wrap",
  },
  language: {
    ...Theme.flexRowCenter,
    backgroundColor: Colors.DodgerBlue,
    margin: 4,
    borderRadius: 4,
    padding: 8,
  },
  contentHeaderIcon: {
    tintColor: Colors.DodgerBlue,
    backgroundColor: Colors.WhiteSmoke,
    borderRadius: 4,
  },
});
