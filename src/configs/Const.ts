import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Dimensions } from "react-native";

const Constants = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  FONTS_APP: "Muli",
};
export default Constants;

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;
export const HEADER_HEIGHT = 108 - getStatusBarHeight();

export enum ConsultsType {
  LiveChat = "LiveChat",
  Message = "Message",
  VoiceCall = "VoiceCall",
  Appointment = "Appointment",
  VideoCall = "VideoCall",
}

export enum ConsultsStatus {
  stillInProgress = 1,
  accepted = 2,
  unConFirmed = 3,
  completed = 4,
  canceled = 5,
}


