import React, { memo, useCallback } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colors, Routes } from "configs";
import HeaderButton from "elements/HeaderButton";
import scale from "utils/scale";
import Text from "elements/Text";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import { IMAGE } from "images/Image";

const TodayTasksEmpty = memo(() => {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={IMAGE.noUpcoming}
        style={{ width: scale(160), height: scale(160), marginTop: scale(113) }}
      />
      <View style={{ height: scale(72), marginTop: scale(32) }}>
        <Text size={scale(15)} lineHeight={scale(24)} center>
          You don't have new task today.
            {"\n"}Browse Health Guide and find the best guide
            {"\n"}for you.
          </Text>
      </View>
      <ButtonLinear
        title={"Check Health Guide"}
        onPress={goBack}
        style={styles.buttonLinear}
      />
    </View>
  );
});
export default TodayTasksEmpty;
const styles = StyleSheet.create({
  flatList: {
    marginTop: scale(24),
  },
  buttonLinear: {
    width: scale(240),
    height: scale(50),
    borderRadius: scale(12),
    marginTop: scale(32),
  },
});
