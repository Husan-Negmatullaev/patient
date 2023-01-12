import React, { memo, useLayoutEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "elements/Text";
import { useNavigation } from "@react-navigation/native";
import { Colors, Routes } from "configs";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import ReminderItem from "components/Consults/ReminderItem";
import { shareType } from "../PastConsultNewReminder";
import { TAKER } from "configs/Data";

const PAST_REMINDER = [
  {
    id: 0,
    title: "",
    detail:
      "Take it with or without food. Treatment should continue for five days.,",
    dose: 5,
    selectedType: shareType[1],
    selectedTaker: TAKER[1],
    times: {
      name: "Twice a day",
    },
    duration: {
      name: "4 days",
    },
    snooze: "",
    date: "",
    listTime: [
      {
        id: 0,
        time: "08:00 AM",
      },
      {
        id: 1,
        time: "09:00 AM",
      },
      {
        id: 3,
        time: "10:00 AM",
      },
      {
        id: 2,
        time: "11:00 AM",
      },

      {
        id: 4,
        time: "12:00 AM",
      },
      {
        id: 5,
        time: "01:00 PM",
      },
    ],
  },
  {
    id: 1,
    title: "",
    detail:
      "Take it with or without food. Treatment should continue for five days.",
    dose: 6,
    selectedType: shareType[3],
    selectedTaker: TAKER[0],
    times: {
      name: "Once a day",
    },
    duration: {
      name: "5 days",
    },
    snooze: "",
    date: "",
    listTime: [
      {
        id: 0,
        time: " 09:00 PM",
      },
    ],
  },
];

const PastConsultReminder = memo(({ route }: any) => {
  const { setOptions, navigate } = useNavigation();

  const onAddNew = () => {
    navigate(Routes.PastConsultNewReminder);
  };

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.Snow,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <ButtonIconHeader
          marginRight={24}
          tintColor={Colors.DodgerBlue}
          borderColor={Colors.DodgerBlue}
          icon="plus"
          onPress={onAddNew}
        />
      ),
    });
  });

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <Text bold size={24} lineHeight={28} marginBottom={40}>
        Medication Reminder
      </Text>
      <Text bold size={17} lineHeight={20}>
        Current
      </Text>
      <ReminderItem {...route.params} />
      <Text bold size={17} lineHeight={20} marginTop={48}>
        Past
      </Text>
      {PAST_REMINDER.map((item, index) => {
        return <ReminderItem key={index} {...item} />;
      })}
    </ScrollView>
  );
});

export default PastConsultReminder;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Colors.Snow,
  },
  currentView: {
    padding: 24,
    backgroundColor: Colors.White,
    borderRadius: 16,
  },
});
