import React, { memo, useCallback, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import Theme from "style/Theme";
import { Colors } from "configs";
import Animated, { Transitioning, Transition } from "react-native-reanimated";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import Text from "elements/Text";
import { ICON } from "images/Icon";

interface DropListProps {
  data: any[];
  numberShow?: number;
  renderItem: (item: any) => void;
  title?: string;
  icon?: string;
  refWrap?: any;
}

const DropList = memo(
  ({ data, numberShow, renderItem, title, icon, refWrap }: DropListProps) => {
    const firstData = data && data.slice(0, numberShow);

    const [dataShow, setDataShow] = useState<any[]>(firstData);
    const [isShowMore, setIsShowMore] = useState(false);
    const transition = (
      <Transition.Sequence>
        <Transition.Out type="fade" />
        <Transition.Change interpolation="linear" />
        <Transition.In type="fade" />
      </Transition.Sequence>
    );
    const transRef: any = useRef<any>();

    const onMore = useCallback(() => {
      setIsShowMore((prev) => {
        if (!prev) {
          transRef.current.animateNextTransition();
          refWrap.current.animateNextTransition();
          setDataShow(data);
        }
        if (prev) {
          setDataShow(firstData);
          transRef.current.animateNextTransition();
          refWrap.current.animateNextTransition();
        }
        return !prev;
      });
    }, [data, firstData]);

    return (
      <Transitioning.View
        transition={transition}
        ref={transRef}
        style={styles.container}
      >
        <View style={styles.item}>
          <ButtonIcon
            icon={icon}
            borderRadius={8}
            backgroundColor={Colors.TealBlue20}
            disabled
          />
          <Text size={15} lineHeight={18} bold marginLeft={16}>
            {title}
          </Text>
        </View>
        <Transitioning.View
          transition={transition}
          ref={transRef}
          style={{ overflow: "hidden" }}
        >
          {dataShow && dataShow.map((item) => renderItem(item))}
        </Transitioning.View>
        <TouchableOpacity
          style={{
            ...Theme.center,
            minHeight: 49,
            paddingVertical: 12,
            paddingBottom: 16,
          }}
          onPress={onMore}
        >
          <Image source={ICON.arrDown} />
        </TouchableOpacity>
      </Transitioning.View>
    );
  }
);

export default DropList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    borderRadius: 16,
    backgroundColor: Colors.White,
    marginTop: 40,
  },
  item: {
    ...Theme.flexRow,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WhiteSmoke,
    paddingBottom: 16,
  },
});
