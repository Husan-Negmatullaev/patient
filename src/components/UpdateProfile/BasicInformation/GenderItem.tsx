import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "configs";
import scale from "utils/scale";
import Theme from "style/Theme";
import Text from "elements/Text";

interface GenderItemProps {
  isChoose?: boolean;
  isLastItem?: boolean;
  icon: ImageSourcePropType;
  title?: string;
  onPress: () => void;
}

const GenderItem = (props: GenderItemProps) => {
  return (
    <View style={[styles.container, !props.isLastItem && styles.notLastItem]}>
      <TouchableOpacity
        style={[styles.touch, props.isChoose && styles.touchActive]}
        activeOpacity={0.54}
        onPress={props.onPress}
      >
        <Image
          source={props.icon}
          style={[
            styles.icon,
            props.isChoose ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
      </TouchableOpacity>
      <Text
        size={13}
        lineHeight={22}
        bold={props.isChoose}
        color={props.isChoose ? Colors.DarkJungleGreen : Colors.GrayBlue}
        center
        marginTop={16}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default GenderItem;

const styles = StyleSheet.create({
  container: {},
  notLastItem: {
    marginRight: 48,
  },
  touch: {
    width: scale(72),
    height: scale(72),
    borderRadius: 24,
    borderColor: Colors.Platinum,
    borderWidth: 1,
    ...Theme.center,
  },
  touchActive: {
    backgroundColor: Colors.DodgerBlue,
    borderColor: Colors.DodgerBlue,
  },
  icon: {
    width: 32,
    height: 32,
  },
  inactiveIcon: {
    tintColor: Colors.DarkNavy,
  },
  activeIcon: {
    tintColor: Colors.White,
  },
});
