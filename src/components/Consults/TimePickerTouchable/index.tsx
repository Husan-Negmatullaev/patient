import React, { memo, useCallback, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { ICON } from "images/Icon";
import Theme from "style/Theme";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import Moment from "moment";
import { width } from "configs/Const";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimePickerTouchableProps {
  id?: number;
  onAddNew?: () => void;
  onDelete?: (item: any) => void;
  listTime?: any;
}

export default memo((props: TimePickerTouchableProps) => {
  const [showTime, setShowTime] = useState<boolean>(false);

  const [time, setTime] = useState<any>("8:00 AM");
  const onTime = () => {
    setShowTime(true);
  };
  const onChangeTime = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    setTime(Moment(currentTime).format("LT"));
    setShowTime(!showTime);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.timePicker} onPress={onTime}>
        <Image style={styles.icon} source={ICON.alarm} />
        <Text marginLeft={48}>{time}</Text>
      </TouchableOpacity>
      {props.id == props.listTime.length - 1 ? (
        <ButtonIcon
          icon={"plus"}
          tintColor={Colors.DodgerBlue}
          backgroundColor={Colors.White}
          borderColor={Colors.White}
          onPress={props.onAddNew}
        />
      ) : (
        <ButtonIcon
          icon={"close"}
          tintColor={Colors.GrayBlue}
          backgroundColor={Colors.White}
          borderColor={Colors.White}
          onPress={props.onDelete}
        />
      )}
      <View>
        {showTime && (
          <DateTimePicker
            mode="time"
            value={new Date()}
            is24Hour={false}
            display="spinner"
            onChange={onChangeTime}
          />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRow,
    marginTop: 24,
  },
  content: {
    marginLeft: 8,
    marginRight: 15,
  },
  timePicker: {
    width: width - 116,
    height: 48,
    borderRadius: 8,
    backgroundColor: Colors.White,
    borderColor: Colors.WhiteSmoke,
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 4,
    marginRight: 32,
  },
  icon: {
    position: "absolute",
    left: 12,
    width: 24,
    height: 24,
  },
  time: {
    borderWidth: 0,
    marginLeft: 48,
    marginRight: 12,
  },
});
