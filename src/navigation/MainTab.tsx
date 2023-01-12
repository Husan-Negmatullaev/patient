import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { memo, useMemo } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Routes, Colors } from "configs";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";
import MyPlusStack from "./MyPlusStack";
import MyRecordStack from "./MyRecordStack";
import SettingStack from "./SettingStack";

const Tab = createBottomTabNavigator();
const MainTab = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} lazy={true}>
        <Tab.Screen name={Routes.HomeStack} component={HomeStack} />
        <Tab.Screen name={Routes.SearchStack} component={SearchStack} />
        <Tab.Screen name={Routes.MyPlusStack} component={MyPlusStack} />
        <Tab.Screen name={Routes.MyRecordStack} component={MyRecordStack} />
        <Tab.Screen name={Routes.SettingStack} component={SettingStack} />
      </Tab.Navigator>
    </View>
  );
});

const MyTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return useMemo(() => {
    return (
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            return navigation.navigate(route.name);
          };

          const getNameIcon = (): string => {
            switch (index) {
              case 0:
                return isFocused ? "homeActive" : "home";
              case 1:
                return isFocused ? "searchActive" : "search";
              case 2:
                return isFocused ? "healthActive" : "health";
              case 3:
                return isFocused ? "recordActive" : "record";
              case 4:
                return isFocused ? "accountActive" : "account";
              default:
                return "home";
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.btn}
              key={index}
              activeOpacity={1}
            >
              <View
                style={[styles.borderButton, isFocused && styles.borderActive]}
              >
                <Image source={ICON[getNameIcon()]} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }, [state, descriptors, navigation]);
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 52 + getBottomSpace(),
    paddingBottom: getBottomSpace(),
    backgroundColor: Colors.White,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(247, 247, 247, 0.9)",
  },
  borderButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    ...Theme.center,
  },
  borderActive: {
    backgroundColor: Colors.TealBlue20,
  },
});

export default MainTab;
