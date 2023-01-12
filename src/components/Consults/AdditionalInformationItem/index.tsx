import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { Colors } from "configs";

interface AdditionalInformationItemProps {
  diagnosedConditions?: any;
  medications?: any;
  allergies?: any;
}

const AdditionalInformationItem = memo(
  ({
    diagnosedConditions,
    medications,
    allergies,
  }: AdditionalInformationItemProps) => {
    return (
      <View style={styles.container}>
        <View>
          <Text size={15} lineHeight={18} marginBottom={12}>
            Diagnosed Conditions
          </Text>
          {diagnosedConditions == null ? (
            <Text size={15} lineHeight={18} color={Colors.GrayBlue}>
              None
            </Text>
          ) : (
            <View style={Theme.flexRow}>
              <Text size={15} lineHeight={18}>
                {diagnosedConditions.value}
              </Text>
              <Text
                size={15}
                lineHeight={18}
                color={Colors.GrayBlue}
                marginLeft={8}
              >
                ({diagnosedConditions.time})
              </Text>
            </View>
          )}
        </View>
        <View style={styles.medication}>
          <Text size={15} lineHeight={18} marginBottom={12}>
            Medications
          </Text>
          {medications == null ? (
            <Text size={15} lineHeight={18} color={Colors.GrayBlue}>
              None
            </Text>
          ) : (
            <View style={Theme.flexRow}>
              <Text size={15} lineHeight={18}>
                {medications.value}
              </Text>
              <Text
                size={15}
                lineHeight={18}
                color={Colors.GrayBlue}
                marginLeft={8}
              >
                ({medications.time})
              </Text>
            </View>
          )}
        </View>
        <View>
          <Text size={15} lineHeight={18} marginBottom={12}>
            Allergies
          </Text>
          {allergies == null ? (
            <Text size={15} lineHeight={18} color={Colors.GrayBlue}>
              None
            </Text>
          ) : (
            <View style={Theme.flexRow}>
              <Text size={15} lineHeight={18}>
                {allergies.value}
              </Text>
              <Text
                size={15}
                lineHeight={18}
                color={Colors.GrayBlue}
                marginLeft={8}
              >
                ({allergies.time})
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
);

export default AdditionalInformationItem;

const styles = StyleSheet.create({
  container: {},
  medication: {
    marginTop: 28,
    marginBottom: 32,
  },
});
