import React, { memo, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Text from "elements/Text";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import { width } from "configs/Const";
import { Colors, Routes } from "configs";
import AccountItem from "components/AccountItem";
import { ICON } from "images/Icon";
import { TOPIC_DETAILS_BUTTON } from "configs/Data";
interface HealthFeedTopicDetailProps {}

const HealthFeedTopicDetail = memo(({ route }: any) => {
  const { doctor, img, topicName, detail } = route.params;
  const { name, avatar, faculty } = doctor;
  const [isFollow, setIsFollow] = useState(false);
  const onFollow = () => {
    setIsFollow(!isFollow);
  };
  return (
    <View style={styles.container}>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <Image source={img} style={styles.image} />
        <View style={styles.content}>
          <Text size={24} bold lineHeight={28}>
            {topicName}
          </Text>
          <Text size={15} bold lineHeight={24} marginTop={16} marginBottom={32}>
            {detail}
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
          <View style={styles.list}>
            {TOPIC_DETAILS_BUTTON.map((item, index) => {
              return <AccountItem {...item} key={index} />;
            })}
          </View>
          <Text bold size={17} lineHeight={20}>
            Related Questions
          </Text>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <ButtonIconHeader
          icon="arrowLeft"
          tintColor={Colors.White}
          backgroundColor={Colors.DarkJungleGreenOpacity}
          borderColor={Colors.DarkJungleGreenOpacity}
        />
        <View style={Theme.flexRow}>
          {isFollow ? (
            <ButtonIconHeader
              icon="followed"
              tintColor={Colors.White}
              backgroundColor={Colors.DodgerBlue}
              borderColor={Colors.DodgerBlue}
              marginRight={24}
              onPress={onFollow}
            />
          ) : (
            <ButtonIconHeader
              icon="follow"
              tintColor={Colors.White}
              backgroundColor={Colors.DarkJungleGreenOpacity}
              borderColor={Colors.DarkJungleGreenOpacity}
              marginRight={24}
              onPress={onFollow}
            />
          )}
          <ButtonIconHeader
            icon="share"
            tintColor={Colors.White}
            backgroundColor={Colors.DarkJungleGreenOpacity}
            borderColor={Colors.DarkJungleGreenOpacity}
          />
        </View>
      </View>
    </View>
  );
});

export default HealthFeedTopicDetail;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 264,
  },
  header: {
    width: width,
    paddingHorizontal: 24,
    ...Theme.flexRowSpace,
    position: "absolute",
    top: getStatusBarHeight(),
  },
  doctor: {
    paddingVertical: 16,
    ...Theme.flexRow,
  },
  content: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  list: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    marginTop: 40,
    marginBottom: 48,
  },
});
