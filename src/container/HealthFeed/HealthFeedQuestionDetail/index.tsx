import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, Modal, Image } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import Theme from "style/Theme";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import keyExtractor from "utils/keyExtractor";
import Footer from "components/MyPlus/Footer";
import {
  DOCTOR_AGREE_LIST,
  FOLLOWING_QUESTION_DETAILS,
  RELATED_QUESTIONS,
  RELATED_TOPIC,
} from "configs/Data";
import useModalWithKeyboard from "hooks/useModalWithKeyboard";
import ModalSelect from "components/ModalSelect";
import HealthFeedQuestionDetails from "components/HealthFeed/HealthFeedQuestionDetails";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { ICON } from "images/Icon";
import Text from "elements/Text";
import LinearColors from "elements/LinearColors";
import useModalAnimation from "hooks/useModalAnimation";
import ModalSlideBottom from "components/ModalSlideBottom";
import ModalShowDoctorAgree from "components/ModalShowDoctorAgree";

export default memo(({ route }: any) => {
  const questionDetails = route?.params;
  const { setOptions } = useNavigation();
  const [followed, setFollowed] = useState<boolean>(false);
  const [answerCount, setAnswerCount] = useState<number>(1);
  const [dataAnswer, setDataAnswer] = useState<any[]>();
  const [relatedTopics, setRelatedTopics] = React.useState<any[]>();
  const [relatedQuestions, setRelatedQuestions] = React.useState<any[]>();

  const {
    visible: visibleMenuOption,
    open: openMenuOption,
    close: closeMenuOption,
  } = useModalWithKeyboard(false);

  const {
    visible: visibleDoctorAgree,
    open: openDoctorAgree,
    close: closeDoctorAgree,
    transY: transYDoctorAgree,
  } = useModalAnimation();

  const menuOptions = [
    {
      id: 0,
      name: "Unfollow Question",
    },
    {
      id: 1,
      name: "Add the Doctor to Care Team",
    },
    {
      id: 2,
      name: "Disclaimer",
    },
    {
      id: 3,
      name: "Delete Question",
      color: Colors.Red,
    },
  ];

  const handleSelectMenuOption = React.useCallback(() => {
    onFollow();
    closeMenuOption();
  }, [closeMenuOption]);

  useFocusEffect(
    React.useCallback(() => {
      setDataAnswer(FOLLOWING_QUESTION_DETAILS);
      setRelatedTopics(RELATED_TOPIC);
      setRelatedQuestions(RELATED_QUESTIONS);
    }, [])
  );
  const onFollow = () => {
    setFollowed(!followed);
  };
  const handleShare = useCallback(() => {}, []);

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        backgroundColor: Colors.Snow,
        elevation: 0,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <View style={Theme.flexRow}>
          {followed ? (
            <ButtonIconHeader
              icon="followed"
              marginRight={24}
              tintColor={Colors.White}
              backgroundColor={Colors.DodgerBlue}
              onPress={onFollow}
            />
          ) : (
            <ButtonIconHeader
              icon="follow"
              marginRight={24}
              tintColor={Colors.GrayBorder4}
              borderColor={Colors.GrayBorder4}
              onPress={onFollow}
            />
          )}
          <ButtonIconHeader
            icon="share"
            marginRight={24}
            tintColor={Colors.DodgerBlue}
            borderColor={Colors.DodgerBlue}
          />
        </View>
      ),
    });
  }, [setOptions, followed, handleShare]);

  const onPressMoreAnswer = () => {
    let _num = answerCount + 1;
    setAnswerCount(_num);
  };

  const renderItem = useCallback(
    ({ item }) => {
      if (item.id < answerCount)
        return (
          <HealthFeedQuestionDetails
            {...item}
            openDoctorAgreeModal={openDoctorAgree}
            openOptionMenuModal={openMenuOption}
          />
        );
      if (item.id == answerCount)
        return (
          <ButtonLinear
            title="More Answer"
            leftChildren={
              <Image source={ICON.arrowDown} tintColor={Colors.White} />
            }
            onPress={onPressMoreAnswer}
          />
        );
    },
    [answerCount]
  );

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View style={styles.listHeader}>
        <Text marginHorizontal={16} bold size={13} lineHeight={16}>
          {questionDetails.subTitle}
        </Text>
        <Text marginHorizontal={16} marginTop={8} size={13} lineHeight={16}>
          {questionDetails.member}
        </Text>
        <Text
          marginHorizontal={16}
          marginBottom={12}
          marginTop={8}
          semiBold
          size={17}
          lineHeight={25}
        >
          {questionDetails.question}
        </Text>
        <View style={{ ...Theme.flexRow, marginHorizontal: 16 }}>
          <Image source={ICON.doctorAnswer} />
          <Text size={13} lineHeight={16} bold marginLeft={9}>
            {questionDetails.numberOfAnswers}
          </Text>
          <Text size={13} lineHeight={16} marginLeft={4}>
            doctors answered
          </Text>
        </View>
        <LinearColors
          colors={[Colors.TealBlue, Colors.TurquoiseBlue]}
          style={styles.line}
        />
      </View>
    );
  }, [questionDetails]);

  const listFooterComponent = React.useCallback(() => {
    return (
      <Footer
        relatedTopics={relatedTopics}
        relatedQuestions={relatedQuestions}
      />
    );
  }, [relatedTopics, relatedQuestions]);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataAnswer}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        keyExtractor={keyExtractor}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      />
      <Modal
        visible={visibleMenuOption}
        onRequestClose={closeMenuOption}
        transparent
        animationType={"fade"}
      >
        <ModalSelect
          onPressItem={handleSelectMenuOption}
          choices={menuOptions}
          close={closeMenuOption}
        />
      </Modal>
      <Modal
        visible={visibleDoctorAgree}
        onRequestClose={closeDoctorAgree}
        transparent
      >
        <ModalSlideBottom onClose={closeDoctorAgree} transY={transYDoctorAgree}>
          <ModalShowDoctorAgree data={DOCTOR_AGREE_LIST} />
        </ModalSlideBottom>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteSmoke,
  },
  contentContainer: {
    padding: 16,
  },
  listHeader: {
    backgroundColor: Colors.White,
    paddingVertical: 24,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginBottom: 14,
  },
  line: {
    width: "100%",
    height: 4,
    position: "absolute",
    top: 0,
    alignSelf: "center",
  },
});
