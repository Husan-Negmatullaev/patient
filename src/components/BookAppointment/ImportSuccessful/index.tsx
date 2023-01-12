import React, { memo } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import { IMAGE } from "images/Image";
import { Colors } from "configs";

export default memo(() => {
  return (
    <View style={styles.container}>
      <Text center size={17} lineHeight={20}>
        Successfully imported!
      </Text>
      <Text center size={13} lineHeight={22} marginTop={16} marginBottom={32}>
        Your Health App data will be shown to doctor to give you better care!
      </Text>
      <View style={Theme.flexRowCenter}>
        <Image source={IMAGE.appleHealth} />
        <View style={styles.icon}>
          <View style={styles.midIcon}>
            <Image
              source={ICON.back}
              style={{ width: 16, height: 16 }}
              tintColor={Colors.White}
            />
          </View>
          <Image source={IMAGE.rightLine} />
        </View>
        <View style={styles.image}>
          <Image source={IMAGE.logo} />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  icon: {
    marginHorizontal: 24,
    ...Theme.center,
  },
  image: {
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.WhiteSmoke,
  },
  midIcon: {
    position: "absolute",
    backgroundColor: Colors.ForestGreen,
    borderRadius: 30,
    padding: 2,
  },
});
