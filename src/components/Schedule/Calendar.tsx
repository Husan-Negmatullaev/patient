import React, { memo, useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { Colors, Constants } from "configs";

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
  value?: any;
  onPress?: (day: any) => void;
}

const Calendar = memo(({ onPress, style, value }: CalendarProps) => {
  const [dateSelected, setDateSelected] = useState<any>("");
  const [active, setActive] = useState<boolean>(false);
  const [markedDates, setMarkedDates] = useState(value);

  const onDayPress = (day: any) => {
    setMarkedDates(day.dateString);
    setDateSelected(day.dateString);
    setActive(true);
    onPress && onPress(day);
  };

  return (
    <CalendarList
      style={[styles.container, style]}
      current={value}
      //minDate={"2020-01-01"}
      onDayPress={onDayPress}
      // markingType={"multi-dot"}
      hideExtraDays={true}
      horizontal={true}
      pagingEnabled={true}
      //markingType={"custom"}
      //markingType={"period"}
      markedDates={{
        [markedDates]: {
          selected: true,
          customStyles: {
            container: {
              width: 40,
              height: 40,
              borderRadius: 12,
              alignItem: "center",
              justifyContent: "center",
              //backgroundColor: "green",
            },
          },
        },
      }}
      theme={{
        calendarBackground: "#ffffff",
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
          },
        },
      }}
    />
  );
});

export default Calendar;

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
    paddingBottom: 32,
  },
});
