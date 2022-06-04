import { parse, isDate } from "date-fns";

export function getObjNthItem(obj: Record<any, any>, nth: number) {
    if (!obj) {
      return undefined;
    }
    const index = nth - 1;
    const objKeys = Object.keys(obj);
    const targetKey = objKeys && objKeys[index];
    return obj[targetKey];
  }

  export const formatPrice = (price:number) => {
    return  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(price);
}

export function parseDateString(value:any, originalValue:any) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());
 
  return parsedDate;
}

export function getDaysInMonth(month: any, year: any) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}


export const range = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(0)
    .map((_, idx) => start + idx);
};