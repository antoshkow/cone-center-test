import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  useState,
} from 'react';
import './Input.css';
import {
  getMonthName,
  formatDate,
  loopPartOfDate,
  formatLocaleDate,
  monthList,
  handleSetSelectionRange
} from '../../utils/utils';

const Input: FC = () => {
  const [date, setDate] = useState<string>('');

  const changeDate: Date = new Date(date);

  let day: number = changeDate.getDate();
  let month: number = changeDate.getMonth();
  let year: number = changeDate.getFullYear();
  let hours: number = changeDate.getHours();
  let minutes: number = changeDate.getMinutes();
  let seconds: number = changeDate.getSeconds();

  let incDec: number;

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
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

    let selection;
    let cursorStart;
    let cursorEnd;

    if (cursor === null) {
      return;
    }

    if (key === 'ArrowUp') {
      incDec = 1;
    } else if (key === 'ArrowDown') {
      incDec = -1;
    } else {
      return;
    }

    evt.preventDefault();

    // Day
    if (cursor! <= 2) {

      selection = 'day';
      input.onselect = () => {
        input.setSelectionRange(0, 2)
      }
      if (ctrlKey) {
        changeDate.setDate(day + incDec)
      }

      if (!ctrlKey) {
        day = changeDate.getDate() + incDec;
        const incDate = new Date(year, month + 1, 0);
        const lastDayOfMonth = incDate.getDate();
        console.log(changeDate.setDate(1))
        console.log(day);
        if (day < 1) day = incDate.getDate();
        if (day > incDate.getDate()) {
          changeDate.setDate(1);
          day = changeDate.getDate();
        }
      }
      cursorStart = 0;
      cursorEnd = 2;

      // Month
    } else if (cursor >= 3 && cursor <= 3 + getMonthName(changeDate).length) {
      input.onselect = () => {
        input.setSelectionRange(3, 3 + getMonthName(changeDate).length)
      }

      if (ctrlKey) {
        changeDate.setMonth(changeDate.getMonth() + incDec)

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
        changeDate.setFullYear(changeDate.getFullYear() + incDec)

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
        changeDate.setHours(changeDate.getHours() + incDec)

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
        changeDate.setMinutes(changeDate.getMinutes() + incDec)

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
        changeDate.setSeconds(changeDate.getSeconds() + incDec)


      }

      if (!ctrlKey) {

      }

      cursorStart = 15
      cursorEnd = 17 + getMonthName(changeDate).length;
    } else {
      return;
    }

    if (ctrlKey) {
      setDate(formatLocaleDate(changeDate.toLocaleString()));
    } else {
      const newDate: string =
      `${day < 10 ? '0' + day : day}/${monthList[month]}/${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
      console.log(newDate)
      setDate(newDate);
    }


    // setDate(formatLocaleDate(changeDate.toLocaleString()));
    window.requestAnimationFrame(() => {
      input.selectionStart = selectionStart;
      input.selectionEnd = selectionStart;
    });
    input.setSelectionRange(cursorStart, cursorEnd);
    input.selectionStart = cursorStart;
    input.selectionEnd = cursorEnd;
  }




  const handleSubmit = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      setDate(formatDate(date));
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
