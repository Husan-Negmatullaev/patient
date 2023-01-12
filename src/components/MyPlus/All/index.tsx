import React, { memo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { width } from "configs/Const";
import keyExtractor from "utils/keyExtractor";
import { Colors, Routes } from "configs";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import SavedGuideItem from "components/SavedGuideItem";

interface Props {
  data?: any;
}

export default memo(({ data }: Props) => {
  const { navigate } = useNavigation();
  const onHealthGuideItem = React.useCallback((item: any) => {
    navigate(Routes.HealthGuideDetail, item);
  }, []);

  const renderHealthGuideItem = React.useCallback(({ item }) => {
    return <SavedGuideItem onPress={() => onHealthGuideItem(item)} {...item} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderHealthGuideItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: Colors.Snow,
  },
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: getBottomSpace(),
  },
});
