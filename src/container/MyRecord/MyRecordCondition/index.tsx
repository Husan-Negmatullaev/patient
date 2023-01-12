import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import Text from "elements/Text";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import keyExtractor from "utils/keyExtractor";
import { height } from "configs/Const";
import { IMAGE } from "images/Image";
import MyRecordConditionItem from "components/MyRecord/MyRecordConditionItem";
import {
  CURRENT_MY_RECORD_CONDITION,
  PAST_MY_RECORD_CONDITION,
} from "configs/Data";

export default memo(() => {
  const [current, setCurrent] = useState<any>([]);
  const [past, setPast] = useState<any>([]);
  const { setOptions } = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setCurrent(CURRENT_MY_RECORD_CONDITION);
      setPast(PAST_MY_RECORD_CONDITION);
    }, [])
  );

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.Snow,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);

  const renderItem = useCallback(({ item }) => {
    return <MyRecordConditionItem {...item} />;
  }, []);

  const listHeaderComponent = () => {
    return (
      <View>
        <View style={Theme.flexRowSpace}>
          <Text bold size={17} lineHeight={20}>
            Current
          </Text>
          <TouchableOpacity style={Theme.flexRow} activeOpacity={0.54}>
            <Text
              size={13}
              lineHeight={22}
              bold
              color={Colors.DodgerBlue}
              marginRight={6}
            >
              Add New
            </Text>
            <Image style={styles.icon16} source={ICON.plus} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 24, paddingBottom: 40 }}>
          {CURRENT_MY_RECORD_CONDITION.map((item, index) => {
            return <MyRecordConditionItem key={index} {...item} />;
          })}
        </View>
        <View style={Theme.flexRowSpace}>
          <Text bold size={17} lineHeight={20}>
            Past
          </Text>
          <TouchableOpacity style={Theme.flexRow} activeOpacity={0.54}>
            <Text
              size={13}
              lineHeight={22}
              bold
              color={Colors.DodgerBlue}
              marginRight={6}
            >
              Add New
            </Text>
            <Image style={{ width: 16, height: 16 }} source={ICON.plus} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.emptyComponent}>
        <Image source={IMAGE.noPast} />
        <Text marginTop={16} size={13} lineHeight={16} color={Colors.GrayBlue}>
          No conditions & symptoms
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        marginLeft={24}
        marginTop={24}
        marginBottom={16}
        bold
        size={24}
        lineHeight={28}
      >
        Conditions & Symptoms
      </Text>
      <FlatList
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        data={past}
        keyExtractor={keyExtractor}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    height: height,
  },
  content: {
    backgroundColor: Colors.White,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  emptyComponent: {
    ...Theme.center,
    height: 200,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  icon16: {
    width: 16,
    height: 16,
  },
});
