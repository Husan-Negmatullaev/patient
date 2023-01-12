import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import VisitTimeItem from "components/DoctorProfile/VisitTimeItem";
import { ICON } from "images/Icon";

export default React.memo(
  ({
    translateY,
    close,
    data,
    handleBookAppointment,
  }: {
    translateY: any;
    close: () => void;
    data?: any;
    handleBookAppointment?: () => void;
  }) => {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          onPress={close}
          activeOpacity={1}
        />
        <Animated.View
          style={[
            styles.modal,
            { transform: [{ translateY: Animated.multiply(1, translateY) }] },
          ]}
        >
          <View style={Theme.buttonSlider} />
          <Text
            marginTop={22}
            bold
            marginHorizontal={24}
            size={17}
            lineHeight={24}
          >
            Available Visit Time
          </Text>
          <View style={styles.line} />
          {data.map((item: any, index: number) => {
            return <VisitTimeItem key={index} {...item} />;
          })}
          <View style={styles.viewButton}>
            <ButtonLinear
              leftChildren={<Image source={ICON.addPlan} style={styles.icon} />}
              onPress={handleBookAppointment}
              title={"Book an Appointment"}
              style={styles.button}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000054",
  },
  modal: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    height: "auto",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  line: {
    height: 1,
    backgroundColor: Colors.WhiteSmoke,
    marginTop: 24,
  },
  viewButton: {
    paddingHorizontal: 24,
    marginBottom: getBottomSpace() + 8,
  },
  button: {
    marginTop: 8,
  },
  icon: {
    marginRight: 8,
  },
});
