import React, { memo } from "react";

import {
  View,
  StyleSheet,
  ViewStyle,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors } from "configs";
import Theme from "style/Theme";
import Text from "elements/Text";
import { ICON } from "images/Icon";

interface HealthGuideProps {
  id?: number;
  image?: any;
  title?: string;
  avatar?: any;
  name?: string;
  action?: string;
  quantity?: string;
  style?: ViewStyle;
  onPress?: () => void;
  onPressOption: () => void;
}

export default memo(
  ({
    image,
    title,
    avatar,
    name,
    action,
    quantity,
    onPress,
    onPressOption,
  }: HealthGuideProps) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.54}
        style={styles.container}
      >
        <View style={styles.label}>
          <Image
            style={{ tintColor: Colors.White, marginRight: 4 }}
            source={ICON.rateFull}
          />
          <Text marginTop={4} size={10} bold color={Colors.Snow}>
            RECOMMENDED
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.setRow}>
          <View style={Theme.flexRow}>
            <Image style={styles.avatar} source={avatar} />
            <Text bold size={15} lineHeight={18} color={Colors.DodgerBlue}>
              {name}
              <Text marginLeft={4} regular size={11} lineHeight={18}>
                {action}
              </Text>
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.54} onPress={onPressOption}>
            <Image style={styles.icon} source={ICON.option} />
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={image} />
        <Text marginHorizontal={16} marginTop={12} size={13} lineHeight={22}>
          {quantity}
        </Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: Colors.boxShadow,
    shadowOpacity: 1,
    overflow: "hidden",
    marginBottom: 16,
    paddingBottom: 16,
  },
  image: {
    width: "100%",
    height: 176,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    marginRight: 16,
  },
  setRow: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
    ...Theme.flexRowSpace,
    flex: 1,
  },
  titleView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
    ...Theme.flexRow,
  },
  icon: {
    tintColor: Colors.GrayBlue,
    width: 24,
    height: 24,
  },
  label: {
    backgroundColor: Colors.Orange,
    height: 16,
    borderRadius: 2,
    width: 100,
    ...Theme.flexRow,
    ...Theme.center,
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 8,
    paddingVertical: 2,
  },
});
