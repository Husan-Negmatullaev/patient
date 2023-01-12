import React, { memo } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import scale from "utils/scale";
import { useNavigation } from "@react-navigation/native";
import { ICON } from "images/Icon";

interface TodayTasksItemProps {
  id: number;
  content: string;
  note?: string;
  decription?: string;
  frequency?: string;
  start_date?: string;
  end_date?: string;
  check?: boolean;
}

const TodayTasksItem = memo((props: TodayTasksItemProps) => {
  const { navigate } = useNavigation();
  function onTodayTaskDetail() {
    navigate(Routes.TodayTaskDetails, props);
  }
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.54}
      onPress={onTodayTaskDetail}
    >
      {props.check ? (
        <Image source={ICON.checkBoxActive} style={styles.img} />
      ) : (
          <View style={styles.button} />
        )}
      <View style={Theme.flexOne}>
        <Text
          size={scale(15)}
          lineHeight={scale(24)}
          textDecorationLine={props.check ? "line-through" : "none"}
          color={props.check ? Colors.GrayBlue : Colors.DarkJungleGreen}
        >
          {props.content}
        </Text>
        <Text
          size={scale(13)}
          lineHeight={scale(16)}
          color={Colors.GrayBlue}
          marginTop={8}
        >
          {props.note}
        </Text>
      </View>
      <TouchableOpacity onPress={onTodayTaskDetail}>
        <Image
          source={ICON.arrowRight}
          style={{ width: scale(16), height: scale(16), marginTop: scale(16) }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

export default TodayTasksItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: scale(16),
    borderRadius: scale(16),
    backgroundColor: Colors.White,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  isRead: {
    opacity: 0.5,
  },
  img: {
    width: scale(18),
    height: scale(18),
    marginRight: scale(16),
    margin: scale(3),
  },
  button: {
    width: scale(15),
    height: scale(15),
    borderRadius: scale(3),
    borderColor: Colors.GrayBoder2,
    borderWidth: scale(1),
    margin: scale(3),
    marginRight: scale(16),
  }
});
