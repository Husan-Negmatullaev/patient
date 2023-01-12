import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "elements/Text";

interface VisitTimeProps {
  style?: any;
  day?: string;
  times?: any;
  onPress?: () => void;
}

const VisitTimeItem = memo(({ style, day, times, onPress }: VisitTimeProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.54}
      onPress={onPress}
      disabled={times.length === 0}
      style={[styles.container, style]}
    >
      {times &&
        times.map((item: any, index: number) => {
          return (
            <Text
              size={13}
              marginTop={index === 0 ? 0 : 8}
              lineHeight={16}
              key={index}
            >
              {item}
            </Text>
          );
        })}
      <Text style={styles.day} size={13} lineHeight={16} uppercase bold>
        {day}
      </Text>
    </TouchableOpacity>
  );
});

export default VisitTimeItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 97,
    paddingVertical: 16,
    minHeight: 56,
  },
  day: {
    position: "absolute",
    left: 24,
    top: 16,
  },
});
