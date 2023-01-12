import React, { memo } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import { Colors, Routes } from "configs";
import { useNavigation } from "@react-navigation/native";

interface ServiceItemProps {
  style?: any;
  color?: string;
  title?: string;
  icon?: string;
  route?: any;
  onPress?: () => void;
}

const ServiceItem = memo(
  ({ color, title, icon, style, route, onPress }: ServiceItemProps) => {
    const { navigate } = useNavigation();
    const _onPress = React.useCallback(() => {
      onPress && onPress();
      navigate(route);
    }, []);

    return (
      <TouchableOpacity
        onPress={_onPress}
        activeOpacity={0.54}
        style={[styles.container, { backgroundColor: color }, style]}
      >
        <Image source={ICON[`${icon}`]} />
        <Text bold size={11} lineHeight={14} color={Colors.White} marginTop={8}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);

export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    ...Theme.center,
    paddingTop: 12,
    paddingBottom: 8,
    borderRadius: 8,
  },
});
