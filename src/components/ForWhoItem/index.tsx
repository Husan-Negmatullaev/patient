import React, { memo, useCallback, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import { Colors } from "configs";
import Theme from "style/Theme";
import { ICON } from "images/Icon";
import { ScrollView } from "react-native-gesture-handler";

interface ForWhoItemProps {
  moreAbout?: boolean;
  children?: any;
  dataPerson?: any;
  onPress?: (item: any) => void;
  multipleSelection?: boolean;
}

const ForWhoItem = memo(
  ({
    moreAbout,
    children,
    dataPerson,
    multipleSelection,
    onPress,
  }: ForWhoItemProps) => {
    const [selectedTaker, setSelectedTaker] = useState(dataPerson);
    const [show, setShow] = useState<boolean>(true);
    const onMoreAbout = () => {
      setShow(!show);
    };

    const onPressSomeoneElse = useCallback(() => {
      dataPerson.push({ id: dataPerson.length, firstName: "Name" });
    }, [dataPerson]);

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.forWho}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {dataPerson.map(
            (item: any, index: number) => {
              const { firstName } = item;
              return (
                <View style={styles.content} key={index}>
                  {item.id == selectedTaker.id ? (
                    <>
                      <ButtonIcon
                        icon="account"
                        width={72}
                        height={72}
                        tintColor={Colors.White}
                        backgroundColor={Colors.DodgerBlue}
                        borderRadius={16}
                        onPress={() => {
                          setSelectedTaker(item);
                          onPress && onPress(item);
                        }}
                      />
                      <Text center size={13} lineHeight={22} marginTop={16}>
                        {firstName}
                      </Text>
                    </>
                  ) : (
                    <View>
                      <ButtonIcon
                        icon="account"
                        width={72}
                        height={72}
                        tintColor={Colors.GrayBlue}
                        backgroundColor={Colors.White}
                        borderColor={Colors.GrayBlue}
                        borderRadius={16}
                        onPress={() => {
                          setSelectedTaker(item);
                        }}
                      />
                      <Text
                        center
                        size={13}
                        lineHeight={22}
                        color={Colors.GrayBlue}
                        marginTop={16}
                      >
                        {firstName}
                      </Text>
                    </View>
                  )}
                </View>
              );
            },
            [dataPerson]
          )}
          <View style={styles.content}>
            <ButtonIcon
              icon="account"
              width={72}
              height={72}
              tintColor={Colors.GrayBlue}
              backgroundColor={Colors.White}
              borderColor={Colors.GrayBlue}
              borderRadius={16}
              onPress={onPressSomeoneElse}
            />
            <Text
              center
              size={13}
              lineHeight={22}
              color={Colors.GrayBlue}
              marginTop={16}
            >
              Someone Else
            </Text>
          </View>
        </ScrollView>
        {moreAbout ? (
          <View>
            <View style={Theme.flexRowSpace}>
              <Text bold size={15} lineHeight={18}>
                More About {selectedTaker.name}
              </Text>
              {show ? (
                <TouchableOpacity
                  style={styles.showIcon}
                  activeOpacity={0.54}
                  onPress={onMoreAbout}
                >
                  <Image source={ICON.arrUp} tintColor={Colors.White} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.showIcon}
                  activeOpacity={0.54}
                  onPress={onMoreAbout}
                >
                  <Image source={ICON.arrowDown} tintColor={Colors.White} />
                </TouchableOpacity>
              )}
            </View>
            {show ? <View>{children}</View> : <></>}
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }
);

export default ForWhoItem;

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    maxHeight: 500,
  },
  forWho: {
    ...Theme.flexRow,
    flexWrap: "wrap",
    paddingHorizontal: 32,
  },
  content: {
    marginHorizontal: 12,
    marginBottom: 24,
    ...Theme.center,
  },
  showIcon: {
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 4,
    padding: 4,
  },
});
