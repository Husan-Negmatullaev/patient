import React, { memo, useCallback } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import scale from "utils/scale";
import { Colors, Routes } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import { IMAGE } from "images/Image";
interface SentSuccessQuestionProps { }

const SentSuccessQuestion = memo((props: SentSuccessQuestionProps) => {
  const { navigate } = useNavigation();

  const onGoToDashBoard = useCallback(() => {
    navigate(Routes.MainTab);
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Image
        source={IMAGE.sentSuccessful}
        style={styles.successImage}
      />
      <Text size={20} lineHeight={24} bold>
        Sent Successful!
      </Text>
      <Text size={15} lineHeight={24} center marginTop={16}>
        While waiting for the answers you can check{"\n"}the health feed and learn insight.
      </Text>
      <ButtonBorder
        title={"Check Health Feed"}
      />
      <ButtonLinear
        title={"Go to Home Dashboard"}
        style={{ paddingHorizontal: 32 }}
        onPress={onGoToDashBoard}
      />
    </View>
  );
});

export default SentSuccessQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  successImage: {
    width: scale(160, true),
    height: scale(160, true),
    marginBottom: scale(55, true),
  },
});
