import React, { memo } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "elements/Text";
import { width, ConsultsType, ConsultsStatus } from "configs/Const";
import { Colors } from "configs";
import { AVATAR } from "images/Avatar";
import { IMAGE } from "images/Image";
import PastConsultItem from "components/Consults/PastConsultItem";

export const PAST_CONSULT_DATA = [
  //#region Appointment
  {
    id: 0,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Margaret Wells",
      faculty: "Dental Hygientist",
      rating: 4.8,
      feedback: 111,
    },
    status: ConsultsStatus.completed,
    type: ConsultsType.Appointment,
    time: {
      date: "Jan 5 , 2020",
      timeRange: "7:00 AM - 8:00 AM",
      sentTime: "7:21 AM",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        askFor: "Nora, 4 years old",
        question:
          "I think my child has been exposed tochickenpox, what should I do? How long does it take to show signs of chickenpoxafter being exposed?",
        questionImage: {
          uri: IMAGE.chickenpox,
          title: "Redness on the back of the neck",
          uploadTime: "Jan, 03 2020",
        },
      },
      answerDetails: {
        date: "Jan 6",
        time: "3:00 PM",
        answerOne:
          "The chickenpox vaccine is a weakened living strain of chickenpox designed to trigger the same antibody response as wild chickenpox without active disease.",
        answerTwo:
          "There is a lower but existing risk of vaccine related zoster from that weakened strain because it behaves like other strain of the virus.The newer Shingrex vaccine would be a reasonable investment at some point. Discuss with your doc.",
        answerImage: IMAGE.childDrink,
      },
      prescription: {
        title: "Acyclovir",
        detail:
          "800 mg Aciclovir four times daily, with or without food. Treatment should continue for five days.",
      },
    },
    additionalInformation: {
      diagnosedConditions: {
        value: "Flu & Cold",
        time: "Jan 5, 2020",
      },
      medications: {
        value: "Pelicillin",
        time: "Jan 5, 2020",
      },
      allergies: {
        value: "Hives",
        time: "Jan 5, 2020",
      },
    },
  },
  //#endregion

  //#region Message
  {
    id: 1,
    doctor: {
      avatar: AVATAR.doctor2,
      name: "Carolyn Goodwin",
      faculty: "Dental Hygientist",
      rating: 4.8,
      feedback: 111,
    },
    status: ConsultsStatus.completed,
    type: ConsultsType.Message,
    time: {
      date: "Jan 5",
      sentTime: "7:21 AM",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        askFor: "Nora, 4 years old",
        question:
          "Late falling of milk teeth on a child, resulting in two rows of milk and permanent teeth at the same time, what could help?",
        questionImage: {
          uri: IMAGE.daughterTeeth,
          title: "My daughter teeth",
          uploadTime: "Jan, 03 2020",
        },
      },
      answerDetails: {
        date: "Jan 6",
        time: "3:00 PM",
        answerOne:
          "The early or late eruption of deciduous teeth in a child isn't the cause of permanent teeth appearing behind them temporarily creating 2 rows of teeth.",
        answerTwo:
          "Take the child to a dentist for confirmation but often permanent teeth erupt near the corresponding deciduous teeth and often the lips and tongue will help them move into correct position. Discuss your concerns with your dentist at the next exam.",
        answerImage: IMAGE.childDrink,
      },
    },
    additionalInformation: {
      diagnosedConditions: {
        value: "Flu & Cold",
        time: "Jan 5, 2020",
      },
      medications: null,
      allergies: null,
    },
  },
  //#endregion

  //#region Voice Call
  {
    id: 2,
    doctor: {
      avatar: AVATAR.doctor3,
      name: "Carolyn Goodwin",
      faculty: "Dental Hygientist",
      rating: 4.8,
      feedback: 111,
    },
    status: ConsultsStatus.canceled,
    type: ConsultsType.VoiceCall,
    time: {
      date: "Jan 5",
      timeRange: "7:21 AM - 8:00 AM",
      sentTime: "7:21 AM",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        askFor: "Nora, 4 years old",
        question:
          "Late falling of milk teeth on a child, resulting in two rows of milk and permanent teeth at the same time, what could help?",
        questionImage: {
          uri: IMAGE.daughterTeeth,
          title: "My daughter teeth",
          uploadTime: "Jan, 03 2020",
        },
      },
      answerDetails: {
        date: "Jan 6",
        time: "3:00 PM",
        answerOne:
          "The early or late eruption of deciduous teeth in a child isn't the cause of permanent teeth appearing behind them temporarily creating 2 rows of teeth.",
        answerTwo:
          "Take the child to a dentist for confirmation but often permanent teeth erupt near the corresponding deciduous teeth and often the lips and tongue will help them move into correct position. Discuss your concerns with your dentist at the next exam.",
        answerImage: IMAGE.childDrink,
      },
    },
    additionalInformation: {
      diagnosedConditions: {
        value: "Flu & Cold",
        time: "Jan 5, 2020",
      },
      medications: null,
      allergies: null,
    },
  },
  //#endregion
];

