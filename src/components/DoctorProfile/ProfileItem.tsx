import React, { memo } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import Theme from "style/Theme";
import { ICON } from "images/Icon";

interface ProfileItemProps {
  icon?: string;
  title?: string;
  children?: any;
  verifyRequired?: any;
}

const ProfileItem = memo(
  ({ icon, title, children, verifyRequired }: ProfileItemProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          <View style={Theme.flexRow}>
            <View style={styles.rounded}>
              <Image style={styles.icon} source={ICON[`${icon}`]} />
            </View>
            <Text marginLeft={16} size={15} lineHeight={18} bold>
              {title}
            </Text>
          </View>
          <View style={styles.itemView}>
            <ButtonIcon style={styles.buttonEdit} icon={"pencil"} />
            {verifyRequired && (
              <Text size={9} lineHeight={14} color={Colors.GrayBlue}>
                Verify required
              </Text>
            )}
          </View>
        </View>
        {children}
      </View>
    );
  }
);

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    paddingBottom: 24,
    marginHorizontal: 16,
    marginTop: 24,
  },
  buttonEdit: {
    width: 24,
    height: 24,
    backgroundColor: Colors.DodgerBlue,
  },
  topBox: {
    ...Theme.flexRowSpace,
    paddingTop: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    paddingBottom: 16,
    borderBottomColor: Colors.Snow,
  },
  rounded: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.OysterBay,
    ...Theme.center,
  },
  icon: {
    tintColor: Colors.TiffanyBlue,
  },
  itemView: {
    alignItems: "flex-end",
  },
});
