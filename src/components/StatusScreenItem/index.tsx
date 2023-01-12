import React, { memo } from "react";
import { View, StyleSheet, Image, ViewStyle } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { IMAGE } from "images/Image";
import { Colors, Routes } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";

interface StatusScreenItemProps {
  img: string;
  status: string;
  detail1?: string;
  detail2?: string;
  children?: any;
}

const StatusScreenItem = memo(
  ({ img, status, detail1, detail2, children }: StatusScreenItemProps) => {
    const { navigate } = useNavigation();
    const onDashBoard = () => {
      navigate(Routes.MainTab);
    };
    return (
      <View style={styles.container}>
        <Image source={IMAGE[`${img}`]} />
        <Text bold size={20} lineHeight={24} marginTop={56} center>
          {status}
        </Text>
        <Text
          center
          size={15}
          lineHeight={24}
          marginHorizontal={32}
          marginTop={16}
        >
          {detail1}
        </Text>
        <Text
          center
          size={15}
          lineHeight={24}
          marginBottom={32}
          marginHorizontal={32}
        >
          {detail2}
        </Text>
        <>
          {children}
          <ButtonLinear
            style={styles.button}
            title="Go to Home Dashboard"
            onPress={onDashBoard}
          />
        </>
      </View>
    );
  }
);

export default StatusScreenItem;

const styles = StyleSheet.create({
  container: {
    ...Theme.center,
    backgroundColor: Colors.Snow,
    flex: 1,
  },
  button: {
    width: 240,
  },
});
