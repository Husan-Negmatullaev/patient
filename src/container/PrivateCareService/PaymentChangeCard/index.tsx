import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors, Routes } from "configs";
import { height } from "configs/Const";
import { ICON } from "images/Icon";
import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import Text from "elements/Text";
import keyExtractor from "utils/keyExtractor";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { IMAGE } from "images/Image";
import PaymentItem from "components/PrivateCareService/PaymentItem";
import scale from "utils/scale";
import { payment } from "type/payment";

const PAYMENT: Array<payment> = [
  {
    id: 0,
    logo: ICON.masterCard,
    name: "Master Card",
    number: "xxxx - xxxx - xxxx - 5689",
    isCheck: false,
  },
  {
    id: 1,
    logo: ICON.payPal,
    name: "PayPal",
    number: "xxxx - xxxx - xxxx - 8973",
    isCheck: false,
  },
  {
    id: 2,
    logo: ICON.amex,
    name: "American Express",
    number: "xxxx - xxxx - xxxx - 8973",
    isCheck: false,
  },
];

const PaymentChangeCard = (({ route }: any) => {
  const { setOptions, navigate } = useNavigation();
  const [dataPayment, setDataPayment] = useState<Array<payment>>(PAYMENT);
  const [payment, setPayment] = useState<payment>(PAYMENT[0])
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
          icon={"plus"}
          tintColor={Colors.DodgerBlue}
          borderColor={Colors.DodgerBlue}
          marginRight={24}
          onPress={onAddPayment}
        />
      ),
    });
  }, [setOptions]);

  useFocusEffect(
    React.useCallback(() => {
      setPayment(dataPayment[0]);
      let data: Array<payment> = []
      dataPayment.map((item) => {
        if (item.id == route.params.id) {
          item.isCheck = true;
        } else {
          item.isCheck = false;
        }
        data.push(item);
      })
      if (route.params.payment) {
        let paymentAdd: payment = {
          id: dataPayment.length,
          logo: ICON.masterCard,
          name: route.params.payment.name,
          number: route.params.payment.number,
          isCheck: false,
        };
        data.push(paymentAdd);
      }
      setDataPayment(data);
    }, [route.params.id, route.params.payment])
  );

  const onAddPayment = () => {
    navigate(Routes.PaymentAddCard)
  };

  const onPressPayment = useCallback((item: payment) => {
    setPayment(item);
    let params = { payment: item };
    navigate(Routes.PrivateCarePayment, params)
  }, [])

  const renderPayment = useCallback(
    ({ item }) => {
      return (
        <PaymentItem
          onPress={onPressPayment}
          {...item}
        />
      );
    },
    []
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
  }, []);
  return (
    <View style={styles.container}>
      <Text marginTop={24} marginHorizontal={24} size={24}>
        Credit Card
      </Text>
      <FlatList
        data={dataPayment}
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
export default PaymentChangeCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    height: height,
  },
  list: {
    paddingTop: scale(16),
    paddingBottom: scale(40),
    paddingLeft: scale(23),
    paddingRight: scale(23)
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
