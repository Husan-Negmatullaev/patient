import React, { memo, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Text from "elements/Text";
import { IMAGE } from "images/Image";
import { width } from "configs/Const";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { Colors } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { ICON } from "images/Icon";

interface HealthFeedTipsDetailProps {}

const HealthFeedTipsDetail = memo(({ route }: any) => {
  const {
    img,
    doctor,
    topicName,
    numberOfThanks,
    category,
    detail,
  } = route.params;
  const { avatar, name, faculty } = doctor;
  const [itemThanked, setItemThanked] = useState(false);
  const onItemThank = () => {
    setItemThanked(!itemThanked);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
        <Image source={img} style={styles.image} />
        <View style={styles.content}>
          <Text size={24} lineHeight={28} bold>
            {topicName}
          </Text>
          <Text
            marginTop={16}
            marginBottom={32}
            size={13}
            lineHeight={16}
            color={Colors.GrayBlue}
          >
            {numberOfThanks} Thanks
          </Text>
          <Text size={13} lineHeight={16}>
            Created by:
          </Text>
          <View style={styles.doctor}>
            <Image source={avatar} />
            <View>
              <Text
                bold
                size={15}
                lineHeight={18}
                color={Colors.DodgerBlue}
                marginLeft={16}
                marginBottom={4}
              >
                Dr . {name}
              </Text>
              <Text size={13} lineHeight={16} marginLeft={16}>
                {faculty}
              </Text>
            </View>
          </View>
          <View style={Theme.flexRow}>
            <Text size={13} lineHeight={16}>
              Share a tip on
            </Text>
            <Text size={13} lineHeight={16} semibold color={Colors.DodgerBlue}>
              {" "}
              {category}
            </Text>
          </View>
          <Text size={15} lineHeight={24} marginTop={27}>
            {detail}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.headerIcon}>
        <ButtonIconHeader
          marginLeft={24}
          tintColor={Colors.White}
          backgroundColor={Colors.DarkJungleGreenOpacity}
        />
        <ButtonIconHeader
          marginRight={24}
          tintColor={Colors.White}
          backgroundColor={Colors.DarkJungleGreenOpacity}
          icon="share"
        />
      </View>
      <View style={styles.buttonBottom}>
        <ButtonLinear
          title={itemThanked ? "Thanked" : "Thanks!"}
          styleButton={{ flex: 1, marginLeft: 16 }}
          colors={
            itemThanked
              ? [Colors.GrayBlue, Colors.GrayBlue]
              : [Colors.TurquoiseBlue, Colors.TealBlue]
          }
          leftChildren={
            <Image
              source={itemThanked ? ICON.checkMark : ICON.thanks}
              style={{ marginRight: 8 }}
            />
          }
          onPress={onItemThank}
        />
      </View>
    </View>
  );
});

export default HealthFeedTipsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  headerIcon: {
    width: width,
    top: getStatusBarHeight() + 24,
    position: "absolute",
    ...Theme.flexRowSpace,
  },
  image: {
    width: width,
    height: 264,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  doctor: {
    paddingVertical: 16,
    ...Theme.flexRow,
  },
  buttonBottom: {
    bottom: 0,
    paddingTop: 14,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace() + 24,
    position: "absolute",
    width: width,
    backgroundColor: Colors.White,
  },
});
