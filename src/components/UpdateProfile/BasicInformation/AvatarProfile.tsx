import React from "react";
import { View, StyleSheet, Image } from "react-native";
import scale from "utils/scale";
import Theme from "style/Theme";
import { Colors } from "configs";
import { AVATAR } from "images/Avatar";
interface AvatarProfileProps {
  onPress?: () => void;
}

const AvatarProfile = (props: AvatarProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          source={AVATAR.avatar2}
          resizeMode="stretch"
          style={styles.img}
        />
      </View>
    </View>
  );
};

export default AvatarProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(40),
    justifyContent: "center",
    ...Theme.flexRow,
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    width: scale(112),
    height: scale(112),
    overflow: "hidden",
  },
  buttonUpload: {
    height: scale(36),
    marginRight: scale(19),
    backgroundColor: Colors.TealBlue,
    ...Theme.center,
    borderRadius: scale(8),
  },
  img: {
    width: scale(112),
    height: scale(112),
  },
});
