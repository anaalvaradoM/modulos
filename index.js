import * as functions from './functions.js';
import { DateString } from './classes.js';

functions.printDate();
const today = new DateString();
console.log(`Today is ${today.getDateString()}`);
