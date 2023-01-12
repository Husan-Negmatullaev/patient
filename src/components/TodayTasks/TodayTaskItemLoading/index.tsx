import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import scale from "utils/scale";
import { useNavigation } from "@react-navigation/native";

interface TodayTasksItemProps {}

const TodayTasksItemLoading = memo((props: TodayTasksItemProps) => {
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
      <View style={styles.img} />
      <View style={Theme.flexOne}>
        <View
          style={{
            width: scale(225),
            borderRadius: scale(4),
            height: scale(20),
            backgroundColor: Colors.Isabelline,
          }}
        ></View>
        <View
          style={{
            width: scale(145),
            height: scale(12),
            borderRadius: scale(4),
            backgroundColor: Colors.Isabelline,
            marginTop: scale(8),
          }}
        ></View>
      </View>
      <View
        style={{
          width: scale(16),
          height: scale(16),
          borderRadius: scale(4),
          backgroundColor: Colors.Isabelline,
        }}
      ></View>
    </TouchableOpacity>
  );
});

export default TodayTasksItemLoading;

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
    backgroundColor: Colors.Isabelline,
  },
});
