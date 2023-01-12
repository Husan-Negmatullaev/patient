import React, { memo, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import scale from "utils/scale";
import Theme from "style/Theme";
import { Colors } from "configs";
import { TcodeArea } from "type/codeArea";
import changeAlias from "utils/stringAlias";

interface ModalChangePhoneCodeProps {
  onChangeCode: (item: TcodeArea) => void;
  phonesAreaCodes?: any;
}

const ModalChangePhoneCode = memo(
  ({ onChangeCode, phonesAreaCodes }: ModalChangePhoneCodeProps) => {
    const [keyword, setKeyword] = useState("");
    const [dataPhone, setDataPhone] = useState(phonesAreaCodes);
    const renderItem = useCallback(
      ({ item }) => {
        const onPress = () => {
          onChangeCode && onChangeCode(item);
        };
        return (
          <TouchableOpacity style={styles.item} onPress={onPress}>
            <Image source={item.img} style={styles.flag} />
            <Text
              size={15}
              lineHeight={24}
              color={Colors.DarkJungleGreen}
              style={styles.textCode}
            >
              {item.code}
            </Text>
            <Text size={15} lineHeight={24} color={Colors.DarkJungleGreen}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      },
      [onChangeCode]
    );
    function searchPhone(text: string) {
      setKeyword(text);
      let data = phonesAreaCodes;
      if (text === "" || text === null || text === undefined) {
        setDataPhone(phonesAreaCodes);
      } else {
        data = [];
        phonesAreaCodes.map((item: any) => {
          if (
            changeAlias(item.name).includes(changeAlias(text)) ||
            changeAlias(item.code).includes(changeAlias(text))
          ) {
            data.push(item);
          }
        });
        setDataPhone(data);
      }
    }
    return (
      <View style={styles.container}>
        <TextInput
          iconLeft={
            <Image
              source={require("images/Icon/ic_search_normal.png")}
              style={styles.iconSearch}
            />
          }
          isShowIconLeft={true}
          value={keyword}
          onChangeText={(text) => searchPhone(text)}
          backgroundColor={Colors.Isabelline}
          borderColor={Colors.Isabelline}
          placeholder={"Enter country name, code..."}
          editable={true}
        />
        <FlatList
          data={dataPhone}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
);

export default ModalChangePhoneCode;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 24,
    height: scale(493, true),
  },
  iconSearch: {
    width: 20,
    height: 20,
  },
  item: {
    ...Theme.flexRow,
    paddingVertical: 16,
  },
  flag: {
    width: 32,
    height: 20,
    marginRight: 16,
  },
  textCode: {
    width: 76,
  },
  contentContainerStyle: {
    paddingVertical: 18,
  },
});
