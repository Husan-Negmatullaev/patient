import React, { memo, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import Text from "elements/Text";
import { useNavigation } from "@react-navigation/native";
import { Colors, Routes } from "configs";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import ConfirmPayment from "components/ConfirmPayment";
import { DOCTOR_PROFILE } from "configs/Data";

interface BookAppointmentPaymentProps {}

const BookAppointmentPayment = memo(({}: BookAppointmentPaymentProps) => {
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
    navigate(Routes.BookAppointmentSuccessful);
  };

  return (
    <View style={styles.container}>
      <ConfirmPayment
        stepCurrent={3}
        stepSum={3}
        iconservice="appointmentActive"
        priceService={45}
        doctorInfo={DOCTOR_PROFILE}
        onPressPaymentAndSend={onPressPaymentAndSend}
      />
    </View>
  );
});

export default BookAppointmentPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
});
