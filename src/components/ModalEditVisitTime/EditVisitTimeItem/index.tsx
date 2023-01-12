import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import Text from "elements/Text";
import CheckBox from "elements/CheckBox";
import Theme from "style/Theme";

interface VisitTimeItemProps {
  id: number;
  timeFrom: string;
  timeTo: string;
  onPress?: () => void;
  selectedId?: number;
}

const VisitTimeItem = memo(
  ({ id, timeFrom, timeTo, onPress, selectedId }: VisitTimeItemProps) => {
    return (
      <View style={styles.container}>
        {selectedId == id ? (
          <View style={Theme.flexRow}>
            <Text size={15} lineHeight={24} bold>
              {timeFrom}
              {" - "}
            </Text>
            <Text size={15} lineHeight={24} bold>
              {timeTo}
            </Text>
          </View>
        ) : (
          <View style={Theme.flexRow}>
            <Text size={15} lineHeight={24}>
              {timeFrom}
              {" - "}
            </Text>
            <Text size={15} lineHeight={24}>
              {timeTo}
            </Text>
          </View>
        )}
        <CheckBox isCheck={selectedId == id} onPress={onPress} />
      </View>
    );
  }
);

export default VisitTimeItem;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRowSpace,
    marginBottom: 24,
  },
});
