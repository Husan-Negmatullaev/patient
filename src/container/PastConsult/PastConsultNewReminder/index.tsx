import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import Text from "elements/Text";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import Theme from "style/Theme";
import { Colors, Routes } from "configs";
import SubtitleItem from "components/Consults/SubtilteItem";
import InputItem from "components/InputItem";
import { ICON } from "images/Icon";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import useModalAnimation from "hooks/useModalAnimation";
import ModalSlideBottom from "components/ModalSlideBottom";
import ModalChangeList from "components/ModalChangeList";
import Calendar from "components/Schedule/Calendar";
import TimePickerTouchable from "components/Consults/TimePickerTouchable";
import ForWhoItem from "components/ForWhoItem";
import { TAKER } from "configs/Data";

export const TIMES = [
  {
    id: 0,
    name: "Once a day",
  },
  {
    id: 1,
    name: "Twice a day",
  },
  {
    id: 2,
    name: "Three times a day",
  },
  {
    id: 3,
    name: "Four times a day",
  },
];

export const DURATION = [
  {
    id: 0,
    name: "1 day",
  },
  {
    id: 1,
    name: "2 days",
  },
  {
    id: 2,
    name: "3 days",
  },
  {
    id: 3,
    name: "4 days",
  },
  {
    id: 4,
    name: "5 days",
  },
];

export const LIST_TIME = [
  {
    id: 0,
    time: "08:00 AM",
  },
  {
    id: 1,
    time: "09:00 AM",
  },
  {
    id: 2,
    time: "10:00 AM",
  },
];

export const SNOOZE = [
  {
    id: 0,
    name: "Every minute",
  },
  {
    id: 1,
    name: "Every 2 minutes",
  },
  {
    id: 2,
    name: "Every 3 minutes",
  },
  {
    id: 3,
    name: " Every 4 minutes",
  },
  {
    id: 4,
    name: "Every 5 minutes",
  },
];

export const shareType = [
  {
    id: 0,
    icon: "tablet",
    name: "tablet",
  },
  {
    id: 1,
    icon: "medication",
    name: "pill",
  },
  {
    id: 2,
    icon: "vaccination",
    name: "vaccine",
  },
  {
    id: 3,
    icon: "drink",
    name: "drink",
  },
];

