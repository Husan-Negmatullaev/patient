import { Constants } from "configs";
import { useState, useMemo } from "react";
import Animated from "react-native-reanimated";
import { runTiming } from "utils/runTiming";

const {
  Value,
  useCode,
  set,
  cond,
  eq,
  block,
  Clock,
  interpolateNode,
  Extrapolate,
  call,
} = Animated;

const useModalAnimation = () => {
  const [visible, setVisible] = useState(false);
  const animation = useMemo(() => new Value(0), []);
  const transY = useMemo(() => new Value(0), []);
  const visibleAnimation = useMemo(() => new Value<number>(1), []);
  const clock = useMemo(() => new Clock(), []);
  const setVisibleAnimation = (bool: number) => visibleAnimation.setValue(bool);
  const open = () => {
    setVisible((prev) => true);
    setVisibleAnimation(2);
  };
  const close = () => {
    setVisibleAnimation(1);
    setTimeout(() => {
      setVisible((prev) => false);
    }, 500);
  };
  useCode(
    () =>
      block([
        cond(eq(visibleAnimation, 2), [
          set(animation, runTiming(clock)),
          set(
            transY,
            interpolateNode(animation, {
              inputRange: [0, 1],
              outputRange: [0, Constants.height],
              extrapolate: Extrapolate.CLAMP,
            })
          ),
        ]),
        cond(eq(visibleAnimation, 1), [
          set(animation, runTiming(clock)),
          set(
            transY,
            interpolateNode(animation, {
              inputRange: [0, 1],
              outputRange: [Constants.height, 0],
              extrapolate: Extrapolate.CLAMP,
            })
          ),
        ]),
      ]),
    []
  );
  return {
    open,
    close,
    transY,
    visible,
  };
};

export default useModalAnimation;
