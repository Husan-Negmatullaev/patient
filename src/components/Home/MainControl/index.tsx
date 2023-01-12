import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import Theme from "style/Theme";
import { Routes } from "configs";
import FeatureItem from "components/FeatureItem";
import { IMAGE } from "images/Image";

const mainFeature = [
  {
    img: IMAGE.askFreeQuestion,
    title: "Ask a free health \nquestion",
    route: Routes.HealthQuestion,
  },
  {
    img: IMAGE.bgShape,
    title: "Next consults \nfor You",
    route: Routes.Consult,
    numberNext: 3,
  },
  {
    img: IMAGE.healthFeed,
    title: "Health Feed",
    route: Routes.HealthFeed,
  },
  {
    img: IMAGE.consultMange,
    title: "Online Consults",
    route: Routes.OnlineConsult,
  },
];

const MainControl = memo(() => {
  return (
    <View style={styles.container}>
      {mainFeature.map((item) => (
        <FeatureItem {...item} key={item.title} />
      ))}
    </View>
  );
});

export default MainControl;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexDirection,
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 45,
  },
});
