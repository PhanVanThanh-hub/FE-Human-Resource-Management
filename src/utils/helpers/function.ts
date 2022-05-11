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