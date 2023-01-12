import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { width } from "configs/Const";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import Theme from "style/Theme";

interface VideoCallFooterProps {
  onPressChat?: () => void;
  onPressVideo?: () => void;
  onPressMute?: () => void;
  onPressAttach?: () => void;
}

const VideoCallFooter = memo(
  ({
    onPressChat,
    onPressVideo,
    onPressMute,
    onPressAttach,
  }: VideoCallFooterProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.slider} />
        <View style={Theme.flexRowSpace}>
          <View>
            <ButtonIcon
              style={styles.icon}
              icon="liveChat"
              iconStyle={styles.iconStyle}
              backgroundColor={Colors.WhiteOpacity}
              onPress={onPressChat}
            />
            <View style={styles.notification}>
              <Text size={11} lineHeight={14} center color={Colors.White}>
                1
              </Text>
            </View>
            <Text
              center
              size={11}
              lineHeight={14}
              color={Colors.White}
              marginTop={8}
            >
              Chat
            </Text>
          </View>
          <View>
            <ButtonIcon
              style={styles.icon}
              icon="videoOff"
              iconStyle={styles.iconStyle}
              backgroundColor={Colors.WhiteOpacity}
              onPress={onPressVideo}
            />
            <Text
              center
              size={11}
              lineHeight={14}
              color={Colors.White}
              marginTop={8}
            >
              Off
            </Text>
          </View>
          <View>
            <ButtonIcon
              style={styles.icon}
              icon="mute"
              iconStyle={styles.iconStyle}
              backgroundColor={Colors.WhiteOpacity}
              onPress={onPressMute}
            />
            <Text
              center
              size={11}
              lineHeight={14}
              color={Colors.White}
              marginTop={8}
            >
              Mute
            </Text>
          </View>
          <View>
            <ButtonIcon
              style={styles.icon}
              icon="attach"
              iconStyle={styles.iconStyle}
              backgroundColor={Colors.WhiteOpacity}
              onPress={onPressAttach}
            />
            <View style={styles.notification}>
              <Text size={11} lineHeight={14} center color={Colors.White}>
                3
              </Text>
            </View>
            <Text
              center
              size={11}
              lineHeight={14}
              color={Colors.White}
              marginTop={8}
            >
              Shared Files
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

export default VideoCallFooter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 162,
    width: width,
    backgroundColor: Colors.DarkJungleGreenOpacity,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
  },
  slider: {
    alignSelf: "center",
    marginTop: 12,
    width: 48,
    height: 6,
    backgroundColor: Colors.WhiteOpacity,
    borderRadius: 3,
    marginBottom: 24,
  },
  notification: {
    position: "absolute",
    width: 16,
    height: 16,
    backgroundColor: Colors.RedNeonFuchsia,
    right: 0,
    borderRadius: 12,
    ...Theme.center,
  },
  icon: {
    width: 56,
    height: 56,
    margin: 4,
  },
  iconStyle: {
    width: 32,
    height: 32,
  },
});
