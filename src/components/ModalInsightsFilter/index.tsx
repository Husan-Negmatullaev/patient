import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Theme from "style/Theme";
import { ICON } from "images/Icon";

interface Props {
  translateY: any;
  close: () => void;
  data?: any;
  handleShowResults?: () => void;
}

export default React.memo(
  ({ translateY, close, data, handleShowResults }: Props) => {
    const [filter, setFilter] = React.useState<any>([]);
    const [all, setAll] = React.useState<boolean>(false);

    const onHandleRemove = (item: any) => {
      const filteredItems = filter.filter((e: any) => e.id !== item.id);
      setFilter(() => filteredItems);
    };

    const _handlePressFilterInsight = React.useCallback(
      (item) => {
        if (filter.includes(item)) {
          onHandleRemove(item);
        } else {
          setFilter((prevState: any) => [...prevState, item]);
        }
      },
      [filter, onHandleRemove]
    );

    const handlePressAllFilter = React.useCallback(() => {
      if (all) {
        setFilter([]);
        setAll(false);
      } else {
        setFilter(() => [...data]);
        setAll(true);
      }
    }, [data, all]);

    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          onPress={close}
          activeOpacity={1}
        />
        <Animated.View
          style={[
            styles.modal,
            { transform: [{ translateY: Animated.multiply(1, translateY) }] },
          ]}
        >
          <View style={Theme.buttonSlider} />
          <Text
            marginTop={22}
            bold
            marginHorizontal={24}
            size={17}
            lineHeight={24}
          >
            Filter Insights
          </Text>
          <View style={styles.line} />
          <Text marginTop={24} marginLeft={24} bold>
            Only show:
          </Text>
          <TouchableOpacity
            activeOpacity={0.54}
            onPress={handlePressAllFilter}
            style={styles.item}
          >
            <Text size={15} lineHeight={24}>
              Everything
            </Text>
            {all ? (
              <View style={styles.image}>
                <Image source={ICON.checkBoxActive} />
              </View>
            ) : (
              <View style={styles.box} />
            )}
          </TouchableOpacity>
          {data.map((item: any, index: number) => {
            const { title, id } = item;

            const checkId = filter.findIndex((i: any) => i.id === id) >= 0;

            return (
              <TouchableOpacity
                activeOpacity={0.54}
                onPress={() => _handlePressFilterInsight(item)}
                style={styles.item}
                key={index}
              >
                <Text size={15} lineHeight={24}>
                  {title}
                </Text>
                {checkId ? (
                  <View style={styles.image}>
                    <Image source={ICON.checkBoxActive} />
                  </View>
                ) : (
                  <View style={styles.box} />
                )}
              </TouchableOpacity>
            );
          })}
          <View style={styles.viewButton}>
            <ButtonLinear
              onPress={handleShowResults}
              title={"Show +254 results"}
              style={styles.button}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000054",
  },
  modal: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    height: "auto",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  line: {
    height: 1,
    backgroundColor: Colors.WhiteSmoke,
    marginTop: 24,
  },
  viewButton: {
    paddingHorizontal: 24,
    marginBottom: getBottomSpace() + 8,
    marginTop: 8,
  },
  button: {
    marginTop: 8,
  },
  icon: {
    marginRight: 8,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    ...Theme.flexRowSpace,
  },
  box: {
    width: 20,
    height: 20,
    borderColor: "#979797",
    borderRadius: 3,
    borderWidth: 1,
  },
  image: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
