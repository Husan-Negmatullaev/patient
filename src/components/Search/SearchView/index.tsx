import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { Colors, Routes } from "configs";
import { width } from "configs/Const";
import ButtonText from "elements/Buttons/ButtonText";
import { ICON } from "images/Icon";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import changeAlias from "utils/stringAlias";
import { useNavigation } from "@react-navigation/native";
import {
  DATA_CONDITION_SEARCH,
  DATA_DOCTOR,
  DATA_SPECIALITIES,
  SEARCH_HISTORY_DATA,
} from "configs/Data";

interface SearchViewProps {
  searchKey?: string;
  onCancel?: () => void;
}

const SearchView = memo(
  ({ onCancel, searchKey, ...props }: SearchViewProps) => {
    const { navigate } = useNavigation();
    const [_searchKey, setSearchKey] = useState<any>(
      searchKey ? searchKey : ""
    );
    const [recentSearch, setRecentSearch] = useState(SEARCH_HISTORY_DATA);
    const [dataSpecialities, setDataSpecialities] = useState<any>([]);
    const [dataCondition, setDataCondition] = useState<any>([]);
    const [dataDoctor, setDataDoctor] = useState<any>([]);

    const onChangeSearchKey = useCallback((text) => {
      setSearchKey(text);
      let _dataSpecialities = [];
      let _dataCondition = [];
      let _dataDoctor = [];
      for (let i = 0; i < DATA_SPECIALITIES.length; i++) {
        if (
          changeAlias(DATA_SPECIALITIES[i].name).includes(changeAlias(text))
        ) {
          _dataSpecialities.push(DATA_SPECIALITIES[i]);
        }
        setDataSpecialities(_dataSpecialities);
      }
      for (let i = 0; i < DATA_CONDITION_SEARCH.length; i++) {
        if (
          changeAlias(DATA_CONDITION_SEARCH[i].name).includes(changeAlias(text))
        ) {
          _dataCondition.push(DATA_CONDITION_SEARCH[i]);
        }
        setDataCondition(_dataCondition);
      }
      for (let i = 0; i < DATA_DOCTOR.length; i++) {
        if (
          changeAlias(DATA_DOCTOR[i].doctor.name).includes(changeAlias(text))
        ) {
          _dataDoctor.push(DATA_DOCTOR[i]);
        }
        setDataDoctor(_dataDoctor);
      }
    }, []);

    const onClearHistory = () => {
      setRecentSearch([]);
    };
    const onIconPress = () => {
      setSearchKey("");
    };

    const _onSubmitEditing = useCallback(() => {
      if (_searchKey.length != 0) {
        onCancel;
        navigate(Routes.SearchResult, { searchKey: _searchKey });
      } else {
        onCancel;
      }
    }, [_searchKey]);

    return (
      <View style={styles.container}>
        <View style={styles.headerSearch}>
          <TextInput
            value={_searchKey}
            placeholder="Search health issue, doctor ..."
            onChangeText={onChangeSearchKey}
            borderColor={Colors.DodgerBlue}
            editable
            isShowIconLeft
            iconLeft={<Image source={ICON.search} />}
            style={styles.textInputFocus}
            isShowIcon={_searchKey.length != 0}
            icon={
              <TouchableOpacity
                activeOpacity={0.54}
                style={styles.iconCloseStyle}
                onPress={onIconPress}
              >
                <Image
                  source={ICON.close}
                  tintColor={Colors.White}
                  style={styles.iconClose}
                />
              </TouchableOpacity>
            }
            iconPress={onIconPress}
            autoFocus
            onSubmitEditing={_onSubmitEditing}
            {...props}
          />
          <ButtonText
            style={styles.buttonText}
            title="Cancel"
            onPress={onCancel}
          />
        </View>
        <View>
          {_searchKey.length == 0 ? (
            <>
              <View style={styles.recentSearch}>
                <Text bold size={13} lineHeight={16}>
                  Recent Searches
                </Text>
                <ButtonText
                  borderColor={Colors.Snow}
                  title="Clear search history"
                  style={styles.buttonText}
                  onPress={onClearHistory}
                />
              </View>
              <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
              >
                {recentSearch.map((item, index) => {
                  const onPress = () => {
                    navigate(Routes.SearchResult, { searchKey: item.key });
                  };
                  return (
                    <TouchableOpacity
                      activeOpacity={0.54}
                      key={index}
                      style={styles.history}
                      onPress={onPress}
                    >
                      <View style={styles.historyIcon}>
                        <Image source={ICON.history} />
                      </View>
                      <Text size={15} lineHeight={18} marginLeft={16}>
                        {item.key}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </>
          ) : (
            <ScrollView
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.searchData}
            >
              {dataSpecialities.length != 0 ? (
                <>
                  <Text bold size={17} lineHeight={20} marginBottom={24}>
                    Specialities
                  </Text>
                  {dataSpecialities.map((item: any, index: number) => {
                    return (
                      <TouchableOpacity key={index} activeOpacity={0.54}>
                        <Text marginBottom={24} size={15} lineHeight={18}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </>
              ) : (
                <View />
              )}
              {dataCondition.length != 0 ? (
                <>
                  <Text bold size={17} lineHeight={20} marginVertical={24}>
                    Conditions & Symtoms
                  </Text>
                  {dataCondition.map((item: any, index: number) => {
                    return (
                      <TouchableOpacity key={index} activeOpacity={0.54}>
                        <Text marginBottom={24} size={15} lineHeight={18}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </>
              ) : (
                <View />
              )}
              {dataDoctor.length != 0 ? (
                <>
                  <Text bold size={17} lineHeight={20} marginVertical={24}>
                    Doctors
                  </Text>
                  {dataDoctor.map((item: any, index: number) => {
                    return (
                      <TouchableOpacity key={index} activeOpacity={0.54}>
                        <Text marginBottom={24} size={15} lineHeight={18}>
                          {item.doctor.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </>
              ) : (
                <View />
              )}
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
);

export default SearchView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSearch: {
    ...Theme.flexRowSpace,
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight(),
    paddingBottom: 12,
    backgroundColor: Colors.White,
  },
  textInputFocus: {
    maxWidth: 263,
  },
  buttonText: {
    borderWidth: 0,
  },
  historyIcon: {
    ...Theme.center,
    width: 40,
    height: 40,
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 12,
  },
  history: {
    ...Theme.flexRow,
    paddingHorizontal: 16,
    paddingBottom: 24,
    width: width,
  },
  recentSearch: {
    ...Theme.flexRowSpace,
    paddingHorizontal: 24,
    marginBottom: 32,
    marginTop: 32,
  },
  searchData: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: getBottomSpace() + 120,
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
