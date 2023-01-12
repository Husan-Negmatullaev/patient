import React, { memo, Dispatch, SetStateAction } from "react";
import { View, StyleSheet, Image } from "react-native";
import HeaderButton from "elements/HeaderButton";
import Theme from "style/Theme";
import Text from "elements/Text";
import scale from "utils/scale";
import { Colors } from "configs";
import InputApp from "elements/InputApp";
import TextInput from "elements/TextInput";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import ButtonChangeCode from "components/ButtonChangeCode";
import { TcodeArea } from "type/codeArea";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

interface SignUpUiProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isValidEmail: boolean;
  codeArea: TcodeArea;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  visiblePassword: boolean;
  onShowHidePassword: () => void;
  onSignUp: () => void;
  onTermOfUse: () => void;
  onPrivacyPolicy: () => void;
  onGoToLogin: () => void;
  openModalChange: () => void;
  onLogInFacebook: () => void;
  onLogInTwitter: () => void;
}

const SignUpUi = memo(
  ({
    email,
    setEmail,
    isValidEmail,
    codeArea,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    visiblePassword,
    onShowHidePassword,
    onSignUp,
    onTermOfUse,
    onPrivacyPolicy,
    onGoToLogin,
    openModalChange,
    onLogInFacebook,
    onLogInTwitter,
  }: SignUpUiProps) => {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text size={24} lineHeight={28} bold>
          Welcome to Doctor Plus!
        </Text>
        <Text
          size={13}
          lineHeight={22}
          marginTop={16}
          color={Colors.DarkJungleGreen}
        >
          Already have an account?{" "}
          <Text
            type="H6"
            color={Colors.BlueCrayola}
            semiBold
            onPress={onGoToLogin}
          >
            Log in
          </Text>
        </Text>
        <InputApp
          value={email}
          onChangeText={setEmail}
          title={"Email"}
          marginTop={scale(32)}
          placeholder={"Email"}
          isShowIcon={isValidEmail}
          icon={
            <Image
              source={require("images/Icon/ic_accept.png")}
              style={Theme.icons}
            />
          }
        />
        <Text size={13} lineHeight={16} marginTop={24}>
          Mobile Phone
        </Text>
        <View style={styles.phoneView}>
          <ButtonChangeCode codeArea={codeArea} onPress={openModalChange} />
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.phoneNumber}
            borderColor={Colors.Isabelline}
          />
        </View>
        <InputApp
          title={"Password"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!visiblePassword}
          marginTop={24}
          icon={
            <Image
              source={require("images/Icon/ic_eye_on.png")}
              style={Theme.icons}
            />
          }
          isShowIcon
          iconPress={onShowHidePassword}
        />
        <ButtonLinear
          title={"Sign Up"}
          onPress={onSignUp}
          style={{ marginTop: scale(24) }}
        />
        <View style={styles.loginSocial}>
          <Text type="H6" color={Colors.GrayBlue} style={styles.textUnderline}>
            Log in with social account
          </Text>
        </View>
        <View style={styles.frameLoginSocial}>
          <TouchableOpacity
            style={styles.buttonFacebook}
            onPress={onLogInFacebook}
          >
            <Image
              style={{ width: scale(20), height: scale(20) }}
              source={require("images/Icon/ic_facebook.png")}
            />
            <Text type="H5" color={Colors.White} bold marginLeft={scale(10)}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTwitter}
            onPress={onLogInTwitter}
          >
            <Image
              style={{ width: scale(20), height: scale(20) }}
              source={require("images/Icon/ic_twitter.png")}
            />
            <Text type="H5" color={Colors.White} bold marginLeft={scale(10)}>
              Twitter
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          type="P6"
          color={Colors.DarkJungleGreen}
          center
          marginTop={scale(30)}
        >
          By clicking sign up you are agreeing to the{"\n"}
          <Text
            type="P6"
            color={Colors.BlueCrayola}
            onPress={onTermOfUse}
            center
          >
            Terms of use
          </Text>{" "}
          and the{" "}
          <Text
            type="P6"
            color={Colors.BlueCrayola}
            onPress={onPrivacyPolicy}
            center
          >
            Privacy policy
          </Text>
        </Text>
      </ScrollView>
    );
  }
);

export default SignUpUi;

const styles = StyleSheet.create({
  container: {
    ...Theme.container,
  },
  password: {
    marginTop: 24,
  },
  phoneNumber: {
    marginLeft: 8,
    flex: 1,
  },
  emailInput: {
    marginTop: scale(34),
  },
  bottom: {
    ...Theme.flexOne,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flag: {
    width: 32,
    height: 20,
  },
  changePhoneCode: {
    position: "absolute",
    right: 16,
    alignSelf: "center",
  },
  phoneView: {
    ...Theme.flexRow,
    marginTop: 4,
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  loginSocial: {
    marginTop: scale(50),
    alignItems: "center",
    justifyContent: "center",
  },
  frameLoginSocial: {
    marginTop: scale(20),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonFacebook: {
    flexDirection: "row",
    marginTop: scale(15),
    width: scale(152),
    height: scale(50),
    borderRadius: scale(12),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bDazzledBlue,
  },
  buttonTwitter: {
    flexDirection: "row",
    marginTop: scale(15),
    width: scale(152),
    height: scale(50),
    borderRadius: scale(12),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.MediumTurquoise,
  },
});
