import React, { memo, useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Modal } from "react-native";
import Text from "elements/Text";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import keyExtractor from "utils/keyExtractor";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FAMILY_RECORD } from "configs/Data";
import FamilyItem from "components/MyPlus/FamilyItem";
import ModalSlideBottom from "components/ModalSlideBottom";
import useModalAnimation from "hooks/useModalAnimation";
import ModalAddSomeone from "components/ModalAddSomeone";

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [familyRecord, setFamilyRecord] = React.useState<any>([]);
  const { visible, open, close, transY } = useModalAnimation();

  useFocusEffect(
    React.useCallback(() => {
      setFamilyRecord(FAMILY_RECORD);
    }, [])
  );

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
          icon={"addPatient"}
          tintColor={Colors.DodgerBlue}
          borderColor={Colors.DodgerBlue}
          marginRight={24}
          onPress={open}
        />
      ),
    });
  }, [setOptions]);

  const handlePressItem = React.useCallback(() => {
    navigate(Routes.FamilyDetail);
  }, []);

  const renderItem = React.useCallback(({ item }) => {
    return (
      <FamilyItem onPress={handlePressItem} {...item} style={styles.item} />
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
        Family Medical Records
      </Text>
      <FlatList
        data={familyRecord}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Modal
        visible={visible}
        onRequestClose={close}
        transparent
        animationType={"none"}
      >
        <ModalSlideBottom onClose={close} transY={transY}>
          <ModalAddSomeone addSomeone={() => {}} close={close} open={open} />
        </ModalSlideBottom>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: getBottomSpace() + 16,
  },
  item: {
    marginHorizontal: 24,
    marginTop: 16,
  },
});
2;
