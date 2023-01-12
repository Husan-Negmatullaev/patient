import React, { Dispatch, memo, SetStateAction } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import Animated from "react-native-reanimated";
import { Colors } from "configs";
import { useKeyboardShowTranslation } from "hooks/useKeyboardShowTranslation";
import Theme from "style/Theme";
interface ModalNoteProps {
  note: string;
  setNote: Dispatch<SetStateAction<string>>;
  close: () => void;
}

const ModalNote = memo((props: ModalNoteProps) => {
  const { note, setNote, close } = props;
  const { animatedStyle } = useKeyboardShowTranslation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#00000020",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{ ...StyleSheet.absoluteFillObject, zIndex: -10 }}
        onPress={close}
      />
      <Animated.View style={animatedStyle}>
        <View
          style={{
            backgroundColor: Colors.White,
            borderColor: Colors.Isabelline,
            borderWidth: 1,
            borderRadius: 8,
            marginHorizontal: 24,
            marginTop: 4,
            marginBottom: 8,
            height: 110,
            padding: 12,
          }}
        >
          <TextInput
            multiline
            style={{
              flex: 1,
              fontFamily: "Muli_400Regular",
              lineHeight: 18,
              fontSize: 14,
            }}
            value={note}
            onChangeText={setNote}
            maxLength={150}
            autoFocus
          />
        </View>
        <Text
          right
          marginRight={24}
          size={11}
          lineHeight={14}
          color={Colors.GrayBlue}
        >
          {note.length}/150
        </Text>
      </Animated.View>
    </View>
  );
});

export default ModalNote;

const styles = StyleSheet.create({
  container: {},
});
