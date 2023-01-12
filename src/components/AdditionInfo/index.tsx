import React, { Dispatch, memo, SetStateAction } from "react";
import { View, StyleSheet, Image, ViewStyle } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import scale from "utils/scale";
import SettingItem from "../AskFreeQuestion/SettingItem";
import { dataAddition } from "type/healthyQuestion";
import { ICON } from "images/Icon";
import { condition } from "type/condition";
import ButtonIconText from "elements/Buttons/ButtonIconText";
import Theme from "style/Theme";

interface Props {
  data: Array<dataAddition>;
  onPress: (item: dataAddition) => void;
  onPressAdd: () => void;
  onPressMore: Dispatch<SetStateAction<condition>>;
  setModalMore: Dispatch<SetStateAction<number>>;
  openModalMore: () => void;
  selectHealthyData?: boolean;
}

const AdditionInfo = memo((props: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.frameImg}>
        <Image
          source={ICON.additionalInformation}
          resizeMode="center"
          style={styles.img}
        />
        <Text size={15} lineHeight={18} bold center>Additional Information</Text>
      </View>
      <View style={{ padding: scale(24) }}>
        {props.data.map((item: dataAddition, index) => {
          return <SettingItem
            style={{ marginTop: index == 0 ? scale(24) : scale(36) }}
            enable={item.check}
            onSwitch={() => { props.onPress(item) }}
            title={item.title}
            isSwitch={true}
            condisitons={item.conditions}
            onPressAdd={() => { props.onPressAdd() }}
            onPressMore={props.onPressMore}
            setModalMore={props.setModalMore}
            openModalMore={props.openModalMore}
          />
        })}
      </View>
      {
        props.selectHealthyData ?
          <View style={styles.frameHealth}>
            <Text size={13} lineHeight={16} bold>Sync with Health Services</Text>
            <Text size={13} lineHeight={22} marginTop={scale(16)}>By importing your health data from Smart{"\n"}Devices, Doctor can better help you.</Text>
            <ButtonIconText
              icon={"healthyBlue"}
              iconStyle={styles.iconstyle}
              title={"Add Attachments"}
              titleColor={Colors.GrayBlue}
              textProps={{ bold: true, size: 15, lineHeight: 18, marginLeft: 8 }}
              style={styles.styleButton}
            />
            <View style={styles.buttonSecurity}>
              <Image
                style={styles.iconSecurity}
                source={ICON.security}
              />
              <Text size={11} lineHeight={14} >
                {"HIPAA Secure"}
              </Text>
            </View>
          </View>
          : null
      }
    </View>
  );
});

export default AdditionInfo;

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(16),
    backgroundColor: Colors.White
  },
  frameImg: {
    flexDirection: 'row',
    padding: scale(16),
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.WhiteSmoke
  },
  img: {
    width: scale(32),
    height: scale(32),
    marginRight: scale(16),
    marginLeft: scale(8)
  },
  iconstyle: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(8)
  },
  styleButton: {
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(24),
    borderWidth: 1,
    borderColor: Colors.Platinum
  },
  iconSecurity: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(8)
  },
  frameHealth: {
    marginTop: scale(12),
    padding: scale(24),
    borderTopWidth: scale(1),
    borderTopColor: Colors.WhiteSmoke
  },
  buttonSecurity: {
    ...Theme.flexRowCenter,
    marginTop: scale(8)
  },
});