
import * as arrays from './arrays.js';

export function printDate() {
  const now = new Date();
  const day = arrays.day[now.getDay()];
  const month = arrays.month[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  const suffix = arrays.ordinal[date % 10];

  console.log(`Today is ${day}, ${month} ${date}${suffix}, ${year}`);
}