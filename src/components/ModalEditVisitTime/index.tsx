import React, { memo, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "elements/Text";
import ButtonText from "elements/Buttons/ButtonText";
import Theme from "style/Theme";
import { Colors } from "configs";
import EditVisitTimeItem from "./EditVisitTimeItem";
import VisitTimeCalendar from "components/Consults/VisitTimeCalendar";
import { VISIT_TIME_LIST } from "configs/Data";

interface ModalEditVisitTimeProps {
  onPressDone?: () => void;
}

const ModalEditVisitTime = memo(({ onPressDone }: ModalEditVisitTimeProps) => {
  const [selectedDate, setSelectedDate] = useState<any>("Friday, Jan 5, 2020");
  const [selectedTime, setSelectedTime] = useState(VISIT_TIME_LIST[0]);

  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text bold size={17} lineHeight={20}>
          Edit Visit Time
        </Text>
        <ButtonText
          title="DONE"
          onPress={onPressDone}
          titleColor={Colors.DodgerBlue}
        />
      </View>
      <VisitTimeCalendar />
      <View style={styles.listTime}>
        <Text bold size={15} lineHeight={18}>
          {selectedDate}
        </Text>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {VISIT_TIME_LIST.map((item, index) => {
            return (
              <EditVisitTimeItem
                {...item}
                selectedId={selectedTime.id}
                key={index}
                onPress={() => {
                  setSelectedTime(item);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
});

export default ModalEditVisitTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    ...Theme.flexRowSpace,
    padding: 24,
    paddingBottom: 0,
  },
  listTime: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: Colors.Snow,
  },
  scrollView: {
    height: 180,
    marginVertical: 24,
  },
});
