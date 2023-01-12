import React, { useState, useCallback, memo } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Text from "elements/Text";
import scale from "utils/scale";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import { useNavigation } from "@react-navigation/native";
import InputApp from "elements/InputApp";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import HeaderButton from "elements/HeaderButton";
import { useLayoutEffect } from "react";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
interface RecoveryPasswordProps {}

const RecoveryPassword = memo((props: RecoveryPasswordProps) => {
  const [resetCode, setResetCode] = useState("123456");
  const [newPassword, setNewPassword] = useState("12345678");
  const [confirmPassword, setConfirmPassword] = useState("12345678");
  const [visibleNewPassword, setVisibleNewPassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const { goBack, navigate, setOptions } = useNavigation();

  const onShowHideNewPassword = useCallback(() => {
    setVisibleNewPassword((prev) => !prev);
  }, []);
  const onShowHideConfirmPassword = useCallback(() => {
    setVisibleConfirmPassword((prev) => !prev);
  }, []);

  const onChangePassword = useCallback(() => {
    navigate(Routes.ChangePasswordSuccessful);
  }, [navigate]);

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerBackground: () => <View style={{ ...Theme.headerBackGround}} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text type={"H2"} bold>
          Recovery Password
        </Text>
        <Text type="P6" style={{ marginTop: 16 }}>
          Reset code was sent to your email. Please enter the
          {"\n"}code and create new password.
        </Text>
      </View>
      <InputApp
        title={"Reset Code"}
        value={resetCode}
        onChangeText={setResetCode}
        marginTop={scale(40)}
      />
      <InputApp
        title={"New Password"}
        value={newPassword}
        onChangeText={setNewPassword}
        marginTop={24}
        secureTextEntry={!visibleNewPassword}
        isShowIcon={true}
        icon={
          <Image
            source={require("images/Icon/ic_eye_on.png")}
            style={styles.icon}
          />
        }
        iconPress={onShowHideNewPassword}
      />
      <InputApp
        title={"Confirm New Password"}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        marginTop={24}
        secureTextEntry={!visibleConfirmPassword}
        isShowIcon={true}
        icon={
          <Image
            source={require("images/Icon/ic_eye_on.png")}
            style={styles.icon}
          />
        }
        iconPress={onShowHideConfirmPassword}
      />
      <ButtonLinear title={"Change Password"} onPress={onChangePassword}  style={{ marginTop: scale(24) }}/>
    </View>
  );
});

export default RecoveryPassword;

const styles = StyleSheet.create({
  container: {
    ...Theme.container,
  },
  inputCode: {
    marginTop: scale(40),
  },
  input: {
    marginTop: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Platinum,
    ...Theme.center,
  },
  content: {
    marginTop: scale(40),
  },
  description: {
    marginTop: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
