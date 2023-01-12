import React, { memo } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Colors } from "configs";
import { useNavigation } from "@react-navigation/native";
import Theme from "style/Theme";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { width } from "configs/Const";
import Text from "elements/Text";
import { ICON } from "images/Icon";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import ScrollViewAnimatedHeader from "components/ScrollViewAnimatedHeader";

export default memo(({ route }: any) => {
  const { navigate, goBack } = useNavigation();
  const {
    image,
    title,
    quantity,
    avatar,
    name,
    faculty,
    action,
    category,
    gender,
    age,
    content,
  } = route?.params;

  const handleShare = React.useCallback(() => {}, []);

  const renderHeader = React.useCallback(() => {
    return (
      <View style={styles.header}>
        <ButtonIconHeader
          backgroundColor={Colors.DarkJungleGreenOpacity}
          tintColor={Colors.White}
          borderColor={"transparent"}
        />
        <ButtonIconHeader
          backgroundColor={Colors.DarkJungleGreenOpacity}
          tintColor={Colors.White}
          borderColor={"transparent"}
          icon={"share"}
          onPress={handleShare}
        />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollViewAnimatedHeader renderHeader={renderHeader}>
        <ImageBackground style={styles.image} source={image} />
        <View style={styles.content}>
          <View style={styles.label}>
            <Image source={ICON.rateStar} />
            <Text marginTop={4} size={10} bold color={Colors.Snow}>
              RECOMMENDED
            </Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text>{quantity}</Text>
          <View style={styles.createBy}>
            <Text>Created by</Text>
            <View style={{ ...Theme.flexRow }}>
              <Image style={styles.avatar} source={avatar} />
              <View>
                <Text color={Colors.DodgerBlue} bold={true}>
                  {name}
                </Text>
                <Text size={13} lineHeight={16} marginTop={4}>
                  {faculty}
                </Text>
              </View>
            </View>
            <Text>
              {action} a health guide on
              <Text color={Colors.DodgerBlue}> {category}</Text>
            </Text>
          </View>
          <View>
            <View style={{ ...Theme.flexRow }}>
              <Image style={styles.icon} source={ICON.accountNormal} />
              <Text style={styles.contentTitle}>For Patient who</Text>
            </View>
            <View style={styles.detail}>
              <Text>are {gender}</Text>
              <Text>over {age} years of age </Text>
            </View>
            <View style={{ ...Theme.flexRow }}>
              <View style={styles.icon}>
                <Image
                  style={{ tintColor: Colors.TiffanyBlue }}
                  source={ICON.checkMark}
                />
              </View>
              <Text style={styles.contentTitle}>What Patient will do</Text>
            </View>
            <View style={styles.detail}>
              {content &&
                content.map((item: any, index: number) => {
                  const { frequency, description } = item;
                  return (
                    <View key={index} style={styles.contentStyle}>
                      <Text size={15} marginBottom={4}>
                        {description}
                      </Text>
                      <Text color={Colors.GrayBlue}>{frequency}</Text>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollViewAnimatedHeader>
      <View style={styles.buttonView}>
        <ButtonLinear style={styles.unEnroll} title={"Enroll"} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  label: {
    backgroundColor: Colors.Orange,
    height: 16,
    borderRadius: 2,
    maxWidth: 100,
    ...Theme.flexRow,
    ...Theme.center,
  },
  image: {
    width: "100%",
    height: 264,
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 24,
    width: "100%",
  },
  title: {
    marginVertical: 12,
    fontWeight: "bold",
    fontSize: 24,
  },
  createBy: {
    marginTop: 32,
    marginBottom: 48,
  },
  avatar: {
    marginTop: 16,
    marginRight: 16,
    marginBottom: 16,
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  detail: {
    marginLeft: 48,
    marginBottom: 40,
    marginTop: 16,
    marginRight: 24,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: Colors.TealBlue20,
    ...Theme.center,
  },
  button: {
    backgroundColor: Colors.DodgerBlue,
  },
  advice: {
    marginVertical: 24,
    flexDirection: "row",
    textAlignVertical: "center",
  },
  buttonView: {
    position: "absolute",
    bottom: 0,
    width: width,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace() + 12,
    backgroundColor: Colors.White,
  },
  contentStyle: {
    marginBottom: 16,
  },

  contentTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  navigationIcon: {
    shadowColor: "transparent",
    borderRadius: 2,
    borderWidth: 0.1,
    marginTop: 52,
  },
  navigationIconFollow: {
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 6,
    borderWidth: 0.1,
    marginTop: 52,
  },
  header: {
    ...Theme.flexRowSpace,
    top: getStatusBarHeight() + 28,
    position: "absolute",
    width: width,
    paddingHorizontal: 24,
  },
  unEnroll: {
    marginTop: 12,
  },

  buttonOpacity: {
    opacity: 0.2,
    backgroundColor: Colors.DarkJungleGreen,
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  headerButtonIcon: {
    position: "absolute",
    alignSelf: "center",
  },
});
