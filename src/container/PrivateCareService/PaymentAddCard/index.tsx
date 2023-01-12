import { ThemeProvider, useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors, Routes } from "configs";
import { height, width } from "configs/Const";
import { ICON } from "images/Icon";
import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, TextInput, Image } from "react-native";
import scale from "utils/scale";
import { IMAGE } from "images/Image";
import Text from "elements/Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "style/Theme";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import useKeyboard from "hooks/useKeyboard";
import { getBottomSpace } from "react-native-iphone-x-helper";

const ArrayNumber = [
  "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"
]

const PaymentAddCard = memo(({ route }: any) => {
  const { setOptions, navigate } = useNavigation();
  const [cardName, setCardName] = useState<string>()
  const [owner, setOwner] = useState<string>();
  const [isShowKeyboard, setIsShowKeyboard] = useState<boolean>(false);
  const [cardNumberArray, setCardNumberArray] = useState<Array<string>>(ArrayNumber);
  const [cardNumber, setCardNumber] = useState<string>();
  const [date, setDate] = useState<string>();
  const [cvv, setCvv] = useState<string>();
  const [isShowCVV, setIsShowCVV] = useState<boolean>(false);
  const { keyboardHeight } = useKeyboard();
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
      headerLeft: () => <ButtonIconHeader
        icon={"close"}
        marginLeft={24}
      />
    });
  }, [setOptions]);
  const onSetCardNumber = useCallback((text: string) => {
    let cardTemp: string = "";
    let cardArrayTemp: Array<string> = [];
    let i;
    for (i = 0; i < text.length; i++) {
      if (text[i] == " ") {
        i++;
        cardTemp = cardTemp.concat(" ");
        cardArrayTemp.push("-");
        cardTemp = cardTemp.concat(text[i]);
        cardArrayTemp.push(text[i]);
      } else {
        if (i == 4 || i == 9 || i == 14) {
          cardTemp = cardTemp.concat(" ");
          cardArrayTemp.push("-");
        }
        cardTemp = cardTemp.concat(text[i]);
        cardArrayTemp.push(text[i]);
      }
    }
    for (let j = i; j < 19; j++) {
      cardArrayTemp.push("-");
    }
    setCardNumber(cardTemp);
    setCardNumberArray(cardArrayTemp);
  }, [cardNumber, ArrayNumber])
  const onSetDate = useCallback((text: string) => {
    let dateTemp: string = "";
    for (let i: number = 0; i < text.length; i++) {
      if (i == 1 && i == text.length - 1) {
        dateTemp = dateTemp.concat(text[i]);
        dateTemp = dateTemp.concat("/");
      } else {
        dateTemp = dateTemp.concat(text[i]);
      }
    }
    setDate(dateTemp);
  }, [date, setDate])
  const onPressNext = useCallback(() => {
    if (cardName && cardNumber && owner && date && cvv) {
      let params = {
        payment: {
          name: cardName,
          number: cardNumber
        }
      }
      navigate(Routes.PaymentChangeCard, params);
    }
  }, [cardName, cardNumber, owner, date, cvv])
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGE.background} style={styles.imgBackground} resizeMode="center">
        <TextInput
          style={styles.input}
          value={cardName}
          placeholder="CARD NAME"
          placeholderTextColor={Colors.White}
          onChangeText={setCardName}
        />
        <TextInput
          style={styles.input}
          value={owner}
          placeholder="Full NAME"
          placeholderTextColor={Colors.White}
          onChangeText={setOwner}
        />
        <TouchableOpacity style={styles.touch} activeOpacity={0.54} onPress={() => setIsShowKeyboard(!isShowKeyboard)}>
          {
            cardNumberArray.map((item, index) => {
              if (index == 4 || index == 9 || index == 14) {
                return <View style={styles.icon}>
                  <Text size={28} lineHeight={41} bold color={Colors.White} style={{ textTransform: 'uppercase' }}> </Text>
                </View>
              }
              if (item == '-')
                return <View style={styles.icon}>
                  <View style={styles.icon1}>
                  </View>
                </View>
              return <View style={styles.icon}>
                <Text size={28} lineHeight={41} bold color={Colors.White} style={{ textTransform: 'uppercase' }}>{item}</Text>
              </View>
            })
          }
        </TouchableOpacity>
        <View style={Theme.flexRowSpace}>
          <Text left size={11} lineHeight={14} bold color={Colors.White} style={{ textTransform: 'uppercase' }} marginTop={scale(24)}>EXP DATE</Text>
          <Text right size={11} lineHeight={14} bold color={Colors.White} style={{ textTransform: 'uppercase' }} marginTop={scale(24)} marginRight={scale(42)}>CVV</Text>
        </View>
        <View style={styles.date}>
          <TextInput
            style={styles.inputDate}
            value={date}
            onChangeText={onSetDate}
            placeholder="MM/YY"
            placeholderTextColor={Colors.White}
            maxLength={5}
            keyboardType='numeric'
          />
          {isShowCVV ? (<TextInput
            style={styles.inputDate}
            value={cvv}
            onChangeText={setCvv}
            maxLength={3}
            autoFocus={isShowCVV}
            keyboardType='numeric'
          />)
            :
            <TouchableOpacity style={styles.cvv} activeOpacity={0.54} onPress={() => setIsShowCVV(!isShowCVV)}>
              <View style={styles.icon}>
                <View style={styles.icon1}>
                </View>
              </View>
              <View style={styles.icon}>
                <View style={styles.icon1}>
                </View>
              </View>
              <View style={styles.icon}>
                <View style={styles.icon1}>
                </View>
              </View>

            </TouchableOpacity>
          }

        </View>
      </ImageBackground>
      {isShowKeyboard && (
        <View>
          <Text size={13} lineHeight={16} marginTop={scale(24)}>Card Number</Text>
          <TextInput
            style={styles.inputCard}
            value={cardNumber}
            onChangeText={onSetCardNumber}
            maxLength={19}
            autoFocus={isShowKeyboard}
            keyboardType='numeric'
          />
        </View>
      )}
      <View style={[styles.frameSpaceBottom, { bottom: keyboardHeight == 0 ? 0 : keyboardHeight + scale(100) }]}>
        <ButtonLinear
          title={"Next"}
          children={
            <Image
              source={ICON.next}
              style={styles.buttonChildren}
            />
          }
          onPress={onPressNext}
          styleButton={styles.buttonLinear}
        />
      </View>
    </View>
  );
});
export default PaymentAddCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Snow,
    height: height,
    paddingLeft: scale(24),
    paddingRight: scale(24),
    paddingTop: scale(15)
  },
  imgBackground: {
    paddingTop: scale(24),
    paddingLeft: scale(24),
    paddingRight: scale(24),
    paddingBottom: scale(22)
  },
  icon: {
    width: scale(14),
    justifyContent: 'center',
    height: scale(32),
    alignItems: 'center'
  },
  icon1: {
    width: scale(4),
    height: scale(4),
    borderRadius: scale(4),
    backgroundColor: Colors.White
  },
  touch: {
    ...Theme.flexRow,
    marginTop: scale(16)
  },
  date: {
    ...Theme.flexRowSpace,
    paddingRight: scale(65)
  },
  cvv: {
    flexDirection: 'row',
    marginRight: scale(24),
    alignItems: 'center'
  },
  input: {
    marginTop: scale(4),
    textAlign: 'left',
    color: Colors.White,
    //textTransform: 'uppercase',
  },
  inputCard: {
    textAlign: 'left',
    width: '100%',
    paddingTop: scale(11),
    paddingBottom: scale(13),
    paddingLeft: scale(16),
    paddingRight: scale(16),
    height: scale(48),
    marginTop: scale(4),
    borderRadius: scale(8),
    borderWidth: scale(1),
    borderColor: Colors.TealBlue,
  },
  inputDate: {
    textAlign: 'left',
    width: '100%',
    marginTop: scale(4),
    color: Colors.White
  },
  buttonChildren: {
    ...Theme.icons,
    marginLeft: scale(8),
  },
  buttonLinear: {
    width: scale(327),
    height: scale(50),
  },
  frameSpaceBottom: {
    ...Theme.center,
    position: 'absolute',
    width: width,
    paddingTop: scale(8),
    paddingBottom: getBottomSpace() + scale(16),
  },
});
