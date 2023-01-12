import Text from "elements/Text";
import { Colors } from "configs";
import { SOURCE_ICON } from "images";
import * as React from "react";
import { Animated, Easing, Image, StyleSheet, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import Theme from "style/Theme";

const CircleAnimation = Animated.createAnimatedComponent(Circle);

interface Props {
  percentage?: number;
  percent?: number;
  startAnim?: boolean;
  circleUnderlineColor?: string;
  circleColor?: string;
  title?: string;
}

function SvgComponent({
  percentage,
  startAnim,
  title,
  percent,
  circleColor = Colors.DodgerBlue,
}: Props) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const opacity = 1;
  const radius = 38;
  const duration = 500;
  const strokeWidth = 6;
  const haftCircle = radius + strokeWidth;
  const max = 100;
  const circleCircumference = 2 * Math.PI * radius;

  const circleRef = React.useRef();

  const animation = (toValue: any, start: any) => {
    return (
      start &&
      Animated.timing(animated, {
        toValue,
        duration,
        delay: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start()
    );
  };

  React.useEffect(() => {
    animation(percentage, startAnim);
    animated.addListener((v) => {
      if (circleRef?.current) {
        const maxPercent = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercent) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={styles.container}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${haftCircle * 2} ${haftCircle * 2}`}
      >
        <G rotation={"-90"} origin={`${haftCircle},${haftCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={circleColor}
            strokeLinecap={"round"}
            strokeWidth={strokeWidth}
            strokeOpacity={0.1}
            fill={"transparent"}
          />
          <CircleAnimation
            ref={circleRef}
            opacity={opacity}
            cx="50%"
            cy="50%"
            r={radius}
            stroke={circleColor}
            strokeLinecap={"round"}
            strokeWidth={strokeWidth}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
          />
        </G>
      </Svg>
      <Text style={styles.title} marginTop={12} size={12} lineHeight={14}>
        {title}
      </Text>
      <Text
        color={circleColor}
        size={20}
        lineHeight={24}
        style={styles.percent}
      >
        {percent}
        {/* <Image source={SOURCE_ICON.percent} /> */}
      </Text>
    </View>
  );
}

const AnimatedCircle = React.memo(SvgComponent);
export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    ...Theme.center,
  },
  percent: {
    position: "absolute",
    alignSelf: "center",
  },
  title: {
    position: "absolute",
    top: 70,
  },
});
