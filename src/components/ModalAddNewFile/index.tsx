import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Modal,
  Image,
} from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";
import ButtonLinear from "elements/Buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ModalNote from "components/ModalNote";
import Theme from "style/Theme";
import scale from "utils/scale";
import ButtonBorder from "elements/Buttons/ButtonBorder";
import UploadProgress from "components/UploadProgres";
import { width } from "configs/Const";
import { IMAGE } from "images/Image";

const ModalAddNewFile = React.memo(
  ({
    translateY,
    close,
    onAdd,
  }: {
    translateY: any;
    close: () => void;
    onAdd?: () => void;
  }) => {
    const [note, setNote] = React.useState<string>(
      "Redness on the back of the neck"
    );
    const [visibleModalNote, setVisibleNote] = React.useState(false);
    const [isUpload, setUpload] = React.useState(false);
    const onAddFile = React.useCallback(() => {
      setUpload((value) => true);
      setTimeout(() => {
        close();
        onAdd && onAdd();
      }, 6000);
    }, []);

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
          <Text marginTop={22} marginHorizontal={24} size={15} lineHeight={24}>
            Help the doctors understand what they are looking at
          </Text>
          <View style={styles.imageView}>
            <Image
              source={IMAGE.img5}
              style={{
                height: scale(160),
                width: scale(220),
                opacity: isUpload ? 0.4 : 1,
              }}
            />
            {isUpload && (
              <UploadProgress
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  overflow: "hidden",
                }}
              />
            )}
          </View>
          <Text size={13} lineHeight={16} marginTop={16} marginHorizontal={24}>
            Optional Note
          </Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setVisibleNote(true)}
          >
            <Text size={15} lineHeight={24} semiBold>
              {note}
            </Text>
          </TouchableOpacity>
          <Text
            right
            marginRight={24}
            size={11}
            lineHeight={14}
            color={Colors.GrayBlue}
          >
            {note.length}/100
          </Text>
          <View style={styles.inputView}>
            <ButtonBorder
              title={"Cancel"}
              onPress={close}
              style={{ flex: 1, marginRight: 8 }}
            />
            {note.length === 0 ? (
              <ButtonLinear
                title={"Add"}
                onPress={onAddFile}
                styleButton={{ flex: 1 }}
                style={{
                  marginLeft: 8,
                  marginTop: 0,
                }}
                disabled={true}
              />
            ) : (
              <ButtonLinear
                title={"Add"}
                onPress={onAddFile}
                styleButton={{ flex: 1 }}
                style={{
                  marginLeft: 8,
                  marginTop: 0,
                }}
                disabled={isUpload}
              />
            )}
          </View>
        </Animated.View>
        <Modal
          visible={visibleModalNote}
          onRequestClose={() => {
            setVisibleNote(false);
          }}
          transparent
        >
          <ModalNote
            {...{ note, setNote }}
            close={() => {
              setVisibleNote(false);
            }}
          />
        </Modal>
      </View>
    );
  }
);

export default ModalAddNewFile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000054",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderColor: Colors.Isabelline,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 24,
    marginTop: 4,
    marginBottom: 56,
    padding: 12,
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
  imageView: {
    backgroundColor: Colors.Snow,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 48,
  },
  inputView: {
    ...Theme.flexRow,
    width: width,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace() + 16,
    marginTop: 16,
  },
});
