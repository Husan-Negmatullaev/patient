import React, { memo } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import { width } from "configs/Const";
import { Colors } from "configs";
import TabBar from "elements/TabBar";
import AnimatedCircle from "./AnimatedCircle";
import Theme from "style/Theme";
import ReviewItem from "./ReviewItem";
import { ICON } from "images/Icon";

interface Props {
  content?: any;
  rating?: number;
  reviews?: number;
  review?: any;
}

const Reviews = memo(({ content, rating, reviews, review }: Props) => {
  const [tabActive, setTabActive] = React.useState<number>(0);

  const handleWriteReview = React.useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <TabBar
        onChangeTab={(index: number) => setTabActive(index)}
        style={styles.tabBar}
        tabs={["From Patients", "From Colleagues"]}
      />
      {tabActive === 0 && (
        <>
          <View style={styles.topView}>
            {content &&
              content.map((item: any, index: number) => {
                return (
                  <AnimatedCircle key={index} startAnim={true} {...item} />
                );
              })}
          </View>
          <View style={styles.writeReview}>
            <View>
              <Text bold size={17} lineHeight={22}>
                Reviews
              </Text>
              <View style={styles.review}>
                <Image source={ICON.starRate} />
                <Text size={13} lineHeight={16} semiBold marginHorizontal={4}>
                  {rating}
                </Text>
                <Text size={13} lineHeight={16} color={Colors.GrayBlue}>
                  ({reviews} reviews)
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.54}
              onPress={handleWriteReview}
              style={styles.button}
            >
              <Image source={ICON.edit} />
              <Text size={13} bold marginLeft={10} color={Colors.White}>
                Write a Review
              </Text>
            </TouchableOpacity>
          </View>
          {review &&
            review.map((item: any, index: number) => {
              return (
                <ReviewItem style={styles.reviewItem} key={index} {...item} />
              );
            })}
        </>
      )}
    </View>
  );
});

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: Colors.Snow,
  },
  tabBar: {
    marginTop: 24,
    marginHorizontal: 24,
    alignSelf: "center",
    position: "absolute",
  },
  topView: {
    ...Theme.flexRowSpace,
    marginTop: 104,
    marginHorizontal: 30,
    paddingBottom: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
  },
  review: {
    marginTop: 8,
    ...Theme.flexRow,
  },
  reviewItem: {
    marginTop: 32,
    marginHorizontal: 24,
  },
  button: {
    ...Theme.flexRow,
    backgroundColor: Colors.DodgerBlue,
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 8,
  },
  writeReview: {
    paddingHorizontal: 24,
    marginTop: 32,
    ...Theme.flexRowSpace,
  },
});
