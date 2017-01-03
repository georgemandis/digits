/*
* Digits
* ==
* By George Mandis (george.mand.is, snaptortoise.com)
* January 2nd, 2017
* Licensed under the MIT License (http://opensource.org/licenses/MIT)
* It feels a little silly that the comments are longer than the code :)
*/

function digits(number, place) {
  if (Math.pow(10, place - 1) > number) return false;
  return Math.floor (number % Math.pow(10, place) / Math.pow(10, place - 1));
}