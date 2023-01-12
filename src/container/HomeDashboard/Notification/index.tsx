import React, { memo, useLayoutEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Text from "elements/Text";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import Theme from "style/Theme";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import NotificationItem, {
  NotificationEnum,
} from "components/Notification/NotificationItem";
import keyExtractor from "utils/keyExtractor";

interface NotificationProps {}

const notificationFakeData = [
  {
    id: 0,
    type: NotificationEnum.SCHEDULE,
    content: "You have appointment with Sarah Connor at 08:00 PM today.",
    createdTime: "Just now",
    notRead: true,
  },
  {
    id: 1,
    type: NotificationEnum.ACCOUNT,
    content:
      "Completed your profile to be better health consults. Complete profile >",
    notRead: true,
  },
  {
    id: 2,
    type: NotificationEnum.PAYMENT,
    content: "Add bank account to withdraw you income. Add Now >",
    notRead: true,
  },
  {
    id: 3,
    type: NotificationEnum.PHONE,
    content: "You have voice call request from Marry Jan at 08:20 AM today.",
    createdTime: "1h ago",
    notRead: false,
  },
  {
    id: 4,
    type: NotificationEnum.MESSAGE,
    content: "You have private message from Sandra Clair. Check it now >",
    createdTime: "4h ago",
    notRead: false,
  },
  {
    id: 5,
    type: NotificationEnum.PHONE,
    content: "Ando Takumi has been cancel voice call request with you.",
    createdTime: "Yesterday, 10:58 AM",
    notRead: false,
  },
  {
    id: 6,
    type: NotificationEnum.PHONE,
    content: "Ando Takumi has been cancel voice call request with you.",
    createdTime: "Yesterday, 2:58 AM",
    notRead: false,
  },
  {
    id: 7,
    type: NotificationEnum.PHONE,
    content: "Ando Takumi has been cancel voice call request with you.",
    createdTime: "Yesterday, 1:58 AM",
    notRead: false,
  },
];

const Notification = memo((props: NotificationProps) => {
  const { setOptions, goBack } = useNavigation();
  const onEye = useCallback(() => {}, []);
  const onSetting = useCallback(() => {}, []);
  useLayoutEffect(() => {
    setOptions({
      title: null,
      headerStyle: {
        shadowColor: "transparent",
      },
      headerLeft: () => <ButtonIconHeader marginLeft={24} />,
      headerRight: () => (
        <View style={Theme.flexRow}>
          <ButtonIconHeader
            icon={"eyeOn"}
            tintColor={Colors.DodgerBlue}
            borderColor={Colors.DodgerBlue}
            marginRight={24}
            onPress={onEye}
          />
          <ButtonIconHeader
            icon={"setting"}
            tintColor={Colors.DodgerBlue}
            marginRight={24}
            borderColor={Colors.DodgerBlue}
            onPress={onSetting}
          />
        </View>
      ),
    });
  }, [setOptions]);

  const renderItem = useCallback(
    ({ item }) => <NotificationItem {...item} />,
    []
  );

  return (
    <View style={styles.container}>
      <Text size={24} lineHeight={28} bold marginLeft={24} marginBottom={22}>
        Notifications
      </Text>
      <FlatList
        data={notificationFakeData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingTop: 24,
  },
});
