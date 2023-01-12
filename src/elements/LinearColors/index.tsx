import { memo } from "react";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ViewStyle } from "react-native";

interface Props {
  children?: any;
  style?: ViewStyle;
  colors?: string[];
  vertical?: boolean;
  locations?: number[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const LinearColors = memo(
  ({
    children,
    style,
    colors = ["#D5D1E3", "#F0AAB4"],
    vertical = false,
    locations,
    start,
    end,
  }: Props) => {
    const startLinear = vertical ? { x: 0.5, y: 0 } : { x: 0.0, y: 0.5 };
    const endLinear = vertical ? { x: 0.5, y: 1 } : { x: 1, y: 0.5 };
    return (
      <LinearGradient
        colors={colors}
        start={start ? start : startLinear}
        end={end ? end : endLinear}
        locations={locations}
        style={style && style}
      >
        {children}
      </LinearGradient>
    );
  }
);

export default LinearColors;
