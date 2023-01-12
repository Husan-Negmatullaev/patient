import Animated, { EasingNode } from "react-native-reanimated";
import { timing } from "react-native-redash/lib/module/v1";

export const runTiming = (clock: Animated.Clock, duration?: number): any =>
  timing({
    to: 1,
    clock,
    duration: duration || 400,
    easing: EasingNode.linear,
  });
