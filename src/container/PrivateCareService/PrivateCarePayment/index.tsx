import React, { memo } from "react";
import { View, StyleSheet, Modal } from "react-native";
import Theme from "style/Theme";
import scale from "utils/scale";
import Colors from "configs/Colors";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { width } from "configs/Const";
import ConfirmPayment from "components/ConfirmPayment";
import useModalAnimation from "hooks/useModalAnimation";
import DialogInputCode from "components/DialogInputCode";
import { Routes } from "configs";
import { payment } from "type/payment";
import { DOCTOR_PROFILE } from "configs/Data";

const PrivateCarePayment = memo(({ route }: any) => {
  const { navigate, setOptions } = useNavigation();
  const { visible, open, close, transY } = useModalAnimation();
  const [code, setCode] = React.useState<string>("");
  const [icon, setIcon] = React.useState<string>("typeLiveChat");
  const [payment, setPayment] = React.useState<payment>();
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerBackground: () => <View style={{ ...Theme.headerBackGround }} />,
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  }, [setOptions]);
  useFocusEffect(
    React.useCallback(() => {
      if (route && route.params) {
        if (route.params.type) {
          setIcon(route.params.type);
        }
        if (route.params.payment) {
          setPayment(route.params.payment);
        }
      }
    }, [route.params.type, route.params.payment])
  );
  const onPressPromoCode = React.useCallback(() => {
    open();
  }, []);
  const onPressChangeCode = React.useCallback(() => {
    navigate(Routes.PaymentChangeCard, { id: payment?.id || 0 });
  }, [payment]);
  const onPressPayRequest = React.useCallback(() => {
    navigate(Routes.PaymentSuccessful);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ConfirmPayment
        stepCurrent={3}
        stepSum={3}
        privceSell={code ? 30 : 0}
        iconservice={icon}
        payment={payment}
        priceService={45}
        onPressPromoCode={onPressPromoCode}
        onPressChangeCode={onPressChangeCode}
        onPressPaymentAndSend={onPressPayRequest}
        doctorInfo={DOCTOR_PROFILE}
      />
      {
        <Modal
          visible={visible}
          onRequestClose={close}
          transparent
          animationType={"none"}
        >
          <DialogInputCode
            close={close}
            open={open}
            transY={transY}
            header={"Enter promo code"}
            onPress={(code) => setCode(code)}
          />
        </Modal>
      }
    </View>
  );
});

export default PrivateCarePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    padding: 24,
  },
  frameServicePrice: {
    padding: scale(24),
    marginTop: scale(40),
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    backgroundColor: Colors.White,
    borderBottomWidth: scale(1),
    borderColor: Colors.WhiteSmoke,
  },
  frameText: {
    ...Theme.flexRowSpace,
    marginTop: scale(16),
  },
  frameCardNumber: {
    ...Theme.flexRowSpace,
    marginTop: scale(26),
  },
  frameSpaceBottom: {
    ...Theme.center,
    position: "absolute",
    bottom: 0,
    width: width,
    paddingTop: scale(8),
    paddingBottom: getBottomSpace() + scale(16),
    backgroundColor: Colors.WhiteSpaceBottom,
  },
  buttonChildren: {
    ...Theme.icons,
    marginRight: scale(8),
  },
  buttonLinear: {
    width: scale(327),
    height: scale(50),
  },
  creditCard: {
    alignItems: "center",
    width: scale(72),
    height: scale(72),
    borderRadius: scale(22),
    backgroundColor: Colors.DodgerBlue,
    borderWidth: 0,
  },
  pay: {
    alignItems: "center",
    width: scale(71),
    height: scale(71),
    borderRadius: scale(22),
    borderColor: Colors.Platinum,
    backgroundColor: Colors.White,
    borderWidth: scale(1),
  },
  iconService: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(12),
  },
  iconStyle: {
    width: scale(32),
    height: scale(32),
  },
  absoluteBottomLeft: {
    width: scale(16),
    height: scale(16),
    borderRadius: scale(16),
    position: "absolute",
    bottom: -8,
    left: -8,
    backgroundColor: Colors.Snow,
  },
  absoluteBottomRight: {
    width: scale(16),
    height: scale(16),
    borderRadius: scale(16),
    position: "absolute",
    bottom: -8,
    right: -8,
    backgroundColor: Colors.Snow,
  },
  absoluteTopLeft: {
    width: scale(16),
    height: scale(16),
    borderRadius: scale(16),
    position: "absolute",
    top: -8,
    left: -8,
    backgroundColor: Colors.Snow,
  },
  absoluteTopRight: {
    width: scale(16),
    height: scale(16),
    borderRadius: scale(16),
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: Colors.Snow,
  },
});
