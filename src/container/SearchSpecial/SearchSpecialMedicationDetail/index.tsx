import React, { memo, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Modal } from "react-native";
import Text from "elements/Text";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import { width } from "configs/Const";
import { Colors } from "configs";
import AccountItem from "components/AccountItem";
import { DATA_PERSON, MEDICATION_DETAIL_BUTTON } from "configs/Data";
import ForWhoItem from "components/ForWhoItem";
import ModalSlideBottom from "components/ModalSlideBottom";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import useModalAnimation from "hooks/useModalAnimation";
import ButtonBorder from "elements/Buttons/ButtonBorder";

const SearchSpecialMedicationDetail = memo(({ route }: any) => {
  const { doctor, img, detail } = route.params;
  const { name, avatar, faculty } = doctor;
  const [isFollow, setIsFollow] = useState(false);
  const { visible, open, close, transY } = useModalAnimation();
  const onFollow = () => {
    setIsFollow(!isFollow);
  };
  return (
    <View style={styles.container}>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <Image source={img} style={styles.image} />
        <View style={styles.content}>
          <Text size={24} bold lineHeight={28}>
            {route.params.name}
          </Text>
          <Text size={15} bold lineHeight={24} marginTop={16} marginBottom={32}>
            {detail}
          </Text>
          <Text size={13} lineHeight={16}>
            Created by:
          </Text>
          <View style={styles.doctor}>
            <Image source={avatar} />
            <View>
              <Text
                bold
                size={15}
                lineHeight={18}
                color={Colors.DodgerBlue}
                marginLeft={16}
                marginBottom={4}
              >
                Dr . {name}
              </Text>
              <Text size={13} lineHeight={16} marginLeft={16}>
                {faculty}
              </Text>
            </View>
          </View>
          <View style={styles.list}>
            {MEDICATION_DETAIL_BUTTON.map((item, index) => {
              return (
                <AccountItem
                  {...item}
                  key={index}
                  onPress={item.id == 1 ? open : () => {}}
                />
              );
            })}
          </View>
          <Text bold size={17} lineHeight={20}>
            Related Questions
          </Text>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <ButtonIconHeader
          icon="arrowLeft"
          tintColor={Colors.White}
          backgroundColor={Colors.DarkJungleGreenOpacity}
          borderColor={Colors.DarkJungleGreenOpacity}
        />
        <View style={Theme.flexRow}>
          {isFollow ? (
            <ButtonIconHeader
              icon="followed"
              tintColor={Colors.White}
              backgroundColor={Colors.DodgerBlue}
              borderColor={Colors.DodgerBlue}
              marginRight={24}
              onPress={onFollow}
            />
          ) : (
            <ButtonIconHeader
              icon="follow"
              tintColor={Colors.White}
              backgroundColor={Colors.DarkJungleGreenOpacity}
              borderColor={Colors.DarkJungleGreenOpacity}
              marginRight={24}
              onPress={onFollow}
            />
          )}
          <ButtonIconHeader
            icon="share"
            tintColor={Colors.White}
            backgroundColor={Colors.DarkJungleGreenOpacity}
            borderColor={Colors.DarkJungleGreenOpacity}
          />
        </View>
      </View>
      <Modal visible={visible} onRequestClose={close} transparent>
        <ModalSlideBottom onClose={close} transY={transY}>
          <View>
            <Text marginTop={24} marginLeft={24} bold size={17} lineHeight={20}>
              Who take {route.params.name} ?
            </Text>
            <ForWhoItem dataPerson={DATA_PERSON} />
            <View style={styles.footer}>
              <ButtonBorder
                style={styles.justFollow}
                title="Just Follow"
                color={Colors.GrayBlue}
                onPress={close}
              />
              <ButtonLinear
                style={styles.buttonOK}
                title="OK"
                onPress={close}
              />
            </View>
          </View>
        </ModalSlideBottom>
      </Modal>
    </View>
  );
});

export default SearchSpecialMedicationDetail;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 264,
  },
  header: {
    width: width,
    paddingHorizontal: 24,
    ...Theme.flexRowSpace,
    position: "absolute",
    top: getStatusBarHeight(),
  },
  doctor: {
    paddingVertical: 16,
    ...Theme.flexRow,
  },
  content: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  list: {
    backgroundColor: Colors.White,
    borderRadius: 16,
    marginTop: 40,
    marginBottom: 48,
  },
  footer: {
    ...Theme.flexRowSpace,
    padding: 24,
  },
  justFollow: {
    width: 155,
  },
  buttonOK: {
    width: 155,
  },
});
