import React, { memo, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
} from "react-native";
import { ICON } from "images/Icon";
import { Colors } from "configs";
import Theme from "style/Theme";

const starRate = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

interface StarRatingProps {
  starSize?: number;
  style?: ViewStyle;
}

export default memo(({ starSize, style }: StarRatingProps) => {
  const [selectedId, setSelectedId] = useState<number>(5);

  return (
    <View style={[styles.container, style]}>
      {starRate.map((item, index) => {
        return (
          <View key={index}>
            {item.id <= selectedId ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setSelectedId(item.id);
                }}
                style={{ marginRight: 12 }}
              >
                <Image
                  style={{
                    width: starSize ? starSize : 28,
                    height: starSize ? starSize : 28,
                  }}
                  source={ICON.rateFull}
                  tintColor={Colors.PinkOrange}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setSelectedId(item.id);
                }}
                style={{ marginRight: 12 }}
              >
                <Image
                  style={{
                    width: starSize ? starSize : 28,
                    height: starSize ? starSize : 28,
                  }}
                  source={ICON.rateFull}
                  tintColor={Colors.GrayBlue}
                />
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRowCenter,
    marginVertical: 32,
  },
});
