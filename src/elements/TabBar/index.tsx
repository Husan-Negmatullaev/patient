import Text from "elements/Text";
import { Colors } from "configs";
import React, { memo, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import Theme from "style/Theme";

interface Props {
  tabs?: string[];
  style?: ViewProps;
  activeTintColor?: string;
  inactiveTintColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
  tabStyle?: ViewProps;
  onChangeTab?: (index: number) => void;
}

export default memo(
  ({
    tabs,
    onChangeTab,
    style,
    tabStyle,
    activeTintColor = Colors.White,
    inactiveTintColor = Colors.GrayBlue,
    activeBackgroundColor = Colors.TealBlue,
    inactiveBackgroundColor = Colors.Isabelline,
  }: Props) => {
    const [tabActive, setTabActive] = React.useState<number>(0);

    const _onChangeTab = useCallback(
      (number: number) => {
        setTabActive(number);
        onChangeTab && onChangeTab(number);
      },
      [onChangeTab]
    );

    return (
      <View style={[styles.container, style]}>
        {tabs.map((item, index) => {
          const backgroundColor = {
            backgroundColor:
              tabActive === index
                ? activeBackgroundColor
                : inactiveBackgroundColor,
          };

          const tintColor =
            tabActive === index ? activeTintColor : inactiveTintColor;

          return (
            <TouchableOpacity
              onPress={() => _onChangeTab(index)}
              key={index}
              style={[styles.tabStyle, tabStyle, backgroundColor]}
            >
              <Text color={tintColor} size={13} lineHeight={16} semiBold>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Isabelline,
    flex: 1,
    ...Theme.flexDirection,
    justifyContent: "space-around",
  },
  tabStyle: {
    height: 40,
    flex: 1,
    marginRight: 1,
    borderRadius: 8,
    ...Theme.center,
  },
});
