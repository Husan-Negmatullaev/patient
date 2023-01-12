import React, { memo } from "react";
import { View, FlatList, StyleSheet, Modal } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import scale from "utils/scale";
import Colors from "configs/Colors"
import { DATA_SPECIALITY } from "configs/Data";
import SearchBox from "elements/SearchBox";
import changeAlias from "utils/stringAlias";
import AccountItem from "components/AccountItem";
import useModalAnimation from "hooks/useModalAnimation";
import ModalConfirm from "components/OnlineConsult/ModalConfirm";
import { speciality } from "type/speciality";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "configs";
import { useLayoutEffect } from "react";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import keyExtractor from "utils/keyExtractor";

const dataTemp = [
  {
    id: 0,
    data: DATA_SPECIALITY
  },
  {
    id: 1,
    data: DATA_SPECIALITY
  }
]

const SelectSpecial = memo(() => {
  const { navigate, setOptions } = useNavigation();
  const [searchKey, setSearchKey] = React.useState<string>("");
  const [dataSelect, setDataSelect] = React.useState(DATA_SPECIALITY);
  const { visible, open, close, transY } = useModalAnimation();
  const [specialCurrent, setSpecialCurrent] = React.useState<speciality>(DATA_SPECIALITY[0]);
  const [data, setData] = React.useState<any>(dataTemp);
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerBackground: () => <View style={{ ...Theme.headerBackGround }} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);

  function searchCondition(text: string) {
    setSearchKey(text);
    if (text === "" || text === null || text === undefined) {
      setData(dataTemp);
    } else {
      let dataTemp = [];
      dataTemp.push({ id: 0, data: DATA_SPECIALITY });
      let dataEx = [];
      for (let i = 0; i < DATA_SPECIALITY.length; i++) {
        if (changeAlias(DATA_SPECIALITY[i].name).includes(changeAlias(text))) {
          dataEx.push(DATA_SPECIALITY[i]);
        }
      }
      dataTemp.push({ id: 1, data: dataEx })
      setData(dataTemp);
    }
  }
  const openModal = React.useCallback((item: speciality) => {
    setSpecialCurrent(item);
    open();
  }, [dataSelect])
  const gotoPrivateCareDetails = React.useCallback(() => {
    close();
    navigate(Routes.PrivateCareDetails);
  }, []);
  const renderItem = React.useCallback(({ item }) => {
    if (item.id == 0) {
      return (
        <SearchBox
          value={searchKey}
          // @ts-ignore
          onChangeText={searchCondition}
          style={styles.seach}
          placeholder={"Search speciality..."}
          placeholderTextColor={Colors.GrayBlue}
        />
      )
    }
    return (
      item.data.map((account: any) => {
        return <AccountItem
          //route={Routes.AccountFile}
          style={styles.item}
          icon={account.icon}
          name={account.name}
          // @ts-ignore
          onPressSpecial={(item: speciality) => openModal(account)}
          itemSpecial={item} />
      })
    )
  }, [searchKey])
  return (
    <View style={styles.container}>
      <Text
        size={13}
        lineHeight={16}
        bold
        marginTop={scale(16)}
      >
        Step 1 of 3
        </Text>
      <Text
        size={24}
        lineHeight={28}
        bold
        marginTop={scale(16)}
      >
        Select Speciality
        </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
      {
        <Modal
          visible={visible}
          onRequestClose={close}
          transparent
          animationType={"none"}
        >
          <ModalConfirm
            close={close}
            open={open}
            transY={transY}
            specialCurrent={specialCurrent}
            onPress={gotoPrivateCareDetails}
          />
        </Modal>
      }

    </View>
  );
});

export default SelectSpecial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    paddingHorizontal: 24
  },
  frame: {
    paddingTop: scale(24),
    paddingBottom: scale(24)
  },
  item: {
    marginTop: scale(24),
    height: scale(40),
    borderBottomWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
    // borderBottomWidth: 0,
    // paddingHorizontal: 0
  },
  seach: {
    backgroundColor: Colors.Isabelline,
    marginTop: scale(40),
    height: scale(48),
    borderRadius: scale(12),
    borderWidth: 0,
    marginBottom: scale(8)
  }
});
