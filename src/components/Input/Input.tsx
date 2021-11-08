import React, {
  FC, ChangeEvent, KeyboardEvent,
  useState, useEffect, useRef,
  useCallback
} from 'react';
import './Input.css';
import { getMonthName, formatDate, loopPartOfDate, formatLocaleDate } from '../../utils/utils';

const Input: FC = () => {
  const [date, setDate] = useState<string>('');
  const [higherPart, setHigherPart] = useState<number>(0);
  const [incHigherPart, setIncHigherPart] = useState<number>(0);
  const [changeDate, setChangeDate] = useState<Date | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>('');

  // useEffect(() => {
  //   setFormattedDate(date);
  // }, [date]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const caret = evt.currentTarget.selectionStart;
    const input = evt.currentTarget;
    window.requestAnimationFrame(() => {
      input.selectionStart = caret;
      input.selectionEnd = caret;
    });
    setDate(evt.currentTarget.value);
  }

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    const key = evt.key;
    const input = evt.currentTarget;
    const ctrlKey = evt.ctrlKey;
    let selectionStart = input.selectionStart;
    let selectionEnd = input.selectionEnd;
    const cursor: number | null = input.selectionDirection === 'forward' ?
    selectionEnd : selectionStart;

    let changeDate: string | Date | any = new Date(date);
    let incDecChangeDate: string | Date = new Date(formattedDate);

    console.log(changeDate)
    let loopPart;
    let newChangeDate: string | Date;

    let inc: any;

    let cursorStart;
    let cursorEnd;

    if (cursor === null) {
      return;
    }

    if (key === 'ArrowUp') {
      inc = 1;
    } else if (key === 'ArrowDown') {
      inc = -1;
    } else {
      return;
    }

    evt.preventDefault();

    // Day
    if (cursor! <= 2) {
      let selection;
      selection = 'day';
      input.onselect = () => {
        input.setSelectionRange(0, 2)
      }
      if (ctrlKey) {
        changeDate.setDate(changeDate.getDate() + inc);
        setDate(formatLocaleDate(changeDate.toLocaleString()));
      }

      if (!ctrlKey) {
        const loop = loopPartOfDate(changeDate, inc, selection)!
        loopPart = loop;




      }
      cursorStart = 0;
      cursorEnd = 2;

      // Month
    } else if (cursor >= 3 && cursor <= 3 + getMonthName(changeDate).length) {
      input.onselect = () => {
        input.setSelectionRange(3, 3 + getMonthName(changeDate).length)
      }

      if (ctrlKey) {
        changeDate.setMonth(changeDate.getMonth() + inc)
        setDate(formatLocaleDate(changeDate.toLocaleString()))
      }

      if (!ctrlKey) {

        setDate(formatLocaleDate(changeDate.toLocaleString()))
      }

      cursorStart = 3
      cursorEnd = 3 + getMonthName(changeDate).length;

      // Year
    } else if (cursor >= 4 + getMonthName(changeDate).length && cursor <= 8 + getMonthName(changeDate).length) {
      input.onselect = () => {
        input.setSelectionRange(4 + getMonthName(changeDate).length, 8 + getMonthName(changeDate).length)
      }

      if (ctrlKey) {
        changeDate.setFullYear(changeDate.getFullYear() + inc)
        setDate(formatLocaleDate(changeDate.toLocaleString()))
      }

      if (!ctrlKey) {

      }

      cursorStart = 4
      cursorEnd = 8 + getMonthName(changeDate).length;

      // Hour
    } else if (cursor >= 9 + getMonthName(changeDate).length && cursor <= 11 + getMonthName(changeDate).length) {
      input.onselect = () => {
        input.setSelectionRange(9 + getMonthName(changeDate).length, 11 + getMonthName(changeDate).length)
      }

      if (ctrlKey) {
        changeDate.setHours(changeDate.getHours() + inc)
        setDate(formatLocaleDate(changeDate.toLocaleString()))
      }

      if (!ctrlKey) {

      }

      cursorStart = 9
      cursorEnd = 11 + getMonthName(changeDate).length;

      // Minute
    } else if (cursor >= 12 + getMonthName(changeDate).length && cursor <= 14 + getMonthName(changeDate).length) {
      input.onselect = () => {
        input.setSelectionRange(12 + getMonthName(changeDate).length, 14 + getMonthName(changeDate).length)
      }

      if (ctrlKey) {
        changeDate.setMinutes(changeDate.getMinutes() + inc)
        setDate(formatLocaleDate(changeDate.toLocaleString()))
      }

      if (!ctrlKey) {

      }

      cursorStart = 12
      cursorEnd = 14 + getMonthName(changeDate).length;

      // Second
    } else if (cursor >= 15 + getMonthName(changeDate).length && cursor <= 17 + getMonthName(changeDate).length) {
      input.onselect = () => {
        input.setSelectionRange(15 + getMonthName(changeDate).length, 17 + getMonthName(changeDate).length)
      }

      if (ctrlKey) {
        changeDate.setSeconds(changeDate.getSeconds() + inc)
        console.log(changeDate.toLocaleString())
        setDate(formatLocaleDate(changeDate.toLocaleString()))
      }

      if (!ctrlKey) {

      }

      cursorStart = 15
      cursorEnd = 17 + getMonthName(changeDate).length;
    } else {
      return;
    }

    window.requestAnimationFrame(() => {
      input.selectionStart = selectionStart;
      input.selectionEnd = selectionStart;
    });
    input.setSelectionRange(cursorStart, cursorEnd);
    input.selectionStart = cursorStart;
    input.selectionEnd = cursorEnd;

        return loopPart
  }




  const handleSubmit = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      setDate(formatDate(date));
      setFormattedDate(formatDate(date));
    }
  }

  return (
    <input
      className="input"
      type="text"
      id="date"
      name="date"
      value={date}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyPress={handleSubmit}
      autoComplete="off"
    />
  );
}

export default Input;
