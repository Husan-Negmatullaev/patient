import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import CareServiceItem from "components/DoctorProfile/CareServiceItem";
import { MODAL_CARE_SERVICES } from "configs/Data";

export default React.memo(
  ({
    translateY,
    close,
    handlePressOK,
  }: {
    translateY: any;
    close: () => void;
    handlePressOK: () => void;
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
            Primary Care Services
          </Text>
          <View style={styles.line} />
          {MODAL_CARE_SERVICES.map((item: any, index: number) => {
            return <CareServiceItem key={index} {...item} />;
          })}
          <View style={styles.viewButton}>
            <ButtonLinear onPress={handlePressOK} title={"OK"} />
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
});
