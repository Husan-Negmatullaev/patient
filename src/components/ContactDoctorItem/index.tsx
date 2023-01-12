import { Colors, Routes } from "configs";
import React, { memo, useCallback } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import scale from "utils/scale";
import { useNavigation } from "@react-navigation/native";

interface ContactDoctorItemProps {
  style?: any;
  id?: number;
  avatar?: any;
  name?: string;
  faculty?: string;
  rating?: number;
  review?: number;
  address?: string;
  online?: boolean;
  appointment?: boolean;
  message?: boolean;
  video?: boolean;
  verified?: boolean;
  care?: boolean;
  onPress?: () => void;
}

export default memo(
  ({
    style,
    avatar,
    name,
    faculty,
    rating,
    review,
    address,
    online,
    appointment,
    message,
    video,
    verified,
    care,
    onPress,
  }: ContactDoctorItemProps) => {
    const { navigate } = useNavigation();
    const _onPress = useCallback(() => {
      navigate(Routes.DoctorProfile);
      onPress && onPress();
    }, []);
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={_onPress}
        activeOpacity={0.54}
      >
        <Text bold marginTop={24} color={Colors.DodgerBlue}>
          {name}
        </Text>
        <Text size={13} lineHeight={16} marginVertical={8}>
          {faculty}
        </Text>
        <View style={Theme.flexRow}>
          <Image source={ICON.rateFull} />
          <Text marginHorizontal={5} size={13} lineHeight={16}>
            {rating}
          </Text>
          <Text semiBold size={13} lineHeight={16} color={Colors.GrayBlue}>
            ({review} reviews)
          </Text>
        </View>
        {address && (
          <Text marginBottom={12} size={13} lineHeight={16} marginTop={8}>
            {address}
          </Text>
        )}
        <View style={Theme.flexRow}>
          {appointment && (
            <ButtonIcon
              backgroundColor={Colors.BlueCrayola}
              icon={"appointmentActive"}
              marginRight={16}
            />
          )}
          {message && (
            <ButtonIcon
              marginRight={16}
              backgroundColor={Colors.TiffanyBlue}
              icon={"message"}
            />
          )}
          {video && <ButtonIcon marginRight={16} icon={"video"} />}
        </View>
        <View style={styles.avatarView}>
          <Image style={styles.avatar} source={avatar} />
          {online && (
            <View style={styles.statusView}>
              <View style={styles.circle} />
            </View>
          )}
          {verified && (
            <View style={styles.verified}>
              <Image style={styles.iconVerified} source={ICON.verified} />
              <Text
                size={10}
                marginLeft={2}
                lineHeight={15}
                bold
                uppercase
                color={Colors.White}
              >
                care team
              </Text>
            </View>
          )}
          {care && (
            <View style={styles.care}>
              <Image style={styles.iconCare} source={ICON.careTeam} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowColor: Colors.boxShadow,
    shadowOpacity: 1,
    paddingLeft: 112,
    paddingRight: 24,
    paddingBottom: 24,
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 24,
    alignSelf: "center",
  },
  myNetwork: {
    backgroundColor: Colors.Orange,
    marginTop: 8,
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
    ...Theme.center,
    ...Theme.flexRow,
  },
  statusView: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: Colors.White,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    position: "absolute",
    right: 0,
    ...Theme.center,
  },
  avatarView: {
    position: "absolute",
    top: 24,
    left: 24,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.Malachite,
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  verified: {
    ...Theme.flexRow,
    marginTop: 8,
    borderRadius: 2,
    backgroundColor: Colors.PinkOrange,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  iconVerified: {
    width: 10,
    height: 10,
  },
  care: {
    ...Theme.center,
    marginTop: scale(5),
  },
  iconCare: {
    width: 16,
    height: 16,
  },
});
