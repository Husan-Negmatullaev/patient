import { width } from "configs/Const";
import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import Theme from "style/Theme";
import Text from "elements/Text";
import { Colors } from "configs";
import CheckBox from "elements/CheckBox";
import scale from "utils/scale";
import { payment } from "type/payment";
interface AccountPaymentItemProps {
  id?: number;
  logo: ImageSourcePropType;
  name?: string;
  number?: string;
  isCheck?: boolean;
  onPress?: (item: payment) => void;
}

const PaymentItem = memo(
  ({ id, name, number, logo, isCheck, onPress }: AccountPaymentItemProps) => {
    const onPressPayment = React.useCallback(() => {
      if (onPress && logo && name && number) {
        onPress({
          id: id || 0,
          logo: logo,
          name: name,
          number: number,
          isCheck: isCheck || false,
        });
      }
    }, []);

    return (
      <TouchableOpacity
        style={styles.bankAccount}
        onPress={onPressPayment}
        activeOpacity={0.54}
      >
        <CheckBox
          isCheck={isCheck}
          style={{
            width: scale(20),
            height: scale(20),
            borderRadius: scale(20),
            borderWidth: isCheck ? 0 : 1,
            borderColor: "#979797",
          }}
          icon={"radioActive"}
        />
        <Image source={logo} style={styles.logo} />
        <View>
          <View style={Theme.flexDirection}>
            <Text bold size={15} marginBottom={9}>
              {name}
            </Text>
          </View>
          <Text>{number}</Text>
        </View>
      </TouchableOpacity>
    );
  }
);
export default PaymentItem;
const styles = StyleSheet.create({
  bankAccount: {
    borderRadius: 12,
    backgroundColor: Colors.White,
    ...Theme.flexRow,
    padding: scale(16),
    marginTop: scale(24),
  },
  logo: {
    marginLeft: scale(27),
    marginRight: scale(20),
  },
});
