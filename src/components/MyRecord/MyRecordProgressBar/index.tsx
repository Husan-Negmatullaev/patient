import { Colors } from "configs";
import React, { memo, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Text from "elements/Text";
import { width } from "configs/Const";
import LinearColors from "elements/LinearColors";

interface MyRecordProgressBarProps {
  percent: number;
}

export default memo(({ percent }: MyRecordProgressBarProps) => {
  const [barWidth, setBarWidth] = useState(width);
  const progressAnimated = useRef(new Animated.Value(-barWidth)).current;
  const value = useRef(new Animated.Value(-barWidth)).current;

  useEffect(() => {
    Animated.timing(progressAnimated, {
      toValue: value,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [progressAnimated]);

  useEffect(() => {
    value.setValue(-barWidth + (barWidth * percent) / 100);
  }, [barWidth, percent]);
  return (
    <View style={styles.container}>
      <View
        style={styles.bar}
        onLayout={(e) => {
          const _barWidth = e.nativeEvent.layout.width;
          setBarWidth(_barWidth);
        }}
      >
        <Animated.View
          style={[
            styles.progress,
            {
              transform: [
                {
                  translateX: progressAnimated,
                },
              ],
            },
          ]}
          children={
            <LinearColors
              style={styles.progress}
              colors={[Colors.TealBlue, Colors.Malachite]}
            />
          }
        />
      </View>
      <Text marginTop={8} center size={11} lineHeight={14}>
        Completed {percent}% basic profile
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  bar: {
    width: 162,
    overflow: "hidden",
    backgroundColor: Colors.WhiteSmoke,
    height: 8,
    borderRadius: 8,
  },
  progress: {
    position: "absolute",
    height: 8,
    borderRadius: 8,
    width: "100%",
    left: 0,
  },
});
