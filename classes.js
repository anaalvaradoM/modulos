import * as arrays from './arrays.js';
export class DateString {
  constructor() {
    const now = new Date();
    this.day = arrays.day[now.getDay()];
    this.month = arrays.month[now.getMonth()];
    this.date = now.getDate();
    this.year = now.getFullYear();
  }

  getDateString() {
    const suffix = arrays.ordinal[this.date % 10];
    return `${this.day}, ${this.month} ${this.date}${suffix}, ${this.year}`;
  }
}
