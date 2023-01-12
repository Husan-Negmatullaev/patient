import React, { memo } from "react";
import {
  View,
  StyleSheet,
  Image,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { ICON } from "images/Icon";

interface CheckBoxProps {
  icon?: string
  isCheck?: boolean | number;
  style?: ViewStyle;
  onPress?: () => void;
  isRounded?: boolean;
}

const CheckBox = memo(
  ({ isCheck, style, onPress, isRounded, icon }: CheckBoxProps) => {
    return (
      <TouchableOpacity
        activeOpacity={0.54}
        style={{ ...Theme.icons, ...Theme.center, ...style }}
        onPress={onPress}
      >
        {isCheck ? (
          <View>
            {isRounded ? (
              <Image source={ICON.radioActive} />
            ) : (
              <Image source={icon ? ICON[`${icon}`] : ICON.checkBoxActive} />
            )}
          </View>
        ) : (
          <View>
            {isRounded ? (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderColor: "#979797",
                  borderRadius: 30,
                  borderWidth: 1,
                }}
              />
            ) :
              style ?
                (<View />)
                :
                (
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderColor: "#979797",
                      borderRadius: 3,
                      borderWidth: 1,
                    }}
                  />
                )}
          </View>
        )}
      </TouchableOpacity>
    );
  }
);

export default CheckBox;

const styles = StyleSheet.create({
  container: {},
});
