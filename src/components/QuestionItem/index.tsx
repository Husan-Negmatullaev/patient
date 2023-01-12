import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Colors } from "configs";
import NumberAnswered from "components/NumberAnswered";
import Text from "elements/Text";

interface QuestionItemProps {
  question?: string;
  numberAnswered?: number;
  questionColor?: string;
  numberColor?: string;
  style?: ViewStyle;
}

export default memo(
  ({
    question,
    numberAnswered,
    questionColor,
    numberColor,
    style,
  }: QuestionItemProps) => {
    return (
      <TouchableOpacity style={[styles.container, style]}>
        <Text size={15} lineHeight={24} medium color={questionColor}>
          {question}
        </Text>
        <NumberAnswered numberOfAnswers={numberAnswered} />
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
  },
});
