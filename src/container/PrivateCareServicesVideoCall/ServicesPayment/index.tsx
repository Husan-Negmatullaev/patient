import React, { memo, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors, Routes } from "configs";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import ConfirmPayment from "components/ConfirmPayment";
import { DOCTOR_PROFILE } from "configs/Data";

const getType = (type: string) => {
  switch (type) {
    case "typeLiveChat":
      return {
        icon: "typeLiveChat",
        img: "chatSuccessful",
        status: "Sent Successful!",
        thank: "Thanks for your request. .",
        notify: "Dr. Margaret Wells will contact you soon. ",
        step: 2,
        stepSum: 2,
      };
    case "typeVoiceCall":
      return {
        icon: "typeVoice",
        img: "",
        status: "",
        thank: "",
        notify: "",
        step: 3,
        stepSum: 3,
      };
    case "typeVideoCall":
      return {
        icon: "typeVideo",
        img: "videoSuccessful",
        status: "Sent Successful!",
        thank: "Thanks for your request. .",
        notify: "Dr. Margaret Wells will call you soon. ",
        step: 2,
        stepSum: 2,
      };
    default:
      return {
        icon: "",
        img: "",
        status: "",
        thank: "",
        notify: "",
        step: 0,
        stepSum: 0,
      };
  }
};

const ServicesPayment = memo(({ route }: any) => {
  const { type } = route.params;
  const { icon, img, status, thank, notify, step, stepSum } = getType(type);
  const { setOptions, navigate } = useNavigation();
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        backgroundColor: Colors.Snow,
        shadowColor: "transparent",
        elevation: 0,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
    });
  });

  const onPressPaymentAndSend = () => {
    navigate(Routes.ServiceSentSuccessful, {
      img: img,
      status: status,
      thank: thank,
      notify: notify,
    });
  };

  return (
    <View style={styles.container}>
      <ConfirmPayment
        stepCurrent={step}
        stepSum={stepSum}
        iconservice={icon}
        priceService={45}
        doctorInfo={DOCTOR_PROFILE}
        onPressPaymentAndSend={onPressPaymentAndSend}
      />
    </View>
  );
});

export default ServicesPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.Snow,
  },
});
