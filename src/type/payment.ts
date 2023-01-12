import { ImageSourcePropType } from "react-native";

export interface payment {
    id: number;
    logo: ImageSourcePropType;
    name: string;
    number: string;
    isCheck: boolean;
}