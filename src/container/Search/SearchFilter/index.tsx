import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import ButtonText from "elements/Buttons/ButtonText";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { ICON } from "images/Icon";
import CheckBox from "elements/CheckBox";
import Theme from "style/Theme";
import TabBar from "elements/TabBar";

const SPECIALITY_DATA = [
  { id: 0, name: "Urology" },
  { id: 1, name: "Radiation Oncology" },
];

const LANGUAGE_DATA = [
  { id: 0, name: "English" },
  { id: 1, name: "Spanish" },
];

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [gender, setGender] = React.useState<number>(0);
  const [isNearby, setIsNearby] = useState(false);
  const [isCareTeam, setIsCareTeam] = useState(false);
  const [specialityData, setSpecialityData] = useState(SPECIALITY_DATA);
  const [languageData, setLanguageData] = useState(LANGUAGE_DATA);
  const [searchSpeciality, setSearchSpeciality] = useState("");
  const [adress, setAdress] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");

  const onResetAll = () => {
    setSearchSpeciality("");
    setSpecialityData([]);
    setIsNearby(false);
    setSearchLanguage("");
    setLanguageData([]);
    setIsCareTeam(false);
  };

  const onChangeSpeciality = useCallback((text) => {
    setSearchSpeciality(text);
  }, []);

  const onChangeAdress = useCallback((text) => {
    setAdress(text);
  }, []);

  const onChangeLanguage = useCallback((text) => {
    setSearchLanguage(text);
  }, []);

  const onNearby = () => {
    setIsNearby(!isNearby);
  };

  const onCareTeam = () => {
    setIsCareTeam(!isCareTeam);
  };

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        backgroundColor: Colors.White,
        shadowColor: "transparent",
        elevation: 0,
      },
      headerLeft: () => <ButtonIconHeader icon="close" marginLeft={24} />,
      headerRight: () => (
        <ButtonText
          title="Reset All"
          style={styles.buttonText}
          onPress={onResetAll}
        />
      ),
      headerTitle: () => (
        <Text bold center size={17} lineHeight={20}>
          Filter
        </Text>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <Text bold size={15} lineHeight={18} marginBottom={24}>
          Availalbe for Virtual Consult
        </Text>
        <TabBar
          style={styles.tabBar}
          tabs={["All", "Today", "This Week ", "This Month"]}
        />
        <View></View>
        <Text bold size={15} lineHeight={18} marginBottom={24} marginTop={40}>
          Speciality
        </Text>
        <TextInput
          editable
          value={searchSpeciality}
          placeholder="Search speciality..."
          backgroundColor={Colors.Isabelline}
          style={styles.textInput}
          isShowIconLeft
          iconLeft={<Image source={ICON.search} />}
          onChangeText={onChangeSpeciality}
        />
        <View style={styles.smallItemView}>
          {specialityData.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.smallItem}
                key={index}
                activeOpacity={0.54}
              >
                <Text
                  bold
                  size={12}
                  lineHeight={14}
                  color={Colors.White}
                  marginRight={4}
                >
                  {item.name}
                </Text>
                <Image
                  source={ICON.close}
                  tintColor={Colors.White}
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text bold size={15} lineHeight={18} marginBottom={24} marginTop={40}>
          Nearby
        </Text>
        <TextInput
          editable
          value={adress}
          placeholder="Enter Adress.."
          backgroundColor={Colors.Isabelline}
          style={styles.textInput}
          isShowIconLeft
          iconLeft={<Image source={ICON.pinMap} tintColor={Colors.GrayBlue} />}
          onChangeText={onChangeAdress}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.checkTouch}
          onPress={onNearby}
        >
          <CheckBox isCheck={isNearby} onPress={onNearby} />
          <Text semiBold size={15} lineHeight={24} marginLeft={10}>
            Nearby me
          </Text>
        </TouchableOpacity>
        <Text bold size={15} lineHeight={18} marginBottom={24} marginTop={40}>
          Language
        </Text>
        <TextInput
          editable
          value={searchLanguage}
          placeholder="Search Language..."
          backgroundColor={Colors.Isabelline}
          style={styles.textInput}
          isShowIconLeft
          iconLeft={<Image source={ICON.search} />}
          onChangeText={onChangeLanguage}
        />
        <View style={styles.smallItemView}>
          {languageData.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.smallItem}
                key={index}
                activeOpacity={0.54}
              >
                <Text
                  bold
                  size={12}
                  lineHeight={14}
                  color={Colors.White}
                  marginRight={4}
                >
                  {item.name}
                </Text>
                <Image
                  source={ICON.close}
                  tintColor={Colors.White}
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text bold size={15} lineHeight={18} marginBottom={24} marginTop={40}>
          Gender
        </Text>
        <TabBar style={styles.tabBar} tabs={["All", "Male", "Female "]} />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.checkTouch}
          onPress={onCareTeam}
        >
          <CheckBox isCheck={isCareTeam} onPress={onCareTeam} />
          <Text semiBold size={15} lineHeight={24} marginLeft={10}>
            My Care Team
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.buttonBottom}>
        <ButtonLinear title="Show 45+ doctors" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  buttonText: {
    borderWidth: 0,
    marginRight: 24,
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  buttonBottom: {
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: getBottomSpace() + 24,
  },
  textInput: {
    borderWidth: 0,
  },
  checkTouch: {
    ...Theme.flexRow,
    marginTop: 16,
  },
  smallItemView: {
    ...Theme.flexRow,
    marginTop: 16,
  },
  smallItem: {
    backgroundColor: Colors.DodgerBlue,
    ...Theme.flexRow,
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  tabBar: {
    borderRadius: 12,
  },
});
