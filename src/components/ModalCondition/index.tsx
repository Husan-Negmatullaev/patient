import React, {
  memo,
  useCallback,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "elements/Text";
import ModalSlideBottom from "components/ModalSlideBottom";

import { getBottomSpace } from "react-native-iphone-x-helper";
import { Colors } from "configs";
import scale from "utils/scale";
import Theme from "style/Theme";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { useNavigation } from "@react-navigation/native";
import InputApp from "elements/InputApp";
import { ICON } from "images/Icon";
import { condition } from "type/condition";
import moment from "moment";
interface Props {
  open: () => void;
  close: () => void;
  item: condition | any;
  addCondition: (item: condition) => void;
  typeModalCondition: string;
}

const ModalCondition = memo(
  ({ open, close, addCondition, item, typeModalCondition }: Props) => {
    const [name, setName] = useState<string>(item?.name);
    const [note, setNote] = useState<string>(item?.note);
    const [isNow, setIsNow] = useState(item?.isNow);
    const [lengthText, setLengthText] = useState(0);
    const { navigate } = useNavigation();
    const onChangeText = React.useCallback((text: string) => {
      setNote(text);
      setLengthText(text.length);
    }, []);
    const onAdd = useCallback(() => {
      addCondition({
        id: item.id,
        name: name,
        note: note,
        isNow: isNow,
        date: moment(new Date()).format("DD/MM/YYYY"),
      });
    }, [name, note, isNow]);
    return (
      <View style={styles.container}>
        <View style={styles.frame}>
          <Text size={17} lineHeight={20} bold>
            {typeModalCondition == "Add"
              ? "Add condition or symptom"
              : "Edit condition or symptom"}
          </Text>
        </View>
        <View style={styles.frame1}>
          <InputApp
            title={"Condition Name"}
            marginTop={scale(38)}
            value={name}
            onChangeText={setName}
          />
          <View style={styles.frame2}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => setIsNow(true)}
              disabled={isNow}
            >
              {isNow ? (
                <Image
                  style={styles.imgActive}
                  source={ICON.radioActive}
                  resizeMode={"center"}
                />
              ) : (
                <View style={styles.imgNoActive}></View>
              )}

              <Text type="H5" marginLeft={scale(8)}>
                Have this now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => setIsNow(false)}
              disabled={!isNow}
            >
              {!isNow ? (
                <Image
                  style={styles.imgActive}
                  source={ICON.radioActive}
                  resizeMode={"center"}
                />
              ) : (
                <View style={styles.imgNoActive}></View>
              )}
              <Text type="H5" marginLeft={scale(8)}>
                Used to have this
              </Text>
            </TouchableOpacity>
          </View>
          <Text type="H6" semiBold>
            {"Optional Note"}
          </Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="e.g sereritty and nature of condition previous date of occurrence"
              placeholderTextColor={Colors.Platinum}
              textAlignVertical="top"
              maxLength={150}
              multiline
              value={note}
              onChangeText={onChangeText}
              disableFullscreenUI={true}
            ></TextInput>
            <View style={styles.styleTextNote}>
              <Text
                marginLeft={scale(16)}
                right
                size={scale(11)}
                lineHeight={scale(14)}
                marginTop={scale(8)}
                color={Colors.GrayBlue}
              >
                {lengthText}/150
              </Text>
            </View>
          </View>
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
            title={typeModalCondition == "Add" ? "Add" : "Save"}
            onPress={onAdd}
          />
        </View>
      </View>
    );
  }
);

export default ModalCondition;

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
  frame1: {
    paddingLeft: scale(24),
    paddingRight: scale(24),
  },
  frame2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale(24),
    marginBottom: scale(24),
  },
  touch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgActive: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(20),
  },
  imgNoActive: {
    width: scale(19),
    height: scale(19),
    borderRadius: scale(19),
    borderColor: Colors.GrayBoder1,
    borderWidth: scale(1),
  },
  textInput: {
    width: scale(327),
    height: scale(110),
    borderRadius: scale(8),
    backgroundColor: Colors.White,
    padding: scale(16),
    borderColor: Colors.Platinum,
    borderWidth: scale(1),
  },
  styleTextNote: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  styleButton: {
    ...Theme.flexRow,
    marginTop: scale(32),
    marginHorizontal: scale(24),
  },
});
