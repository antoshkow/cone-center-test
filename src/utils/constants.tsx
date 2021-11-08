import { ChangeEvent, KeyboardEvent } from "react";

export const monthList: string[] = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December'
];

export const daySelectionStart: number = 0;
export const daySelectionEnd: number = 2;
export const monthSelectionStart: number = 3;
export const yearSelectionStart: number = 4;
export const yearSelectionEnd: number = 8;
export const hoursSelectionStart: number = 9;
export const hoursSelectionEnd: number = 11;
export const minutesSelectionStart: number = 12;
export const minutesSelectionEnd: number = 14;
export const secondsSelectionStart: number = 15;
export const secondsSelectionEnd: number = 17;

export interface InputProps {
  date: string
  handleChange(evt: ChangeEvent<HTMLInputElement>): void
  handleKeyDown(evt: KeyboardEvent<HTMLInputElement>): void
  handleSubmit(evt: KeyboardEvent<Element>): void
}
