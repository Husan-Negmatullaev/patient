import React, { memo, useLayoutEffect } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Animated,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { width } from "configs/Const";
import { Colors, Routes } from "configs";
import scale from "utils/scale";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import ButtonIconHeader from "elements/Buttons/ButtonIconHeader";
import keyExtractor from "utils/keyExtractor";
import ScrollTabButton from "elements/ScrollableTab/ScrollTabButton";
import Text from "elements/Text";
import { ICON } from "images/Icon";
import { IMAGE } from "images/Image";
import ProfileDoctor from "components/DoctorProfile/ProfileDoctor";
import {
  ABOUT,
  DOCTOR_PROFILE,
  FILTER_INSIGHTS,
  HEALTH_FEED_DATA,
  REVIEWS,
  VISIT_TIME,
  IN_NETWORK,
} from "configs/Data";
import About from "components/DoctorProfile/About";
import Reviews from "components/DoctorProfile/Reviews";
import ServiceItem from "components/DoctorProfile/ServiceItem";
import useModalWithKeyboard from "hooks/useModalWithKeyboard";
import ModalCareServices from "components/ModalCareServices";
import ModalVisitTime from "components/ModalVisitTime";
import Insights from "components/DoctorProfile/Insights";
import InNetwork from "components/DoctorProfile/InNetwork";

