import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { ICON } from "images/Icon";
import { ALL_HOSPITAL } from "configs/Data";
import changeAlias from "utils/stringAlias";
import Theme from "style/Theme";
import { width } from "configs/Const";
import HospitalItem from "components/Search/SearchSpecial/HospitalItem";
import ButtonText from "elements/Buttons/ButtonText";

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [searchKey, setSearchKey] = useState<any>("");
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

  const onChangeSearchKey = useCallback((text) => {
    setSearchKey(text);
    let data = [];
    for (let i = 0; i < ALL_HOSPITAL.length; i++) {
      if (changeAlias(ALL_HOSPITAL[i].name).includes(changeAlias(text))) {
        data.push(ALL_HOSPITAL[i]);
      }
      setSearchData(data);
    }
  }, []);
  const onIconPress = () => {
    setSearchKey("");
  };

  return (
    <View style={styles.container}>
      {searchKey.length == 0 ? (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            contentContainerStyle={styles.content}
          >
            <View style={Theme.flexRow}>
              <Text size={15} lineHeight={24}>
                Find
              </Text>
              <Text bold size={15} lineHeight={24} marginHorizontal={4}>
                {ALL_HOSPITAL.length}
              </Text>
              <Text size={15} lineHeight={24}>
                hospital, clinic around you.
              </Text>
            </View>
            <ButtonText title="Change location" style={styles.changeLocation} />
            {ALL_HOSPITAL.map((item, index) => {
              return <HospitalItem key={index} {...item} />;
            })}
          </ScrollView>
        </>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={styles.content}
        >
          <View style={Theme.flexRow}>
            <Text size={15} lineHeight={24}>
              Find
            </Text>
            <Text bold size={15} lineHeight={24} marginHorizontal={4}>
              {searchData.length}
            </Text>
            <Text size={15} lineHeight={24}>
              hospital, clinic around you.
            </Text>
          </View>
          <ButtonText title="Change location" style={styles.changeLocation} />
          {searchData.map((item: any, index: number) => {
            return <HospitalItem key={index} {...item} />;
          })}
        </ScrollView>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  content: {
    padding: 24,
  },
  iconClose: {
    width: 9,
    height: 9,
  },
  search: {
    marginHorizontal: 16,
  },
  searchLength: {
    marginLeft: 16,
    width: width - 108,
  },
  iconCloseStyle: {
    width: 14,
    height: 14,
    ...Theme.center,
    backgroundColor: Colors.GrayBorder4,
    borderRadius: 30,
  },
  changeLocation: {
    borderWidth: 0,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
});
