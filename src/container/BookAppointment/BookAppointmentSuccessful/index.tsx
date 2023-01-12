import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import StatusScreenItem from "components/StatusScreenItem";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "configs";

export default memo(() => {
  const { navigate } = useNavigation();
  return (
    <StatusScreenItem
      img="sentAppointment"
      status="Sent Successful!"
      detail1="You appointment has been sent Dr. Ida Parker."
      detail2="The doctor will response you soon."
    />
  );
});

const styles = StyleSheet.create({
  container: {},
});
