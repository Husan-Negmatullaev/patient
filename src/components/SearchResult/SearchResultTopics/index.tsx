import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Text from "elements/Text";
import { width } from "configs/Const";
import { useFocusEffect } from "@react-navigation/native";
import { FOLLOWING_TOPIC } from "configs/Data";
import changeAlias from "utils/stringAlias";
import Theme from "style/Theme";
import { Colors } from "configs";

interface SearchResultTopicsProps {
  searchKey: string;
}

const SearchResultTopics = memo(({ searchKey }: SearchResultTopicsProps) => {
  const [dataTopic, setDataTopic] = useState<any>([]);
  useFocusEffect(
    useCallback(() => {
      let data = [];
      for (let i = 0; i < FOLLOWING_TOPIC.length; i++) {
        if (
          changeAlias(FOLLOWING_TOPIC[i].topic).includes(changeAlias(searchKey))
        ) {
          data.push(FOLLOWING_TOPIC[i]);
        }
        setDataTopic(data);
      }
    }, [])
  );
  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    >
      {dataTopic.map((item: any, index: number) => {
        const { img, doctor, detail, topic } = item;
        const { avatar, name, faculty } = doctor;
        return (
          <View key={index} style={styles.item}>
            <View style={styles.borderBottom}>
              <ImageBackground style={styles.image} source={img}>
                <Text
                  semiBold
                  size={17}
                  lineHeight={25}
                  marginLeft={16}
                  marginBottom={16}
                  color={Colors.White}
                >
                  {topic}
                </Text>
              </ImageBackground>
              <View style={styles.doctor}>
                <Image source={avatar} />
                <View>
                  <Text
                    bold
                    size={15}
                    lineHeight={18}
                    color={Colors.DodgerBlue}
                    marginLeft={16}
                    marginBottom={4}
                  >
                    Dr . {name}
                  </Text>
                  <Text size={13} lineHeight={16} marginLeft={16}>
                    {faculty}
                  </Text>
                </View>
              </View>
            </View>
            <Text
              size={13}
              lineHeight={22}
              marginHorizontal={24}
              marginVertical={16}
            >
              {detail}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
});

export default SearchResultTopics;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  item: {
    overflow: "hidden",
    borderRadius: 12,
    paddingBottom: 16,
    backgroundColor: Colors.White,
    marginBottom: 16,
  },
  image: {
    width: width,
    height: 176,
    justifyContent: "flex-end",
  },
  borderBottom: {
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
  },
  doctor: {
    ...Theme.flexRow,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
