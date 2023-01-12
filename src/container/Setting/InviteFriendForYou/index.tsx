import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors, Routes } from "configs";
import { useNavigation } from "@react-navigation/native";
import TextInput from "elements/TextInput";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { ICON } from "images/Icon";
export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [name, setName] = useState<string>("Devin Shelton");
  const [email, setEmail] = useState<string>("sampleEmail@timistudio");

  const onChangeName = useCallback((value) => {
    setName(value);
  }, []);

  const onChangeEmail = useCallback((value) => {
    setEmail(value);
  }, []);

  const onGetButton = () => {
    navigate(Routes.InviteFriendForFriend);
  };

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.Snow,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);

  return (
    <View style={styles.container}>
      <Text bold size={24} marginTop={24} marginBottom={40}>
        Get $15 for You!
      </Text>
      <Text marginBottom={4}>Full Name</Text>
      <TextInput
        editable
        onChangeText={onChangeName}
        borderColor={Colors.WhiteSmoke}
        value={name}
      />
      <Text marginTop={24} marginBottom={4}>
        Email
      </Text>
      <TextInput
        editable
        onChangeText={onChangeEmail}
        borderColor={Colors.WhiteSmoke}
        value={email}
      />
      <ButtonLinear title="Get It!" onPress={onGetButton}>
        <Image style={styles.icon} source={ICON.next} />
      </ButtonLinear>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    paddingHorizontal: 24,
  },
  icon: {
    marginLeft: 8,
  },
});
