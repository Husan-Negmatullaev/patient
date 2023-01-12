import React, { memo, useCallback, useState, Dispatch, SetStateAction } from "react";
import { View, StyleSheet, Image, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import scale from "utils/scale";
import { useNavigation } from "@react-navigation/native";
import { ICON } from "images/Icon";
import ButtonIconText from "elements/Buttons/ButtonIconText";

interface Props {
  lengthText: number;
  question: string;
  setQuestion: Dispatch<SetStateAction<string>>;
  setLengthText: Dispatch<SetStateAction<number>>;
  minChar: number;
  addAttachments?: boolean;
}

const TextInputQuestion = memo(({ lengthText, question, setQuestion, setLengthText, minChar, addAttachments }: Props) => {
  const { navigate } = useNavigation();
  const onChangeText = React.useCallback((text: string) => {
    setQuestion(text);
    setLengthText(text.length)
  }, []);
  return (
    <View style={[styles.container]}>
      <View style={styles.frameImg}>
        <Image
          source={(ICON.help)}
          resizeMode="center"
          style={styles.img}
        />
        <Text size={scale(15)} lineHeight={scale(18)} bold center>What is your question?</Text>
      </View>
      <View style={{ padding: scale(24) }}>
        <TextInput
          style={{ width: scale(295), height: scale(104), borderRadius: scale(8), backgroundColor: Colors.Snow, padding: scale(16) }}
          placeholder="Describe your isssue in detail…"
          textAlignVertical="top"
          maxLength={1000}
          multiline
          value={question}
          onChangeText={onChangeText}
          disableFullscreenUI={true}
        >
        </TextInput>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text right size={scale(11)} lineHeight={scale(14)} marginTop={scale(8)} color={Colors.GrayBlue}>Min {minChar} Char</Text>
          <Text marginLeft={scale(16)} right size={scale(11)} lineHeight={scale(14)} marginTop={scale(8)} color={Colors.GrayBlue}>{lengthText}/1000</Text>

        </View>
        {
          addAttachments ?
            <ButtonIconText
              icon={"attachBlue"}
              iconStyle={styles.iconstyle}
              title={"Add Attachments"}
              titleColor={Colors.GrayBlue}
              textProps={{ bold: true, size: 15, lineHeight: 18, marginLeft: 8 }}
              style={styles.styleButton}
            />
            : null
        }
      </View>

    </View>
  );
});

export default TextInputQuestion;

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(16),
    backgroundColor: Colors.White,
    marginBottom: scale(16)
  },
  frameImg: {
    flexDirection: 'row',
    padding: scale(16),
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.WhiteSmoke
  },
  img: {
    width: scale(32),
    height: scale(32),
    marginRight: scale(16),
    marginLeft: scale(8)
  },
  iconstyle: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(8)
  },
  styleButton: {
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(16),
    borderWidth: 1,
    borderColor: Colors.Platinum
  },
});