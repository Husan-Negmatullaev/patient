import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars";
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

const workingDay = [
  "2020-01-06" +
    "2020-01-07" +
    "2020-01-08" +
    "2020-01-09" +
    "2020-01-10" +
    "2020-01-11",
];
interface CalendarProps {
  style?: ViewStyle;
  onPress?: () => void;
  getSelectedDate?: () => void;
}

const ConsultCalendar = memo(({ onPress, style }: CalendarProps) => {
  const [dateSelected, setDateSelected] = useState<any>("");
  const [active, setActive] = useState<boolean>(false);
  const [markedDates, setMarkedDates] = useState("");

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
      // markingType={"multi-dot"}
      markingType="period"
      markedDates={{
        [markedDates]: {
          selected: true,
          color: Colors.Orange,
        },
        ["2020-01-06"] : {selected:markedDates=="2020-01-06", startingDay : true , color : Colors.DodgerBlue},
        ["2020-01-07"] : {selected:markedDates=="2020-01-07", color : Colors.DodgerBlue},
        ["2020-01-08"] : {selected:markedDates=="2020-01-08", color : Colors.DodgerBlue},
        ["2020-01-09"] : {selected:markedDates=="2020-01-09", color : Colors.DodgerBlue},
        ["2020-01-10"] : {selected:markedDates=="2020-01-10", color : Colors.DodgerBlue},
        ["2020-01-11"] : {selected:markedDates=="2020-01-11", endingDay : true , color : Colors.DodgerBlue},

        ["2020-01-13"] : {selected:markedDates=="2020-01-13", startingDay : true , color : Colors.DodgerBlue},
        ["2020-01-14"] : {selected:markedDates=="2020-01-14", color : Colors.DodgerBlue},
        ["2020-01-15"] : {selected:markedDates=="2020-01-15", color : Colors.DodgerBlue},
        ["2020-01-16"] : {selected:markedDates=="2020-01-16", color : Colors.DodgerBlue},
        ["2020-01-17"] : {selected:markedDates=="2020-01-17", color : Colors.DodgerBlue},
        ["2020-01-18"] : {selected:markedDates=="2020-01-18", endingDay : true , color : Colors.DodgerBlue},

        ["2020-01-20"] : {selected:markedDates=="2020-01-20", startingDay : true , color : Colors.DodgerBlue},
        ["2020-01-21"] : {selected:markedDates=="2020-01-21", color : Colors.DodgerBlue},
        ["2020-01-22"] : {selected:markedDates=="2020-01-22", color : Colors.DodgerBlue},
        ["2020-01-23"] : {selected:markedDates=="2020-01-23", color : Colors.DodgerBlue},
        ["2020-01-24"] : {selected:markedDates=="2020-01-24", color : Colors.DodgerBlue},
        ["2020-01-25"] : {selected:markedDates=="2020-01-25", endingDay : true , color : Colors.DodgerBlue},
        
        ["2020-01-27"] : {selected:markedDates=="2020-01-27", startingDay : true , color : Colors.DodgerBlue},
        ["2020-01-28"] : {selected:markedDates=="2020-01-28", color : Colors.DodgerBlue},
        ["2020-01-29"] : {selected:markedDates=="2020-01-29", color : Colors.DodgerBlue},
        ["2020-01-30"] : {selected:markedDates=="2020-01-30", color : Colors.DodgerBlue},
        ["2020-01-31"] : {selected:markedDates=="2020-01-31", endingDay : true , color : Colors.DodgerBlue},
      }}
      theme={{
        calendarBackground: Colors.White,
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
