import React, { memo, useState, useCallback } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import scale from "utils/scale";
import { Colors, Routes } from "configs";
import TextInput from "elements/TextInput";
import TagItem from "components/FollowTopic/TagItem";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import changeAlias from "utils/stringAlias";
import FilterOptions from "./components/FilterOptions";
import { categoryInFollowTopic } from "configs/Data";
import { ICON } from "images/Icon";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useLayoutEffect } from "react";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";

interface FollowTopicProps { }

const select = [categoryInFollowTopic[2]];

const FollowTopic = memo((props: FollowTopicProps) => {
  const [keyword, setKeyword] = useState("");
  const [dataCategory, setDataCategory] = useState(categoryInFollowTopic);
  const { navigate, setOptions } = useNavigation();
  const onSendVerifyRequest = useCallback(() => {
    navigate(Routes.SentVerifySuccessful);
  }, [navigate]);
  function searchCategory(text: string) {
    setKeyword(text);
    let data = categoryInFollowTopic;
    if (text === "" || text === null || text === undefined) {
      setDataCategory(categoryInFollowTopic);
    } else {
      data = [];
      for (let i = 0; i < categoryInFollowTopic.length; i++) {
        if (
          changeAlias(categoryInFollowTopic[i].title).includes(
            changeAlias(text)
          )
        ) {
          data.push(categoryInFollowTopic[i]);
        }
      }
      setDataCategory(data);
    }
  }
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerBackground: () => <View style={{ ...Theme.headerBackGround, backgroundColor: Colors.White }} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);
  const [selected, setSelected] = useState<
    {
      title: string;
      id: number;
    }[]
  >(select);
  const onPressStatus = useCallback((item: { title: string; id: number }) => {
    setSelected((prev) => {
      const findIndex = prev.findIndex((i) => i.id == item.id);
      if (findIndex >= 0) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  }, []);
  const onDeleteSelected = useCallback(
    (item: { title: string; id: number }) => {
      setSelected((prev) => {
        return prev.filter((i) => i.id !== item.id);
      });
    },
    []
  );
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          size={scale(13)}
          lineHeight={scale(16)}
          bold
          marginTop={scale(32)}
        >
          Step 3 of 3
        </Text>
        <Text
          size={scale(24)}
          lineHeight={scale(28)}
          bold
          marginTop={scale(16)}
        >
          Follow Topic
        </Text>
        <Text
          size={scale(13)}
          lineHeight={scale(22)}
          marginTop={scale(16)}
          marginBottom={scale(24)}
        >
          Following a Topic allows you to stay informed on what's happening…
        </Text>
        <TextInput
          iconLeft={
            <Image
              source={require("images/Icon/ic_search_normal.png")}
              style={styles.iconSearch}
            />
          }
          isShowIconLeft={true}
          value={keyword}
          onChangeText={(text) => searchCategory(text)}
          backgroundColor={Colors.Isabelline}
          borderColor={Colors.Isabelline}
          placeholder={"Enter health keyword..."}
          editable={true}
        />
        <View style={styles.spec}>
          {selected.map((i, index) => (
            <TagItem
              title={i.title}
              id={i.id}
              key={index.toString()}
              onPress={onDeleteSelected}
            />
          ))}
        </View>
        <FilterOptions
          options={dataCategory}
          chooseId={selected}
          onPressItem={onPressStatus}
        />

      </ScrollView>
      <ButtonLinear
        title={"I'm Done!"}
        leftChildren={
          <Image source={ICON.checkMark} style={styles.buttonChildren} />
        }
        onPress={onSendVerifyRequest}
        style={{ marginTop: scale(12), marginBottom: getBottomSpace() + scale(12) }}
      />
    </View>
  );
});

export default FollowTopic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 24
  },
  phoneView: {
    ...Theme.flexRow,
    marginTop: 4,
  },
  phoneNumber: {
    marginLeft: 8,
    flex: 1,
  },
  iconSearch: {
    ...Theme.icons,
    tintColor: Colors.DodgerBlue,
  },
  spec: {
    marginTop: 16,
    ...Theme.flexRow,
    flexWrap: "wrap",
    paddingBottom: 0,
  },
  specLanguage: {
    marginTop: 8,
    ...Theme.flexRow,
    flexWrap: "wrap",
    paddingBottom: 52,
  },
  insurancePlans: {
    backgroundColor: Colors.White,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Isabelline,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 4,
  },
  buttonChildren: {
    ...Theme.icons,
    marginRight: 8,
  },
  buttonAdd: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: Colors.Platinum,
    height: 36,
    ...Theme.center,
    borderRadius: 8,
    ...Theme.flexDirection,
  },
  iconRight: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  bottomContent: {
    paddingTop: 32,
    borderTopColor: Colors.TealBlue,
    borderTopWidth: 1,
    marginTop: 32,
  },
});
