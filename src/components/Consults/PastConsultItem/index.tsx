import React, { memo, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Text from "elements/Text";
import { Colors, Constants, Routes } from "configs";
import Theme from "style/Theme";
import { ConsultsStatus, ConsultsType } from "configs/Const";
import { useLinkProps, useNavigation } from "@react-navigation/native";
import { consult } from "type/consult";
import { ICON } from "images/Icon";

export interface PastConsultsItemProps {
  id: number;
  doctor: {
    avatar: number;
    name: string;
    faculty: string;
    rating: number;
    feedback: number;
  };
  status: number;
  time: consult["time"];
  type: ConsultsType;
  consultDetails?: {
    price: number;
    questionDetails: {
      askFor: string;
      question: string;
      questionImage?: null | {
        uri: any;
        title: string;
        uploadTime: string;
      };
    };
    answerDetails?: {
      date: string;
      time: string;
      answerOne: string;
      answerTwo: string;
      answerImage?: any;
    };
  };
  additionalInformation?: {
    diagnosedConditions: null | {
      value: string;
      time: string;
    };
    medications: null | {
      value: string;
      time: string;
    };
    allergies: null | {
      value: string;
      time: string;
    };
  };
  onPress?: () => void;
}

export const getStatus = (status: ConsultsStatus) => {
  switch (status) {
    case ConsultsStatus.stillInProgress:
      return {
        statusName: "Still in Progress",
        statusColor: Colors.BlueCrayola,
      };
    case ConsultsStatus.accepted:
      return {
        statusName: "Accepted",
        statusColor: Colors.TealBlue,
      };
    case ConsultsStatus.unConFirmed:
      return {
        statusName: "Unconfirmed",
        statusColor: Colors.Orange,
      };
    case ConsultsStatus.completed:
      return {
        statusName: "Completed",
        statusColor: Colors.Jade,
      };
    case ConsultsStatus.canceled:
      return {
        statusName: "Canceled",
        statusColor: Colors.RedNeonFuchsia,
      };
    default:
      return {
        statusName: "Unconfirmed",
        statusColor: Colors.Orange,
      };
  }
};

const ConsultsItem = memo((props: PastConsultsItemProps) => {
  const {} = props;
  let typeName: string;
  let iconSource: ImageSourcePropType;
  let backgroundColor: string;
  let route: any;
  const { statusName, statusColor } = getStatus(props.status);

  switch (props.type) {
    case ConsultsType.Appointment:
      typeName = "Appointment";
      iconSource = ICON.appointmentActive;
      backgroundColor = Colors.DodgerBlue;
      route = Routes.PastConsultAppointment;
      break;
    case ConsultsType.Message:
      typeName = "Message";
      iconSource = ICON.Message;
      backgroundColor = Colors.TiffanyBlue;
      route = Routes.PastConsultMessage;
      break;
    case ConsultsType.VoiceCall:
      typeName = "Voice Call";
      iconSource = ICON.voiceCall;
      backgroundColor = Colors.RedNeonFuchsia;
      route = Routes.PastConsultVideoCall;
      break;
    case ConsultsType.LiveChat:
      typeName = "Live Chat";
      iconSource = ICON.liveChat;
      backgroundColor = Colors.Malachite;
      route = Routes.PastConsultLiveChat;
      break;
    case ConsultsType.VideoCall:
      typeName = "Video Call";
      iconSource = ICON.videoCall;
      backgroundColor = Colors.DodgerBlue;
      route = Routes.PastConsultVideoCall;
      break;
  }

  const { navigate } = useNavigation();
  const onPress = useCallback(() => {
    navigate(route, {
      item: props,
      statusColor: statusColor,
      statusName: statusName,
    });
  }, [navigate, statusColor, statusName]);

  return (
    <TouchableOpacity
      activeOpacity={0.54}
      style={styles.container}
      onPress={onPress}
    >
      <View
        style={{
          width: 56,
          height: 56,
        }}
      >
        <Image
          source={props.doctor.avatar}
          style={{
            width: 56,
            height: 56,
          }}
        />
        <View
          style={{
            width: 24,
            height: 24,
            position: "absolute",
            bottom: -8,
            right: -8,
          }}
        >
          <View
            style={{
              ...Theme.center,
              width: 24,
              height: 24,
              backgroundColor: backgroundColor,
              borderRadius: 6,
            }}
          >
            <Image style={{ width: 14, height: 14 }} source={iconSource} />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, marginLeft: 24 }}>
        <View style={Theme.flexRow}>
          <Text size={13} lineHeight={16} color={Colors.GrayBlue}>
            {typeName}
          </Text>
          <Text size={13} lineHeight={16} marginLeft={18} color={statusColor}>
            {statusName}
          </Text>
        </View>
        <Text size={15} lineHeight={18} bold marginTop={8}>
          Dr. {props.doctor.name}
        </Text>
        <Text size={13} lineHeight={16} marginTop={8}>
          {props.time.timeRange ||
            "Message Sent at " + props.time.sentTime ||
            props.time.timeRemaining + "hour(s) left to confirm" ||
            props.time.timeLeft + "mins left"}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default ConsultsItem;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Colors.White,
    borderRadius: 16,
    width: Constants.width - 48,
    ...Theme.shadow,
    ...Theme.flexRow,
    marginBottom: 16,
  },
  typeImage: {
    width: 24,
    height: 24,
    backgroundColor: Colors.DodgerBlue,
  },
  typeIcon: {},
});
