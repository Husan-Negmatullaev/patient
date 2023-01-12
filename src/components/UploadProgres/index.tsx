import React, { memo, useMemo, useState } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Text from "elements/Text";
import Animated, {
  block,
  call,
  Clock,
  concat,
  Extrapolate,
  interpolateNode,
  set,
  useCode,
  Value,
} from "react-native-reanimated";
import { Colors } from "configs";
import { runTiming } from "utils/runTiming";

interface UploadProgressProps {
  style: ViewStyle;
}

const UploadProgress = memo((props: UploadProgressProps) => {
  const [progress, setProgress] = useState(0);
  const animation = new Value(0);
  const width = useMemo(() => new Value(0), []);
  const clock = new Clock();
  useCode(
    () =>
      block([
        set(animation, runTiming(clock, 6000)),
        set(
          width,
          interpolateNode(animation, {
            inputRange: [0, 1],
            outputRange: [0, 100],
            extrapolate: Extrapolate.CLAMP,
          })
        ),
      ]),
    []
  );
  useCode(() => {
    return call([width], (value) => {
      setProgress(Math.round(value[0]));
    });
  }, [width]);
  return (
    <View style={[styles.container, props.style]}>
      <View style={{}}>
        <Animated.View
          style={{
            width: concat(width, "%"),
            minWidth: 75,
          }}
        >
          <Text size={11} lineHeight={14} right>
            Uploaded {progress}%
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            backgroundColor: Colors.Malachite,
            height: 4,
            width: concat(width, "%"),
          }}
        />
      </View>
    </View>
  );
});

export default UploadProgress;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
