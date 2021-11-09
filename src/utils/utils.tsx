import { monthList } from './constants';

export const getMonthName = (date: Date) => {
  return monthList[date.getMonth()];
}

export const loopPartOfDate = (
  day: number,
  month: number,
  year: number,
  hours: number,
  minutes: number,
  seconds: number,
  date: Date,
  selection: string,
  mod: number
) => {

  let newDate: Date;

  if (selection === 'day') {
    day = date.getDate() + mod;
    newDate = new Date(year, month + 1, 0);
    if (day < 1) day = newDate.getDate();
    if (day > newDate.getDate()) {
      date.setDate(1);
      day = date.getDate();
    }

    return day;
  }
  if (selection === 'month') {
    month = date.getMonth() + mod;
    newDate = new Date(year + 1, -1, day);
    if (month < 0) month = newDate.getMonth();
    if (month > newDate.getMonth()) {
      date.setMonth(0);
      month = date.getMonth();
    }

    return month;
  }
  if (selection === 'year') {
    year = date.getFullYear() + mod;

    return year;
  }
  if (selection === 'hours') {
    hours = date.getHours() + mod;
    newDate = new Date(year, month, day + 1, -1);
    if (hours < 0) hours = newDate.getHours();
    if (hours > newDate.getHours()) {
      date.setHours(0);
      hours = date.getHours();
    }

    return hours;
  }
  if (selection === 'minutes') {
    minutes = date.getMinutes() + mod;
    newDate = new Date(year, month, day, hours + 1, -1);
    if (minutes < 0) minutes = newDate.getMinutes();
    if (minutes > newDate.getMinutes()) {
      date.setMinutes(0);
      minutes = date.getMinutes();
    }

    return minutes;
  }
  if (selection === 'seconds') {
    seconds = date.getSeconds() + mod;
    newDate = new Date(year, month, day, hours, minutes + 1, -1);
    if (seconds < 0) seconds = newDate.getSeconds();
    if (seconds > newDate.getSeconds()) {
      date.setSeconds(0);
      seconds = date.getSeconds();
    }

    return seconds;
  }
}

export const formatDate = (
  day: number,
  month: number,
  year: number,
  hours: number,
  minutes: number,
  seconds: number
) => {
  const formatDate =
  `${day < 10 ? '0' + day : day}/${monthList[month]}/${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

return formatDate;
}

export const formatInputDate = (date: string) => {
  const inputDate: Array<string> = date.split(/\W/);
  const day: string = inputDate.slice(0, 1).toString();
  const month: string = inputDate.slice(1, 2).toString();
  let year: string = inputDate.slice(2, 3).toString();
  let hours: string = inputDate.slice(3, 4).toString();
  let minutes: string = inputDate.slice(4, 5).toString();
  let seconds: string = inputDate.slice(5, 6).toString();

  if (Number(hours) > 23) {
    seconds = minutes;
    minutes = hours;
    hours = year;
    year = '2021';
  }
  if (!year) {
    year = '2021';
  }

  const newDate = new Date(
    `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`
  );
  const newDay =  newDate.getDate();
  const newMonth = newDate.getMonth();
  const newYear = newDate.getFullYear();
  const newHours = newDate.getHours();
  const newMinutes = newDate.getMinutes();
  const newSeconds = newDate.getSeconds();

  const currentDate: string = formatDate(
    newDay,
    newMonth,
    newYear,
    newHours,
    newMinutes,
    newSeconds
  );

  return currentDate;
}

export const handleSetSelectionRange = (
  element: HTMLInputElement,
  start: number,
  end: number
) => {
  element.onselect = () => {
    element.setSelectionRange(start, end);
  }
}
