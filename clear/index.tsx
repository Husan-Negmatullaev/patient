import React, { memo, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView from "react-native-maps";
import Text from "elements/Text";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import TextInput from "elements/TextInput";
import Theme from "style/Theme";

interface SelectAddressProps {}

const SelectAddress = memo((props: SelectAddressProps) => {
  const [keyword, setKeyword] = useState("");
  const { setOptions, navigate } = useNavigation();
  useLayoutEffect(() => {
    setOptions({
      headerStyle: {
        shadowColor: "transparent",
        backgroundColor: Colors.White,
      },
      header: () => (
        <View
          style={{
            height: 108 - getStatusBarHeight(),
            paddingTop: getStatusBarHeight(),
            ...Theme.flexRow,
            paddingRight: 24,
            backgroundColor: Colors.White,
          }}
        >
          <ButtonIconHeader marginLeft={24} icon={"close"} marginRight={24} />
          <TextInput
            iconLeft={
              <Image
                source={require("images/Icon/ic_pin_map.png")}
                style={styles.iconSearch}
              />
            }
            isShowIconLeft={true}
            value={keyword}
            style={Theme.flexOne}
            onChangeText={setKeyword}
            editable
            backgroundColor={Colors.Isabelline}
            borderColor={Colors.Isabelline}
            placeholder={"Enter country name, code..."}
          />
        </View>
      ),
    });
  }, [setOptions, keyword, setKeyword]);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 26,
          paddingHorizontal: 24,
          ...Theme.flexRow,
          backgroundColor: Colors.White,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 16,
            backgroundColor: Colors.MediumTurquoise,
            marginRight: 24,
            ...Theme.center,
          }}
        >
          <Image
            source={require("images/Icon/ic_pin_map.png")}
            style={{
              ...styles.iconSearch,
              tintColor: Colors.White,
            }}
          />
        </View>
        <View>
          <Text size={13} lineHeight={16} color={Colors.BlueCrayola} semiBold>
            Use current location
          </Text>
          <Text size={15} lineHeight={24}>
            102 Centre Boulevard Suite B, Sain...
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <MapView style={StyleSheet.absoluteFillObject} />
      </View>
    </View>
  );
});

export default SelectAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconSearch: {
    width: 20,
    height: 20,
    tintColor: Colors.GrayBlue,
  },
});
