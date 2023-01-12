import React, { memo } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import scale from "utils/scale";
import Colors from "configs/Colors"
import { ICON } from "images/Icon";

interface Props {
  header: string,
  content: string,
  noteCost: string,
  onPress?: () => void;
}

const ButtonArrowRight = memo((props: Props) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={props.onPress}
    >
      <View style={{ ...Theme.flexRowSpace }}>
        <Text
          size={17}
          lineHeight={20}
          bold
        >
          {props.header || 'Private Care Service'}
        </Text>
        <Image source={ICON.baseArrowRight} style={styles.img} resizeMode="center" />
      </View>

      <Text
        size={13}
        lineHeight={22}
        marginTop={scale(8)}
      >
        {props.content || 'Consult instantly via live chat/voice/video call{"\n"}from doctors available now.'}
      </Text>
      <Text
        size={13}
        lineHeight={16}
        marginTop={scale(8)}
        color={Colors.GrayBlue}
      >
        {props.noteCost || 'Starting from $45 per visit'}
      </Text>
    </TouchableOpacity>
  );
});

export default ButtonArrowRight;

const styles = StyleSheet.create({
  container: {
    marginBottom: scale(16),
    padding: scale(24),
    backgroundColor: Colors.White,
    borderRadius: scale(16)
  },
  img: {
    width: scale(24),
    height: scale(24)
  },

});
