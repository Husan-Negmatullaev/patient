import React, { memo } from "react";
import { View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Text from "elements/Text";
import scale from "utils/scale";
import { Colors, Constants } from "configs";
import Animated, { sub } from "react-native-reanimated";
import ImageBackgroundCustom from "components/TodayTasks/ImageBackgroundCustom";
import Theme from "style/Theme";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { speciality } from "type/speciality";
import { IMAGE } from "images/Image";


interface Props {
  open: () => void;
  close: () => void;
  transY: Animated.Node<number>;
  specialCurrent: speciality;
  onPress: () => void;
}

const ModalConfirm = memo(({ open, onPress, close, transY, specialCurrent }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={close}
        activeOpacity={1}
        style={StyleSheet.absoluteFillObject}
      />
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [
              {
                translateY: sub(0, transY),
              },
            ],
          },
        ]}
      >
        <Text size={17} lineHeight={20} center bold marginTop={scale(8)}>{specialCurrent.name}</Text>
        <View style={{ alignItems: 'center', marginTop: scale(32) }}>
          <ImageBackground
            style={{ width: scale(80), height: scale(80), justifyContent: 'center', alignItems: 'center' }}
            source={IMAGE.bgShape}
            resizeMode="center"
          >
            <Text
              marginTop={scale(8)}
              center
              size={56}
              color={Colors.TealBlue}
            >
              {specialCurrent.doctorAvailable}
            </Text>
          </ImageBackground>
        </View>
        <Text size={15} lineHeight={24} center marginTop={scale(24)}>{'Have'} {specialCurrent.doctorAvailable} doctors available now. Do you want to continue?</Text>
        <View style={styles.styleButton}
        >
          <ButtonBorder
            style={{ flex: 1, marginRight: 8 }}
            title={"Cancel"}
            onPress={close}
          />
          <ButtonLinear
            styleButton={{ flex: 1, marginLeft: 8 }}
            style={{ marginTop: 0 }}
            title={"Continue"}
            onPress={onPress}
          />
        </View>

      </Animated.View>
    </View>
  );
});

export default ModalConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ModalBackground,
    justifyContent: "center",
    alignItems: 'center'
  },
  modal: {
    //position: "absolute",
    bottom: -Constants.height,
    borderRadius: scale(16),
    backgroundColor: Colors.White,
    padding: scale(24),
    width: '90%',
    height: scale(350),
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  styleButton: {
    ...Theme.flexRowSpace,
    marginTop: scale(32),
    marginBottom: scale(32)
  }
  // content: {
  //   backgroundColor: 'red',
  //   width: '100%', height: '100%',
  // },

});
