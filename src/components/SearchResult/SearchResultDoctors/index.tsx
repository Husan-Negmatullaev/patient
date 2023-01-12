import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { width } from "configs/Const";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { IN_NETWORK } from "configs/Data";
import changeAlias from "utils/stringAlias";
import ContactDoctorItem from "components/ContactDoctorItem";
import { ICON } from "images/Icon";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

interface SearchResultDoctorsProps {
  searchKey: string;
}

const SearchResultDoctors = memo(({ searchKey }: SearchResultDoctorsProps) => {
  const { navigate } = useNavigation();
  const [dataDoctor, setDataDoctor] = useState<any>([]);
  useFocusEffect(
    useCallback(() => {
      let data = [];
      for (let i = 0; i < IN_NETWORK.length; i++) {
        if (changeAlias(IN_NETWORK[i].name).includes(changeAlias(searchKey))) {
          data.push(IN_NETWORK[i]);
        } else if (
          changeAlias(IN_NETWORK[i].faculty).includes(changeAlias(searchKey))
        ) {
          data.push(IN_NETWORK[i]);
        }
        setDataDoctor(data);
      }
    }, [])
  );

  const onDoctor = () => {
    navigate(Routes.DoctorProfile);
  };

  const onFilter = () => {
    navigate(Routes.SearchFilter);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {dataDoctor.map((item: any, index: number) => {
          return (
            <View style={styles.item} key={index}>
              <ContactDoctorItem {...item} onPress={onDoctor} />
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.filter}
        activeOpacity={0.54}
        onPress={onFilter}
      >
        <Image source={ICON.filter} tintColor={Colors.White} />
      </TouchableOpacity>
    </View>
  );
});

export default SearchResultDoctors;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  item: {
    marginBottom: 16,
  },
  filter: {
    position: "absolute",
    bottom: getBottomSpace() + 24,
    alignSelf: "center",
    ...Theme.center,
    borderRadius: 12,
    backgroundColor: Colors.PinkOrange,
    width: 56,
    height: 56,
  },
});
