import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Text from "elements/Text";
import { width } from "configs/Const";
import { useFocusEffect } from "@react-navigation/native";
import {
  DATA_LIST,
  DOCTOR_AGREE_LIST,
  RELATED_QUESTIONS,
  RELATED_TOPIC,
} from "configs/Data";
import changeAlias from "utils/stringAlias";
import QuestionItem from "components/QuestionItem";
import { Colors } from "configs";
import SubtitleItem from "components/Consults/SubtilteItem";
import { ICON } from "images/Icon";
import Theme from "style/Theme";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import DoctorInformation from "components/DoctorInformation";

interface SearchResultAllProps {
  searchKey: string;
}

const SearchResultAll = memo(({ searchKey }: SearchResultAllProps) => {
  const [data, setData] = useState<any>();
  const [questionData, setQuestionData] = useState<any>([]);
  const [count, setCount] = useState<number>(5);
  const [topicData, setTopicData] = useState<any>([]);
  const [doctorData, setDoctorData] = useState<any>([]);

  useFocusEffect(
    useCallback(() => {
      let _questionData = [];
      let _topicData = [];
      let _doctorData = [];
      for (let i = 0; i < DATA_LIST.length; i++) {
        if (changeAlias(DATA_LIST[i].name) === changeAlias(searchKey)) {
          setData(DATA_LIST[i]);
        }
      }
      for (let i = 0; i < RELATED_QUESTIONS.length; i++) {
        if (
          changeAlias(RELATED_QUESTIONS[i].question).includes(
            changeAlias(searchKey)
          )
        ) {
          _questionData.push(RELATED_QUESTIONS[i]);
        }
        setQuestionData(_questionData);
      }
      for (let i = 0; i < RELATED_TOPIC.length; i++) {
        if (
          changeAlias(RELATED_TOPIC[i].name).includes(changeAlias(searchKey))
        ) {
          _topicData.push(RELATED_TOPIC[i]);
        }
        setTopicData(_topicData);
      }
      for (let i = 0; i < DOCTOR_AGREE_LIST.length; i++) {
        if (
          changeAlias(DOCTOR_AGREE_LIST[i].name).includes(
            changeAlias(searchKey)
          )
        ) {
          _doctorData.push(DOCTOR_AGREE_LIST[i]);
        }
        setDoctorData(_doctorData);
      }
    }, [])
  );

  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.scrollView}
    >
      {data != null && data != undefined ? (
        <View style={styles.data}>
          <View style={styles.borderBottom}>
            <ImageBackground style={styles.image} source={data.img}>
              <Text
                size={17}
                semiBold
                lineHeight={20}
                color={Colors.White}
                marginLeft={16}
                marginBottom={16}
              >
                {data.name}
              </Text>
            </ImageBackground>
            <Text
              size={13}
              lineHeight={22}
              marginHorizontal={16}
              marginVertical={16}
            >
              {data.description}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.54} style={styles.contentFooter}>
            <Text
              size={13}
              lineHeight={22}
              color={Colors.DodgerBlue}
              marginRight={4}
            >
              Read More
            </Text>
            <Image source={ICON.arrowRight} />
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      <SubtitleItem icon="help" title="Questions">
        {questionData.map((item: any, index: number) => {
          const { question } = item;
          return (
            <>
              {index < count ? (
                <QuestionItem
                  key={index}
                  question={question}
                  numberAnswered={item.numberAnswered}
                  questionColor={Colors.BlueCrayola}
                  style={styles.questionItem}
                />
              ) : index == count ? (
                <TouchableOpacity
                  activeOpacity={0.54}
                  style={styles.contentFooter}
                  key={index}
                >
                  <Text
                    size={13}
                    lineHeight={22}
                    color={Colors.DodgerBlue}
                    marginRight={4}
                  >
                    See All
                  </Text>
                  <Image source={ICON.arrowRight} />
                </TouchableOpacity>
              ) : (
                <View key={index} />
              )}
            </>
          );
        })}
      </SubtitleItem>
      <SubtitleItem icon="topic" title="Topics">
        <>
          {topicData.map((item: any, index: number) => {
            const { name } = item;
            return (
              <>
                {index < count ? (
                  <TouchableOpacity
                    key={index}
                    style={styles.item}
                    activeOpacity={0.54}
                  >
                    <Text
                      size={15}
                      lineHeight={24}
                      color={Colors.BlueCrayola}
                      medium
                    >
                      {name}
                    </Text>
                    {/* <View style={styles.iconFollowed}>
                      <Image sour ce={ICON.followed} tintColor={Colors.White} />
                    </View> */}
                    <View style={styles.iconFollow}>
                      <Image
                        source={ICON.follow}
                        tintColor={Colors.GrayBorder4}
                      />
                    </View>
                  </TouchableOpacity>
                ) : index == count ? (
                  <TouchableOpacity
                    activeOpacity={0.54}
                    style={styles.contentFooter}
                    key={index}
                  >
                    <Text
                      size={13}
                      lineHeight={22}
                      color={Colors.DodgerBlue}
                      marginRight={4}
                    >
                      See All
                    </Text>
                    <Image source={ICON.arrowRight} />
                  </TouchableOpacity>
                ) : (
                  <View key={index} />
                )}
              </>
            );
          })}
        </>
      </SubtitleItem>
      <SubtitleItem
        icon="doctor"
        title="Doctors"
        contentContainerStyle={{ paddingHorizontal: 0 }}
      >
        <>
          {doctorData.map((item: any, index: number) => {
            return (
              <>
                {index < count ? (
                  <DoctorInformation key={index} {...item} />
                ) : index == count ? (
                  <TouchableOpacity
                    activeOpacity={0.54}
                    style={styles.contentFooter}
                    key={index}
                  >
                    <Text
                      size={13}
                      lineHeight={22}
                      color={Colors.DodgerBlue}
                      marginRight={4}
                    >
                      See All
                    </Text>
                    <Image source={ICON.arrowRight} />
                  </TouchableOpacity>
                ) : (
                  <View key={index} />
                )}
              </>
            );
          })}
        </>
      </SubtitleItem>
      <View style={styles.footer}>
        <Text
          bold
          size={15}
          lineHeight={18}
          marginHorizontal={30}
          marginBottom={24}
        >
          Need a help from over 10K+ top doctor?
        </Text>
        <ButtonLinear styleButton={styles.button} title="Get Help Now !" />
      </View>
    </ScrollView>
  );
});

export default SearchResultAll;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  scrollView: {
    paddingBottom: getBottomSpace() + 24,
    paddingHorizontal: 24,
  },
  data: {
    borderRadius: 12,
    backgroundColor: Colors.White,
    overflow: "hidden",
    paddingBottom: 24,
  },
  image: {
    width: width,
    height: 176,
    justifyContent: "flex-end",
  },
  borderBottom: {
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
  },
  questionItem: {
    paddingHorizontal: 0,
  },
  contentFooter: {
    ...Theme.flexRowCenter,
    marginTop: 12,
  },
  iconFollowed: {
    ...Theme.center,
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 12,
    width: 40,
    height: 40,
  },
  iconFollow: {
    ...Theme.center,
    backgroundColor: Colors.Platinum,
    borderRadius: 12,
    width: 40,
    height: 40,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
    ...Theme.flexRowSpace,
  },
  footer: {
    paddingVertical: 32,
    backgroundColor: Colors.White,
    borderRadius: 12,
    marginTop: 16,
    ...Theme.center,
  },
  button: {
    width: 163,
  },
});
