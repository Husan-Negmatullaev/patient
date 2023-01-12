import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "configs";
import Account from "container/Setting/Account";

const Stack = createStackNavigator();

const SettingStack = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.SettingStack}
        component={Account}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default SettingStack;
