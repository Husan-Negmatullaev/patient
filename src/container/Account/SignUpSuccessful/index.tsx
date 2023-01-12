import React, { memo, useCallback } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import scale from "utils/scale";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";

interface SignUpSuccessfulProps {}

const SignUpSuccessful = memo((props: SignUpSuccessfulProps) => {
  const { navigate } = useNavigation();
  const onPressFillProfile = useCallback(() => {
    navigate(Routes.BasicInformation);
  }, [navigate]);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require("images/Avatar/avatar-2.png")}
        style={styles.successImage}
      /> */}
      <Text size={20} lineHeight={24} bold>
        Welcome to Doctor Plus!
      </Text>
      <Text size={15} lineHeight={24} center marginTop={16}>
        Get help instantly from top doctor anytime, anywhere.
      </Text>
      <ButtonLinear
        title={"Fill Out My Work Profile"}
        onPress={onPressFillProfile}
        style={styles.buttonLinear}
      />
    </View>
  );
});

export default SignUpSuccessful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Theme.center,
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
  },
  buttonLinear: {
    paddingHorizontal: 32,
    marginTop: 32,
  },
  successImage: {
    width: scale(160, true),
    height: scale(160, true),
    marginBottom: scale(55, true),
  },
});
