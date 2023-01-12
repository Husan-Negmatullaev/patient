import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars";
import { Colors, Constants } from "configs";
import Text from "elements/Text";

LocaleConfig.locales.fr = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: ["S", "M", "T", "W", "T", "F", "S"],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
};
LocaleConfig.defaultLocale = "fr";

interface CalendarProps {
  style?: ViewStyle;
  onPress?: () => void;
  getSelectedDate?: () => void;
}

const ConsultCalendar = memo(({ onPress, style }: CalendarProps) => {
  const [dateSelected, setDateSelected] = useState<any>("");
  const [active, setActive] = useState<boolean>(false);
  const [markedDates, setMarkedDates] = useState("");

  const message = {
    key: "message",
    color: Colors.Jade,
    selectedDotColor: active ? Colors.White : Colors.Jade,
  };
  const gmail = {
    key: "vacation",
    color: Colors.Jade,
    selectedDotColor: active ? Colors.White : Colors.Jade,
  };
  const phoneCall = {
    key: "phoneCall",
    color: Colors.Jade,
    selectedDotColor: active ? Colors.White : Colors.Jade,
  };
  const appointment = {
    key: "appointment",
    color: Colors.Jade,
    selectedDotColor: active ? Colors.White : Colors.Jade,
  };

  const onDayPress = (day: any) => {
    setMarkedDates(day.dateString);
    setDateSelected(day.dateString);
    setActive(true);
    onPress && onPress();
  };

  return (
    <CalendarList
      style={[styles.container, style]}
      enableSwipeMonth={true}
      current={"2020-01-05"}
      minDate={"2020-01-05"}
      onDayPress={onDayPress}
      // markingType={"custom"}
      hideExtraDays={true}
      horizontal={true}
      pagingEnabled={true}
      markingType={"multi-dot"}
      // markingType="period"
      markedDates={{
        [markedDates]: {
          selected: true,
          color: Colors.DodgerBlue,
          borderRadius: 4,
          customStyles: {
            container: {
              width: 40,
              height: 40,
              borderRadius: 4,
              alignItem: "center",
              justifyContent: "center",
            },
          },
        },
        "2020-01-05": {
          dots: [message, gmail],
          selected: dateSelected === "2020-01-05",
          selectedColor: Colors.DodgerBlue,
        },
        "2020-01-08": {
          marked: true,
          selected: dateSelected === "2020-01-08",
          dots: [message],
        },
        "2020-01-11": {
          marked: true,
          selected: dateSelected === "2020-01-11",
          dots: [message, gmail],
        },
      }}
      theme={{
        calendarBackground: "#ffffff",
        selectedTextColor: Colors.DodgerBlue,
        selectedDayBackgroundColor: Colors.DodgerBlue,
        textDayFontFamily: Constants.FONTS_APP + "_" + "400Regular",
        textDayHeaderFontWeight: "400",
        textDayFontWeight: "400",
        textDayHeaderFontSize: 11,
        textDayFontSize: 15,
        textDayHeaderFontFamily: Constants.FONTS_APP + "_" + "400Regular",
        textMonthFontSize: 11,
        textMonthFontWeight: "500",
        "stylesheet.calendar.header": {
          header: {
            flexDirection: "row",
            justifyContent: "flex-start",
            fontSize: 11,
            lineHeight: 14,
            color: Colors.GrayBlue,
          },
        },
      }}
    />
  );
});

export default ConsultCalendar;

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowColor: "rgba(141, 151, 158, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
  },
});
