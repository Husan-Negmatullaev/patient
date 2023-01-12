import React, { memo } from "react";
import {
  View,
  StyleSheet,
  Image,
  ViewStyle,
  ImageBackground,
} from "react-native";
import Text from "elements/Text";
import scale from "utils/scale";
import { Colors } from "configs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IMAGE } from "images/Image";

interface CheckBoxProps {
  number: number;
  onPress?: () => void;
}

const ImageBackgroundCustom = memo(({ number, onPress }: CheckBoxProps) => {
  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={IMAGE.progress}
        style={{ width: scale(83), height: scale(83), borderRadius: scale(83) }}
        resizeMode="center"
      >
        <Text
          marginTop={scale(13)}
          lineHeight={scale(48)}
          textDecorationLine="underline"
          marginRight={scale(5)}
          center
          size={scale(32)}
          color={Colors.TealBlue}
        >
          {number}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  ) : (
    <View>
      <ImageBackground
        source={IMAGE.progress}
        style={{ width: scale(83), height: scale(83), borderRadius: scale(83) }}
        resizeMode="center"
      >
        <Text
          marginTop={scale(13)}
          lineHeight={scale(48)}
          textDecorationLine="underline"
          marginRight={scale(5)}
          center
          size={scale(32)}
          color={Colors.TealBlue}
        >
          {number}
        </Text>
      </ImageBackground>
    </View>
  );
});

export default ImageBackgroundCustom;

const styles = StyleSheet.create({
  container: {},
});
