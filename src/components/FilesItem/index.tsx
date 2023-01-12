import { width } from "configs/Const";
import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ImageProps,
} from "react-native";
import Theme from "style/Theme";
import Text from "elements/Text";
import { Colors } from "configs";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated from "react-native-reanimated";

interface FilesItemProps {
  id?: number;
  image: ImageSourcePropType;
  name?: String;
  date?: String;
  size?: String;
  onPress?: () => void;
  onEdit?: () => void;
}

export default memo(
  ({ image, name, date, size, onPress, onEdit }: FilesItemProps) => {
    const [show, setShow] = useState<boolean>(true);
    const onDelete = () => {
      setShow(false);
    };
    const onSwipeRight = () => {
      return (
        <Animated.View>
          <View style={styles.secondPage}>
            <TouchableOpacity
              style={styles.delete}
              activeOpacity={0.54}
              onPress={onDelete}
            >
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.edit}
              activeOpacity={0.54}
              onPress={onEdit}
            >
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      );
    };

    return (
      <View>
        {show ? (
          <Swipeable
            renderRightActions={onSwipeRight}
            containerStyle={styles.scrollView}
          >
            <TouchableOpacity
              style={styles.files}
              onPress={onPress}
              activeOpacity={1}
            >
              <Image style={styles.image} source={image} />
              <View style={styles.view}>
                <Text marginBottom={8} bold maxWidth={210}>
                  {name}
                </Text>
                <Text marginBottom={8} color={Colors.GrayBlue}>
                  {date}
                </Text>
                <Text color={Colors.GrayBlue}>{size}</Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        ) : (
          <></>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  files: {
    borderRadius: 12,
    backgroundColor: Colors.White,
    ...Theme.flexRow,
    marginLeft: 24,
  },
  scrollView: {
    marginBottom: 24,
    backgroundColor: Colors.Snow,
    marginRight: 24,
    height: 96,
  },
  delete: {
    backgroundColor: Colors.RedNeonFuchsia,
  },
  edit: {
    backgroundColor: Colors.DodgerBlue,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    textAlignVertical: "center",
    textAlign: "center",
    color: Colors.White,
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 16,
    width: 77,
    height: 96,
  },
  secondPage: {
    ...Theme.flexRow,
    borderRadius: 12,
  },
  image: {
    marginVertical: 24,
    marginRight: 24,
    marginLeft: 16,
    width: 78,
    height: 64,
    borderRadius: 4,
  },
  view: {
    marginVertical: 24,
  },
});
