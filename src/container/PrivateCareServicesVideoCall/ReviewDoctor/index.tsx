import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { width } from "configs/Const";
import { ICON } from "images/Icon";
import CheckBox from "elements/CheckBox";
import Theme from "style/Theme";
import StarRating from "components/Consults/StarRating";
import ReviewDoctorTime from "components/PrivateCareService/ReviewDoctorTime";

export default memo(() => {
  const { setOptions } = useNavigation();
  const [reviewText, setReviewText] = useState<string>("");
  const [yes, setYes] = useState<boolean>(true);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.Snow,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} icon="close" />,
    });
  });

  const onChangeText = useCallback((text) => {
    setReviewText(text);
  }, []);

  const onYes = () => {
    setYes(true);
  };
  const onNo = () => {
    setYes(false);
  };
  const onSwitch = () => {
    setIsAnonymous(!isAnonymous);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text bold size={24} lineHeight={28} marginBottom={16}>
          Write a review
        </Text>
        <Image source={ICON.quote} />
        <TextInput
          editable
          multiline
          value={reviewText}
          onChangeText={onChangeText}
          backgroundColor={Colors.Snow}
          borderColor={Colors.Snow}
          placeholder="Tell people about your experience"
        />
        <Text size={15} lineHeight={24} marginVertical={16}>
          Would you recommend Dr. Margaret Wells to your friends?
        </Text>
        <View style={Theme.flexRow}>
          <TouchableOpacity
            activeOpacity={0.54}
            style={Theme.flexRow}
            onPress={onYes}
          >
            <CheckBox isRounded isCheck={yes} onPress={onYes} />
            <Text
              semiBold
              size={15}
              lineHeight={24}
              marginLeft={8}
              marginRight={80}
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.54}
            style={Theme.flexRow}
            onPress={onNo}
          >
            <CheckBox isRounded isCheck={!yes} onPress={onNo} />
            <Text semiBold size={15} lineHeight={24} marginLeft={8}>
              No
            </Text>
          </TouchableOpacity>
        </View>
        <Text size={15} lineHeight={24} marginTop={40} marginBottom={24}>
          Did your request start on time?
        </Text>
        <ReviewDoctorTime />
        <Text size={15} lineHeight={24} marginTop={40}>
          How would you rate your overall experience with Dr. Margaret Wells
          service?
        </Text>
        <StarRating starSize={50} />
        <View style={Theme.flexRowSpace}>
          <Text size={15} lineHeight={24} marginVertical={16}>
            Public as anonymously
          </Text>
          <Switch value={isAnonymous} onValueChange={onSwitch} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <ButtonLinear title="Send a review" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace() + 72,
  },
  button: {
    width: width,
    position: "absolute",
    bottom: getBottomSpace(),
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.White,
  },
});
