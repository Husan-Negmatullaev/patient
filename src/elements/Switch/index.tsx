import React, { useRef } from "react";
import {
  ViewStyle,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { Colors } from "configs";
import scale from "utils/scale";


interface Props {
  style?: ViewStyle;
  enable?: boolean;
  backgroundActive?: string;
  backgroundInactive?: string;
  circleActiveColor?: string;
  circleInActiveColor?: string;
  onPress?: () => void;
}

export default (props: Props) => {
  const transX = useRef(new Animated.Value(0)).current;
  const {
    style,
    enable,
    backgroundActive,
    backgroundInactive,
    circleActiveColor,
    circleInActiveColor,
    onPress,
  } = props;
  const colorToggle = enable ? circleActiveColor : circleInActiveColor;
  const viewToggle = enable
    ? { backgroundColor: backgroundActive }
    : { backgroundColor: backgroundInactive };

  const _onPress = (type: any) => {
    if (enable) {
      Animated.spring(transX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else if (enable === false) {
      Animated.spring(transX, {
        toValue: 22,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    onPress && onPress();
  };

  return (
    <TouchableWithoutFeedback onPress={_onPress}>
      <View style={[styles.container, viewToggle, style, { borderWidth: enable ? 0.5 : scale(1.5) }]}>
        <Animated.View
          style={[
            styles.circleToggle,
            { backgroundColor: colorToggle },
            { transform: [{ translateX: transX }] },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(56),
    height: scale(32),
    borderRadius: scale(16),
    justifyContent: "center",
    borderColor: Colors.GrayBoder,

  },
  circleToggle: {
    width: scale(29),
    margin: scale(2),
    height: scale(29),
    borderRadius: scale(28),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
});