/**
 *
 * @param  {dateFrom} initial date
 * @param  {dateTo} final date
 * @return {Number}
 */
export default function getDaysDiffBetweenDates(dateFrom, dateTo) {
  return (dateTo - dateFrom) / (1000 * 3600 * 24);
}
