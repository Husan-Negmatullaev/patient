import { StyleSheet } from "react-native";
import { Colors } from "configs";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import scale from "utils/scale";

export default StyleSheet.create({
  flexRowSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRowRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexOne: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: "row",
  },
  flexDirectionBottom: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace(),
    paddingTop: getStatusBarHeight(),
  },
  icons: {
    width: 24,
    height: 24,
  },
  icons32: {
    width: 32,
    height: 32,
  },
  icons16: {
    width: 16,
    height: 16,
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonSlider: {
    width: 48,
    height: 6,
    backgroundColor: Colors.Platinum,
    marginTop: 12,
    borderRadius: 3,
    alignSelf: "center",
  },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerBackGround: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  headerNavigationStyle: {
    shadowColor: "transparent",
    backgroundColor: Colors.White,
    height: scale(108),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 108 - getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
  },
});
