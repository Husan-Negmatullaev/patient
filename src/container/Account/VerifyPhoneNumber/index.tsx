import React, { memo, useState, useCallback } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import HeaderButton from "elements/HeaderButton";
import scale from "utils/scale";
import InputCodeOtp from "components/VerifyPhoneNumber/InputCodeOtp";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
interface VerifyPhoneNumberProps {}

const VerifyPhoneNumber = memo((props: VerifyPhoneNumberProps) => {
  const [code, setCode] = useState("");
  const { navigate, setOptions } = useNavigation();
  const onSendAgain = useCallback(() => {}, []);
  const onVerify = useCallback(() => {
    navigate(Routes.BasicInformation);
  }, [navigate]);
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerBackground: () => <View style={{ ...Theme.headerBackGround, backgroundColor: Colors.White }} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);
  return (
    <View style={styles.container}>
      <Text size={24} lineHeight={28} bold marginTop={scale(40)}>
        Verification
      </Text>
      <Text size={13} lineHeight={22} marginTop={16}>
        Please check you message for a six-digit security code
        {"\n"}and enter it below.
      </Text>
      <InputCodeOtp style={styles.enterCode} {...{ code, setCode }} />
      <Text size={13} lineHeight={22} center color={Colors.DarkJungleGreen}>
        Didn'nt get a code?{" "}
        <Text
          size={13}
          lineHeight={22}
          color={Colors.BlueCrayola}
          onPress={onSendAgain}
        >
          Send again
        </Text>
      </Text>
      <ButtonLinear
        title={"Verify"}
        style={styles.buttonLinear}
        children={
          <Image
            source={require("images/Icon/ic_next.png")}
            style={styles.buttonChildren}
          />
        }
        onPress={onVerify}
      />
    </View>
  );
});

export default VerifyPhoneNumber;

const styles = StyleSheet.create({
  container: {
    ...Theme.container,
    backgroundColor: Colors.White,
  },
  enterCode: {
    marginTop: scale(56),
    marginBottom: 32,
  },
  buttonChildren: {
    ...Theme.icons,
    marginLeft: 8,
  },
  buttonLinear: {
    marginTop: 32,
  },
});
