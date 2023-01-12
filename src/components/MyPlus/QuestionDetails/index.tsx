import React, { memo } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { ICON } from "images/Icon";
import Theme from "style/Theme";
import LinearColors from "elements/LinearColors";

interface Props {
  style?: any;
  subTitle?: string;
  question: string;
  date?: string;
  numberOfAnswers: number;
  onPress: () => void;
}

export default memo(
  ({ style, subTitle, date, question, numberOfAnswers, onPress }: Props) => {
    return (
      <View style={[styles.container, style]}>
        <Text marginHorizontal={16} bold size={13} lineHeight={16}>
          {subTitle}
        </Text>
        <Text
          marginHorizontal={16}
          marginTop={8}
          color={Colors.GrayBlue}
          size={13}
          lineHeight={16}
        >
          {date}
        </Text>
        <Text
          marginHorizontal={16}
          marginBottom={12}
          marginTop={8}
          semiBold
          size={17}
          lineHeight={25}
        >
          {question}
        </Text>
        <View style={{ ...Theme.flexRow, marginHorizontal: 16 }}>
          <Image source={ICON.doctorAnswer} />
          <Text size={13} lineHeight={16} bold marginLeft={9}>
            {numberOfAnswers}
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
  }
);

const styles = StyleSheet.create({
  container: {
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
