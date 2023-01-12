import React, { memo, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import scale from "utils/scale";
import InputApp from "elements/InputApp";
import { Colors, Routes } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import GenderItem from "components/UpdateProfile/BasicInformation/GenderItem";
import { useNavigation } from "@react-navigation/native";
import { ICON } from "images/Icon";
import { useLayoutEffect } from "react";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
interface OtherInformationProps { }
const genders = [
  {
    id: 1,
    title: "Male",
    icon: require("images/Icon/ic_male.png"),
  },
  {
    id: 0,
    title: "Female",
    icon: require("images/Icon/ic_female.png"),
  },
];
const OtherInformation = memo((props: OtherInformationProps) => {
  const [homeAddress, setHomeAddress] = useState("934 Miller Turnpike");
  const [birthday, setBirthday] = useState("02/12/1956");
  const [gender, setGender] = useState<{
    id?: number | null;
    title?: string | null;
    icon: any;
  }>({ id: null, title: null, icon: null });
  const { navigate, setOptions } = useNavigation();
  const onGoToChangeAddress = useCallback(() => {
    // navigate(Routes.SelectAddress, { onChangeAddress: setHomeAddress });
  }, []);

  const onGotoFollowTopic = useCallback(() => {
    navigate(Routes.FollowTopic);
  }, [navigate]);
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerBackground: () => <View style={{ ...Theme.headerBackGround }} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text size={13} lineHeight={16} bold marginTop={32}>
          Step 2 of 3
        </Text>
        <Text size={24} lineHeight={28} bold marginTop={16}>
          Others Information
        </Text>
        <Text size={13} lineHeight={22} marginTop={16}>
          Update your profile to get better the answer from
          {"\n"}doctor.
        </Text>
        <View style={styles.genders}>
          {genders.map((i, index) => {
            const onPress = () => {
              setGender(i);
            };
            return (
              <GenderItem
                {...i}
                isChoose={i.id == gender.id}
                isLastItem={index === genders.length - 1}
                onPress={onPress}
                key={i.id.toString()}
              />
            );
          })}
        </View>
        <InputApp
          title={"Birthday"}
          marginTop={scale(42)}
          value={birthday}
          onChangeText={setBirthday}
          iconLeft={<Image source={ICON.calendar} style={Theme.icons} />}
          isShowIconLeft
        />
        <InputApp
          title={"Address"}
          marginTop={scale(24)}
          value={homeAddress}
          iconLeft={
            <Image
              source={require("images/Icon/ic_pin_map.png")}
              style={Theme.icons}
            />
          }
          isShowIconLeft
          editable={false}
          onPress={onGoToChangeAddress}
        />
        <ButtonLinear
          title={"Continue"}
          children={
            <Image
              source={require("images/Icon/ic_next.png")}
              style={styles.buttonChildren}
            />
          }
          onPress={onGotoFollowTopic}
          style={styles.buttonLinear}
        />
      </ScrollView>
    </View>
  );
});

export default OtherInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    paddingHorizontal: 24
  },
  genders: {
    marginTop: scale(40),
    ...Theme.flexRow,
    ...Theme.center,
  },
  buttonChildren: {
    ...Theme.icons,
    marginLeft: scale(8),
  },
  buttonLinear: {
    marginTop: scale(24),
  },
});