const PAST_CONSULT_DATA_ANOTHER = [
  //#region  Live Chat
  {
    id: 3,
    doctor: {
      avatar: AVATAR.doctor4,
      name: "Carolyn Goodwin",
      faculty: "Dental Hygientist",
      rating: 4.8,
      feedback: 111,
    },
    status: ConsultsStatus.completed,
    type: ConsultsType.LiveChat,
    time: {
      date: "Jan 5 , 2020",
      timeRange: "7:00 AM - 8:00 AM",
      sentTime: "7:21 AM",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        askFor: "Nora, 4 years old",
        question:
          "Late falling of milk teeth on a child, resulting in two rows of milk and permanent teeth at the same time, what could help?",
        questionImage: {
          uri: IMAGE.daughterTeeth,
          title: "My daughter teeth",
          uploadTime: "Jan, 03 2020",
        },
      },
      answerDetails: {
        date: "Jan 6",
        time: "3:00 PM",
        answerOne:
          "The early or late eruption of deciduous teeth in a child isn't the cause of permanent teeth appearing behind them temporarily creating 2 rows of teeth.",
        answerTwo:
          "Take the child to a dentist for confirmation but often permanent teeth erupt near the corresponding deciduous teeth and often the lips and tongue will help them move into correct position. Discuss your concerns with your dentist at the next exam.",
        answerImage: IMAGE.childDrink,
      },
      prescription: {
        title: "Acyclovir",
        detail:
          "800 mg Aciclovir four times daily, with or without food. Treatment should continue for five days.",
      },
    },
    additionalInformation: {
      diagnosedConditions: {
        value: "Flu & Cold",
        time: "Jan 5, 2020",
      },
      medications: null,
      allergies: null,
    },
  },
  //#endregion

  //#region VideoCall
  {
    id: 4,
    doctor: {
      avatar: AVATAR.doctor5,
      name: "Carolyn Goodwin",
      faculty: "Dental Hygientist",
      rating: 4.8,
      feedback: 111,
    },
    status: ConsultsStatus.canceled,
    type: ConsultsType.VideoCall,
    time: {
      date: "Jan 5 , 2020",
      timeRange: "7:00 AM - 8:00 AM",
      sentTime: "7:21 AM",
    },
    consultDetails: {
      price: 45,
      questionDetails: {
        askFor: "Nora, 4 years old",
        question:
          "Late falling of milk teeth on a child, resulting in two rows of milk and permanent teeth at the same time, what could help?",
        questionImage: {
          uri: IMAGE.daughterTeeth,
          title: "My daughter teeth",
          uploadTime: "Jan, 03 2020",
        },
      },
      answerDetails: {
        date: "Jan 6",
        time: "3:00 PM",
        answerOne:
          "The early or late eruption of deciduous teeth in a child isn't the cause of permanent teeth appearing behind them temporarily creating 2 rows of teeth.",
        answerTwo:
          "Take the child to a dentist for confirmation but often permanent teeth erupt near the corresponding deciduous teeth and often the lips and tongue will help them move into correct position. Discuss your concerns with your dentist at the next exam.",
        answerImage: IMAGE.childDrink,
      },
      prescription: {
        title: "Acyclovir",
        detail:
          "800 mg Aciclovir four times daily, with or without food. Treatment should continue for five days.",
      },
    },
    additionalInformation: {
      diagnosedConditions: {
        value: "Flu & Cold",
        time: "Jan 5, 2020",
      },
      medications: null,
      allergies: null,
    },
  },
  //#endregion
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
          Jan 5
        </Text>
        {PAST_CONSULT_DATA.map((item) => {
          return <PastConsultItem {...item} key={item.id.toString()} />;
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
          Jan 5
        </Text>
        {PAST_CONSULT_DATA_ANOTHER.map((item) => (
          <PastConsultItem {...item} key={item.id.toString()} />
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
