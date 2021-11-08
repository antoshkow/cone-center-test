import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent
} from 'react';
import './App.css';
import Input from '../Input/Input';
import {
  getMonthName,
  formatInputDate,
  loopPartOfDate,
  formatLocaleDate,
  handleSetSelectionRange,
  formatDate
} from '../../utils/utils';
import {
  monthList,
  daySelectionStart,
  daySelectionEnd,
  monthSelectionStart,
  yearSelectionStart,
  yearSelectionEnd,
  hoursSelectionStart,
  hoursSelectionEnd,
  minutesSelectionStart,
  minutesSelectionEnd,
  secondsSelectionStart,
  secondsSelectionEnd
} from '../../utils/constants';

const App: FC = () => {
  const [date, setDate] = useState<string>('')

  const changeDate: Date | string = new Date(date);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setDate(evt.currentTarget.value);
  }

  let day: number = changeDate.getDate();
  let month: number = changeDate.getMonth();
  let year: number = changeDate.getFullYear();
  let hours: number = changeDate.getHours();
  let minutes: number = changeDate.getMinutes();
  let seconds: number = changeDate.getSeconds();

  let mod: number;

  const handleInputKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    const key = evt.key;
    const input = evt.currentTarget;
    const ctrlKey = evt.ctrlKey;
    let selectionStart = input.selectionStart;
    let selectionEnd = input.selectionEnd;
    const cursor: number | null = input.selectionDirection === 'forward' ?
    selectionEnd : selectionStart;

    let selection;
    let cursorStart: number;
    let cursorEnd: number;

    // const currentMonthLength: number = getMonthName(changeDate).length || 0;

    // console.log(currentMonthLength)

    handleSetSelectionRange(input, selectionStart!, selectionEnd!);

    if (key === 'ArrowUp') {
      mod = 1;
    } else if (key === 'ArrowDown') {
      mod = -1;
    } else {
      return;
    }

    console.log(cursor)

    evt.preventDefault();
    if (cursor === null) {
      return;

      // Day
    } else if (cursor! <= daySelectionEnd) {
      selection = 'day';

      handleSetSelectionRange(input, daySelectionStart, daySelectionEnd);

      if (!ctrlKey) {
        day = loopPartOfDate(
        day,
        month,
        year,
        hours,
        minutes,
        seconds,
        changeDate,
        selection,
        mod
      )!;
        }

      if (ctrlKey) {
        changeDate.setDate(day + mod);
      }

      cursorStart = daySelectionStart;
      cursorEnd = daySelectionEnd;

      // Month
    } else if (cursor >= monthSelectionStart && cursor <= monthSelectionStart + getMonthName(changeDate).length) {
      selection = 'month';

      handleSetSelectionRange(input, monthSelectionStart, monthSelectionStart + getMonthName(changeDate).length);

      if (!ctrlKey) {
        handleSetSelectionRange(input, monthSelectionStart, monthSelectionStart + getMonthName(changeDate).length);
        month = loopPartOfDate(
        day,
        month,
        year,
        hours,
        minutes,
        seconds,
        changeDate,
        selection,
        mod
      )!;

      handleSetSelectionRange(input, monthSelectionStart, monthSelectionStart + monthList[month].length);
        }

      if (ctrlKey) {
        changeDate.setMonth(month + mod);
        handleSetSelectionRange(input, monthSelectionStart, monthSelectionStart + getMonthName(changeDate).length);
      }

      cursorStart = monthSelectionStart;
      cursorEnd = monthSelectionStart + getMonthName(changeDate).length;

      // Year
    } else if (cursor >= yearSelectionStart + getMonthName(changeDate).length && cursor <= yearSelectionEnd + getMonthName(changeDate).length) {
      selection = 'year';

      handleSetSelectionRange(input, yearSelectionStart + getMonthName(changeDate).length, yearSelectionEnd + getMonthName(changeDate).length);

      if (!ctrlKey) {
        year = loopPartOfDate(
          day,
          month,
          year,
          hours,
          minutes,
          seconds,
          changeDate,
          selection,
          mod
        )!;
      }

      if (ctrlKey) {
        changeDate.setFullYear(year + mod);
      }

      cursorStart = yearSelectionStart;
      cursorEnd = yearSelectionEnd + getMonthName(changeDate).length;

      // Hours
    } else if (cursor >= hoursSelectionStart + getMonthName(changeDate).length && cursor <= hoursSelectionEnd + getMonthName(changeDate).length) {
      selection = 'hours';

      handleSetSelectionRange(input, hoursSelectionStart + getMonthName(changeDate).length, hoursSelectionEnd + getMonthName(changeDate).length);

      if (!ctrlKey) {
        hours = loopPartOfDate(
        day,
        month,
        year,
        hours,
        minutes,
        seconds,
        changeDate,
        selection,
        mod
      )!;
        }

      if (ctrlKey) {
        changeDate.setHours(hours + mod);
      }

      cursorStart = hoursSelectionStart;
      cursorEnd = hoursSelectionEnd + getMonthName(changeDate).length;

      // Minutes
    } else if (cursor >= 12 + getMonthName(changeDate).length && cursor <= 14 + getMonthName(changeDate).length) {
      selection = 'minutes';

      handleSetSelectionRange(input, minutesSelectionStart + getMonthName(changeDate).length, minutesSelectionEnd + getMonthName(changeDate).length);

      if (!ctrlKey) {
        minutes = loopPartOfDate(
        day,
        month,
        year,
        hours,
        minutes,
        seconds,
        changeDate,
        selection,
        mod
      )!;
        }

      if (ctrlKey) {
        changeDate.setMinutes(minutes + mod);
      }

      cursorStart = minutesSelectionStart
      cursorEnd = minutesSelectionEnd + getMonthName(changeDate).length;

      // Seconds
    } else if (cursor >= 15 + getMonthName(changeDate).length && cursor <= 17 + getMonthName(changeDate).length) {
      selection = 'seconds';

      handleSetSelectionRange(input, secondsSelectionStart + getMonthName(changeDate).length, secondsSelectionEnd + getMonthName(changeDate).length);

      if (!ctrlKey) {
        seconds = loopPartOfDate(
        day,
        month,
        year,
        hours,
        minutes,
        seconds,
        changeDate,
        selection,
        mod
      )!;
        }

      if (ctrlKey) {
        changeDate.setSeconds(seconds + mod);
      }
      loopPartOfDate(
        day,
        month,
        year,
        hours,
        minutes,
        seconds,
        changeDate,
        selection,
        mod
      );
      cursorStart = secondsSelectionStart
      cursorEnd = secondsSelectionEnd + getMonthName(changeDate).length;
    } else {
      return;
    }

    if (ctrlKey) {
      setDate(formatLocaleDate(changeDate.toLocaleString()));
    } else if (!changeDate) {
      setDate('Введите корректную дату!')
    } else {
      const formattedDate: string = formatDate(
        day,
        month,
        year,
        hours,
        minutes,
        seconds
      );

      setDate(formattedDate);
    }

    window.requestAnimationFrame(() => {
      input.selectionStart = selectionStart;
      input.selectionEnd = selectionStart;
    });
    input.setSelectionRange(cursorStart, cursorEnd);
    input.selectionStart = cursorStart;
    input.selectionEnd = cursorEnd;
  }

    const handleInputSubmit = (evt: KeyboardEvent<Element>) => {
    if (evt.key === 'Enter') {
      setDate(formatInputDate(date));
    }
  }

  useEffect(() => {
    if (date.includes('undefined')) {
      setDate('Формат даты: day month year time');
      setTimeout(() => {
        setDate('');
      }, 2000)
    }
  }, [date])

  return (
    <div className="app">
      <Input
        date={date}
        handleChange={handleInputChange}
        handleKeyDown={handleInputKeyDown}
        handleSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default App;
