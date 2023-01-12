import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "configs";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { width } from "configs/Const";
import Animated, {
  event,
  set,
  Value,
  interpolateColors,
} from "react-native-reanimated";

interface ScrollViewAnimatedHeaderProps {
  renderHeader: any;
  children: any;
}

const ScrollViewAnimatedHeader = memo(
  ({ renderHeader, children }: ScrollViewAnimatedHeaderProps) => {
    const scrollY = new Value(0);

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            position: "absolute",
            zIndex: 10,
            top: 0,
            paddingTop: getStatusBarHeight(),
            width: width,
            backgroundColor: interpolateColors(scrollY, {
              inputRange: [0, 160],
              outputColorRange: ["transparent", Colors.White],
            }),
          }}
        >
          {renderHeader()}
        </Animated.View>
        <Animated.ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() + 24 }}
          scrollEventThrottle={16}
          onScroll={event([
            {
              nativeEvent: {
                contentOffset: { y: (y: any) => set(scrollY, y) },
              },
            },
          ])}
        >
          {children}
        </Animated.ScrollView>
      </View>
    );
  }
);

export default ScrollViewAnimatedHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  header: {},
  content: {
    paddingTop: 32,
    paddingHorizontal: 24,
  },
});
