import React, { memo } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "elements/Text";
import { width, ConsultsType, ConsultsStatus } from "configs/Const";
import { Colors } from "configs";
import { AVATAR } from "images/Avatar";
import NextConsultItem from "../NextConsultItem";
import { IMAGE } from "images/Image";

export const NEXT_CONSULT_DATA = [
  {
    id: 0,
    doctor: {
      name: "Roxie Hudson",
      faculty: "Preventive Medicine",
      rating: 4.8,
      feedback: 1387,
      avatar: AVATAR.doctor3,
    },
    type: ConsultsType.LiveChat,
    status: ConsultsStatus.stillInProgress,
    time: {
      date: "Jan 5",
      timeRange: "8:00 AM - 8:30 AM",
      timeLeft: "19:59 mins left",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        question:
          "I think my child has been exposed to chickenpox, what should I do? How long does it take to show signs of chickenpoxafter being exposed?",
        askFor: "Nora 4 years old",
      },
    },
    additionalInformation: {
      diagnosedConditions: {
        value: "Chickenpox",
        time: "Jan 5, 2020",
      },
      medications: null,
      allergies: null,
    },
  },
  {
    id: 1,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Ethel Howard",
      faculty: "Dental Hygientist",
      rating: 4.8,
      feedback: 1111,
    },
    status: ConsultsStatus.accepted,
    type: ConsultsType.Appointment,
    time: {
      date: "Jan 5",
      timeRange: "08:00 PM - 08:30 PM",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        question:
          "Late falling of milk teeth on a child, resulting in two rows of milk and permanent teeth at the same time, what could help?",
        askFor: "Nora 4 years old",
        questionImage: {
          uri: IMAGE.daughterTeeth,
          title: "My daughter teeth",
          uploadedTime: "Jan, 03 2020",
        },
      },
    },
    additionalInformation: {
      diagnosedConditions: null,
      medications: null,
      allergies: null,
    },
  },
  {
    id: 2,
    doctor: {
      name: "John Ray",
      avatar: AVATAR.doctor2,
      faculty: "Preventive Medicine",
      rating: 4.7,
      feedback: 235,
    },
    status: ConsultsStatus.unConFirmed,
    type: ConsultsType.VoiceCall,
    time: {
      date: "Jan 4",
      sentTime: "9:21 AM",
      timeRange: "4 hours left to confirm",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        question:
          "Late falling of milk teeth on a child, resulting in two rows of milk and permanent teeth at the same time, what could help?",
        askFor: "Nora 4 years old",
        questionImage: {
          uri: IMAGE.daughterTeeth,
          title: "My daughter teeth",
          uploadedTime: "Jan, 03 2020",
        },
      },
    },
    additionalInformation: {
      diagnosedConditions: {
        value: "Chickenpox",
        time: "(Jan 5, 2020)",
      },
      medications: null,
      allergies: null,
    },
  },
];

export const NEXT_CONSULT_DATA_ANOTHER = [
  {
    id: 0,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Ethel Howard",
      faculty: "Dental Hygientist",
      rating: 4.8,
      feedback: 1111,
    },
    status: ConsultsStatus.accepted,
    type: ConsultsType.Appointment,
    time: {
      date: "Jan 5",
      timeRange: "08:00 PM - 08:30 PM",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        question:
          "Late falling of milk teeth on a child, resulting in two rows of milk and permanent teeth at the same time, what could help?",
        askFor: "Nora 4 years old",
        questionImage: {
          uri: IMAGE.daughterTeeth,
          title: "My daughter teeth",
          uploadedTime: "Jan, 03 2020",
        },
      },
    },
    additionalInformation: {
      diagnosedConditions: null,
      medications: null,
      allergies: null,
    },
  },
];

const PastConsults = memo(() => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 48 }}
    >
      <View style={styles.content}>
        <Text
          size={13}
          lineHeight={16}
          semiBold
          marginBottom={23}
          color={Colors.GrayBlue}
        >
          TODAY, Jan 5, 2020
        </Text>
        {NEXT_CONSULT_DATA.map((item) => {
          return <NextConsultItem {...item} key={item.id.toString()} />;
        })}
      </View>
      <View style={styles.content}>
        <Text
          size={13}
          lineHeight={16}
          semiBold
          marginBottom={23}
          color={Colors.GrayBlue}
        >
          Monday, Jan 8, 2020
        </Text>
        {NEXT_CONSULT_DATA_ANOTHER.map((item) => (
          <NextConsultItem {...item} key={item.id.toString()} />
        ))}
      </View>
    </ScrollView>
  );
});

export default PastConsults;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  },
  content: {
    width: width,
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
});
