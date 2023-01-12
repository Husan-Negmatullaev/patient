import React, { memo, useState, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Text from "elements/Text";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import scale from "utils/scale";
import { Colors, Routes } from "configs";
import InputApp from "elements/InputApp";
import Theme from "style/Theme";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import validationEmail from "utils/validation/email";
import { IMAGE } from "images/Image";

interface LoginProps {}

const Login = memo((props: LoginProps) => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("lehieuds@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const onShowHidePassword = useCallback(() => {
    setVisiblePassword((prev) => !prev);
  }, []);

  const onSignUp = useCallback(() => {
    navigate(Routes.SignUp);
  }, [navigate]);
  const onLogin = useCallback(() => {
    navigate(Routes.MainTab);
  }, []);
  const onForgotPassword = useCallback(() => {
    navigate(Routes.ForgetPassword);
  }, [navigate]);

  useEffect(() => {
    const validation = validationEmail(email);
    setIsValidEmail(validation);
  }, [email]);

  const onLogInFacebook = useCallback(async () => {
    ///
  }, []);
  const onLogInTwitter = useCallback(async () => {
    ///
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoApp}>
          <Image source={IMAGE.logo} style={styles.logo} resizeMode="center" />
          <Text type="H5" bold>
            Welcome back!
          </Text>
        </View>
        <View style={styles.inputLogin}>
          <InputApp
            title={"Email"}
            value={email}
            onChangeText={setEmail}
            icon={
              <Image
                source={require("images/Icon/ic_accept.png")}
                style={styles.icon}
              />
            }
            isShowIcon={isValidEmail}
          />
          <InputApp
            title={"Password"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!visiblePassword}
            marginTop={24}
            icon={
              <Image
                source={require("images/Icon/ic_eye_on.png")}
                style={styles.icon}
              />
            }
            isShowIcon
            iconPress={onShowHidePassword}
          />
        </View>
        <ButtonLinear
          title={"Log In"}
          onPress={onLogin}
          style={{ marginTop: scale(24) }}
        />
        <TouchableOpacity style={styles.forgot} onPress={onForgotPassword}>
          <Text type="H6" color={Colors.GrayBlue} style={styles.textUnderline}>
            Forget Password?
          </Text>
        </TouchableOpacity>
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
        <View style={styles.signUp}>
          <Text type="H6" color={Colors.GrayBlue}>
            Don't have an account?{" "}
            <Text
              type="H6"
              color={Colors.BlueCrayola}
              semiBold
              onPress={onSignUp}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
});

export default Login;

const styles = StyleSheet.create({
  container: {
    ...Theme.container,
  },
  logoApp: {
    marginTop: getStatusBarHeight() + scale(46),
    alignSelf: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: scale(12),
    marginLeft: scale(12),
    width: scale(60),
    height: scale(60),
  },
  inputLogin: {
    marginTop: scale(60),
  },
  icon: {
    width: scale(24),
    height: scale(24),
  },
  margin24: {
    marginTop: scale(24),
  },
  forgot: {
    alignSelf: "center",
    marginTop: scale(32),
  },
  signUp: {
    alignSelf: "center",
    flex: 1,
    marginBottom: scale(16),
    justifyContent: "flex-end",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  loginSocial: {
    marginTop: scale(80),
    alignItems: "center",
    justifyContent: "center",
  },
  frameLoginSocial: {
    marginTop: scale(20),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: scale(40),
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
