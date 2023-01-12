import React, { memo, useCallback, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "elements/Text";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Colors } from "configs";
import scale from "utils/scale";
import Theme from "style/Theme";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import InputApp from "elements/InputApp";
import { dataPerson } from "type/healthyQuestion";
import { ICON } from "images/Icon";

interface Props {
  idCurrent?: number;
  addSomeone: (item: dataPerson) => void;
  open: () => void;
  close: () => void;
}

const ModalAddSomeone = memo(({ open, close, addSomeone, idCurrent }: Props) => {
  const [firstName, setFirstName] = useState("Devin");
  const [lastName, setLastName] = useState("Sheton");
  const [relation, setRelation] = useState("Dauter");
  const [birthday, setBirthday] = useState("02/12/1956");
  const onAdd = useCallback(() => {
    addSomeone({
      id: idCurrent || 1,
      firstName: firstName,
      lastName: lastName,
      relationshipToYou: relation,
      birthday: birthday,
      isAdd: false,
      check: false,
    })
    close();
  }, [])
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.frame}
      >
        <Text size={17} lineHeight={20} bold>
          Add a profile for Someone
            </Text>
      </View>
      <View style={styles.frameInput}>
        <InputApp
          title={"First Name"}
          marginTop={scale(38)}
          value={firstName}
          onChangeText={setFirstName}
        />
        <InputApp
          title={"Last Name"}
          marginTop={scale(24)}
          value={lastName}
          onChangeText={setLastName}
        />
        <InputApp
          title={"Relationship to You"}
          marginTop={scale(24)}
          value={relation}
          onChangeText={setRelation}
        />
        <InputApp
          title={"DOB"}
          marginTop={scale(24)}
          value={birthday}
          onChangeText={setBirthday}
          iconLeft={
            <Image
              source={ICON.calendar}
              style={Theme.icons}
            />
          }
          isShowIconLeft
        />
      </View>

      <View style={styles.styleButton}>
        <ButtonBorder
          style={{ flex: 1, marginRight: 8 }}
          title={"Cancel"}
          onPress={close}
        />
        <ButtonLinear
          styleButton={{ flex: 1, marginLeft: 8 }}
          style={{ marginTop: 0 }}
          title={"Add"}
          onPress={onAdd}
        />
      </View>
    </View>
  );
}
);

export default ModalAddSomeone;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(22),
    paddingBottom: scale(42) + getBottomSpace(),
  },
  frame: {
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
  },
  frameInput: {
    paddingLeft: scale(24),
    paddingRight: scale(24),
  },
  styleButton: {
    ...Theme.flexRow,
    marginTop: scale(32),
    marginHorizontal: scale(24),
  },
});
