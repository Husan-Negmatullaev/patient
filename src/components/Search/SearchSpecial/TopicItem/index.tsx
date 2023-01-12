import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { ICON } from "images/Icon";
import Theme from "style/Theme";

interface TopicItemProps {
  id?: number;
  name?: string;
  isFollow?: boolean;
  numberOfNotifications?: number;
  onPress?: () => void;
}

const TopicItem = memo(
  ({ name, isFollow, numberOfNotifications, onPress }: TopicItemProps) => {
    return (
      <TouchableOpacity
        activeOpacity={0.54}
        style={styles.container}
        onPress={onPress}
      >
        <Text semiBold size={15} lineHeight={24} color={Colors.DodgerBlue}>
          {name}
        </Text>
        {isFollow ? (
          <>
            <View style={[styles.icon, styles.followed]}>
              <Image source={ICON.followed} />
            </View>
            <View style={styles.number}>
              <Text semiBold size={11} lineHeight={14} color={Colors.White}>
                {numberOfNotifications}
              </Text>
            </View>
          </>
        ) : (
          <View style={[styles.icon, styles.follow]}>
            <Image source={ICON.follow} />
          </View>
        )}
      </TouchableOpacity>
    );
  }
);

export default TopicItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
    padding: 24,
    ...Theme.flexRowSpace,
  },
  icon: {
    ...Theme.center,
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  followed: {
    backgroundColor: Colors.DodgerBlue,
  },
  follow: {
    backgroundColor: Colors.Platinum,
  },
  number: {
    ...Theme.center,
    position: "absolute",
    right: 20,
    top: 15,
    borderRadius: 30,
    backgroundColor: Colors.PinkOrange,
    width: 16,
    height: 16,
  },
});
