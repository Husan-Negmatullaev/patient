import { useCallback, useState, useRef } from "react";
import { Animated } from "react-native";
import { height } from "configs/Const";

const useModalAni = (initValue: boolean = false) => {
  const [visible, setValue] = useState<boolean>(initValue);
  const translateY = useRef(new Animated.Value(height)).current;
  const open = useCallback(() => {
    setValue((value) => true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);
  const close = useCallback(() => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setValue(false);
    });
  }, []);
  return {
    visible,
    translateY,
    open,
    close,
  };
};
export default useModalAni;
