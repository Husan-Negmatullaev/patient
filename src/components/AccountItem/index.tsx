import LinearColors from "elements/LinearColors";
import { Colors } from "configs";
import React, { memo } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Theme from "style/Theme";
import Text from "elements/Text";
import { ICON } from "images/Icon";
import { Switch } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { speciality } from "type/speciality";

interface AccountItemProps {
  icon?: any;
  name?: string;
  isToggle?: boolean;
  number?: number;
  style?: ViewStyle;
  route?: any;
  switchValue?: boolean;
  onValueChange?: () => void;
  onPress?: () => void;
  onPressSpecial?: (item: speciality) => void;
  itemSpecial?: speciality;
}

const AccountItem = memo(
  ({
    icon,
    name,
    isToggle,
    style,
    switchValue,
    onValueChange,
    onPress,
    number,
    route,
    itemSpecial,
    onPressSpecial
  }: AccountItemProps) => {
    const { navigate } = useNavigation();
    const _onPress = () => {
      if (route) {
        navigate(route);
      }
      if (itemSpecial){
          // @ts-ignore
        onPressSpecial(itemSpecial);
      }
      onPress && onPress();
    };
    return (
      <TouchableOpacity
        style={[styles.middleView, style]}
        onPress={_onPress}
        activeOpacity={0.54}
      >
        <View style={Theme.flexRow}>
          <LinearColors
            colors={[Colors.TealBlue, Colors.TurquoiseBlue]}
            style={styles.contentIcon}
          >
            <Image source={icon} style={styles.icon} />
          </LinearColors>
          <Text size={15} marginLeft={16}>
            {name}
          </Text>
        </View>

        <View>
          {isToggle === true ? (
            <Switch value={switchValue} onValueChange={onValueChange} />
          ) : (
            <View style={Theme.flexRow}>
              <Text marginRight={8} size={15} color={Colors.GrayBlue}>
                {number}
              </Text>
              <Image source={ICON.arrowRight} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

export default AccountItem;

const styles = StyleSheet.create({
  icon: {
    tintColor: Colors.White,
    alignSelf: "center",
  },
  contentIcon: {
    width: 40,
    height: 40,
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 8,
    justifyContent: "center",
  },
  middleView: {
    ...Theme.flexRowSpace,
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 27,
  },
});
