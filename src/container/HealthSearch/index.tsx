import React, { memo, useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import scale from "utils/scale";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Text from "elements/Text";
import { DATA_CONDITION } from "configs/Data";
import changeAlias from "utils/stringAlias";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import SearchBox from "elements/SearchBox";
import ButtonText from "elements/Buttons/ButtonText";
import keyExtractor from "utils/keyExtractor";

const HealthSearch = memo(({ route }: any) => {
  const { navigate, setOptions, goBack } = useNavigation();
  const [dataCondition, setDataCondition] = useState(DATA_CONDITION);
  const [searchKey, setSearchKey] = React.useState<string>("");
  const [go, setGo] = React.useState<string>(Routes.HealthQuestion);
  const searchCondition = React.useCallback((text: string) => {
    setSearchKey(text);
    if (text === "" || text === null || text === undefined) {
      setDataCondition(DATA_CONDITION);
    } else {
      let data = [];
      for (let i = 0; i < DATA_CONDITION.length; i++) {
        if (changeAlias(DATA_CONDITION[i].name).includes(changeAlias(text))) {
          data.push(DATA_CONDITION[i]);
        }
      }
      setDataCondition(data);
    }
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      if (route && route.params && route.params.route) {
        setGo(route.params.route);
      }
    }, [route.params?.item])
  );
  useLayoutEffect(() => {
    setOptions({
      headerStyle: {
        shadowColor: "transparent",
        backgroundColor: Colors.White,
      },
      header: () => (
        <View style={styles.header}>
          <SearchBox
            value={searchKey}
            // @ts-ignore
            onChangeText={searchCondition}
            autoFocus={true}
            style={Theme.flexOne}
            placeholder={"Search condition..."}
            placeholderTextColor={Colors.GrayBlue}
          />
          <ButtonText
            style={styles.buttonCancel}
            // @ts-ignore
            bold
            titleColor={Colors.DodgerBlue}
            title={"Cancel"}
            onPress={() => goBack()}
          />
        </View>
      ),
    });
  }, [setOptions, searchKey, searchCondition]);

  const handlePressItem = (item: any) => {
    navigate(go, { item });
  };

  const renderItem = ({ item }: any) => {
    const { name } = item;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handlePressItem(item)}
      >
        <Text type="H5" bold>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataCondition}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});
export default HealthSearch;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  textSearch: {
    ...Theme.flexOne,
  },
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: getBottomSpace() + 16,
    paddingHorizontal: 24,
  },
  header: {
    ...Theme.flexRow,
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight() + 24,
    paddingBottom: 12,
  },
  buttonCancel: {
    marginLeft: 24,
  },
  item: {
    paddingVertical: 16,
  },
});
