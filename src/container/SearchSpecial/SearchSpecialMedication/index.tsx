import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import TextInput from "elements/TextInput";
import { Colors, Routes } from "configs";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { ICON } from "images/Icon";
import Theme from "style/Theme";
import { width } from "configs/Const";
import changeAlias from "utils/stringAlias";
import { getBottomSpace } from "react-native-iphone-x-helper";
import useModalAnimation from "hooks/useModalAnimation";
import SubtitleItem from "components/Consults/SubtilteItem";
import TopicItem from "components/Search/SearchSpecial/TopicItem";
import ModalAtoZ from "components/ModalAtoZ";
import { ALL_MEDICATION } from "configs/Data";

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [searchKey, setSearchKey] = useState<any>("");
  const [allMedication, setAllMedication] = useState<any>([]);
  const [searchData, setSearchData] = useState<any>([]);
  const [characterSearch, setCharacterSearch] = useState<any>([]);

  const {
    visible: visibleChar,
    open: openChar,
    close: closeChar,
    transY: transYChar,
  } = useModalAnimation();

  const onIconPress = () => {
    setSearchKey("");
  };

  useFocusEffect(
    useCallback(() => {
      let data = [];
      for (let i = 0; i < ALL_MEDICATION.length; i++) {
        if (ALL_MEDICATION[i]) {
          data.push(ALL_MEDICATION[i]);
        }
      }
      setAllMedication(data);
    }, [])
  );

  const onChangeSearchKey = useCallback((text) => {
    setSearchKey(text);
    let data = [];
    for (let i = 0; i < ALL_MEDICATION.length; i++) {
      if (changeAlias(ALL_MEDICATION[i].name).includes(changeAlias(text))) {
        data.push(ALL_MEDICATION[i]);
      }
      setSearchData(data);
    }
  }, []);

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        elevation: 0,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerTitle: () => (
        <TextInput
          editable
          value={searchKey}
          placeholder="Enter condition, symptom..."
          onChangeText={onChangeSearchKey}
          isShowIconLeft
          iconLeft={<Image source={ICON.search} />}
          borderColor={Colors.Isabelline}
          backgroundColor={Colors.Isabelline}
          style={styles.searchLength}
          isShowIcon={searchKey != 0}
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
        />
      ),
    });
  });

  const onAtoZ = useCallback(
    (char) => {
      let data = [];
      for (let i = 0; i < ALL_MEDICATION.length; i++) {
        if (
          changeAlias(ALL_MEDICATION[i].name).startsWith(changeAlias(char), 0)
        ) {
          data.push(ALL_MEDICATION[i]);
        }
      }
      setCharacterSearch(data);
    },
    [characterSearch]
  );

  return (
    <>
      {searchKey == 0 ? (
        <View style={styles.container}>
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            <SubtitleItem
              icon="medication"
              title="All Medications"
              contentContainerStyle={styles.content}
            >
              {allMedication.map((item: any, index: number) => {
                return (
                  <TopicItem
                    key={index}
                    {...item}
                    onPress={() => {
                      navigate(Routes.SearchSpecialMedicationDetail, item);
                    }}
                  />
                );
              })}
            </SubtitleItem>
          </ScrollView>
          <TouchableOpacity
            style={styles.atoz}
            activeOpacity={0.54}
            onPress={openChar}
          >
            <Image source={ICON.atoz} tintColor={Colors.White} />
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.searchView}>
            {searchData.map((item: any, index: number) => {
              return <TopicItem key={index} {...item} />;
            })}
          </View>
        </ScrollView>
      )}
      <Modal visible={visibleChar} onRequestClose={closeChar} transparent>
        <ModalAtoZ
          onClose={closeChar}
          transY={transYChar}
          onPressItem={onAtoZ}
        />
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
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
  searchLength: {
    marginLeft: 16,
    width: width - 108,
  },
  atoz: {
    position: "absolute",
    bottom: getBottomSpace() + 24,
    alignSelf: "center",
    ...Theme.center,
    borderRadius: 12,
    backgroundColor: Colors.PinkOrange,
    width: 56,
    height: 56,
  },
  content: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  searchView: {
    backgroundColor: Colors.White,
    marginHorizontal: 24,
    marginTop: 16,
    borderRadius: 16,
  },
  button: {
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 12,
  },
});
