import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors } from "configs";
import { height } from "configs/Const";
import { ICON } from "images/Icon";
import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import Text from "elements/Text";
import keyExtractor from "utils/keyExtractor";
import AccountPaymentItem from "components/Setting/AccountPaymentItem";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { IMAGE } from "images/Image";

const Payment = [
  {
    id: 0,
    logo: ICON.masterCard,
    name: "Master Card",
    number: "xxxx - xxxx - xxxx - 5689",
  },
  {
    id: 1,
    logo: ICON.payPal,
    name: "PayPal",
    number: "xxxx - xxxx - xxxx - 8973",
  },
  {
    id: 2,
    logo: ICON.amex,
    name: "American Express",
    number: "xxxx - xxxx - xxxx - 8973",
  },
];

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [payment, setPayment] = useState<any>([]);
  const [defaultId, setDefaultId] = useState<number>(0);

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.Snow,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <ButtonIconHeader
          icon="plus"
          tintColor={Colors.DodgerBlue}
          borderColor={Colors.DodgerBlue}
          marginRight={24}
          onPress={onAddPayment}
        />
      ),
    });
  }, [setOptions]);

  useFocusEffect(
    useCallback(() => {
      setPayment(Payment);
    }, [])
  );

  const onAddPayment = () => {};

  const renderPayment = useCallback(
    ({ item }) => {
      return (
        <AccountPaymentItem
          onDefault={() => {
            setDefaultId(item.id);
          }}
          {...item}
          isDefault={item.id === defaultId}
        />
      );
    },
    [defaultId]
  );

  const renderEmpty = useCallback(() => {
    return (
      <View style={styles.content}>
        <Image style={styles.image} source={IMAGE.noCard} />
        <Text center size={17} bold marginTop={56} marginBottom={16}>
          No card attached yet!
        </Text>
        <Text center marginBottom={32}>
          Please, attach your card to pay for your consult. Thanks!
        </Text>
        <ButtonLinear title="" onPress={onAddPayment}>
          <Image style={styles.buttonImage} source={ICON.payment} />
          <Text bold size={15} color={Colors.White}>
            Add New Credit Card
          </Text>
        </ButtonLinear>
      </View>
    );
  }, [payment]);
  return (
    <View style={styles.container}>
      <Text marginTop={24} marginHorizontal={24} size={24}>
        Payment Methods
      </Text>
      <FlatList
        data={payment}
        renderItem={renderPayment}
        ListEmptyComponent={renderEmpty}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    height: height,
  },
  list: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  image: {
    width: 160,
    height: 160,
    alignSelf: "center",
  },
  buttonImage: {
    justifyContent: "center",
    alignSelf: "center",
    marginRight: 10,
  },
  content: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 50,
    alignContent: "center",
    marginTop: 96,
  },
});
