import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Constants } from "configs";
import Animated, { sub } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

interface ModalSlideBottomProps {
  children: any;
  onClose: () => void;
  transY: Animated.Node<number>;
}

const ModalSlideBottom = (props: ModalSlideBottomProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onClose}
        activeOpacity={1}
        style={StyleSheet.absoluteFillObject}
      />
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [
              {
                translateY: sub(0, props.transY),
              },
            ],
          },
        ]}
      >
        {/* <PanGestureHandler> */}
        {/* <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 36,
              backgroundColor: "red",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            }}
          /> */}
        {/* </PanGestureHandler> */}
        <View style={styles.buttonSlider} />
        {props.children}
      </Animated.View>
    </View>
  );
};

export default ModalSlideBottom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ModalBackground,
    justifyContent: "flex-end",
  },
  modal: {
    position: "absolute",
    bottom: -Constants.height,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  buttonSlider: {
    width: 48,
    height: 6,
    backgroundColor: Colors.Platinum,
    marginTop: 12,
    borderRadius: 3,
    alignSelf: "center",
  },
});
