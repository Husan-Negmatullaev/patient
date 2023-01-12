import { condition } from "./condition";

export interface dataPerson {
  id: number;
  firstName: string;
  lastName: string;
  relationshipToYou: string;
  birthday: string;
  isAdd: boolean;
  check: boolean;
}
export interface dataAddition {
  id: number;
  title: string;
  conditions: Array<condition>
  check: boolean;
}