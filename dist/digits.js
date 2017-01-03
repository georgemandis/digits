/*
* George Mandis
* ==
* Digits
* 2017
*/

function digits(number, place) {
  if (Math.pow(10, place - 1) > number) return false;
  return Math.floor (number % Math.pow(10, place) / Math.pow(10, place - 1));
}