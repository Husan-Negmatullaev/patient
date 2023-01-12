import React, { memo } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors } from "configs";
import { ICON } from "images/Icon";

interface MyRecordConditionItemProps {
  id?: number;
  name?: string;
  date?: string;
  description?: string;
}

export default memo(
  ({ name, date, description }: MyRecordConditionItemProps) => {
    return (
      <TouchableOpacity activeOpacity={0.54} style={styles.container}>
        <View style={Theme.flexRowSpace}>
          <Text color={Colors.DodgerBlue} semiBold size={17} lineHeight={25}>
            {name}
          </Text>
          <Image source={ICON.option} />
        </View>
        <Text
          color={Colors.GrayBlue}
          size={13}
          lineHeight={16}
          marginTop={4}
          marginBottom={8}
        >
          {date}
        </Text>
        <Text size={13} lineHeight={22}>
          {description}
        </Text>
      </TouchableOpacity>
    );
  }
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
});
