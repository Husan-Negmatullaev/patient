import React, { memo } from "react";
import { View, StyleSheet, Image } from "react-native";
import Theme from "style/Theme";
import Text from "elements/Text";
import { AVATAR } from "images/Avatar";

interface GreetingProps { }

const Greeting = memo((props: GreetingProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={AVATAR.avatar2}
        style={{ width: 40, height: 40, marginRight: 16 }}
      />
      <View style={{ justifyContent: "space-between", height: 40 }}>
        <Text size={17} lineHeight={20} bold>
          Hi Devin,
        </Text>
        <Text size={15} lineHeight={18}>
          How’re you today?
        </Text>
      </View>
    </View>
  );
});

export default Greeting;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRow,
  },
});
