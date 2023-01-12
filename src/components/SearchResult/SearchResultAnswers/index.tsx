import React, { memo, useCallback, useState } from "react";
import { View, StyleSheet, ScrollView, Modal } from "react-native";
import { width } from "configs/Const";
import { useFocusEffect } from "@react-navigation/native";
import { FOLLOWING_QUESTIONS } from "configs/Data";
import changeAlias from "utils/stringAlias";
import QuestionAnswerItem from "components/QuestionAnswerItem";
import useModalAnimation from "hooks/useModalAnimation";
import ModalSelect from "components/ModalSelect";
import { Colors } from "configs";

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

interface SearchResultAnswersProps {
  searchKey: string;
}

const SearchResultAnswers = memo(({ searchKey }: SearchResultAnswersProps) => {
  const { visible, open, close, transY } = useModalAnimation();
  const [dataAnswer, setDataAnswer] = useState<any>([]);
  useFocusEffect(
    useCallback(() => {
      let _dataAnswer = [];
      for (let i = 0; i < FOLLOWING_QUESTIONS.length; i++) {
        if (
          changeAlias(FOLLOWING_QUESTIONS[i].question).includes(
            changeAlias(searchKey)
          )
        ) {
          _dataAnswer.push(FOLLOWING_QUESTIONS[i]);
        }
        setDataAnswer(_dataAnswer);
      }
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {dataAnswer.map((item: any, index: number) => {
          return (
            <QuestionAnswerItem
              onOptionPress={open}
              key={index}
              {...item}
              style={styles.item}
            />
          );
        })}
      </ScrollView>
      <Modal visible={visible} onRequestClose={close} transparent>
        <ModalSelect choices={menuOptions} close={close} onPressItem={close} />
      </Modal>
    </View>
  );
});

export default SearchResultAnswers;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  item: {
    marginBottom: 16,
  },
});
