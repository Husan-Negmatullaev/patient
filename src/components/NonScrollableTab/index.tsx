import React, { memo, useRef, useState, useCallback } from "react";
import Animated, { event, set, Value } from "react-native-reanimated";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import ScrollTab from "./ScrollTab";
import { width } from "configs/Const";

interface Props {
  titles: string[];
  children: any;
  tabStyle?: ViewStyle;
  renderHeader?: any;
  labelStyle?: TextStyle;
  onPressTab?: (index: number) => void;
  onScrollTab?: (index: number) => void;
  getIndex?: (index: number) => void;
}

const ScrollableTab = memo(
  ({
    titles,
    children,
    tabStyle,
    renderHeader,
    labelStyle,
    onPressTab,
    onScrollTab,
    getIndex,
  }: Props) => {
    const [layouts, setLayouts] = useState<number[]>([]);
    const [indexPage, setIndex] = useState(0);
    const scrollX = useRef(new Value(0)).current;
    const scrollRef: any = useRef();
    const tabScrollRef: any = useRef();
    const onScrollTo = useCallback(
      (index: number, isPress?: boolean) => {
        let _layouts = [...layouts];
        _layouts.sort(function (a, b) {
          return a - b;
        });
        if (isPress) {
          setIndex(index);
        }
        tabScrollRef.current.scrollTo({
          x: _layouts[index] - 28,
          y: 0,
          animated: true,
        });
        getIndex && getIndex(index);
      },
      [layouts]
    );
    const _onPressTab = useCallback(
      (index: number) => {
        scrollRef.current
          .getNode()
          .scrollTo({ x: width * index, y: 0, animated: true });
        onScrollTo(index);
        getIndex && getIndex(index);
      },
      [onScrollTo]
    );

    const _renderHeader = useCallback(() => {
      if (!renderHeader) {
        return null;
      }
      if (renderHeader) {
        return renderHeader(indexPage);
      }
    }, [renderHeader, indexPage]);

    return (
      <View style={styles.container}>
        {_renderHeader()}

        <View style={[styles.scrollableTab, tabStyle]}>
          <ScrollTab
            onPressTab={_onPressTab}
            onScrollTo={onScrollTo}
            {...{
              scrollX,
              titles,
              tabScrollRef,
              indexPage,
              setIndex,
              layouts,
              setLayouts,
              labelStyle,
            }}
          />
        </View>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          contentContainerStyle={{ marginTop: 12 }}
          onScroll={event([
            {
              nativeEvent: {
                contentOffset: { x: (x: any) => set(scrollX, x) },
              },
            },
          ])}
          showsHorizontalScrollIndicator={false}
        >
          {children}
        </Animated.ScrollView>
      </View>
    );
  }
);

export default ScrollableTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollableTab: {
    flexDirection: "row",
    paddingTop: 8,
  },
});
