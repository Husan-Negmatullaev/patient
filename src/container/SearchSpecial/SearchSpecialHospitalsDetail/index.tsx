import React, { memo } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { width } from "configs/Const";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import { ICON } from "images/Icon";

export default memo(({ route }: any) => {
  const {
    img,
    avatar,
    name,
    address,
    phone,
    numberOfBeds,
    type,
    system,
    website,
    jcaho,
    services,
  } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Image source={img} style={styles.image} />
          <Image source={avatar} style={styles.avatar} />
        </View>
        <View style={styles.content}>
          <Text bold size={24} lineHeight={36} marginBottom={24}>
            {name}
          </Text>
          <View style={Theme.flexRow}>
            <View style={Theme.center}>
              <Image
                source={ICON.hospital}
                tintColor={Colors.TiffanyBlue}
                style={styles.iconImage}
              />
              <View style={styles.opacity} />
            </View>
            <Text marginLeft={16} size={15} lineHeight={18}>
              {address}
            </Text>
          </View>
          <View style={Theme.flexRow}>
            <View style={Theme.center}>
              <Image
                source={ICON.call}
                tintColor={Colors.TiffanyBlue}
                style={styles.iconImage}
              />
              <View style={styles.opacity} />
            </View>
            <Text marginLeft={16} size={15} lineHeight={18} marginVertical={40}>
              {phone}
            </Text>
          </View>
          <View style={Theme.flexRow}>
            <View style={Theme.center}>
              <Image
                source={ICON.hospitalBed}
                tintColor={Colors.TiffanyBlue}
                style={styles.iconImage}
              />
              <View style={styles.opacity} />
            </View>
            <Text marginLeft={16} size={15} lineHeight={18}>
              {numberOfBeds} beds
            </Text>
          </View>
          <Text bold size={17} lineHeight={20} marginBottom={24} marginTop={48}>
            OverView
          </Text>
          <Text size={15} lineHeight={24}>
            Type : {type}
          </Text>
          <Text size={15} lineHeight={24}>
            System: {system}
          </Text>
          <View style={Theme.flexRow}>
            <Text size={15} lineHeight={24}>
              Website :
            </Text>
            <TouchableOpacity activeOpacity={0.54}>
              <Text
                marginLeft={4}
                size={15}
                lineHeight={24}
                color={Colors.DodgerBlue}
              >
                {website}
              </Text>
            </TouchableOpacity>
          </View>
          {jcaho ? (
            <Text size={15} lineHeight={24}>
              JCAHO accredited
            </Text>
          ) : (
            <View />
          )}
          <Text bold size={17} lineHeight={20} marginBottom={24} marginTop={48}>
            Services
          </Text>
          {services.map((item: any, index: number) => {
            return (
              <Text {...item} key={index} size={15} lineHeight={24}>
                {item.name}
              </Text>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.header}>
        <ButtonIconHeader
          icon="arrowLeft"
          tintColor={Colors.White}
          backgroundColor={Colors.DarkJungleGreenOpacity}
          borderColor={Colors.DarkJungleGreenOpacity}
        />

        <ButtonIconHeader
          icon="share"
          tintColor={Colors.White}
          backgroundColor={Colors.DarkJungleGreenOpacity}
          borderColor={Colors.DarkJungleGreenOpacity}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: 264,
    marginBottom: 60,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 24,
    left: 24,
    borderRadius: 16,
  },
  header: {
    width: width,
    paddingHorizontal: 24,
    ...Theme.flexRowSpace,
    position: "absolute",
    top: getStatusBarHeight(),
  },
  opacity: {
    width: 32,
    height: 32,
    position: "absolute",
    opacity: 0.16,
    backgroundColor: Colors.TiffanyBlue,
    borderRadius: 6,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  content: {
    paddingHorizontal: 24,
  },
});
