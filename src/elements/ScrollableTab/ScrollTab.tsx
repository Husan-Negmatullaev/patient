import React, { memo, useCallback } from "react";
import { ScrollView, TextStyle } from "react-native";
import ScrollTabButton from "./ScrollTabButton";
import Animated, { useCode, call } from "react-native-reanimated";
import { width } from "configs/Const";
import { Colors } from "configs";

interface Props {
  scrollX: Animated.Node<number>;
  titles: string[];
  onPressTab: (index: number) => void;
  tabScrollRef: any;
  onScrollTo: (event: any, isPress?: boolean) => void;
  indexPage: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  layouts: number[];
  setLayouts: React.Dispatch<React.SetStateAction<number[]>>;
  labelStyle?: TextStyle;
}

const ScrollTab = memo(
  ({
    scrollX,
    titles,
    onPressTab,
    tabScrollRef,
    onScrollTo,
    indexPage,
    setIndex,
    layouts,
    setLayouts,
    labelStyle,
  }: Props) => {
    let timeout: any;
    useCode(() => {
      return call([scrollX], (value) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setIndex(Math.round(value[0] / width));
          onScrollTo(Math.round(value[0] / width));
        }, 50);
      });
    }, [scrollX, onScrollTo]);

    const onLayout = useCallback(
      (event) => {
        const x = event.nativeEvent.layout.x;
        const _layouts = [...layouts, x + width / 2];
        setLayouts([...layouts, x]);
      },
      [layouts, setLayouts]
    );

    return (
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 27,
        }}
        showsHorizontalScrollIndicator={false}
        ref={tabScrollRef}
      >
        {titles &&
          titles.map((i, index) => (
            <ScrollTabButton
              index={index}
              title={i}
              key={index.toString()}
              focus={index === indexPage}
              {...{ onPressTab, onLayout, onScrollTo, labelStyle }}
            />
          ))}
      </ScrollView>
    );
  }
);

export default ScrollTab;
