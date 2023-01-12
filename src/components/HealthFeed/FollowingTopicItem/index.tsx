import React, { memo, useCallback } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import { ICON } from "images/Icon";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import { width } from "configs/Const";
import { useNavigation } from "@react-navigation/native";

interface FollowingTopicItemProps {}

const FollowingTopicItem = memo((data: any) => {
  const { navigate } = useNavigation();
  const {
    doctor,
    img,
    topicType,
    topicName,
    numberOfAnswers,
    action,
    detail,
    link,
    numberOfThanks,
    numberOfShares,
  } = data.item;
  const { avatar, name } = doctor;

  let route: string;

  switch (topicType) {
    case "Health Tip":
      route = Routes.HealthFeedTipsDetail;
      break;
    case "Health Question":
      route = Routes.HealthFeedQuestionDetail;
      break;
    case "Health Article":
      route = Routes.HealthFeed;
      break;
    case "Health Guide":
      route = Routes.HealthFeed;
      break;
  }

  const onPress = useCallback(() => {
    navigate(route, data.item);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.54}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text size={13} lineHeight={16} marginBottom={4}>
          {topicType}
        </Text>
        <Text semiBold size={17} lineHeight={25} marginBottom={12}>
          {topicName}
        </Text>
        {numberOfAnswers != undefined ? (
          <View style={Theme.flexRow}>
            <Image source={ICON.doctorAnswer} />
            <Text bold size={13} lineHeight={16} marginLeft={8} marginRight={4}>
              {numberOfAnswers}
            </Text>
            <Text size={13} lineHeight={16}>
              doctors answered
            </Text>
          </View>
        ) : (
          <View />
        )}
      </View>
      <View style={styles.content}>
        <View style={Theme.flexRow}>
          <Image style={styles.avatar} source={avatar} />
          <Text
            bold
            size={13}
            lineHeight={16}
            color={Colors.DodgerBlue}
            marginLeft={12}
            marginRight={4}
          >
            Dr. {name}
          </Text>
          <Text size={13} lineHeight={16}>
            {action}
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={ICON.option} />
        </TouchableOpacity>
      </View>
      <Image source={img} style={styles.image} />
      <Text marginVertical={12} size={13} lineHeight={22} marginHorizontal={16}>
        {detail}
      </Text>
      {link != undefined ? (
        <Text
          color={Colors.GrayBlue}
          size={13}
          lineHeight={16}
          marginLeft={16}
          marginBottom={12}
        >
          {link}
        </Text>
      ) : (
        <View />
      )}
      <View style={Theme.flexRow}>
        {numberOfThanks != 0 ? (
          <Text
            size={13}
            lineHeight={16}
            color={Colors.GrayBlue}
            marginRight={24}
            marginLeft={16}
          >
            {numberOfThanks} Thanks
          </Text>
        ) : (
          <View />
        )}
        {numberOfShares != 0 ? (
          <Text size={13} lineHeight={16} color={Colors.GrayBlue}>
            {numberOfShares} Shares
          </Text>
        ) : (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );
});

export default FollowingTopicItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginBottom: 16,
    backgroundColor: Colors.White,
    borderRadius: 16,
    paddingVertical: 16,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  header: {
    paddingLeft: 16,
    paddingBottom: 12,
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
  },
  content: {
    ...Theme.flexRowSpace,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    width: width - 48,
    height: 170,
  },
});
