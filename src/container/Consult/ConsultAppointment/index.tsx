import React, { memo, useLayoutEffect } from "react";
import Text from "elements/Text";
import { View, StyleSheet, Image, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors } from "configs";
import Theme from "style/Theme";
import SubtitleItem from "components/Consults/SubtilteItem";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import AdditionalInformationItem from "components/Consults/AdditionalInformationItem";
import { getBottomSpace } from "react-native-iphone-x-helper";
import DoctorInformation from "components/DoctorInformation";
import useModalAnimation from "hooks/useModalAnimation";
import ModalSlideBottom from "components/ModalSlideBottom";
import ModalEditVisitTime from "components/ModalEditVisitTime";
import { width } from "configs/Const";

export default memo(({ route }: any) => {
  const { setOptions } = useNavigation();
  const { item, statusName, statusColor } = route?.params;
  const { doctor, time, consultDetails, additionalInformation } = item;
  const { medications, allergies, diagnosedConditions } = additionalInformation; //item.additionalInformation
  const { date, timeRange } = time; //item.time
  const { price, questionDetails } = consultDetails; //item.consultDetails
  const { question, askFor, questionImage } = questionDetails; //consultDetails.questionDetails
  const { uri, title, uploadTime } = questionImage; //questionDetails.questionImage
  const { visible, open, close, transY } = useModalAnimation();

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
            Online Appointment
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
    <View>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: getBottomSpace() }}
      >
        <View style={styles.container}>
          <View>
            <DoctorInformation {...doctor} />
            <SubtitleItem
              icon="calendar"
              title="Visit Time"
              iconRight="edit"
              onIconRight={open}
            >
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
                  color={Colors.GrayBlue}
                  marginLeft={9}
                >
                  Alarm before 30 mins
                </Text>
              </View>
              <Text size={15} lineHeight={18}>
                Live Chat Consult: $ {price} / visit
              </Text>
            </SubtitleItem>
            <SubtitleItem icon="help" title="Consult Details">
              <View>
                <View style={styles.myQuestion}>
                  <Text size={15} lineHeight={18} marginTop={16} bold>
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
                  <View style={Theme.flexRow}>
                    <Image source={uri} style={styles.myQuestionImage} />
                    <View>
                      <Text
                        size={13}
                        lineHeight={22}
                        marginLeft={24}
                        marginBottom={8}
                      >
                        {title}
                      </Text>
                      <Text
                        size={13}
                        lineHeight={16}
                        color={Colors.GrayBlue}
                        marginLeft={24}
                      >
                        Uploaded {uploadTime}
                      </Text>
                    </View>
                  </View>
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
            <Text
              center
              size={13}
              lineHeight={16}
              textDecorationLine="underline"
              color={Colors.GrayBlue}
              marginBottom={24}
            >
              Cancel Appointment
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonBottom}>
        <ButtonBorder title="Edit Consult Details" color={Colors.GrayBlue} />
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
  myQuestion: {
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
  },
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
