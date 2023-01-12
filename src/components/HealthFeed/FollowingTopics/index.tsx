import React, { memo, useCallback } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Text from "elements/Text";
import { width } from "configs/Const";
import FollowingTopicItem from "../FollowingTopicItem";
import FollowingTopicHeaderItem from "../FollowingTopicHeaderItem";
import keyExtractor from "utils/keyExtractor";
import { FOLLOWING_TOPIC, FOLLOWING_TOPIC_HEADER } from "configs/Data";

export default memo(() => {
  const renderItem = useCallback((item) => {
    return <FollowingTopicItem {...item} />;
  }, []);

  const renderHeaderItem = useCallback(({ item }) => {
    return <FollowingTopicHeaderItem {...item} />;
  }, []);

  const listHeaderComponent = useCallback(() => {
    return (
      <>
        <FlatList
          data={FOLLOWING_TOPIC_HEADER}
          renderItem={renderHeaderItem}
          horizontal
          contentContainerStyle={styles.listHeader}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          scrollEventThrottle={16}
        />
        <Text bold size={17} lineHeight={20} marginBottom={24} marginLeft={24}>
          The Latest
        </Text>
      </>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={FOLLOWING_TOPIC}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  listHeader: {
    paddingLeft: 24,
  },
  list: {},
});
