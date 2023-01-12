import React, { memo } from "react";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import Theme from "style/Theme";
import { Colors } from "configs";
import Text from "elements/Text";

interface DoctorRateProps {
  name: string;
  faculty: string;
  rate: number;
  numberOfReviews: number;
  avatar: ImageSourcePropType;
  online?: boolean;
  inNetwork?: boolean;
}

const DoctorRate = memo(
  ({
    name,
    faculty,
    rate,
    numberOfReviews,
    avatar,
    online,
    inNetwork,
  }: DoctorRateProps) => {
    return (
      <View style={Theme.flexDirection}>
        <View
          style={{ width: 64, height: 64, borderRadius: 16, marginRight: 24 }}
        >
          <Image
            source={avatar}
            style={{ width: 64, height: 64, borderRadius: 16 }}
          />
          {online && (
            <Image
              // source={require("images/ic_online_status.png")}
              style={{ position: "absolute", right: -16, top: -6 }}
            />
          )}
          {inNetwork && (
            <Image
              // source={require("images/ic_my_network.png")}
              style={{
                position: "absolute",
                bottom: -19,
                alignSelf: "center",
                zIndex: 10,
                tintColor: Colors.PinkOrange,
                width: 14,
                height: 14,
              }}
            />
          )}
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <Text size={15} lineHeight={18} color={Colors.DodgerBlue}>
            Dr.{name}
          </Text>
          <Text size={13} lineHeight={16}>
            {faculty}
          </Text>
          <View style={Theme.flexRow}>
            {/* <Image source={require("images/ic_star_rate.png")} /> */}
            <Text size={13} lineHeight={16} semiBold marginLeft={5}>
              {rate}{" "}
              <Text size={13} lineHeight={16} color={Colors.GrayBlue}>
                ({numberOfReviews} reviews)
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

export default DoctorRate;

const styles = StyleSheet.create({
  container: {},
});
