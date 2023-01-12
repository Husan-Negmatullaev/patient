import React, { memo, useLayoutEffect } from "react";
import Text from "elements/Text";
import { View, StyleSheet, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors } from "configs";
import Theme from "style/Theme";
import SubtitleItem from "components/Consults/SubtilteItem";
import AdditionalInformationItem from "components/Consults/AdditionalInformationItem";
import { getBottomSpace } from "react-native-iphone-x-helper";
import DoctorInformation from "components/DoctorInformation";
import useModalAnimation from "hooks/useModalAnimation";
import ModalSlideBottom from "components/ModalSlideBottom";
import ModalEditVisitTime from "components/ModalEditVisitTime";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { width } from "configs/Const";

export default memo(({ route }: any) => {
  const { setOptions } = useNavigation();
  const { item, statusName, statusColor } = route?.params;
  const { doctor, time, consultDetails, additionalInformation } = item;
  const { medications, allergies, diagnosedConditions } = additionalInformation; //item.additionalInformation
  const { date, timeRange, timeLeft } = time; //item.time
  const { price, questionDetails } = consultDetails; //item.consultDetails
  const { question, askFor } = questionDetails; //consultDetails.questionDetails
  const { visible, close, transY } = useModalAnimation();

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
            Live Chat Consult
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

  const onContinue = () => {};

  return (
    <View>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: getBottomSpace() + 100 }}
      >
        <View style={styles.container}>
          <View>
            <DoctorInformation {...doctor} />
            <SubtitleItem icon="calendar" title="Consult Time">
              <Text size={15} lineHeight={18}>
                {date}
              </Text>
              <View style={Theme.flexRow}>
                <Text size={15} lineHeight={18} marginVertical={12}>
                  {timeRange}
                </Text>
                <Text
                  size={13}
                  lineHeight={16}
                  marginVertical={12}
                  color={Colors.RedNeonFuchsia}
                  marginLeft={9}
                >
                  {timeLeft}
                </Text>
              </View>
              <Text size={15} lineHeight={18}>
                Live Chat Consult: $ {price} / visit
              </Text>
            </SubtitleItem>
            <SubtitleItem icon="help" title="Consult Details">
              <View style={styles.myQuestion}>
                <Text size={15} lineHeight={18} marginTop={16} bold>
                  For {askFor}
                </Text>
                <Text size={15} lineHeight={24} marginTop={12}>
                  {question}
                </Text>
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
            <Text
              center
              size={11}
              lineHeight={18}
              color={Colors.GrayBlue}
              marginTop={16}
              marginBottom={40}
              marginHorizontal={32}
            >
              For medical emergencies, please call 911 (or your local emergency
              services) or go to the nearest ER.
            </Text>
            <View style={Theme.flexRowCenter}>
              <Text
                center
                size={13}
                lineHeight={16}
                color={Colors.GrayBlue}
                marginBottom={24}
              >
                Are you done?{"  "}
              </Text>
              <Text
                center
                size={13}
                lineHeight={16}
                textDecorationLine="underline"
                color={Colors.GrayBlue}
                marginBottom={24}
              >
                Finish consult now.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonBottom}>
        <ButtonLinear title="Continue chat with Doctor" onPress={onContinue} />
      </View>
      <Modal visible={visible} onRequestClose={close} transparent>
        <ModalSlideBottom onClose={close} transY={transY}>
          <ModalEditVisitTime onPressDone={close} />
        </ModalSlideBottom>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    flex: 1,
    padding: 16,
  },
  myQuestion: {},
  myQuestionImage: {
    width: 100,
    height: 72,
  },
  buttonBottom: {
    position: "absolute",
    bottom: 0,
    paddingBottom: getBottomSpace() + 16,
    paddingTop: 40,
    width: width,
    paddingHorizontal: 24,
    backgroundColor: Colors.White,
  },
});
