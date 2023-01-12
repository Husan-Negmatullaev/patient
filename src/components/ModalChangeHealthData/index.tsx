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
import changeAlias from "utils/stringAlias";
import { ICON } from "images/Icon";

interface ModalChangeHealthDataProps {
  onChange: (item: any) => void;
  healthData: any;
}

const ModalChangeHealthData = memo((props: ModalChangeHealthDataProps) => {
  const [keyword, setKeyword] = useState("");
  const [_healthData, setHealthData] = useState(props.healthData);
  function searchHealthData(text: string) {
    setKeyword(text);
    let data = _healthData;
    if (text === "" || text === null || text === undefined) {
      setHealthData(data);
    } else {
      data = [];
      _healthData.map((item: any) => {
        if (changeAlias(item.name).includes(changeAlias(text))) {
          data.push(item);
        }
      });
      setHealthData(data);
    }
  }
  const renderItem = useCallback(
    ({ item }) => {
      const onPress = () => {
        props.onChange && props.onChange(item);
      };

      return (
        <TouchableOpacity
          style={styles.item}
          onPress={onPress}
          activeOpacity={0.54}
        >
          <Image source={item.img} style={styles.image} />
          <View>
            <Text size={15} lineHeight={18}>
              {item.name}
            </Text>
            <Text
              size={13}
              lineHeight={16}
              color={Colors.GrayBlue}
              marginVertical={8}
            >
              {item.comp}
            </Text>
            <Text size={11} lineHeight={14} color={Colors.GrayBlue}>
              {item.time}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [props.onChange]
  );
  return (
    <View style={styles.container}>
      <TextInput
        iconLeft={<Image source={ICON.search} style={styles.iconSearch} />}
        isShowIconLeft={true}
        value={keyword}
        onChangeText={(text) => searchHealthData(text)}
        backgroundColor={Colors.Isabelline}
        borderColor={Colors.Isabelline}
        placeholder={"Search device, health app name..."}
        editable={true}
      />
      <FlatList
        data={_healthData}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
});

export default ModalChangeHealthData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 24,
    height: scale(493, true),
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: Colors.WhiteSmoke,
    marginRight: 24,
    borderRadius: 16,
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
    paddingHorizontal: 16,
  },
});
