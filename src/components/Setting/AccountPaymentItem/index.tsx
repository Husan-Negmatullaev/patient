import { width } from "configs/Const";
import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import Theme from "style/Theme";
import Text from "elements/Text";
import { Colors } from "configs";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated from "react-native-reanimated";

interface AccountPaymentItemProps {
  id?: number;
  logo: ImageSourcePropType;
  name?: String;
  number?: String;
  onPress?: () => void;
  onDefault?: () => void;
  isDefault?: boolean;
}

export default memo(
  ({
    name,
    number,
    logo,
    onPress,
    onDefault,
    isDefault,
  }: AccountPaymentItemProps) => {
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
              style={styles.default}
              activeOpacity={0.54}
              onPress={onDefault}
            >
              <Text style={styles.text}>Default</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.edit} activeOpacity={0.54}>
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
              style={styles.bankAccount}
              onPress={onPress}
              activeOpacity={1}
            >
              <Image source={logo} style={styles.logo} />
              <View>
                <View style={Theme.flexDirection}>
                  <Text bold size={15} marginBottom={9}>
                    {name}
                  </Text>
                  {isDefault ? (
                    <Text marginLeft={8} color={Colors.GrayBlue}>
                      Default
                    </Text>
                  ) : (
                    <></>
                  )}
                </View>
                <Text>{number}</Text>
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
  bankAccount: {
    borderRadius: 12,
    backgroundColor: Colors.White,
    ...Theme.flexRow,
    marginLeft: 24,
    height: 96,
  },
  scrollView: {
    marginBottom: 24,
    backgroundColor: Colors.Snow,
    marginRight: 24,
    height: 96,
  },
  account: {
    ...Theme.flexRow,
    width: width - 36,
  },
  logo: {
    margin: 24,
  },
  delete: {
    backgroundColor: Colors.RedNeonFuchsia,
  },
  default: {
    backgroundColor: Colors.Orange,
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
  unChecked: {
    width: 20,
    height: 20,
    borderColor: "#979797",
    borderRadius: 20,
    borderWidth: 1,
  },
});
