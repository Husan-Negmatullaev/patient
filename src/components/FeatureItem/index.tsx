import React, { memo, useCallback } from "react";
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  ViewStyle,
  ImageBackground,
} from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors } from "configs";
import { useNavigation } from "@react-navigation/native";
import scale from "utils/scale";
import { width } from "configs/Const";

interface ItemProps {
  img?: ImageSourcePropType | any;
  title?: string;
  numberNext?: number;
  route?: string;
  style?: ViewStyle;
}

export default memo(({ route, img, title, numberNext, style }: ItemProps) => {
  const { navigate } = useNavigation();
  const onPress = useCallback(() => {
    route && navigate(route);
  }, [route, navigate]);
  return (
    <TouchableOpacity
      activeOpacity={0.54}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <View style={{ width: `${(88 / 156) * 100}%` }}></View>
      <ImageBackground
        style={{ width: scale(56), height: scale(56) }}
        source={img}
        resizeMode="cover"
      >
        <Text
          marginTop={scale(8)}
          center
          size={scale(56)}
          color={Colors.TealBlue}
        >
          {numberNext}
        </Text>
      </ImageBackground>
      <Text marginTop={16} size={13} lineHeight={18} center>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: (width - 64) / 2,
    height: (width - 64) / 2,
    backgroundColor: Colors.White,
    ...Theme.center,
    marginBottom: 16,
    borderRadius: 16,
    ...Theme.shadow,
  },
});
