import React, { memo } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors } from "configs";
import { ICON } from "images/Icon";

export enum NotificationEnum {
  ACCOUNT = "ACCOUNT",
  MESSAGE = "MESSAGE",
  PAYMENT = "PAYMENT",
  PHONE = "PHONE",
  SCHEDULE = "SCHEDULE",
}

interface NotificationItemProps {
  type: NotificationEnum;
  content: string;
  createdTime?: number | Date | string;
  notRead?: boolean;
}

const NotificationItem = memo((props: NotificationItemProps) => {
  let image;
  switch (props.type) {
    case NotificationEnum.ACCOUNT:
      image = ICON.account;
      break;
    case NotificationEnum.MESSAGE:
      image = ICON.message;
      break;
    case NotificationEnum.PAYMENT:
      image = ICON.payment;
      break;
    case NotificationEnum.PHONE:
      image = ICON.phone;
      break;
    case NotificationEnum.SCHEDULE:
      image = ICON.schedule;
      break;

    default:
      break;
  }
  return (
    <TouchableOpacity
      style={[styles.container, !props.notRead && styles.isRead]}
      activeOpacity={0.54}
    >
      {props.notRead && (
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: Colors.RedNeonFuchsia,
            position: "absolute",
            left: 8,
            top: 18,
          }}
        />
      )}
      <Image
        source={image}
        style={{ width: 40, height: 40, marginRight: 16, marginTop: 4 }}
      />
      <View style={Theme.flexOne}>
        <Text size={15} lineHeight={24}>
          {props.content}
        </Text>
        {props.createdTime && (
          <Text size={13} lineHeight={16} color={Colors.GrayBlue} marginTop={8}>
            {props.createdTime}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
});

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexDirection,
    paddingHorizontal: 24,
    marginVertical: 16,
  },
  isRead: {
    opacity: 0.5,
  },
});
