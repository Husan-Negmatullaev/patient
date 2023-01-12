import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { width } from "configs/Const";

export default memo(() => {
  return (
    <View style={styles.container}>
      <Text>Conditions</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Theme.center,
    width: width,
  },
});
