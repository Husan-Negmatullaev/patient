import React, { memo } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import { height } from "configs/Const";
import Theme from "style/Theme";

interface ModalSharedFilesProps {
  fileList: any;
}

const ModalSharedFiles = memo(({ fileList }: ModalSharedFilesProps) => {
  return (
    <>
      <View style={styles.borderBottom}>
        <Text
          bold
          size={17}
          lineHeight={20}
          marginHorizontal={24}
          marginVertical={24}
        >
          Shared Files
        </Text>
      </View>
      <ScrollView
        style={styles.attachment}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 32 }}
      >
        {fileList.map((item: any, index: number) => {
          const { name, date, image, size } = item;
          return (
            <TouchableOpacity
              style={styles.files}
              activeOpacity={0.54}
              key={index}
            >
              <Image style={styles.imgAttach} source={image} />
              <View style={styles.attachDetail}>
                <Text
                  marginBottom={8}
                  bold
                  size={15}
                  lineHeight={24}
                  maxWidth={210}
                >
                  {name}
                </Text>
                <Text
                  marginBottom={8}
                  color={Colors.GrayBlue}
                  size={13}
                  lineHeight={16}
                >
                  {date}
                </Text>
                <Text color={Colors.GrayBlue} size={13} lineHeight={16}>
                  {size}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
});

export default ModalSharedFiles;

const styles = StyleSheet.create({
  container: {},
  borderBottom: {
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
  },
  attachment: {
    maxHeight: (height * 2) / 3,
  },
  imgAttach: {
    marginVertical: 24,
    marginRight: 24,
    marginLeft: 16,
    width: 100,
    height: 72,
    borderRadius: 4,
  },
  attachDetail: {
    marginVertical: 24,
    paddingRight: 24,
  },
  files: {
    borderRadius: 12,
    backgroundColor: Colors.White,
    ...Theme.flexRow,
    marginLeft: 24,
  },
});
