import React, { memo, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import { ICON } from "images/Icon";
import Theme from "style/Theme";
import { Colors } from "configs";

const time = [
  { id: 0, title: "On time", icon: ICON.time, text: "On Time" },
  { id: 1, title: "10m", text: "10m later" },
  { id: 2, title: "30m", text: "30m later" },
  { id: 3, title: "2hr", text: "> 2h later" },
];

export default memo(() => {
  const [selectedId, setSelectedId] = useState<number>(0);
  return (
    <View style={styles.container}>
      {time.map((item: any, index: number) => {
        const { id, title, icon, text } = item;
        return (
          <View key={index}>
            <TouchableOpacity
              activeOpacity={0.54}
              style={[
                styles.touch,
                {
                  backgroundColor:
                    id == selectedId ? Colors.DodgerBlue : Colors.White,
                  borderWidth: id == selectedId ? 0 : 1,
                },
              ]}
              onPress={() => {
                setSelectedId(id);
              }}
            >
              {icon != null && icon != undefined ? (
                <Image
                  source={icon}
                  tintColor={id == selectedId ? Colors.White : Colors.GrayBlue}
                />
              ) : (
                <Text
                  size={13}
                  lineHeight={16}
                  color={id == selectedId ? Colors.White : Colors.GrayBlue}
                >
                  {title}
                </Text>
              )}
            </TouchableOpacity>
            <Text
              size={13}
              lineHeight={16}
              bold={id == selectedId}
              center
              marginTop={16}
            >
              {text}
            </Text>
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRowSpace,
  },
  touch: {
    ...Theme.center,
    width: 56,
    height: 56,
    borderRadius: 16,
    borderColor: Colors.GrayBlue,
  },
});
