import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import { getBottomSpace } from "react-native-iphone-x-helper";
import scale from "utils/scale";
import { Colors, Constants } from "configs";
import Animated, { sub } from "react-native-reanimated";
interface Props {
  open: () => void;
  close: () => void;
  transY: Animated.Node<number>;
  deleted: () => void;
  edited: () => void;
}

const ModalMenuOption = memo(({ open, close, transY, deleted, edited }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={close}
        activeOpacity={1}
        style={StyleSheet.absoluteFillObject}
      />
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [
              {
                translateY: sub(0, transY),
              },
            ],
          },
        ]}
      >
        <View style={styles.content}>
          <View style={styles.frame}>
            <TouchableOpacity style={styles.button} onPress={deleted}>
              <Text type="H5" bold>
                Not Anymore
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={edited}>
              <Text type="H5" bold>
                Edit
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={deleted}>
              <Text type="H5" bold color={Colors.RedNeonFuchsia}>
                Deleted
            </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonCancel} onPress={close}>
            <Text type="H5" bold color={Colors.GrayBlue}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
});

export default ModalMenuOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ModalBackground,
    justifyContent: "flex-end",
  },
  modal: {
    position: "absolute",
    bottom: -Constants.height,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  content: {
    padding: scale(16),
    marginBottom: getBottomSpace()
  },
  frame: {
    height: scale(151),
    borderRadius: scale(16),
    backgroundColor: Colors.White
  },
  button: {
    height: scale(49),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderColor: Colors.WhiteSmoke
  },
  buttonCancel: {
    height: scale(50),
    marginTop: scale(24),
    borderRadius: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White
  },

});