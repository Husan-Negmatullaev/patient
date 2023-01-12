import React, { memo } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import Theme from "style/Theme";

interface FamilyItemProps {
  style?: any;
  avatar?: any;
  name?: string;
  description?: string;
  lastUpdate?: string;
  onPress?: () => void;
}

export default memo(
  ({
    avatar,
    name,
    description,
    lastUpdate,
    style,
    onPress,
  }: FamilyItemProps) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.54}
        style={[styles.container, style]}
      >
        <Text color={Colors.DodgerBlue} size={15} lineHeight={18} bold>
          {name}
        </Text>
        <Text marginTop={8} size={13} lineHeight={16}>
          {description}
        </Text>
        <Text color={Colors.GrayBlue} marginTop={8} size={11} lineHeight={14}>
          Update: {lastUpdate}
        </Text>
        <Image style={styles.avatar} source={avatar} />
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    minHeight: 112,
    paddingVertical: 24,
    paddingLeft: 112,
    paddingRight: 24,
    borderRadius: 12,
    ...Theme.shadow,
  },
  avatar: {
    width: 64,
    height: 64,
    position: "absolute",
    top: 24,
    left: 24,
  },
});
