export const monthList: string[] = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December'
];

export const getMonthName = (date: Date) => {
  return monthList[date.getMonth()];
}



export const loopPartOfDate = (date: Date, incDec: number, selection: string) => {
  let value = 0;

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (selection === 'day') {
    // for (let i = 1; i >= 1 && i <= 31; i++) {
    //   date.setDate(day + incDec);
    //   value = date.getDate();
    // }
    date.setDate(day + incDec);
    value = date.getDate();
    console.log(value);
    // if (value === 31) date.setDate(0);
    // if (value === ) date.setDate(day);
  } else if (selection === 'month') {
    date.setMonth(month + incDec);
    value = date.getMonth();
    // if (value === 12 ) value = 0;
    // if (value === -1) value = 11;
  } else if (selection === 'year') {
    date.setFullYear(year + incDec);
    value = date.getFullYear();
  } else if (selection === 'hours') {
    date.setHours(hours + incDec);
    value = date.getHours();
  } else if (selection === 'minutes') {
    date.setMinutes(minutes + incDec);
    value = date.getMinutes();
  } else if (selection === 'seconds') {
    date.setSeconds(seconds + incDec);
    value = date.getSeconds();
  } else {
    return;
  }
  return value
}



export const formatDate = (date: string) => {
  const inputDate: Array<string> = date.split(/\W/);
  const day: string = inputDate.slice(0, 1).toString();
  const month: string = inputDate.slice(1, 2).toString();
  const year: string = inputDate.slice(2, 3).toString();
  const hour: string = inputDate.slice(3, 4).toString();
  const minute: string = inputDate.slice(4, 5).toString();
  const second: string = inputDate.slice(5, 6).toString();

  const newDate = new Date(
    `${month} ${day} ${!year ? 2021 : year} ${hour}:${minute}:${second}`);
  const newDay =  newDate.getDate();
  const newMonth = newDate.getMonth();
  const newYear = newDate.getFullYear();
  const newHours = newDate.getHours();
  const newMinutes = newDate.getMinutes();
  const newSeconds = newDate.getSeconds();

  const formatDate =
    `${newDay < 10 ? '0' + newDay : newDay}/${monthList[newMonth]}/${newYear} ${newHours < 10 ? '0' + newHours : newHours}:${newMinutes < 10 ? '0' + newMinutes : newMinutes}:${newSeconds < 10 ? '0' + newSeconds : newSeconds}`;

  return formatDate;
}

export const formatLocaleDate = (date: string) => {
  const inputDate: Array<string> = date.split(/\W/);
  const day: string = inputDate.slice(0, 1).toString();
  const month: string = inputDate.slice(1, 2).toString();
  const year: string = inputDate.slice(2, 3).toString();
  const hour: string = inputDate.slice(4, 5).toString();
  const minute: string = inputDate.slice(5, 6).toString();
  const second: string = inputDate.slice(6, 7).toString();

  const newDate = new Date(
    `${month} ${day} ${year} ${hour}:${minute}:${second}`);
  const newDay =  newDate.getDate();
  const newMonth = newDate.getMonth();
  const newYear = newDate.getFullYear();
  const newHours = newDate.getHours();
  const newMinutes = newDate.getMinutes();
  const newSeconds = newDate.getSeconds();

  const formatDate =
    `${newDay < 10 ? '0' + newDay : newDay}/${monthList[newMonth]}/${newYear} ${newHours < 10 ? '0' + newHours : newHours}:${newMinutes < 10 ? '0' + newMinutes : newMinutes}:${newSeconds < 10 ? '0' + newSeconds : newSeconds}`;

  return formatDate;
}

export const handleSetSelectionRange = (element: HTMLInputElement, start: number, end: number) => {
  element.setSelectionRange(start, end);
}
// const changePartOfDateForLoop = (selection: string, date: Date, incDec: number) => {
//   let loopPart;
//   if (selection === 'day') {
//     loopPart = date.setDate(day + incDec)
//   } else if (selection === 'month') {

//   } else if (selection === 'year') {

//   } else if (selection === 'hours') {

//   } else if (selection === 'minutes') {

//   } else if (selection === 'seconds') {

//   } else {
//     return;
//   }

//   return loopPart
// }