export default memo(() => {
  const { setOptions, navigate } = useNavigation();
  const [doctorProfile, setDoctorProfile] = React.useState<any>({});
  const [about, setAbout] = React.useState<any>({});
  const [insights, setInsights] = React.useState<any>({});
  const [inNetwork, setInNetwork] = React.useState<any>({});
  const [reviews, setReviews] = React.useState<any>({});
  const [filterInsights, setFilterInsights] = React.useState<any>([]);
  const [visitTime, setVisitTime] = React.useState<any>([]);
  const [tabActive, setTabActive] = React.useState<any>(0);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const {
    visible: visibleCareServices,
    open: openCareServices,
    close: closeCareServices,
    translateY: translateYCareServices,
  } = useModalWithKeyboard(false);

  const {
    visible: visibleVisitTime,
    open: openVisitTime,
    close: closeVisitTime,
    translateY: translateYVisitTime,
  } = useModalWithKeyboard(false);

  useFocusEffect(
    React.useCallback(() => {
      setDoctorProfile(DOCTOR_PROFILE);
      setAbout(ABOUT);
      setReviews(REVIEWS);
      setVisitTime(VISIT_TIME);
      setInsights(HEALTH_FEED_DATA);
      setFilterInsights(FILTER_INSIGHTS);
      setInNetwork(IN_NETWORK);
    }, [])
  );

  const DATA = [{ id: 0 }, { id: 1 }, { id: 2 }];
  const TABS = ["About", "Insights", "In Network", "Reviews"];
  const CARE_SERVICES = [
    {
      color: Colors.TiffanyBlue,
      icon: "message",
      title: "Send Message",
      route: Routes.MessageConsultDetail,
    },
    {
      color: Colors.DodgerBlue,
      icon: "video",
      title: "Video/Chat",
      route: Routes.CareServiceDetails,
    },
    {
      color: Colors.BlueCrayola,
      icon: "appointmentActive",
      title: "Appointment",
      route: Routes.SelectVisitTime,
    },
  ];
  const scrollDistance = 300;

  const heightAnim = scrollY.interpolate({
    inputRange: [0, scrollDistance / 2, scrollDistance],
    outputRange: [0, 0, 108 - getStatusBarHeight()],
    extrapolate: "clamp",
  });

  const opacityAnim = scrollY.interpolate({
    inputRange: [0, scrollDistance / 5, scrollDistance],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });

  const opacityAnim1 = scrollY.interpolate({
    inputRange: [0, scrollDistance / 1.5, scrollDistance],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const height = { height: heightAnim };
  const opacity = { opacity: opacityAnim };
  const opacity1 = { opacity: opacityAnim1 };

  useLayoutEffect(() => {
    setOptions({
      headerStyle: {
        shadowColor: "transparent",
        backgroundColor: Colors.White,
      },
      header: () => (
        <Animated.View style={[styles.headerAnim, height, opacity1]}>
          <View style={Theme.flexRow}>
            <ButtonIconHeader marginLeft={24} />
            <Text bold size={15} lineHeight={18} marginLeft={16}>
              {doctorProfile.name}
            </Text>
          </View>
          <View style={Theme.flexRow}>
            <ButtonIconHeader
              borderColor={Colors.Orange}
              tintColor={Colors.White}
              backgroundColor={Colors.Orange}
              icon={"addedCareTeam"}
            />
            <ButtonIconHeader
              borderColor={Colors.DodgerBlue}
              tintColor={Colors.DodgerBlue}
              marginLeft={24}
              icon={"share"}
            />
          </View>
        </Animated.View>
      ),
    });
  }, [height, scrollY, setOptions]);

  const handleChangeTab = React.useCallback((index) => {
    setTabActive(index);
  }, []);

  const handlePressShare = React.useCallback(() => {}, []);

  const renderItem = React.useCallback(
    ({ item }) => {
      if (item.id === 0) {
        return (
          <Animated.View>
            <Image style={styles.background} source={IMAGE.background} />
            <View style={styles.box}>
              <View style={Theme.flexRowSpace}>
                <View style={Theme.flexRow}>
                  <Text bold size={13}>
                    Primary Care Services
                  </Text>
                  <TouchableOpacity
                    onPress={openCareServices}
                    activeOpacity={0.54}
                  >
                    <Image style={styles.addtional} source={ICON.addtional} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={openVisitTime} activeOpacity={0.54}>
                  <Text size={13} lineHeight={16} color={Colors.DodgerBlue}>
                    Available visit hours
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[Theme.flexRowSpace, { marginTop: 24 }]}>
                {CARE_SERVICES.map((item: any, index: number) => {
                  const marginRight =
                    index < CARE_SERVICES.length - 1
                      ? { marginRight: 8 }
                      : null;
                  return (
                    <ServiceItem style={marginRight} {...item} key={index} />
                  );
                })}
              </View>
              <ProfileDoctor {...doctorProfile} />
            </View>
          </Animated.View>
        );
      } else if (item.id === 1) {
        return (
          <View style={styles.tabView}>
            {TABS.map((item, index) => {
              return (
                <ScrollTabButton
                  labelStyle={styles.labelStyle}
                  key={index}
                  title={item}
                  onPressTab={() => handleChangeTab(index)}
                  focus={tabActive === index}
                />
              );
            })}
          </View>
        );
      } else if (item.id === 2) {
        return tabActive === 0 ? (
          <About {...about} />
        ) : tabActive === 1 ? (
          <Insights insights={insights} filterInsights={filterInsights} />
        ) : tabActive === 2 ? (
          <InNetwork inNetwork={inNetwork} />
        ) : (
          <Reviews {...reviews} />
        );
      }
    },
    [
      about,
      doctorProfile,
      tabActive,
      reviews,
      openCareServices,
      openVisitTime,
      insights,
      inNetwork,
    ]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        bounces={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        stickyHeaderIndices={[1]}
        contentContainerStyle={styles.contentContainerStyle}
        onScroll={onScroll}
      />
      <Animated.View style={[styles.header, opacity]}>
        <ButtonIconHeader
          backgroundColor={Colors.DarkJungleGreenOpacity}
          style={styles.buttonHeader}
          tintColor={Colors.White}
        />
        <View style={Theme.flexRow}>
          <ButtonIconHeader
            backgroundColor={Colors.DarkJungleGreenOpacity}
            style={styles.buttonHeader}
            icon={"addCareTeam"}
            marginRight={24}
            onPress={handlePressShare}
          />
          <ButtonIconHeader
            backgroundColor={Colors.DarkJungleGreenOpacity}
            style={styles.buttonHeader}
            icon={"share"}
            onPress={handlePressShare}
          />
        </View>
      </Animated.View>
      <Modal
        visible={visibleCareServices}
        onRequestClose={closeCareServices}
        transparent
        animationType={"fade"}
      >
        <ModalCareServices
          close={closeCareServices}
          translateY={translateYCareServices}
          handlePressOK={closeCareServices}
        />
      </Modal>
      <Modal
        visible={visibleVisitTime}
        onRequestClose={closeVisitTime}
        transparent
        animationType={"fade"}
      >
        <ModalVisitTime
          data={visitTime}
          close={closeVisitTime}
          translateY={translateYVisitTime}
          handleBookAppointment={closeVisitTime}
        />
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  background: {
    width: width,
    height: scale(253),
  },
  box: {
    paddingTop: 85,
    paddingBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: Colors.White,
  },
  iconEdit: {
    marginRight: 12,
  },
  buttonUpdate: {
    marginTop: 0,
    marginHorizontal: 46,
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  contentContainerStyle: {
    paddingTop: -1,
    paddingBottom: getBottomSpace() + 38,
  },
  header: {
    ...Theme.flexRowSpace,
    position: "absolute",
    width: width,
    paddingHorizontal: 24,
    top: Platform.OS === "ios" ? getStatusBarHeight() + 22 : 22,
  },
  tabView: {
    ...Theme.flexRow,
    backgroundColor: Colors.White,
    paddingHorizontal: 16,
  },
  buttonHeader: {
    borderWidth: 0,
    borderRadius: 12,
  },
  headerAnim: {
    paddingTop: 1,
    ...Theme.flexRowSpace,
    paddingRight: 24,
    backgroundColor: Colors.White,
  },
  addtional: {
    tintColor: Colors.DodgerBlue,
    marginLeft: 4,
  },
});
