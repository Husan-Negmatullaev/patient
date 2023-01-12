import React, { useLayoutEffect } from "react";
import { memo } from "react";
import { View, StyleSheet } from "react-native";
import ScrollableTab from "elements/ScrollableTab";
import { Colors, Routes } from "configs";
import PastConsults from "components/Consults/PastConsults";
import { useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import NextConsults from "components/Consults/NextConsults";

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const onCalendar = () => {
    navigate(Routes.ConsultCalendar);
  };
  const onAddNew = () => {};
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        backgroundColor: Colors.Snow,
        shadowColor: "transparent",
        elevation: 0,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <View style={Theme.flexRow}>
          <ButtonIconHeader
            onPress={onCalendar}
            tintColor={Colors.DodgerBlue}
            borderColor={Colors.DodgerBlue}
            icon="calendar"
            marginRight={24}
          />
          <ButtonIconHeader
            onPress={onAddNew}
            tintColor={Colors.DodgerBlue}
            borderColor={Colors.DodgerBlue}
            icon="plus"
            marginRight={24}
          />
        </View>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <ScrollableTab
        titles={[`Next Consults`, `Past Consult`]}
        labelStyle={styles.labelStyle}
      >
        <View style={Theme.flexRow}>
          <NextConsults />
        </View>
        <View style={Theme.flexRow}>
          <PastConsults />
        </View>
      </ScrollableTab>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  labelStyle: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
  },
  calendar: {},
});
