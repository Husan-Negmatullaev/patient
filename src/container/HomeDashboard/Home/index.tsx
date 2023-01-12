import React, { memo, useState, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Colors, Routes } from "configs";
import Greeting from "components/Home/Greeting";
import SearchBox from "elements/SearchBox";
import MainControl from "components/Home/MainControl";
import TasksForToday from "components/Home/TasksForToday";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import IconNotification from "components/Home/IconNotification";
import scale from "utils/scale";

interface HomeProps { }

const Home = memo((props: HomeProps) => {
  const [searchKey, setSearchKey] = useState("");
  const { navigate } = useNavigation();
  const onTodayTask = useCallback(() => {
    navigate(Routes.TodayTask);
  }, [navigate]);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <IconNotification
          style={{
            position: "absolute",
            top: getStatusBarHeight() + 16,
            right: 24,
            zIndex: 10,
          }}
        />
        <Greeting />
        <SearchBox
          placeholder={"Search health issue, doctor, topic..."}
          value={searchKey}
          onChangeText={setSearchKey}
          style={{ marginTop: scale(24), marginBottom: scale(32) }}
        />
        <TasksForToday step={5} onPress={onTodayTask} />
        <MainControl />
      </ScrollView>
    </View>
  );
});

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  contentContainerStyle: {
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 16,
  },
});
