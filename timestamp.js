'use strict';

const format = time =>
  new Intl.DateTimeFormat('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(time));

const orNull = time => 
  isNaN(Number(time)) 
    ? isNaN(Date.parse(time))
      ? null
      : new Date(time)
    : new Date(1000 * time);

const timestamp = str => {
  var time = str === 'current' ? new Date() : orNull(str);
  return {
    unix: time && (time.getTime()/1000).toFixed(),
    natural: time && format(time)
  };
};

module.exports = timestamp;