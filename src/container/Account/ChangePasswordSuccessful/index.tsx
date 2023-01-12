import React, { useCallback, memo } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import { Colors, Routes } from "configs";
import scale from "utils/scale";
import Theme from "style/Theme";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import { IMAGE } from "images/Image";
interface ChangePasswordSuccessfulProps {}

const ChangePasswordSuccessful = memo(
  (props: ChangePasswordSuccessfulProps) => {
    const { navigate } = useNavigation();

    const onGoToLogin = useCallback(() => {
      navigate(Routes.Login);
    }, [navigate]);

    return (
      <View style={styles.container}>
        <Image
          source={IMAGE.success}
          style={styles.imageSuccess}
        />
        <Text size={20} lineHeight={24} bold>
          Congrats!
        </Text>
        <Text size={15} lineHeight={24} center marginTop={16}>
          You have successfully change password. {"\n"} Please use the new
          password when logging in.
        </Text>
        <ButtonLinear
          title="Log In Now"
          style={styles.buttonLinear}
          onPress={onGoToLogin}
        />
      </View>
    );
  }
);

export default ChangePasswordSuccessful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    ...Theme.center,
    paddingHorizontal: 24,
  },
  imageSuccess: {
    width: scale(160),
    height: scale(160),
    marginBottom: scale(56),
    alignSelf: "center",
  },
  buttonLinear: {
    marginTop: 32,
    paddingHorizontal: 32,
  },
});
