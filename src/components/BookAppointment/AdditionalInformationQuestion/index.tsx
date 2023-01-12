import React, { memo, useCallback, useState } from "react";
import { View, StyleSheet, Switch, Image } from "react-native";
import Text from "elements/Text";
import Theme from "style/Theme";
import { width } from "configs/Const";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import { ICON } from "images/Icon";
import { Colors } from "configs";

interface AdditionalInformationQuestionItemProps {
  title?: string;
  buttonTitle?: string;
  list?: any;
  onAdd?: () => void;
}

const AdditionalInformationQuestionItem = memo(
  ({
    title,
    buttonTitle,
    list,
    onAdd,
  }: AdditionalInformationQuestionItemProps) => {
    const [show, setShow] = useState(true);
    const onSwitch = () => {
      setShow(!show);
    };

    const onPress = useCallback(() => {
      onAdd && onAdd();
      setShow(true);
    }, []);

    return (
      <View style={styles.container}>
        <View style={[Theme.flexRowSpace, { marginBottom: 12 }]}>
          <Text style={{ maxWidth: 200 }} size={15} lineHeight={24}>
            {title}
          </Text>
          <Switch value={show} onValueChange={onSwitch} />
        </View>
        {show ? (
          <>
            {list != null && list != undefined ? (
              <View style={styles.content}>
                {list.map((item: any, index: number) => {
                  const { name, date } = item;
                  return (
                    <View key={index} style={styles.child}>
                      <Text size={13} lineHeight={16}>
                        {name}
                      </Text>
                      <View style={Theme.flexRow}>
                        <Text
                          size={13}
                          lineHeight={16}
                          color={Colors.GrayBlue}
                          marginRight={8}
                        >
                          {date}
                        </Text>
                        <Image source={ICON.option} />
                      </View>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View />
            )}
            <ButtonBorder
              title={buttonTitle}
              height={36}
              iconLeft={ICON.plus}
              tintColor={Colors.DodgerBlue}
              color={Colors.GrayBlue}
              onPress={onPress}
            />
          </>
        ) : (
          <View />
        )}
      </View>
    );
  }
);

export default AdditionalInformationQuestionItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 36,
  },
  content: {
    paddingBottom: 12,
  },
  child: {
    ...Theme.flexRowSpace,
    backgroundColor: Colors.WhiteSmoke,
    marginBottom: 12,
    borderRadius: 4,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 8,
  },
});
