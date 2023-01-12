import React, { useCallback, Dispatch, SetStateAction, useRef } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import { Colors, Constants } from "configs";
import Theme from "style/Theme";
import fillNumberLength from "utils/convert/fillNumberLength";
interface InputCodeOtpProps {
  style?: ViewStyle;
  codeLength?: number;
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}

const InputCodeOtp = ({
  style,
  codeLength = 5,
  code,
  setCode,
}: InputCodeOtpProps) => {
  const _code = fillNumberLength(code, codeLength);
  const inputRef: any = useRef();
  const renderInputBox = useCallback(() => {
    let arrBox = [];
    for (let i = 0; i < _code.length; i++) {
      arrBox.push(
        <View
          key={i.toString()}
          style={[
            styles.box,
            i !== codeLength - 1 && styles.space,
            _code.charAt(i) !== "#" && styles.alreadyEnter,
          ]}
        >
          {_code.charAt(i) !== "#" && (
            <Text size={32} semiBold center lineHeight={40}>
              {_code.charAt(i)}
            </Text>
          )}
        </View>
      );
    }
    return arrBox;
  }, [_code]);

  const onPressInput = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const onChangeText = useCallback(
    (text: string) => {
      let _text = text;
      if (text.length > codeLength) {
        _text = text.substring(0, codeLength);
      }
      setCode(_text);
    },
    [codeLength]
  );

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPressInput}>
      {renderInputBox()}
      {code.length === codeLength && (
        <Image
          source={require("images/Icon/ic_accept.png")}
          style={styles.iconAccept}
        />
      )}
      <TextInput
        value={code}
        onChangeText={onChangeText}
        style={styles.fakeInput}
        ref={inputRef}
        keyboardType={"numeric"}
      />
    </TouchableOpacity>
  );
};

export default InputCodeOtp;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRow,
    alignSelf: "center",
  },
  box: {
    width: 48,
    height: 56,
    borderColor: Colors.DarkJungleGreen,
    borderWidth: 1,
    borderRadius: 12,
    ...Theme.center,
  },
  space: {
    marginRight: 8,
  },
  iconAccept: {
    position: "absolute",
    right: -32,
    width: 24,
    height: 24,
  },
  fakeInput: {
    position: "absolute",
    right: -Constants.width * 2,
  },
  alreadyEnter: {
    borderColor: Colors.Malachite,
  },
});
