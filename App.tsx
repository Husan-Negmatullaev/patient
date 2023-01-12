import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "navigation";
import { Provider } from "react-redux";
import ModalDisconnect from "components/ModalDisconnect";
import { View } from "react-native";
import Theme from "style/Theme";
import { store } from "redux/reducer";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Mulish-Medium": require("./assets/fonts/Mulish-Medium.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-SemiBold": require("./assets/fonts/Mulish-SemiBold.ttf"),
    "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf"),
    "Oswald-Medium": require("./assets/fonts/Oswald-Medium.ttf"),
    "Oswald-Regular": require("./assets/fonts/Oswald-Regular.ttf"),
    "Oswald-SemiBold": require("./assets/fonts/Oswald-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const isDisconnect = false;

  return (
    <View style={Theme.flexOne}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        {isDisconnect && <ModalDisconnect />}
      </Provider>
    </View>
  );
}
