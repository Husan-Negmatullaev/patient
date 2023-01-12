import React, { memo, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Text from "elements/Text";
import { Colors, Routes } from "configs";
import { ICON } from "images/Icon";
import Theme from "style/Theme";
import { useNavigation } from "@react-navigation/native";

const HospitalItem = memo((props: any) => {
  const { navigate } = useNavigation();
  const { avatar, distance, name, address, rating, numberOfReviews } = props;
  const onPress = () => {
    navigate(Routes.SearchSpecialHospitalsDetail, props);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.54}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.avatarView}>
        <Image style={styles.avatar} source={avatar} />
        <Text marginTop={10} center>
          {distance} mil
        </Text>
      </View>
      <View style={styles.info}>
        <Text bold size={15} lineHeight={18} color={Colors.DodgerBlue}>
          {name}
        </Text>
        <Text marginBottom={8} marginTop={8} size={13} lineHeight={16}>
          {address}
        </Text>
        <View style={Theme.flexRow}>
          <Image source={ICON.rateFull} />
          <Text marginHorizontal={5} size={13} lineHeight={16}>
            {rating}
          </Text>
          <Text color={Colors.GrayBlue} size={13} lineHeight={16}>
            ({numberOfReviews} reviews)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default HospitalItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Snow,
    backgroundColor: Colors.White,
    borderRadius: 16,
    ...Theme.flexDirection,
    marginBottom: 16,
  },
  avatarView: {
    marginRight: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 12,
    overflow: "hidden",
  },
  info: {
    paddingRight: 80,
  },
});
