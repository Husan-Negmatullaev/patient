import React, { memo, useLayoutEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "elements/Text";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import { Colors, Routes } from "configs";
import VisitTimeCalendar from "components/Consults/VisitTimeCalendar";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import EditVisitTimeItem from "components/ModalEditVisitTime/EditVisitTimeItem";
import { VISIT_TIME_LIST } from "configs/Data";

export default memo(() => {
  const { navigate, setOptions } = useNavigation();

  const [selectedDate, setSelectedDate] = useState<any>("Friday, Jan 5, 2020");
  const [selectedTime, setSelectedTime] = useState(VISIT_TIME_LIST[0]);

  const onContinue = () => {
    navigate(Routes.BookAppointmentDetail);
  };

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        elevation: 0,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          bold
          size={13}
          lineHeight={16}
          marginLeft={24}
          marginVertical={16}
        >
          Step 1 of 3
        </Text>
        <Text bold size={24} lineHeight={28} marginLeft={24} marginBottom={24}>
          Select Visit Time
        </Text>
        <VisitTimeCalendar />
      </View>
      <View style={styles.listTime}>
        <Text bold size={15} lineHeight={18}>
          {selectedDate}
        </Text>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {VISIT_TIME_LIST.map((item, index) => {
            return (
              <EditVisitTimeItem
                {...item}
                selectedId={selectedTime.id}
                key={index}
                onPress={() => {
                  setSelectedTime(item);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
      <ButtonLinear title="Continue" onPress={onContinue} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.White,
  },
  listTime: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: Colors.Snow,
  },
  scrollView: {
    height: 180,
    marginVertical: 24,
  },
});
