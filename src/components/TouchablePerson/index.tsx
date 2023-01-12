import React, { memo, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ViewStyle,
} from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import scale from "utils/scale";
import { dataPerson } from "type/healthyQuestion";
import { ICON } from "images/Icon";
import keyExtractor from "utils/keyExtractor";

interface TouchablePersonProps {
  data: Array<dataPerson>;
  isYou: boolean;
  onPress: (item: dataPerson) => void;
  style: ViewStyle;
}

const TouchablePerson = memo((props: TouchablePersonProps) => {
  return (
    <View style={[props.style]}>
      <View style={styles.frameImg}>
        <Image
          source={ICON.accountNormal}
          resizeMode="center"
          style={styles.img}
        />
        <Text size={scale(15)} lineHeight={scale(18)} bold center>
          Is this for You or Someone else?
        </Text>
      </View>
      <View style={styles.frameFlat}>
        {props.data.map((item: dataPerson, index: number) => {
          if (item.check) {
            return (
              <View style={[styles.frameTouch]} key={index}>
                <TouchableOpacity
                  style={styles.touch1}
                  onPress={() => props.onPress(item)}
                >
                  <Image
                    source={
                      item.isAdd
                        ? ICON.addPatient
                        : item.check
                        ? ICON.accountWhite
                        : ICON.account
                    }
                    resizeMode="center"
                  />
                </TouchableOpacity>
                <Text
                  size={scale(13)}
                  lineHeight={scale(22)}
                  bold
                  center
                  marginTop={scale(16)}
                >
                  {item.isAdd ? "Someone else" : item.lastName}
                </Text>
              </View>
            );
          }
          return (
            <View style={[styles.frameTouch]} key={index}>
              <TouchableOpacity
                style={styles.touch2}
                onPress={() => props.onPress(item)}
              >
                <Image
                  source={item.isAdd ? ICON.addPatient : ICON.account}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text
                size={scale(13)}
                lineHeight={scale(22)}
                bold
                center
                marginTop={scale(16)}
              >
                {item.isAdd ? "Someone else" : item.lastName}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
});

export default TouchablePerson;

const styles = StyleSheet.create({
  container: { borderRadius: scale(16), backgroundColor: Colors.White },
  frameImg: {
    flexDirection: "row",
    padding: scale(16),
    alignItems: "center",
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.WhiteSmoke,
  },
  img: {
    width: scale(32),
    height: scale(32),
    marginRight: scale(16),
    marginLeft: scale(8),
  },
  frameFlat: {
    flexDirection: "row",
    padding: scale(24),
    paddingRight: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },
  frameTouch: {
    marginLeft: scale(8),
    marginRight: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  touch1: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(16),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DodgerBlue,
  },
  touch2: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(16),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: scale(1),
    borderColor: Colors.WhiteSmoke,
  },
});
