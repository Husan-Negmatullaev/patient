import { Colors } from "configs";
import { width } from "configs/Const";
import React, { memo } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  scrollX: Animated.Value;
  style?: ViewStyle;
}

const Dots = memo(({ scrollX, ...props }: Props) => {
  const opacity1 = scrollX.interpolate({
    inputRange: [0, width, width],
    outputRange: [1, 0.4, 1],
    extrapolate: "clamp",
  });
  const opacity2 = scrollX.interpolate({
    inputRange: [0, width, width],
    outputRange: [0.4, 1, 1],
    extrapolate: "clamp",
  });

  const color1 = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [Colors.TiffanyBlue, Colors.GrayBlue],
    extrapolate: "clamp",
  });

  const color2 = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [Colors.GrayBlue, Colors.TiffanyBlue],
    extrapolate: "clamp",
  });

  const scale1 = scrollX.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: [1.4, 1, 1],
    extrapolate: "clamp",
  });
  const scale2 = scrollX.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: [1, 1.4, 1],
    extrapolate: "clamp",
  });

  return (
    <View style={[styles.container, props.style]}>
      <Animated.View
        style={[
          styles.dot,
          { opacity: opacity1 },
          { backgroundColor: color1 },
          { transform: [{ scale: scale1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.dotCenter,
          { opacity: opacity2 },
          { backgroundColor: color2 },
          { transform: [{ scale: scale2 }] },
        ]}
      />
    </View>
  );
});

export default Dots;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.TiffanyBlue,
  },
  dotCenter: {
    marginHorizontal: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.TiffanyBlue,
  },
});
