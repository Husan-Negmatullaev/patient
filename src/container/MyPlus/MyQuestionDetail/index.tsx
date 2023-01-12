import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, Modal } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import Theme from "style/Theme";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import keyExtractor from "utils/keyExtractor";
import Question from "components/MyPlus/Question";
import OtherQuestion from "components/MyPlus/OtherQuestion";
import Footer from "components/MyPlus/Footer";
import QuestionDetails from "components/MyPlus/QuestionDetails";
import {
  MY_QUESTION_DETAILS,
  RELATED_QUESTIONS,
  RELATED_TOPIC,
} from "configs/Data";
import useModalWithKeyboard from "hooks/useModalWithKeyboard";
import ModalSelect from "components/ModalSelect";

export default memo(({ route }: any) => {
  const questionDetails = route?.params;
  const { setOptions } = useNavigation();
  const [dataAnswer, setDataAnswer] = useState<any[]>();
  const [relatedTopics, setRelatedTopics] = React.useState<any[]>();
  const [relatedQuestions, setRelatedQuestions] = React.useState<any[]>();

  const {
    visible: visibleMenuOption,
    open: openMenuOption,
    close: closeMenuOption,
    translateY: translateYMenuOption,
  } = useModalWithKeyboard(false);

  const menuOptions = [
    {
      id: 0,
      name: "Delete Question",
      color: Colors.Red,
    },
  ];

  const handleSelectMenuOption = React.useCallback(() => {
    closeMenuOption();
  }, [closeMenuOption]);

  useFocusEffect(
    React.useCallback(() => {
      setDataAnswer(MY_QUESTION_DETAILS);
      setRelatedTopics(RELATED_TOPIC);
      setRelatedQuestions(RELATED_QUESTIONS);
    }, [])
  );

  const handleShare = useCallback(() => {}, []);

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: Theme.headerNavigationStyle,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <View style={{ marginRight: 24, ...Theme.flexRow }}>
          <ButtonIconHeader
            icon={"share"}
            borderColor={Colors.DodgerBlue}
            tintColor={Colors.DodgerBlue}
            onPress={handleShare}
          />
          <ButtonIconHeader
            icon={"option"}
            marginLeft={24}
            tintColor={Colors.DodgerBlue}
            borderColor={Colors.DodgerBlue}
            onPress={openMenuOption}
          />
        </View>
      ),
    });
  }, [handleShare, openMenuOption]);

  const renderItem = useCallback(({ item }) => {
    if (item.myAnswer) {
      return <Question {...item} />;
    }
    return <OtherQuestion {...item} />;
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return <QuestionDetails {...questionDetails} />;
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
});
