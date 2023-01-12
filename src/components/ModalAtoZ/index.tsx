import { Colors, Constants } from "configs";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Animated, { sub } from "react-native-reanimated";
import Text from "elements/Text";
import { Alphabet } from "configs/Data";
import Theme from "style/Theme";

interface ModalAtoZProps {
  children?: any;
  onClose: () => void;
  transY: Animated.Node<number>;
  onPressItem?: (char: string) => void;
}

const ModalAtoZ = (props: ModalAtoZProps) => {
  const [selectedAlphabet, setSelectedAlphabet] = useState<any>({});
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onClose}
        activeOpacity={1}
        style={StyleSheet.absoluteFillObject}
      />
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [
              {
                translateY: sub(0, props.transY),
              },
            ],
          },
        ]}
      >
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Text bold size={15} lineHeight={48} center color={Colors.GrayBlue}>
            #
          </Text>
          {Alphabet.map((item, index) => {
            const { char, id } = item;
            return (
              <TouchableOpacity
                style={
                  id == selectedAlphabet.id
                    ? styles.alphabetSelected
                    : styles.alphabet
                }
                key={index}
                activeOpacity={0.54}
                onPress={() => {
                  setSelectedAlphabet(item);
                  props.onPressItem && props.onPressItem(item.char);
                }}
              >
                <Text bold size={15} lineHeight={48} center>
                  {char}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default ModalAtoZ;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ModalBackground,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    paddingBottom: 24,
  },
  scrollView: {},
  modal: {
    width: 80,
    bottom: -Constants.height,
    borderRadius: 16,
    backgroundColor: Colors.White,
    height: "50%",
    marginBottom: 100,
    ...Theme.center,
  },
  alphabet: {
    width: 40,
    height: 40,
    ...Theme.center,
  },
  alphabetSelected: {
    width: 40,
    height: 40,
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 12,
    ...Theme.center,
  },
});
