import React, { memo, useCallback, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import LinearColors from "elements/LinearColors";
import { useFocusEffect } from "@react-navigation/native";

interface ReminderItemProps {
  title: string;
  detail: string;
  dose: number;
  selectedType: any;
  selectedTaker: any;
  times: any;
  duration: any;
  snooze: string;
  date: string;
  listTime?: any;
}

const ReminderItem = memo(
  ({
    detail,
    dose,
    selectedType,
    selectedTaker,
    times,
    duration,
    date,
    listTime,
  }: ReminderItemProps) => {
    const [, _setListTime] = useState<any>([]);

    useFocusEffect(
      useCallback(() => {
        _setListTime(listTime);
      }, [])
    );

    return (
      <View style={styles.container}>
        <View style={Theme.flexRow}>
          <LinearColors
            colors={[Colors.TealBlue, Colors.TurquoiseBlue]}
            style={styles.imageView}
          >
            <Image
              source={ICON[`${selectedType.icon}`]}
              tintColor={Colors.White}
            />
          </LinearColors>
          <View>
            <Text
              bold
              size={15}
              lineHeight={18}
              marginLeft={16}
              marginBottom={8}
            >
              Acyclovir 800mg
            </Text>
            <View style={Theme.flexRow}>
              <Text marginLeft={16} size={13} lineHeight={16}>
                For
              </Text>
              <Text size={13} lineHeight={16} bold>
                {" "}
                {selectedTaker.name}{" "}
              </Text>
              <Text size={13} lineHeight={16}>
                {dose} {selectedType.name}/time
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 16 }}>
          <View style={Theme.flexRow}>
            <Image source={ICON.calendar} tintColor={Colors.GrayBlue} />
            <Text marginLeft={13} marginVertical={6} size={13} lineHeight={16}>
              Start from: {date}
            </Text>
          </View>
          <View style={Theme.flexRow}>
            <Image source={ICON.calendar} tintColor={Colors.GrayBlue} />
            <Text marginLeft={13} marginVertical={6} size={13} lineHeight={16}>
              {duration.name}
            </Text>
          </View>
          <View style={Theme.flexRow}>
            <Image source={ICON.calendar} tintColor={Colors.GrayBlue} />
            <Text marginLeft={13} size={13} marginVertical={6} lineHeight={16}>
              {times.name}
            </Text>
          </View>
          <View style={styles.listTime}>
            {listTime.map((item: any, index: number) => {
              return (
                <Text
                  bold
                  size={15}
                  lineHeight={18}
                  marginBottom={8}
                  marginRight={12}
                  key={index}
                >
                  {item.time}
                </Text>
              );
            })}
          </View>
          <View style={Theme.flexDirection}>
            <Image source={ICON.calendar} tintColor={Colors.GrayBlue} />
            <Text marginLeft={13} size={13} marginTop={6} lineHeight={22}>
              {detail}
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

export default ReminderItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: Colors.White,
    borderRadius: 16,
    padding: 24,
    paddingRight: 48,
  },
  imageView: {
    width: 40,
    height: 40,
    ...Theme.center,
    borderRadius: 12,
  },
  listTime: {
    marginLeft: 36,
    ...Theme.flexRow,
    paddingTop: 8,
    flexWrap: "wrap",
    ...Theme.flexRow,
  },
});
