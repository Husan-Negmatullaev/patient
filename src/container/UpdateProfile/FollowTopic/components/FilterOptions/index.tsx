import React, { memo } from "react";
import { View, ImageSourcePropType } from "react-native";
import CheckItem from "./CheckItem";
import { getBottomSpace } from "react-native-iphone-x-helper";
import scale from "utils/scale";

export interface ItemOption {
  title: string;
  img?: ImageSourcePropType;
  id: number;
}

interface FilterOptionsProps {
  options: ItemOption[];
  chooseId: ItemOption[];
  onPressItem: (item: ItemOption) => void;
}

const FilterOptions = memo((props: FilterOptionsProps) => {
  return (
    <View style={{ marginBottom: getBottomSpace() + scale(74) }}>
      {props.options.map((item) => {
        let isCheck = false;

        const findIndex = props.chooseId.findIndex((i) => i.id === item.id);
        if (findIndex >= 0) {
          isCheck = true;
        } else {
          isCheck = false;
        }
        return (
          <CheckItem
            {...item}
            onCheck={props.onPressItem}
            isCheck={isCheck}
            key={item.id}
          />
        );
      })}
    </View>
  );
});

export default FilterOptions;

