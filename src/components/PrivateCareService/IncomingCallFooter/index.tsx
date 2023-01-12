import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { width } from "configs/Const";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Theme from "style/Theme";

interface IncomingCallFooterProps {
  onPressAccept?: () => void;
  onPressDecline?: () => void;
  onPressChat?: () => void;
}

const IncomingCallFooter = memo(
  ({ onPressAccept, onPressChat, onPressDecline }: IncomingCallFooterProps) => {
    return (
      <View style={styles.footerIncoming}>
        <View>
          <ButtonIcon
            style={styles.icon}
            icon={"callOff"}
            iconStyle={styles.iconStyle}
            backgroundColor={Colors.RedNeonFuchsia}
            onPress={onPressDecline}
          />
          <Text
            size={13}
            lineHeight={16}
            color={Colors.GrayBlue}
            center
            marginTop={12}
          >
            Decline
          </Text>
        </View>
        <View>
          <ButtonIcon
            style={styles.icon}
            icon={"call"}
            iconStyle={styles.iconStyle}
            backgroundColor={Colors.DodgerBlue}
            tintColor={Colors.White}
            onPress={onPressAccept}
          />
          <Text
            size={13}
            lineHeight={16}
            color={Colors.GrayBlue}
            center
            marginTop={12}
          >
            Accept
          </Text>
        </View>
        <View>
          <ButtonIcon
            style={styles.icon}
            backgroundColor={Colors.Malachite}
            icon={"liveChat"}
            iconStyle={styles.iconStyle}
            onPress={onPressChat}
          />
          <Text
            size={13}
            lineHeight={16}
            color={Colors.GrayBlue}
            center
            marginTop={12}
          >
            Chat
          </Text>
        </View>
      </View>
    );
  }
);

export default IncomingCallFooter;

const styles = StyleSheet.create({
  container: {},
  footerIncoming: {
    width: width,
    paddingHorizontal: 40,
    ...Theme.flexRowSpace,
    position: "absolute",
    bottom: getBottomSpace() + 68,
  },
  icon: {
    width: 56,
    height: 56,
  },
  iconStyle: {
    width: 32,
    height: 32,
  },
});
