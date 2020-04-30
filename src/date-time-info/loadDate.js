import * as moment from 'moment';
import tz from 'moment-timezone';

const refs = {
  infoMainDate: document.querySelector('[data-action="load-main-date"]'),
  infoMonth: document.querySelector('[data-action="load-month"]'),
};

const dateInfo = function (day, date, month) {
  refs.infoMainDate.textContent = `${date}${day}`;
  refs.infoMonth.textContent = month;
};

export const timeInfo = function (parseData) {
  if (!parseData.city.timezone) {
    return;
  }
  const handleDateTimeInfo = function () {
    const date = moment().format('DD ');
    const day = moment().format('ddd');
    const month = moment().format('MMMM');
    dateInfo(day, date, month);
  };
};
handleDateTimeInfo();
