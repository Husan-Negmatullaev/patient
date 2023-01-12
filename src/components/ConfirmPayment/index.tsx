import React, { Dispatch, memo, SetStateAction } from "react";
import {
  View,
  StyleSheet,
  Image,
  ViewStyle,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import scale from "utils/scale";
import { dataAddition } from "type/healthyQuestion";
import { condition } from "type/condition";
import { width } from "configs/Const";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { ICON } from "images/Icon";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import ContactDoctorItem from "components/ContactDoctorItem";
import { payment } from "type/payment";

interface Props {
  stepCurrent: number;
  stepSum: number;
  iconservice: string;
  priceService: number;
  privceSell?: number;
  doctorInfo?: any;
  payment?: payment;
  onPressCancel?: () => void;
  onPressPromoCode?: () => void;
  onPressCreditCard?: () => void;
  onPressPaypal?: () => void;
  onPressApplePay?: () => void;
  onPressChangeCode?: () => void;
  onPressPaymentAndSend?: () => void;
}

const ConfirmPayment = memo(
  ({
    stepCurrent,
    stepSum,
    iconservice,
    priceService,
    privceSell,
    doctorInfo,
    onPressCancel,
    onPressPromoCode,
    onPressApplePay,
    onPressChangeCode,
    onPressCreditCard,
    onPressPaypal,
    onPressPaymentAndSend,
  }: Props) => {
    return (
      <View style={styles.container}>
        <Text size={13} lineHeight={16} bold>
          Step {stepCurrent} of {stepSum}
        </Text>
        <Text size={24} lineHeight={28} bold marginTop={scale(16)}>
          Confirm Payment
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: scale(32) }}
        >
          {doctorInfo ? (
            <ContactDoctorItem
              style={{ marginTop: scale(16) }}
              {...doctorInfo}
              appointment={false}
              message={false}
              video={false}
              address={false}
              care={true}
            />
          ) : null}
          <View style={styles.frameServicePrice}>
            <View style={{ ...Theme.flexRowSpace }}>
              <View style={{ ...Theme.flexRow }}>
                <Image
                  style={styles.iconService}
                  source={ICON[`${iconservice}`]}
                />
                <Text size={15} lineHeight={18}>
                  Service Price
                </Text>
              </View>
              {privceSell ? (
                <View style={{ ...Theme.flexRow }}>
                  <Text
                    size={15}
                    lineHeight={18}
                    bold
                    textDecorationLine="line-through"
                    color={Colors.GrayBlue}
                  >
                    ${priceService}
                  </Text>
                  <Text size={15} lineHeight={18} bold>
                    {" "}
                    ${privceSell} / visit
                  </Text>
                </View>
              ) : (
                <Text size={15} lineHeight={18} bold>
                  ${priceService} / visit
                </Text>
              )}
            </View>
            {privceSell ? (
              <View style={styles.framePriceSell}>
                <Text size={15} lineHeight={18} bold color={Colors.DodgerBlue}>
                  FIRSTCARE
                </Text>
                <Text size={15} lineHeight={18} bold>
                  {" "}
                  - Saved ${priceService - privceSell}
                </Text>
                <TouchableOpacity activeOpacity={0.6} onPress={onPressCancel}>
                  <Image
                    style={styles.iconCancelSearch}
                    source={ICON.cancelSearch}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            <Text
              marginTop={scale(8)}
              size={11}
              lineHeight={14}
              color={Colors.GrayBlue}
              right
            >
              100% Satisfaction Guarantee
            </Text>
            {privceSell ? null : (
              <TouchableOpacity activeOpacity={0.6} onPress={onPressPromoCode}>
                <Text
                  marginTop={scale(8)}
                  size={13}
                  lineHeight={16}
                  bold
                  color={Colors.DodgerBlue}
                  right
                >
                  Add Promo Code
                </Text>
              </TouchableOpacity>
            )}
            <View style={styles.absoluteBottomLeft}></View>
            <View style={styles.absoluteBottomRight}></View>
          </View>
          <View style={styles.framPay}>
            <View style={styles.absoluteTopLeft}></View>
            <View style={styles.absoluteTopRight}></View>

            <View style={{ ...Theme.flexRowSpace }}>
              <ButtonIcon
                style={styles.creditCard}
                icon={"creditCard"}
                iconStyle={styles.iconStyle}
                onPress={onPressCreditCard}
              />
              <ButtonIcon
                style={styles.pay}
                icon={"payPal"}
                iconStyle={styles.iconStyle}
                onPress={onPressPaypal}
              />
              <ButtonIcon
                style={styles.pay}
                icon={"applePay"}
                iconStyle={styles.iconStyle}
                onPress={onPressApplePay}
              />
            </View>
            <View style={styles.frameText}>
              <Text size={13} lineHeight={22} bold>
                Credit Card
              </Text>
              <Text size={13} lineHeight={22}>
                Paypal
              </Text>
              <Text size={13} lineHeight={22}>
                Apple Pay
              </Text>
            </View>
            <View style={styles.frameCardNumber}>
              <Image style={styles.iconStyle} source={ICON.masterCard} />
              <Text size={17} lineHeight={26}>
                {"xxxx - xxxx - xxxx - 5689"}
              </Text>
              <TouchableOpacity activeOpacity={0.6} onPress={onPressChangeCode}>
                <Text size={13} lineHeight={16} color={Colors.DodgerBlue}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.frameSpaceBottom}>
          <ButtonLinear
            title={"Pay & Send Request"}
            leftChildren={
              <Image source={ICON.securePay} style={styles.buttonChildren} />
            }
            styleButton={styles.buttonLinear}
            onPress={onPressPaymentAndSend}
          />
        </View>
      </View>
    );
  }
);

export default ConfirmPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    padding: 24,
  },
  frameServicePrice: {
    padding: scale(24),
    marginTop: scale(16),
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    backgroundColor: Colors.White,
    borderBottomWidth: scale(1),
    borderColor: Colors.WhiteSmoke,
    ...Theme.shadow,
  },
  framPay: {
    borderBottomLeftRadius: scale(16),
    borderBottomRightRadius: scale(16),
    padding: scale(24),
    backgroundColor: Colors.White,
    marginBottom: getBottomSpace() + scale(75),
    ...Theme.shadow,
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
  framePriceSell: {
    ...Theme.flexRow,
    justifyContent: "flex-end",
    marginTop: scale(8),
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
    borderRadius: scale(20),
    backgroundColor: Colors.DodgerBlue,
    borderWidth: 0,
    shadowColor: "rgba(29, 161, 242, 0.3)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
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
  iconCancelSearch: {
    width: scale(16),
    height: scale(16),
    marginLeft: scale(13),
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
