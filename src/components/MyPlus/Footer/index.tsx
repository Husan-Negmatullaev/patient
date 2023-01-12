import React, { memo, useCallback, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Colors } from "configs";
import QuestionItem from "components/QuestionItem";
import { Transition, Transitioning } from "react-native-reanimated";
import Text from "elements/Text";
import DropList from "components/DropList";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { ICON } from "images/Icon";
import Theme from "style/Theme";

interface FooterProps {
  relatedTopics?: any[];
  relatedQuestions?: any[];
}

const Footer = memo(({ relatedTopics, relatedQuestions }: FooterProps) => {
  const renderRelatedTopic = useCallback((item) => {
    return (
      <TouchableOpacity
        key={item.id.toString()}
        style={styles.item}
        activeOpacity={0.54}
      >
        <Text size={15} lineHeight={24} color={Colors.BlueCrayola} medium>
          {item.name}
        </Text>
        <View style={styles.iconFollow}>
          <Image source={ICON.follow} tintColor={Colors.GrayBorder4} />
        </View>
      </TouchableOpacity>
    );
  }, []);

  const renderRelatedQuestion = useCallback((item) => {
    return (
      <QuestionItem
        key={item.id.toString()}
        question={item.question}
        numberAnswered={item.numberAnswered}
        questionColor={Colors.BlueCrayola}
      />
    );
  }, []);

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" />
      <Transition.Change interpolation="linear" />
      <Transition.In type="fade" />
    </Transition.Sequence>
  );
  const transRef: any = useRef<any>();

  return (
    <Transitioning.View
      style={styles.container}
      transition={transition}
      ref={transRef}
    >
      <DropList
        data={relatedTopics}
        renderItem={renderRelatedTopic}
        numberShow={4}
        title={"Related Topics"}
        icon={"topic"}
        refWrap={transRef}
      />
      <DropList
        data={relatedQuestions}
        renderItem={renderRelatedQuestion}
        numberShow={3}
        title={"Related Questions"}
        icon={"helpWhite"}
        refWrap={transRef}
      />
      <View style={styles.box}>
        <Text center bold size={17} lineHeight={22}>
          Have a health question?
        </Text>
        <ButtonLinear style={styles.button} title={"Ask a free now!"} />
      </View>
    </Transitioning.View>
  );
});

export default Footer;

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
    ...Theme.flexRowSpace,
  },
  box: {
    paddingVertical: 32,
    backgroundColor: Colors.White,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: Colors.boxShadow,
    borderRadius: 16,
    marginTop: 16,
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
  button: {
    marginHorizontal: 76,
    marginTop: 24,
  },
});
