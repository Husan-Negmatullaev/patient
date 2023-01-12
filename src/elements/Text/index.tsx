import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { Colors } from "configs";

type SizeHeight = {
  [key: string]: number;
};

const FontSize: SizeHeight = {
  H1: 30,
  H2: 24,
  H3: 20,
  H4: 16,
  H5: 15,
  H6: 13,
  Body: 14,
  Label: 12,
  P6: 13,
};

const LineHeight: SizeHeight = {
  H1: 38,
  H2: 28,
  H3: 32,
  H4: 24,
  H5: 18,
  H6: 16,
  Body: 22,
  Label: 20,
  P6: 22,
};

export interface TextProps {
  oswald?: boolean;
  mulish?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  color?: string;
  size?: number;
  style?: any;
  hilight?: boolean;
  ucfirst?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  children?: any;
  regular?: boolean;
  type?: string;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  onPress?: () => void;
  lineHeight?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  maxWidth?: number;
  numberOfLines?: number;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
}

export default ({
  bold,
  semiBold,
  medium,
  left,
  right,
  center,
  color = "#1E1F20",
  size,
  style: _style,
  hilight,
  ucfirst,
  uppercase,
  lowercase,
  children,
  regular,
  onPress,
  numberOfLines,
  type, //H1, H2, H3, H4, Body, Label
  oswald,
  mulish,
  ...props
}: TextProps) => {
  let style: TextStyle = {};
  if (Array.isArray(_style)) {
    style = { ...StyleSheet.flatten(_style) };
  } else {
    style = { ..._style };
  }

  let fontStyle = "Regular";
  if (style.fontWeight) {
    if (style.fontWeight === "normal") {
      fontStyle = "Regular";
    } else if (style.fontWeight === "bold") {
      fontStyle = "Bold";
    }
    style.fontWeight = undefined;
  }

  let FontFamily = "Mulish";
  if (mulish) {
    FontFamily = "Mulish";
  } else if (oswald) {
    FontFamily = "Oswald";
  }

  let _children = "";
  if (typeof children === "string") {
    if (ucfirst) {
      _children =
        children.charAt(0).toUpperCase() + children.slice(1).toLowerCase();
    } else if (uppercase) {
      _children = children.toUpperCase();
    } else if (lowercase) {
      _children = children.toLowerCase();
    }
  }

  if (bold) {
    fontStyle = "Bold";
  }
  if (semiBold) {
    fontStyle = "SemiBold";
  }
  if (regular) {
    fontStyle = "Regular";
  }
  if (medium) {
    fontStyle = "Medium";
  }
  let textSize = size;
  let lineHeight = size;
  if (type) {
    textSize = FontSize[`${type}`];
    lineHeight = LineHeight[`${type}`];
  }

  let textAlign: "left" | "center" | "right" | "auto" | "justify" | undefined =
    "left";

  if (left) {
    textAlign = "left";
  }
  if (right) {
    textAlign = "right";
  }
  if (center) {
    textAlign = "center";
  }

  if (props.lineHeight) {
    lineHeight = props.lineHeight;
  }

  let marginTop;
  let marginLeft;
  let marginRight;
  let marginBottom;
  let marginHorizontal;
  let marginVertical;
  let maxWidth;

  let textDecorationLine:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined = "none";

  if (props.textDecorationLine) {
    textDecorationLine = props.textDecorationLine;
  }

  if (props.marginTop) {
    marginTop = props.marginTop;
  }
  if (props.marginLeft) {
    marginLeft = props.marginLeft;
  }
  if (props.marginRight) {
    marginRight = props.marginRight;
  }
  if (props.marginBottom) {
    marginBottom = props.marginBottom;
  }
  if (props.marginHorizontal) {
    marginHorizontal = props.marginHorizontal;
  }
  if (props.marginVertical) {
    marginVertical = props.marginVertical;
  }
  if (props.maxWidth) {
    maxWidth = props.maxWidth;
  }

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: FontFamily + "-" + fontStyle,
          color: hilight ? Colors.Blue : color,
          fontSize: textSize,
          lineHeight: lineHeight,
          textAlign: textAlign,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
          textDecorationLine: textDecorationLine,
          maxWidth: maxWidth,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
    >
      {_children || children}
    </Text>
  );
};
