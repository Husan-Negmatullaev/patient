import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "elements/Text";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "configs";
import Theme from "style/Theme";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import ConsultCalendar from "components/Consults/ConsultCalendar";
import {
  NEXT_CONSULT_DATA_ANOTHER,
  NEXT_CONSULT_DATA,
} from "components/Consults/NextConsults";
import NextConsultItem from "components/Consults/NextConsultItem";

export default memo((props: any) => {
  const { setOptions, navigate } = useNavigation();
  const [selectedDate, setSelectedDate] = useState<any>("Jan 5");

  useLayoutEffect(
    useCallback(() => {
      setOptions({
        title: null,
        headerStyle: {
          backgroundColor: Colors.White,
          shadowColor: "transparent",
          elevation: 0,
        },
        headerLeft: () => <ButtonIconHeader marginLeft={24} />,
        headerRight: () => (
          <View style={Theme.flexRow}>
            <ButtonIconHeader
              tintColor={Colors.DodgerBlue}
              borderColor={Colors.DodgerBlue}
              icon="plus"
              marginRight={24}
            />
          </View>
        ),
      });
    }, [])
  );
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <ConsultCalendar />
        <Text
          marginLeft={72}
          semiBold
          size={11}
          lineHeight={14}
          color={Colors.GrayBlue}
          marginTop={16}
        >
          SEPTEMBER 31 - JANUARY 6{" "}
        </Text>
        <View style={styles.content}>
          <View style={styles.date}>
            <Text bold size={13} lineHeight={16} center marginBottom={5}>
              FRI
            </Text>
            <Text bold size={20} lineHeight={24} center>
              5
            </Text>
          </View>
          <View>
            {NEXT_CONSULT_DATA.map((item) => {
              return <NextConsultItem {...item} key={item.id.toString()} />;
            })}
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.date}>
            <Text bold size={13} lineHeight={16} center marginBottom={5}>
              FRI
            </Text>
            <Text bold size={20} lineHeight={24} center>
              5
            </Text>
          </View>
          <View>
            {NEXT_CONSULT_DATA_ANOTHER.map((item) => {
              return <NextConsultItem {...item} key={item.id.toString()} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    ...Theme.flexDirection,
    marginTop: 16,
  },
  scrollView: {
    paddingBottom: 40,
  },
  date: {
    width: 72,
  },
});
