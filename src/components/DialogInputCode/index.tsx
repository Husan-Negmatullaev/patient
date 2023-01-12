import React, { memo } from "react";
import { View, TouchableOpacity, StyleSheet, Keyboard } from "react-native";
import Text from "elements/Text";
import scale from "utils/scale";
import { Colors, Constants } from "configs";
import Animated, { sub } from "react-native-reanimated";
import Theme from "style/Theme";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { TextInput } from "react-native-gesture-handler";


interface Props {
  open: () => void;
  close: () => void;
  transY: Animated.Node<number>;
  onPress: (code: string) => void;
  header: string;
}

const DialogInputCode = memo(({ open, onPress, close, transY, header }: Props) => {
  const [code, setCode] = React.useState<string>("");
  const onPressApply = React.useCallback(() => {
    if (code && code != "") {
      onPress(code);
      close();
    }
  }, [code])
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
        <Text size={17} lineHeight={20} center bold marginTop={scale(8)}>{header}</Text>
        <TextInput
          style={styles.input}
          value={code}
          onChangeText={setCode}
          autoFocus={true}
        />
        <View style={styles.styleButton}
        >
          <ButtonBorder
            style={{ flex: 1, marginRight: 8 }}
            title={"Cancel"}
            onPress={close}
          />
          <ButtonLinear
            styleButton={{ flex: 1, marginLeft: 8 }}
            style={{ marginTop: 0 }}
            title={"Apply"}
            onPress={onPressApply}
          />
        </View>

      </Animated.View>
    </View>
  );
});

export default DialogInputCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ModalBackground,
    justifyContent: "center",
    alignItems: 'center'
  },
  modal: {
    bottom: -Constants.height,
    borderRadius: scale(16),
    backgroundColor: Colors.White,
    padding: scale(24),
    width: '90%',
    height: scale(250),
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  styleButton: {
    ...Theme.flexRowSpace,
    marginTop: scale(32),
    marginBottom: scale(32)
  },
  input: {
    textAlign: 'center',
    width: '100%',
    color: Colors.DarkJungleGreen,
    height: scale(48),
    marginTop: scale(32),
    borderRadius: scale(8),
    borderWidth: scale(1),
    borderColor: Colors.DodgerBlue,
  },

});
