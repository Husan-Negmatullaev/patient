import React, { memo } from "react";
import { View, StyleSheet, Platform, FlatList } from "react-native";
import Text from "elements/Text";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import FeatureItem from "components/FeatureItem";
import { MY_PLUS_FEATURES } from "configs/Data";
import keyExtractor from "utils/keyExtractor";

export default memo(() => {
  const renderItem = React.useCallback(({ item, index }) => {
    return (
      <FeatureItem
        style={{ marginRight: index % 2 === 0 ? 16 : 0 }}
        {...item}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text
        marginLeft={24}
        marginTop={Platform.OS === "ios" ? getStatusBarHeight() + 54 : 54}
        marginBottom={8}
        bold
        size={24}
        lineHeight={28}
      >
        My Plus
      </Text>
      <FlatList
        data={MY_PLUS_FEATURES}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace(),
  },
});
