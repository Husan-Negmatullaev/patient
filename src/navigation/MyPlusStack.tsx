import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "configs";
import MyPlus from "container/MyPlus/MyPlus";

const Stack = createStackNavigator();

const MyPlusStack = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MyPlusStack}
        component={MyPlus}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default MyPlusStack;
