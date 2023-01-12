import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "elements/Text";
import { width } from "configs/Const";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import changeAlias from "utils/stringAlias";
import { ICON } from "images/Icon";
import { Colors } from "configs";
import Theme from "style/Theme";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HEALTH_TIPS_DATA } from "configs/Data";

interface SearchResultTipsProps {
  searchKey: string;
}

const SearchResultTips = memo(({ searchKey }: SearchResultTipsProps) => {
  const { navigate } = useNavigation();
  const [dataTip, setDataTip] = useState<any>([]);
  useFocusEffect(
    useCallback(() => {
      let data = [];
      for (let i = 0; i < HEALTH_TIPS_DATA.length; i++) {
        if (
          changeAlias(HEALTH_TIPS_DATA[i].tipName).includes(
            changeAlias(searchKey)
          )
        ) {
          data.push(HEALTH_TIPS_DATA[i]);
        }
        setDataTip(data);
      }
    }, [])
  );

  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {dataTip.map((item: any, index: number) => {
        const {
          doctor,
          tipName,
          img,
          numberOfThanks,
          numberOfShares,
          detail,
        } = item;
        const { avatar, name } = doctor;
        return (
          <View style={styles.item} key={index}>
            <View style={styles.bottomBorder}>
              <Text
                marginHorizontal={16}
                bold
                size={17}
                lineHeight={25}
                marginTop={16}
                marginBottom={12}
              >
                {tipName}
              </Text>
            </View>
            <View style={styles.contentHeader}>
              <View style={Theme.flexRow}>
                <Image style={styles.avatar} source={avatar} />
                <Text
                  bold
                  size={13}
                  lineHeight={16}
                  color={Colors.DodgerBlue}
                  marginLeft={12}
                  marginRight={4}
                >
                  Dr. {name}
                </Text>
                <Text size={13} lineHeight={16}>
                  shared
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={ICON.option} />
              </TouchableOpacity>
            </View>
            <Image source={img} style={styles.image} />
            <Text
              marginVertical={12}
              size={13}
              lineHeight={22}
              marginHorizontal={16}
            >
              {detail}
            </Text>
            <View style={Theme.flexRow}>
              {numberOfThanks != 0 ? (
                <Text
                  size={13}
                  lineHeight={16}
                  color={Colors.GrayBlue}
                  marginRight={24}
                  marginLeft={16}
                >
                  {numberOfThanks} Thanks
                </Text>
              ) : (
                <View />
              )}
              {numberOfShares != 0 ? (
                <Text size={13} lineHeight={16} color={Colors.GrayBlue}>
                  {numberOfShares} Shares
                </Text>
              ) : (
                <View />
              )}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
});

export default SearchResultTips;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  contentHeader: {
    ...Theme.flexRowSpace,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  item: {
    marginBottom: 16,
    backgroundColor: Colors.White,
    borderRadius: 12,
    paddingBottom: 24,
  },
  filter: {
    ...Theme.center,
    marginBottom: getBottomSpace() + 24,
  },
  icon: {
    ...Theme.center,
    borderRadius: 12,
    backgroundColor: Colors.PinkOrange,
    width: 56,
    height: 56,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  image: {
    width: width - 48,
    height: 170,
  },
  bottomBorder: {
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
  },
});
