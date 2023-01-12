import React, { memo, useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import Text from "elements/Text";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import keyExtractor from "utils/keyExtractor";
import { IN_NETWORK } from "configs/Data";
import ContactDoctorItem from "components/ContactDoctorItem";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ICON } from "images/Icon";

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [myCareTeam, setMyCareTeam] = React.useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      setMyCareTeam(IN_NETWORK);
    }, [])
  );

  const handlePressSearch = React.useCallback(() => {}, []);

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
      },
      headerBackground: () => <View style={{ ...Theme.headerBackGround }} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <ButtonIconHeader
          icon={"search"}
          tintColor={Colors.DodgerBlue}
          borderColor={Colors.DodgerBlue}
          marginRight={24}
          onPress={handlePressSearch}
        />
      ),
    });
  }, [setOptions]);

  const handlePressItem = React.useCallback(() => {
    navigate(Routes.DoctorProfile);
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View style={styles.box}>
        <Text center bold size={17} lineHeight={22}>
          Do you want to consult a doctor?
        </Text>
        <ButtonLinear
          leftChildren={<Image source={ICON.search} style={styles.icon} />}
          style={styles.button}
          title={"Find a Doctor"}
        />
      </View>
    );
  }, []);

  const renderItem = React.useCallback(({ item }) => {
    return (
      <ContactDoctorItem
        onPress={handlePressItem}
        style={styles.item}
        verified={true}
        {...item}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text
        marginLeft={24}
        marginTop={24}
        bold
        size={24}
        lineHeight={28}
        marginBottom={8}
      >
        My Care Team
      </Text>
      <FlatList
        data={myCareTeam}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  box: {
    paddingVertical: 32,
    marginHorizontal: 24,
    backgroundColor: Colors.White,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: Colors.boxShadow,
    borderRadius: 16,
  },
  button: {
    marginHorizontal: 63,
    marginTop: 24,
  },
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: getBottomSpace() + 16,
  },
  item: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  icon: {
    tintColor: Colors.White,
    marginRight: 10,
  },
});
