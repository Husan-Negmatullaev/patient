import React, { memo } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { IMAGE } from "images/Image";
import { ICON } from "images/Icon";
import Theme from "style/Theme";

interface HealthDataItemProps {
  img?: any;
  name?: string;
  comp?: string;
  time?: string;
  onClose?: () => void;
}

const HealthDataItem = memo(
  ({ img, name, time, onClose }: HealthDataItemProps) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.close}
          activeOpacity={0.54}
          onPress={onClose}
        >
          <Image
            source={ICON.close}
            style={styles.iconClose}
            tintColor={Colors.White}
          />
        </TouchableOpacity>
        <Image source={img} style={styles.image} />
        <View>
          <Text bold size={13} lineHeight={16} marginBottom={8}>
            {name}
          </Text>
          <Text size={11} lineHeight={14} color={Colors.GrayBlue}>
            {time}
          </Text>
        </View>
      </View>
    );
  }
);

export default HealthDataItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    padding: 8,
    marginBottom: 24,
    borderRadius: 8,
    ...Theme.flexRow,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 12,
  },
  close: {
    position: "absolute",
    ...Theme.center,
    width: 16,
    height: 16,
    right: 4,
    top: 4,
    backgroundColor: Colors.GrayBlue,
    borderRadius: 16,
  },
  iconClose: {
    width: 10,
    height: 10,
  },
});
