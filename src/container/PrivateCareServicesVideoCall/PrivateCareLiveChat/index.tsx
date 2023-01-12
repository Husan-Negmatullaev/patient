import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  ViewStyle,
  ScrollView,
} from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import { Colors } from "configs";
import Theme from "style/Theme";
import useModalAnimation from "hooks/useModalAnimation";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import { width } from "configs/Const";
import { CHAT_EXAMPLE, FILE_EXAMPLES } from "configs/Data";
import ModalSelect from "components/ModalSelect";
import { AVATAR } from "images/Avatar";
import { now } from "moment";
import moment from "moment";
import ModalSharedFiles from "components/ModalSharedFiles";
import ModalSlideBottom from "components/ModalSlideBottom";
import useModalWithKeyboard from "hooks/useModalWithKeyboard";
import ModalAddNewFile from "components/ModalAddNewFile";
import { IMAGE } from "images/Image";
import { ICON } from "images/Icon";

const choices = [
  {
    id: 0,
    name: "Consult Informationn",
  },
  {
    id: 1,
    name: "Shared File",
  },
  {
    id: 2,
    name: "Finish this Consult",
    color: Colors.Red,
  },
];

interface LiveChatProps {
  style?: ViewStyle;
  isLiveChat?: boolean;
}

export default memo(({ style, isLiveChat }: LiveChatProps) => {
  const [_isLiveChat, setIsLiveChat] = useState<boolean>(true);
  const { setOptions, navigate } = useNavigation();
  const [text, setText] = useState<string>("");
  const [chat, setChat] = useState<any>([]);
  const [fileList, setFileList] = useState<any>(FILE_EXAMPLES);

  useFocusEffect(
    useCallback(() => {
      if (isLiveChat != undefined && isLiveChat != null) {
        setIsLiveChat(isLiveChat);
      }
    }, [])
  );

  const {
    visible: visibleOption,
    open: openOption,
    close: closeOption,
    transY: transYOption,
  } = useModalAnimation();

  const {
    visible: visibleSharedFile,
    open: openSharedFile,
    close: closeSharedFile,
    transY: transYSharedFile,
  } = useModalAnimation();

  const {
    visible: visibleAttach,
    open: openAttach,
    close: closeAttach,
    translateY: translateYAttach,
  } = useModalWithKeyboard();

  useFocusEffect(
    useCallback(() => {
      setChat(CHAT_EXAMPLE);
    }, [])
  );

  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
        backgroundColor: Colors.White,
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <ButtonIconHeader
          marginRight={24}
          icon="option"
          borderColor={Colors.DodgerBlue}
          tintColor={Colors.DodgerBlue}
          onPress={openOption}
        />
      ),
      headerTitle: () => (
        <View style={Theme.center}>
          <Text bold size={17} lineHeight={20} marginBottom={4}>
            Dr. Margaret Wells
          </Text>
          <Text size={11} lineHeight={14} color={Colors.GrayBlue}>
            25:12 remaining (30 mins visit)
          </Text>
        </View>
      ),
    });
  });

  const onChangeText = useCallback((text) => {
    setText(text);
  }, []);

  const onSubmit = useCallback(() => {
    if (text === "" || text === null || text === undefined) {
      return;
    }
    chat.push({
      id: chat.length,
      detail: text,
      time: moment(now()).format("LT"),
      date: moment(now()).format("DD/MM/YYYY"),
      isYour: true,
    });
    chat.push({
      id: chat.length + 1,
      detail: "Doctor answer test",
      time: moment(now()).format("LT"),
      date: moment(now()).format("DD/MM/YYYY"),
      isYour: false,
    });
    setText("");
  }, [text, chat]);

  const onPressItemChoice = useCallback((item: any) => {
    if (item.id == 0) {
      return;
    }
    if (item.id == 1) {
      openSharedFile();
    }
    if (item.id == 2) {
      return;
    }
  }, []);

  const onAddAttach = () => {
    chat.push({
      id: chat.length,
      attachImg: IMAGE.childDrink,
      time: moment(now()).format("LT"),
      date: moment(now()).format("DD/MM/YYYY"),
      isYour: true,
    });
    fileList.push({
      id: fileList.length,
      image: IMAGE.childDrink,
      date: moment(now()).format("DD/MM/YYYY"),
      name: "Sample name",
    });
  };

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {_isLiveChat ? (
          <View style={styles.consult}>
            <View>
              <Text bold size={15} lineHeight={18}>
                Live Chat Consult
              </Text>
              <Text size={15} lineHeight={18} marginVertical={8}>
                Today, Jan 05, 2020
              </Text>
              <Text size={15} lineHeight={18}>
                9:37 AM - 10:07 AM
              </Text>
            </View>
            <TouchableOpacity style={styles.info}>
              <Image source={ICON.additional} />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
        <Text
          center
          color={Colors.GrayBlue}
          size={11}
          lineHeight={14}
          marginVertical={24}
        >
          9 :40 AM
        </Text>
        {chat.map((item: any, index: number) => {
          const { id, isYour, detail, attachImg } = item;
          return (
            <View key={index} style={{ marginVertical: 4 }}>
              {isYour ? (
                <>
                  {attachImg !== undefined ? (
                    <Image source={attachImg} style={styles.yourAttach} />
                  ) : (
                    <TouchableOpacity
                      style={styles.yourChat}
                      activeOpacity={0.54}
                    >
                      <Text
                        size={15}
                        lineHeight={24}
                        maxWidth={(width * 3) / 4}
                      >
                        {detail}
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              ) : (
                <View style={Theme.flexDirectionBottom}>
                  <Image source={AVATAR.doctor1} style={styles.avatar} />
                  {attachImg !== undefined ? (
                    <Image source={attachImg} style={styles.doctorAttach} />
                  ) : (
                    <TouchableOpacity
                      style={styles.doctorChat}
                      activeOpacity={0.54}
                    >
                      <Text
                        size={15}
                        lineHeight={24}
                        maxWidth={(width * 3) / 4}
                        color={Colors.White}
                      >
                        {detail}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <Modal visible={visibleOption} onRequestClose={closeOption} transparent>
        <ModalSelect
          close={closeOption}
          choices={choices}
          onPressItem={onPressItemChoice}
        />
      </Modal>
      <Modal
        visible={visibleSharedFile}
        onRequestClose={closeSharedFile}
        transparent
      >
        <ModalSlideBottom onClose={closeSharedFile} transY={transYSharedFile}>
          <ModalSharedFiles fileList={FILE_EXAMPLES} />
        </ModalSlideBottom>
      </Modal>
      <Modal visible={visibleAttach} onRequestClose={closeAttach} transparent>
        <ModalAddNewFile
          translateY={translateYAttach}
          close={closeAttach}
          onAdd={onAddAttach}
        />
      </Modal>
      <View style={styles.footer}>
        <ButtonIcon
          icon="attach"
          tintColor={Colors.White}
          borderRadius={8}
          onPress={openAttach}
        />
        <TextInput
          editable
          value={text}
          style={styles.textInput}
          backgroundColor={Colors.Snow}
          onChangeText={onChangeText}
        />
        <ButtonIcon
          icon="send"
          tintColor={Colors.White}
          borderRadius={8}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 100,
  },
  consult: {
    ...Theme.flexRowSpace,
    alignItems: "flex-start",
    padding: 24,
    borderRadius: 16,
    backgroundColor: Colors.White,
  },
  info: {
    ...Theme.center,
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 8,
    width: 24,
    height: 24,
  },
  footer: {
    width: width,
    backgroundColor: Colors.White,
    position: "absolute",
    bottom: 0,
    ...Theme.flexRowSpace,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 16,
  },
  textInput: {
    width: width - 124,
    marginHorizontal: 16,
    borderWidth: 0,
  },
  yourChat: {
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: Colors.Isabelline,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomRightRadius: 4,
  },
  yourAttach: {
    alignSelf: "flex-end",
    maxWidth: width - 60,
  },
  doctorChat: {
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomLeftRadius: 4,
  },
  doctorAttach: {
    maxWidth: width - 80,
  },
  avatar: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
