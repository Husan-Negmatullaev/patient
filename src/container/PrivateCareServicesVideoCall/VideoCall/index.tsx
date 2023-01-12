import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  Animated,
} from "react-native";
import Text from "elements/Text";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { AVATAR } from "images/Avatar";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { ICON } from "images/Icon";
import { IMAGE } from "images/Image";
import VideoCallFooter from "components/PrivateCareService/VideoCallFooter";
import useModalAnimation from "hooks/useModalAnimation";
import IncomingCallFooter from "components/PrivateCareService/IncomingCallFooter";
import ModalSlideBottom from "components/ModalSlideBottom";
import { FILE_EXAMPLES } from "configs/Data";
import ModalSharedFiles from "components/ModalSharedFiles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import PrivateCareLiveChat from "../PrivateCareLiveChat";
import { height } from "configs/Const";

export default memo(() => {
  const { navigate } = useNavigation();
  const [accepted, setAccepted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [typeModal, setTypeModal] = useState<number>();
  const [fileList, setFileList] = useState<any>([]);
  const { visible, open, close, transY } = useModalAnimation();

  useFocusEffect(
    useCallback(() => {
      setFileList(FILE_EXAMPLES);
    }, [fileList])
  );

  const onPressChat = () => {};
  const onPressAccept = () => {
    setAccepted(!accepted);
  };
  const openChat = () => {
    setTypeModal(1);
    open();
  };
  const openAttach = () => {
    setTypeModal(2);
    open();
  };
  const onPressVideo = () => {};
  const onPressMute = () => {};
  const onPressDecline = () => {};
  const onPressEnd = () => {
    setEnded(true);
  };
  const onWriteReview = () => {
    navigate(Routes.ReviewDoctor);
  };
  const onGoToDashBoard = () => {
    navigate(Routes.MainTab);
  };
  return (
    <View style={styles.container}>
      {accepted && !ended ? (
        <>
          <View style={styles.header}>
            <View style={Theme.flexRow}>
              <Image source={ICON.sound} />
              <View>
                <Text
                  bold
                  size={15}
                  lineHeight={18}
                  marginLeft={8}
                  marginBottom={4}
                >
                  Dr. Margaret Wells
                </Text>
                <Text
                  size={11}
                  lineHeight={14}
                  color={Colors.GrayBlue}
                  marginLeft={8}
                >
                  25:12 remaining (30 mins visit)
                </Text>
              </View>
            </View>
            <ButtonIconHeader
              borderColor={Colors.RedNeonFuchsia}
              backgroundColor={Colors.RedNeonFuchsia}
              tintColor={Colors.White}
              icon="callOff"
              onPress={onPressEnd}
            />
          </View>
          <ImageBackground source={IMAGE.doctor} style={styles.imgDoctor}>
            <Image source={IMAGE.patient} style={styles.imgPatient} />
          </ImageBackground>
          <VideoCallFooter
            onPressChat={openChat}
            onPressVideo={onPressVideo}
            onPressMute={onPressMute}
            onPressAttach={openAttach}
          />
        </>
      ) : !accepted && !ended ? (
        <>
          <View style={styles.callView}>
            <Text size={15} lineHeight={24} marginBottom={120}>
              Incoming Call...
            </Text>
            <View style={Theme.center}>
              <Animated.View style={styles.glow1} />
              <Animated.View style={styles.glow2} />
              <Animated.View style={styles.glow3} />
              <Image source={AVATAR.doctor1} style={styles.avatar} />
            </View>
          </View>
          <IncomingCallFooter
            onPressAccept={onPressAccept}
            onPressDecline={onPressDecline}
            onPressChat={onPressChat}
          />
        </>
      ) : (
        <View style={styles.callView}>
          <Text center size={15} lineHeight={24} marginBottom={80}>
            Call Ended
          </Text>
          <Image source={AVATAR.doctor1} style={styles.avatar} />
          <Text bold size={20} lineHeight={24} marginVertical={48}>
            Dr. Margaret Wells
          </Text>
          <ButtonBorder
            title="Write a review"
            color={Colors.GrayBlue}
            style={styles.endedButton}
            onPress={onWriteReview}
          />
          <ButtonLinear
            title="Go to Home Dashboard"
            styleButton={styles.endedButton}
            onPress={onGoToDashBoard}
          />
        </View>
      )}
      <Modal visible={visible} onRequestClose={close} transparent>
        <ModalSlideBottom onClose={close} transY={transY}>
          {typeModal == 1 ? (
            <PrivateCareLiveChat isLiveChat={false} style={styles.chat} />
          ) : (
            <ModalSharedFiles fileList={fileList} />
          )}
        </ModalSlideBottom>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  header: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: Colors.White,
    ...Theme.flexRowSpace,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  callView: {
    ...Theme.center,
    flex: 1,
    paddingBottom: 100,
  },
  imgDoctor: {
    flex: 1,
  },
  imgPatient: {
    position: "absolute",
    width: 80,
    height: 120,
    top: 24,
    left: 24,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  endedButton: {
    width: 240,
    marginBottom: 16,
  },
  chat: {
    height: (height * 2) / 3,
  },
  glow1: {
    width: 160,
    height: 160,
    backgroundColor: Colors.RedNeonFuchsia,
    borderRadius: 40,
    opacity: 0.4,
    position: "absolute",
  },
  glow2: {
    width: 240,
    height: 240,
    backgroundColor: Colors.RedNeonFuchsia,
    borderRadius: 40,
    opacity: 0.16,
    position: "absolute",
  },
  glow3: {
    width: 320,
    height: 320,
    backgroundColor: Colors.RedNeonFuchsia,
    borderRadius: 40,
    opacity: 0.04,
    position: "absolute",
  },
});
