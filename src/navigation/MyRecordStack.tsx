import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "configs";
import MyRecord from "container/MyRecord/MyRecord";

const Stack = createStackNavigator();

const MyRecordStack = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MyRecordStack}
        component={MyRecord}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default MyRecordStack;
