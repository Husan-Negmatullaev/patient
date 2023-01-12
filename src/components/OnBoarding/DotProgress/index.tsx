import React, { memo, useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Constants } from "configs";
import Theme from "style/Theme";
import Animated, { interpolateNode } from "react-native-reanimated";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { runTiming } from "utils/runTiming";

interface DotProgressProps {
  numberOfDots: number;
  scrollX: Animated.Node<number>;
}

const {
  useCode,
  call,
  Clock,
  block,
  Value,
  cond,
  eq,
  set,
  interpolate,
  divide,
  add,
} = Animated;

const DotProgress = memo(({ numberOfDots, scrollX }: DotProgressProps) => {
  const selectedPage = new Value<number>(0);
  const clock = new Clock();
  const selectPage = (index: number) => selectedPage.setValue(index);
  const animation = new Value(0);
  const arrayDots = useCallback(() => {
    let arr = [];
    for (let i = 0; i < numberOfDots; i++) {
      arr.push(i);
    }
    return arr;
  }, [numberOfDots]);
  const sizeDots = arrayDots().map(() => new Value(0));
  const leftDots = arrayDots().map(() => new Value(0));
  let timeout: NodeJS.Timeout;
  useCode(() => {
    return call([scrollX], (value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        selectPage(Math.round(value[0] / Constants.width));
      }, 50);
    });
  }, [scrollX]);

  useCode(
    () =>
      block([
        ...arrayDots().map((i, index) =>
          cond(eq(selectedPage, index), [
            set(animation, runTiming(clock, 200)),
            ...arrayDots()
              .map((dot, i) => i)
              .filter((_dot, i) => index !== i)
              .map((absoluteIndex, i) => [
                set(
                  sizeDots[absoluteIndex],
                  interpolateNode(animation, {
                    inputRange: [0, 1],
                    outputRange: [sizeDots[absoluteIndex], 4],
                  })
                ),
                set(
                  leftDots[absoluteIndex],
                  interpolateNode(animation, {
                    inputRange: [0, 1],
                    outputRange: [leftDots[absoluteIndex], 0],
                  })
                ),
              ]),
            set(
              sizeDots[index],
              interpolateNode(animation, {
                inputRange: [0, 1],
                outputRange: [sizeDots[index], 8],
              })
            ),
            set(
              leftDots[index],
              interpolateNode(animation, {
                inputRange: [0, 1],
                outputRange: [leftDots[index], -2],
              })
            ),
          ])
        ),
      ]),
    []
  );
  const renderDots = useCallback(() => {
    let arrDots = [];
    for (let i = 0; i < numberOfDots; i++) {
      arrDots.push(
        <Animated.View
          style={[
            styles.dot,
            {
              width: sizeDots[i],
              height: sizeDots[i],
              borderRadius: divide(sizeDots[i], 2),
              left: add(i * 16, leftDots[i]),
            },
          ]}
          key={i.toString()}
        />
      );
    }
    return arrDots;
  }, [numberOfDots, sizeDots]);
  return <View style={styles.container}>{renderDots()}</View>;
});

export default DotProgress;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: (Constants.height / 812) * 175 + getBottomSpace(),
    width: 56,
    height: 8,
    left: (Constants.width - 60) / 2,
    right: (Constants.width - 60) / 2,
    ...Theme.flexRow,
  },
  dot: {
    width: 4,
    height: 4,
    position: "absolute",
    backgroundColor: Colors.White,
  },
});
