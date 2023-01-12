import React, { memo, useCallback, useLayoutEffect } from "react";
import Text from "elements/Text";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import SubtitleItem from "components/Consults/SubtilteItem";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import AdditionalInformationItem from "components/Consults/AdditionalInformationItem";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import StarRating from "components/Consults/StarRating";
import DoctorInformation from "components/DoctorInformation";

export default memo(({ route }: any) => {
  const { setOptions, navigate } = useNavigation();
  const { item, statusName, statusColor } = route?.params;
  const { doctor, time, type, consultDetails, additionalInformation } = item;
  const { medications, allergies, diagnosedConditions } = additionalInformation; //item.additionalInformation
  const { date, timeRange, sentTime } = time; //item.time
  const { price, questionDetails, answerDetails } = consultDetails; //item.consultDetails
  const { question, askFor, questionImage } = questionDetails; //consultDetails.questionDetails
  const { answerOne, answerImage } = answerDetails; //consultDetails.answerDetails

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.White,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <ButtonIconHeader
          marginRight={24}
          tintColor={Colors.DodgerBlue}
          borderColor={Colors.DodgerBlue}
          icon="option"
        />
      ),
      headerTitle: () => (
        <View style={Theme.center}>
          <Text size={17} lineHeight={20} marginBottom={8} bold>
            {type} Consults
          </Text>
          <Text
            semiBold
            size={13}
            lineHeight={16}
            marginBottom={12}
            color={statusColor}
          >
            {statusName}
          </Text>
        </View>
      ),
    });
  });

  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: getBottomSpace() }}
    >
      <View style={styles.container}>
        <DoctorInformation {...doctor} />
        <View>
          <SubtitleItem icon="calendar" title="Consult Time">
            <Text size={15} lineHeight={18}>
              {date}
            </Text>
            <Text size={15} lineHeight={18} marginVertical={12}>
              {timeRange}
            </Text>
            <Text size={15} lineHeight={18}>
              Live Chat Consult: $ {price} / visit
            </Text>
          </SubtitleItem>
          <SubtitleItem icon="help" title="Consult Details">
            <View>
              <View style={styles.myQuestion}>
                <Text bold size={15} lineHeight={18}>
                  My Question
                </Text>
                <Text
                  size={13}
                  lineHeight={16}
                  marginTop={8}
                  color={Colors.GrayBlue}
                >
                  Request sent at {sentTime} {date}
                </Text>
                <Text size={15} lineHeight={18} marginTop={16}>
                  For {askFor}
                </Text>
                <Text
                  size={15}
                  lineHeight={24}
                  marginTop={12}
                  marginBottom={24}
                >
                  {question}
                </Text>
              </View>
              <View style={styles.doctorAnswer}>
                <Text bold size={15} lineHeight={18}>
                  Doctor Answer
                </Text>
                <Text
                  size={15}
                  lineHeight={18}
                  color={Colors.GrayBlue}
                  marginTop={8}
                  marginBottom={10}
                >
                  Answered {answerDetails.time} {answerDetails.date}
                </Text>
                <Text size={15} lineHeight={24} marginBottom={24}>
                  {answerOne}
                </Text>
                <View style={[Theme.center, { marginBottom: 24 }]}>
                  <Image source={answerImage} />
                </View>
                <ButtonBorder
                  color={Colors.GrayBlue}
                  title="Text Chat History"
                />
                <ButtonLinear title="Request New Consult" />
              </View>
            </View>
          </SubtitleItem>
          <SubtitleItem
            icon="additionalInformation"
            title="Addition Information"
          >
            <AdditionalInformationItem
              diagnosedConditions={diagnosedConditions}
              medications={medications}
              allergies={allergies}
            />
          </SubtitleItem>
          <SubtitleItem icon="additionalInformation" title="Service Review">
            <View>
              <StarRating />
              <Text size={15} lineHeight={24}>
                Dr. Margaret Wells provides answers that are very helpful,
                knowledgeable, caring, professional and practical. Thank you so
                much for solving my problem.
              </Text>
            </View>
          </SubtitleItem>
          <Text
            center
            size={11}
            lineHeight={18}
            marginHorizontal={32}
            marginTop={16}
            color={Colors.GrayBlue}
          >
            For medical emergencies, please call 911 (or your local emergency
            services) or go to the nearest ER.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    flex: 1,
    padding: 16,
    paddingBottom: 40,
  },
  myQuestion: {
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
  },
  doctorAnswer: {
    paddingVertical: 16,
  },
  prescription: {
    backgroundColor: Colors.WhiteSmoke,
    padding: 16,
    marginBottom: 24,
    borderRadius: 8,
    marginTop: 16,
  },
});
