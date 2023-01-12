import React, { memo, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import ScrollableTab from "elements/ScrollableTab";
import { Colors, Routes } from "configs";
import { useNavigation } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import SearchResultAll from "components/SearchResult/SearchResultAll";
import SearchResultAnswers from "components/SearchResult/SearchResultAnswers";
import SearchResultDoctors from "components/SearchResult/SearchResultDoctors";
import SearchResultTips from "components/SearchResult/SearchResultTips";
import SearchResultTopics from "components/SearchResult/SearchResultTopics";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import ButtonText from "elements/Buttons/ButtonText";
import SearchView from "components/Search/SearchView";

interface SearchResultProps {}

const SearchResult = memo(({ route }: any) => {
  const { navigate } = useNavigation();
  const [isSearch, setIsSearch] = useState(false);
  const [searchKey, setSearchKey] = useState<string>(route.params.searchKey);

  const onFocus = () => {
    setIsSearch(true);
  };
  const onBlur = () => {
    setIsSearch(false);
  };

  const onCancel = () => {
    navigate(Routes.SearchStack);
  };

  const onSubmitEditing = () => {};

  const renderHeader = () => {
    return (
      <View style={styles.headerSearch}>
        <View style={styles.textInput}>
          <View style={Theme.flexRow}>
            <Image source={ICON.search} />
            <Text
              color={Colors.GrayBlue}
              size={15}
              lineHeight={18}
              marginLeft={16}
              semiBold
            >
              {searchKey}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.54}
            style={styles.iconCloseStyle}
            onPress={onCancel}
          >
            <Image
              source={ICON.close}
              tintColor={Colors.White}
              style={styles.iconClose}
            />
          </TouchableOpacity>
        </View>
        <ButtonText title="Cancel" onPress={onCancel} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {isSearch ? (
        <SearchView searchKey={searchKey} onCancel={onCancel} />
      ) : (
        <ScrollableTab
          titles={["All", "Answers", "Topics", "Doctors", "Tips"]}
          tabStyle={styles.tabStyle}
          renderHeader={renderHeader}
        >
          <SearchResultAll searchKey={searchKey} />
          <SearchResultAnswers searchKey={searchKey} />
          <SearchResultTopics searchKey={searchKey} />
          <SearchResultDoctors searchKey={searchKey} />
          <SearchResultTips searchKey={searchKey} />
        </ScrollableTab>
      )}
    </View>
  );
});

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  header: {
    ...Theme.flexRowSpace,
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
  },
  tabStyle: {
    backgroundColor: Colors.White,
    paddingBottom: 12,
  },
  headerSearch: {
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight(),
    paddingBottom: 12,
    backgroundColor: Colors.White,
    ...Theme.flexRowSpace,
  },
  textInput: {
    minWidth: 200,
    borderRadius: 8,
    borderColor: Colors.WhiteSmoke,
    borderWidth: 1,
    ...Theme.flexRowSpace,
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: Colors.Isabelline,
  },
  iconClose: {
    width: 9,
    height: 9,
  },
  iconCloseStyle: {
    width: 14,
    height: 14,
    ...Theme.center,
    backgroundColor: Colors.GrayBorder4,
    borderRadius: 30,
  },
});
