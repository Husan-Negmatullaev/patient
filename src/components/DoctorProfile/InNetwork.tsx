import React, { memo } from "react";
import { View, StyleSheet, FlatList, Modal } from "react-native";
import keyExtractor from "utils/keyExtractor";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import SearchBox from "elements/SearchBox";
import useModalWithKeyboard from "hooks/useModalWithKeyboard";
import { Colors } from "configs";
import Theme from "style/Theme";
import ContactDoctorItem from "components/ContactDoctorItem";
import ModalInNetworkFilter from "components/ModalInNetworkFilter";

interface InNetworkProps {
  inNetwork: any;
}

const InNetwork = memo(({ inNetwork }: InNetworkProps) => {
  const [searchKey, setSearchKey] = React.useState<string>("");
  const {
    visible: visibleFilter,
    open: openFilter,
    close: closeFilter,
    translateY: translateYFilter,
  } = useModalWithKeyboard(false);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View style={styles.searchView}>
        <SearchBox
          placeholder={"Search question, tip..."}
          value={searchKey}
          onChangeText={setSearchKey}
          style={styles.search}
        />
        <ButtonIconHeader
          onPress={openFilter}
          tintColor={Colors.GrayBlue}
          icon={"filter"}
        />
      </View>
    );
  }, [searchKey, openFilter]);

  const handlePressItem = (item: any) => {};

  const renderItem = React.useCallback(({ item }) => {
    return (
      <ContactDoctorItem
        onPress={() => handlePressItem(item)}
        style={styles.item}
        {...item}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={inNetwork}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        visible={visibleFilter}
        onRequestClose={closeFilter}
        transparent
        animationType={"fade"}
      >
        <ModalInNetworkFilter
          close={closeFilter}
          translateY={translateYFilter}
          handleShowDoctor={closeFilter}
        />
      </Modal>
    </View>
  );
});

export default InNetwork;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
  },
  searchView: {
    ...Theme.flexRow,
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  search: {
    flex: 1,
    marginTop: 0,
    marginRight: 16,
    backgroundColor: Colors.Isabelline,
    borderWidth: 0,
  },
  item: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
});
