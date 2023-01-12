import React, { memo, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import { useNavigation } from "@react-navigation/native";

const FollowingTopicHeaderItem = memo((data: any) => {
  const { setOptions, navigate } = useNavigation();
  const { img, topicName, doctor } = data;
  const { avatar, name } = doctor;
  const onPress = useCallback(() => {
    navigate(Routes.HealthFeedTopicDetail, data);
  }, []);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.54}
    >
      <ImageBackground style={styles.image} source={img}>
        <Text color={Colors.White} size={13} lineHeight={16}>
          {topicName}
        </Text>
      </ImageBackground>
      <View style={Theme.flexRow}>
        <Image style={styles.avatar} source={avatar} />
        <Text bold size={13} lineHeight={16}>
          Dr. {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default FollowingTopicHeaderItem;

const styles = StyleSheet.create({
  container: {
    width: 224,
    height: 168,
    marginRight: 24,
    backgroundColor: Colors.White,
    marginBottom: 48,
    borderRadius: 16,
    elevation: 1,
    overflow: "hidden",
  },
  image: {
    width: 224,
    height: 120,
    justifyContent: "flex-end",
    padding: 12,
  },
  avatar: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
