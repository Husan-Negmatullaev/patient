import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Theme from "style/Theme";
import { Colors } from "configs";

interface HeaderButtonProps {}

const HeaderButton = memo((props: HeaderButtonProps) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Image source={require("images/Icon/ic_back.png")} />
      </TouchableOpacity>
    </View>
  );
});

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRowSpace,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Platinum,
    ...Theme.center,
  },
});
