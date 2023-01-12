import React, { memo } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import Theme from "style/Theme";
import kFormat from "utils/format/kFormat";
import { ICON } from "images/Icon";

interface HealthFeedItemProps {
  style?: any;
  subTitle?: string;
  title?: string;
  name?: string;
  avatar?: any;
  action?: string;
  subDescription?: string;
  thanks: number;
  shares: number;
  image?: any;
  onPress?: () => void;
  onPressOption?: () => void;
}

const HealthFeedItem = memo(
  ({
    style,
    subTitle,
    title,
    image,
    name,
    avatar,
    action,
    subDescription,
    thanks,
    shares,
    onPress,
    onPressOption,
  }: HealthFeedItemProps) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.54}
        style={[styles.container, style]}
      >
        <View style={styles.titleView}>
          {subTitle && (
            <Text size={13} lineHeight={16}>
              {subTitle}
            </Text>
          )}
          <Text semiBold size={17} lineHeight={25}>
            {title}
          </Text>
        </View>
        <View style={styles.setRow}>
          <View style={Theme.flexRow}>
            <Image style={styles.avatar} source={avatar} />
            <Text bold size={13} lineHeight={16} color={Colors.DodgerBlue}>
              {name}
            </Text>
            <Text marginLeft={4} size={13} lineHeight={16}>
              {action}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.54} onPress={onPressOption}>
            <Image style={styles.icon} source={ICON.option} />
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={image} />
        <Text size={13} lineHeight={22} marginTop={12} marginHorizontal={16}>
          {subDescription}
        </Text>
        <View style={styles.bottom}>
          <Text
            color={Colors.GrayBlue}
            size={13}
            lineHeight={16}
            marginRight={24}
          >
            {kFormat(thanks)} Thanks
          </Text>
          <Text color={Colors.GrayBlue} size={13} lineHeight={16}>
            {kFormat(shares)} Shares
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default HealthFeedItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: Colors.boxShadow,
    shadowOpacity: 1,
    overflow: "hidden",
    marginBottom: 16,
    paddingBottom: 16,
  },
  titleView: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
  },
  image: {
    width: "100%",
    height: 176,
  },
  title: {
    position: "absolute",
    bottom: 12,
    left: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    marginRight: 16,
  },
  setRow: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
    ...Theme.flexRowSpace,
    flex: 1,
  },
  icon: {
    tintColor: Colors.GrayBlue,
  },
  bottom: {
    ...Theme.flexRow,
    marginTop: 12,
    marginHorizontal: 16,
  },
});
