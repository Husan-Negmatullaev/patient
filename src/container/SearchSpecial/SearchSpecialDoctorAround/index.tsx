import React, { memo } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors } from "configs";
import { height, width } from "configs/Const";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { IN_NETWORK } from "configs/Data";
import ContactDoctorItem from "components/ContactDoctorItem";
import { IMAGE } from "images/Image";

export default memo(() => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE.mapFull} style={styles.map} />
      <View style={styles.header}>
        <ButtonIconHeader
          backgroundColor={Colors.White}
          borderColor={Colors.White}
        />
        <ButtonIconHeader
          icon="filter"
          tintColor={Colors.White}
          backgroundColor={Colors.PinkOrange}
          borderColor={Colors.PinkOrange}
        />
      </View>
      <View style={styles.footer}>
        <ButtonIconHeader
          backgroundColor={Colors.White}
          style={styles.location}
          icon="currentLocation"
          borderColor={Colors.White}
        />
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {IN_NETWORK.map((item: any, index: number) => {
            return (
              <ContactDoctorItem key={index} {...item} style={styles.contact} />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    flex: 1,
  },
  header: {
    width: "100%",
    position: "absolute",
    top: 24,
    ...Theme.flexRowSpace,
    padding: 24,
  },
  footer: {
    position: "absolute",
    bottom: getBottomSpace() + 24,
  },
  contact: {
    width: width - 48,
    marginHorizontal: 24,
  },
  location: {
    alignSelf: "flex-end",
    right: 24,
    marginBottom: 16,
  },
});
