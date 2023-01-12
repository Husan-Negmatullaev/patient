import React, { memo } from "react";
import { StyleSheet } from "react-native";
import StatusScreenItem from "components/StatusScreenItem";
import { useNavigation } from "@react-navigation/native";

export default memo(() => {
  return (
    <StatusScreenItem
      img="sentMessage"
      status="Sent Successful!"
      detail1="Your messeage sent successful."
      detail2="We will inform to you when doctor answered."
    />
  );
});
