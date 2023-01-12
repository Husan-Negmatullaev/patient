import React, { memo, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import Text from "elements/Text";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors } from "configs";
import Theme from "style/Theme";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { width } from "configs/Const";

export default memo(({ route }: any) => {
  const { item, statusName, statusColor } = route?.params;
  const { setOptions } = useNavigation();
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.White,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <ButtonIconHeader
          marginRight={24}
          tintColor={Colors.DodgerBlue}
          borderColor={Colors.DodgerBlue}
          icon="option"
        />
      ),
      headerTitle: () => (
        <View style={Theme.center}>
          <Text size={17} lineHeight={20} marginBottom={8} bold>
            Live Chat Consults
          </Text>
          <Text
            semiBold
            size={13}
            lineHeight={16}
            marginBottom={12}
            color={statusColor}
          >
            {statusName}
          </Text>
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={styles.buttonBottom}>
        <ButtonLinear title="Request New Consult" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonBottom: {
    width: width,
    paddingBottom: 34,
    paddingHorizontal: 24,
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.White,
  },
});
