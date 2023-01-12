import React, { memo } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import { ICON } from "images/Icon";
import { Colors } from "configs";
import Theme from "style/Theme";
import scale from "utils/scale";

interface CareServiceProps {
  style?: any;
  icon?: string;
  color?: string;
  title?: string;
  description?: string;
  amount?: number;
  onPress?: () => void;
}

const CareServiceItem = memo(
  ({
    style,
    icon,
    color,
    title,
    description,
    amount,
    onPress,
  }: CareServiceProps) => {
    return (
      <TouchableOpacity
        activeOpacity={0.54}
        onPress={onPress}
        style={[styles.container, style]}
      >
        <View style={[styles.iconView, { backgroundColor: color }]}>
          <Image style={styles.icon} source={ICON[`${icon}`]} />
        </View>
        <View>
          <Text bold size={15} lineHeight={18}>
            {title}
          </Text>
          <Text maxWidth={scale(239)} marginTop={6} size={13} lineHeight={22}>
            {description}
          </Text>
          <Text marginTop={4} size={13} lineHeight={16} color={Colors.GrayBlue}>
            Starting from ${amount} per visit
          </Text>
        </View>
        <Image style={styles.arrow} source={ICON.arrowRight} />
      </TouchableOpacity>
    );
  }
);

export default CareServiceItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 12,
    ...Theme.center,
    marginRight: 16,
  },
  icon: {
    tintColor: Colors.White,
  },
  arrow: {
    position: "absolute",
    right: 28,
    top: 16,
  },
});
