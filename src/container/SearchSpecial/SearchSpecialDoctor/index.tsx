import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { IN_NETWORK } from "configs/Data";
import { Colors, Routes } from "configs";
import { ICON } from "images/Icon";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import ContactDoctorItem from "components/ContactDoctorItem";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import changeAlias from "utils/stringAlias";
import { width } from "configs/Const";

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [searchKey, setSearchKey] = useState<any>("");
  const [myCareTeam, setMyCareTeam] = useState<any>([]);
  const [helpTeam, setHelpTeam] = useState<any>([]);
  const [searchData, setSearchData] = useState<any>([]);
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        elevation: 0,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <>
          {searchKey.length == 0 ? (
            <ButtonIconHeader
              icon="nearby"
              marginRight={24}
              borderColor={Colors.DodgerBlue}
              tintColor={Colors.DodgerBlue}
              onPress={onNearby}
            />
          ) : (
            <View />
          )}
        </>
      ),
      headerTitle: () => (
        <TextInput
          editable
          value={searchKey}
          placeholder="Enter name, speciality..."
          onChangeText={onChangeSearchKey}
          isShowIconLeft
          iconLeft={<Image source={ICON.search} />}
          borderColor={Colors.Isabelline}
          backgroundColor={Colors.Isabelline}
          style={searchKey == 0 ? styles.search : styles.searchLength}
          isShowIcon={searchKey != 0}
          icon={
            <TouchableOpacity
              activeOpacity={0.54}
              style={styles.iconCloseStyle}
              onPress={onIconPress}
            >
              <Image
                source={ICON.close}
                tintColor={Colors.White}
                style={styles.iconClose}
              />
            </TouchableOpacity>
          }
        />
      ),
    });
  });

  useFocusEffect(
    useCallback(() => {
      let data = [];
      let _data = [];
      for (let i = 0; i < 2; i++) {
        data.push(IN_NETWORK[i]);
      }
      for (let i = 2; i < IN_NETWORK.length; i++) {
        _data.push(IN_NETWORK[i]);
      }
      setMyCareTeam(data);
      setHelpTeam(_data);
    }, [])
  );

  const onFilter = () => {
    navigate(Routes.SearchFilter);
  };

  const onChangeSearchKey = useCallback((text) => {
    setSearchKey(text);
    let data = [];
    for (let i = 0; i < IN_NETWORK.length; i++) {
      if (changeAlias(IN_NETWORK[i].name).includes(changeAlias(text))) {
        data.push(IN_NETWORK[i]);
      }
      setSearchData(data);
    }
  }, []);

  const onIconPress = () => {
    setSearchKey("");
  };

  const onNearby = () => {
    navigate(Routes.SearchSpecialDoctorArround);
  };

  return (
    <View style={styles.container}>
      {searchKey.length == 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={styles.content}
        >
          <Text bold size={17} lineHeight={20} marginVertical={24}>
            My Care Team
          </Text>
          {myCareTeam.map((item: any, index: number) => {
            return (
              <ContactDoctorItem key={index} {...item} style={styles.contact} />
            );
          })}
          <Text bold size={17} lineHeight={20} marginVertical={24}>
            Maybe can help you
          </Text>
          {helpTeam.map((item: any, index: number) => {
            return (
              <ContactDoctorItem key={index} {...item} style={styles.contact} />
            );
          })}
        </ScrollView>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={styles.content}
        >
          <View style={Theme.flexRow}>
            <Text size={15} lineHeight={18} marginVertical={24}>
              We found
            </Text>
            <Text
              bold
              size={15}
              lineHeight={18}
              marginVertical={24}
              marginHorizontal={4}
            >
              {searchData.length}
            </Text>
            <Text bold size={15} lineHeight={18} marginVertical={24}>
              doctors for you
            </Text>
          </View>
          {searchData.map((item: any, index: number) => {
            return (
              <ContactDoctorItem key={index} {...item} style={styles.contact} />
            );
          })}
        </ScrollView>
      )}
      <TouchableOpacity
        style={styles.filter}
        activeOpacity={0.54}
        onPress={onFilter}
      >
        <Image source={ICON.filter} tintColor={Colors.White} />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    marginHorizontal: 16,
  },
  searchLength: {
    marginLeft: 16,
    width: width - 108,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace(),
  },
  filter: {
    position: "absolute",
    bottom: getBottomSpace() + 24,
    alignSelf: "center",
    ...Theme.center,
    borderRadius: 12,
    backgroundColor: Colors.PinkOrange,
    width: 56,
    height: 56,
  },
  contact: {
    marginBottom: 24,
  },
  iconClose: {
    width: 9,
    height: 9,
  },
  iconCloseStyle: {
    width: 14,
    height: 14,
    ...Theme.center,
    backgroundColor: Colors.GrayBorder4,
    borderRadius: 30,
  },
});
