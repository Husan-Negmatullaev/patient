import React, { memo, useCallback, useLayoutEffect } from "react";
import Text from "elements/Text";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { Colors } from "configs";
import AccountItem from "components/AccountItem";
import { ICON } from "images/Icon";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import keyExtractor from "utils/keyExtractor";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import Theme from "style/Theme";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { FEATURE_CATEGORY, PROFILE } from "configs/Data";

export default memo(() => {
  const { setOptions } = useNavigation();
  const [familyDetail, setFamilyDetail] = React.useState<any[]>();
  const [profile, setProfile] = React.useState<any[]>();

  useFocusEffect(
    React.useCallback(() => {
      setFamilyDetail(FEATURE_CATEGORY);
      setProfile(PROFILE);
    }, [])
  );

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
      },
      headerBackground: () => <View style={{ ...Theme.headerBackGround }} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);

  const renderData = [{ id: 0 }, { id: 1, data: familyDetail }, { id: 2 }];

  const renderItem = useCallback(({ item }) => {
    const { id, data } = item;
    if (id === 1) {
      return (
        <View style={styles.content}>
          {data &&
            data.map((item: any, index: any) => {
              return <AccountItem key={index} {...item} />;
            })}
        </View>
      );
    }
  }, []);

  const listHeaderComponent = () => {};

  const listFooterComponent = () => {
    return (
      <View style={styles.listFooter}>
        <Text size={13} lineHeight={16} bold>
          Sync with Health Services
        </Text>
        <Text marginTop={16} marginBottom={24} size={13} lineHeight={22}>
          By importing your health data from Smart Devices, Doctor can better
          help you.
        </Text>
        <ButtonBorder
          iconLeft={ICON.healthGuide}
          iconColor={Colors.DodgerBlue}
          color={Colors.GrayBlue}
          title="Select Health Data"
        />
        <View style={Theme.center}>
          <View style={{ ...Theme.flexRow, marginTop: 8 }}>
            <Image source={ICON.security} />
            <Text marginLeft={10} color={Colors.GrayBlue}>
              HIPAA Secure
            </Text>
          </View>
          <Text lineHeight={14} marginHorizontal={48} marginTop={24} size={11}>
            Last synced: 13:29 PM Jan 04, 2020
          </Text>
          <Text lineHeight={14} size={11}>
            from Apple Health
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={renderData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        // ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
  },
  content: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    paddingVertical: 8,
    ...Theme.shadow,
    marginHorizontal: 24,
    marginTop: 40,
  },
  flatList: {
    borderRadius: 12,
    paddingTop: 40,
    paddingBottom: getBottomSpace() + 40,
  },
  listFooter: {
    padding: 24,
    paddingBottom: 31,
    backgroundColor: Colors.White,
    borderRadius: 16,
    marginTop: 16,
    marginHorizontal: 24,
    ...Theme.shadow,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 34,
    borderWidth: 3,
    borderColor: Colors.White,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    //shadowOpacity: 0.05,
    // shadowRadius: 4,
    elevation: 4,
  },
});
