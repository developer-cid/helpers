/**
 *
 * @param  {Number} min Minimum range
 * @param  {Number} max Maximum range
 * @return {Number}
 */
export default function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