export default memo(({ route }: any) => {
  const { setOptions, navigate } = useNavigation();
  const { title, detail } = route.params;
  const [dose, setDose] = useState<number>(1);
  const [selectedType, setSelectedType] = useState(shareType[0]);
  const [selectedTaker, setSelectedTaker] = useState(TAKER[0]);
  const [times, setTimes] = useState(TIMES[0]);
  const [duration, setDuration] = useState(DURATION[0]);
  const [snooze, setSnooze] = useState(SNOOZE[0]);
  const [date, setDate] = useState<string>("Today");
  const [listTime, setListTime] = useState<any>([]);

  useFocusEffect(
    useCallback(() => {
      setListTime(LIST_TIME);
    }, [])
  );

  const onDone = useCallback(() => {
    navigate(Routes.PastConsultReminder, {
      title,
      detail,
      dose,
      selectedType,
      selectedTaker,
      times,
      duration,
      snooze,
      date,
      listTime,
    });
  }, []);

  const {
    visible: timesVisible,
    open: timesOpen,
    close: timesClose,
    transY: timesTransY,
  } = useModalAnimation();

  const {
    visible: durationVisible,
    open: durationOpen,
    close: durationClose,
    transY: durationTransY,
  } = useModalAnimation();

  const {
    visible: dateVisible,
    open: dateOpen,
    close: dateClose,
    transY: dateTransY,
  } = useModalAnimation();

  const {
    visible: snoozeVisible,
    open: snoozeOpen,
    close: snoozeClose,
    transY: snoozeTransY,
  } = useModalAnimation();

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
      headerLeft: () => <ButtonIconHeader icon="close" marginLeft={24} />,
      headerRight: () => <View style={{ marginRight: 64 }} />,
      headerTitle: () => (
        <Text center bold size={17} lineHeight={20}>
          New Reminder
        </Text>
      ),
    });
  });

  const onChangeTimes = useCallback((item) => {
    setTimes(item);
    timesClose();
  }, []);

  const onChangeDuration = useCallback((item) => {
    setDuration(item);
    durationClose();
  }, []);

  const onChangeSnooze = useCallback((item) => {
    setSnooze(item);
    snoozeClose();
  }, []);

  const onPickDatePress = useCallback((day) => {
    setDate(day.dateString);
    dateClose();
  }, []);

  const handleAddTime = useCallback(() => {
    let time = { id: listTime.length, time: "08:00 AM" };
    setListTime([...listTime, time]);
  }, [listTime]);

  const handleDeleteTime = useCallback(
    (item) => {
      let _listTime = [...listTime];
      let index = _listTime.indexOf(item);
      _listTime.splice(index, 1);
      setListTime([..._listTime]);
    },
    [listTime]
  );

  const onMinusDose = () => {
    if (dose == 0) {
      setDose(dose);
    } else setDose(dose - 1);
  };
  const onPlusDose = () => {
    setDose(dose + 1);
  };

  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <SubtitleItem icon="account" title="Who take it?">
        <ForWhoItem dataPerson={TAKER} />
      </SubtitleItem>

      <SubtitleItem icon="medication" title="Medicine Details">
        <InputItem label="Medicine Name" value={title} />
        <Text
          marginTop={24}
          marginBottom={4}
          semiBold
          size={13}
          lineHeight={16}
        >
          Product Name
        </Text>
        <TouchableOpacity activeOpacity={0.54} style={styles.scan}>
          <Text marginLeft={12} size={15}>
            Acyclovir 800mg
          </Text>
          <Image source={ICON.scan} />
        </TouchableOpacity>
        <InputItem label="Producer" value="ZyGenerics" />
        <View style={styles.dose}>
          <Text
            style={{ position: "absolute", left: 0 }}
            size={15}
            left
            lineHeight={18}
            marginRight={44}
          >
            Dose
          </Text>
          <ButtonIcon
            icon="minus"
            tintColor={Colors.DodgerBlue}
            borderColor={Colors.DodgerBlue}
            backgroundColor={Colors.White}
            onPress={onMinusDose}
          />
          <Text size={17} lineHeight={20} bold marginHorizontal={16}>
            {dose}
          </Text>
          <ButtonIcon
            icon="plus"
            tintColor={Colors.DodgerBlue}
            borderColor={Colors.DodgerBlue}
            backgroundColor={Colors.White}
            onPress={onPlusDose}
          />
        </View>
        <Text size={15} lineHeight={18}>
          Share Type
        </Text>
        <View style={Theme.flexRowCenter}>
          {shareType.map((item, index) => {
            const { id, icon } = item;
            return (
              <View style={styles.shareType} key={index}>
                {item.id == selectedType.id ? (
                  <ButtonIcon
                    icon={icon}
                    width={56}
                    height={56}
                    tintColor={Colors.White}
                    backgroundColor={Colors.DodgerBlue}
                    borderRadius={16}
                    onPress={() => {
                      setSelectedType(item);
                    }}
                  />
                ) : (
                  <ButtonIcon
                    icon={icon}
                    width={56}
                    height={56}
                    tintColor={Colors.GrayBlue}
                    backgroundColor={Colors.White}
                    borderColor={Colors.GrayBlue}
                    borderRadius={16}
                    onPress={() => {
                      setSelectedType(item);
                    }}
                  />
                )}
              </View>
            );
          })}
        </View>
      </SubtitleItem>
      <SubtitleItem icon="medication" title="Medicine Details" toggle>
        <View>
          <InputItem
            label="Times"
            value={times.name}
            isPickList
            onPress={timesOpen}
          />
          <InputItem
            label="How long"
            value={duration.name}
            isPickList
            onPress={durationOpen}
          />
          <InputItem
            label="Start from"
            value={date}
            isTouchable
            icon="calendar"
            onPress={dateOpen}
          />
          <Text size={13} lineHeight={16} semibold marginTop={24}>
            Reminder
          </Text>
          <View>
            {listTime.map((item: any, index: number) => {
              return (
                <TimePickerTouchable
                  key={index}
                  id={item.id}
                  listTime={listTime}
                  onAddNew={handleAddTime}
                  onDelete={handleDeleteTime}
                />
              );
            })}
          </View>
          <InputItem
            label="Snooze"
            value={snooze.name}
            isPickList
            onPress={snoozeOpen}
          />
        </View>
      </SubtitleItem>
      <View style={styles.buttonBottom}>
        <ButtonBorder
          style={styles.buttonCancel}
          color={Colors.GrayBlue}
          title="Cancel"
        />
        <ButtonLinear style={styles.buttonDone} onPress={onDone} title="Done" />
      </View>
      <Modal
        visible={timesVisible}
        onRequestClose={timesClose}
        transparent
        animationType="slide"
      >
        <ModalSlideBottom onClose={timesClose} transY={timesTransY}>
          <ModalChangeList onChangeList={onChangeTimes} data={TIMES} />
        </ModalSlideBottom>
      </Modal>
      <Modal
        visible={durationVisible}
        onRequestClose={durationClose}
        transparent
        animationType="slide"
      >
        <ModalSlideBottom onClose={durationClose} transY={durationTransY}>
          <ModalChangeList onChangeList={onChangeDuration} data={DURATION} />
        </ModalSlideBottom>
      </Modal>
      <Modal
        visible={snoozeVisible}
        onRequestClose={snoozeClose}
        transparent
        animationType="slide"
      >
        <ModalSlideBottom onClose={snoozeClose} transY={snoozeTransY}>
          <ModalChangeList onChangeList={onChangeSnooze} data={SNOOZE} />
        </ModalSlideBottom>
      </Modal>
      <Modal
        visible={dateVisible}
        onRequestClose={dateClose}
        transparent
        animationType="fade"
      >
        <ModalSlideBottom onClose={dateClose} transY={dateTransY}>
          <Calendar onPress={onPickDatePress} />
        </ModalSlideBottom>
      </Modal>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {},
  taker: {
    ...Theme.flexRowCenter,
  },
  scan: {
    ...Theme.flexRowSpace,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WhiteSmoke,
    padding: 12,
    height: 48,
  },
  dose: {
    ...Theme.flexRowCenter,
    marginVertical: 32,
  },
  shareType: {
    marginHorizontal: 12,
    marginVertical: 24,
    ...Theme.center,
  },
  buttonBottom: {
    marginTop: 32,
    backgroundColor: Colors.White,
    ...Theme.flexRowSpace,
  },
  buttonCancel: {
    width: 155,
    marginLeft: 24,
    marginBottom: 24,
    marginTop: 12,
  },
  buttonDone: {
    width: 155,
    marginRight: 24,
    marginBottom: 24,
    marginTop: 12,
  },
});
