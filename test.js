
moment.locale('ru');
var maxWeek = 45;

function getISOWeeks(y) {
  var d, isLeap;
  d = new Date(y, 0, 1);
  isLeap = new Date(y, 1, 29).getMonth() === 1;
  return d.getDay() === 4 || isLeap && d.getDay() === 3 ? 53 : 52
}

var curWeek = '',
  years = '';

var today, year, week, prevYear, nextYear, this1sp, this1spF, prev1sp, prev1spF, chetnaya;

function update() {
  today = moment();
  year = moment(today).format('YYYY')
  prevYear = moment(today).subtract(1, 'y').format('YYYY');
  nextYear = +year + 1 + ''

  this1sp = moment(year + '-09-01', 'YYYY-MM-DD');
  this1spF = this1sp.format('WW');
  prev1sp = moment(year + '-09-01', 'YYYY-MM-DD').subtract(1, 'year');
  prev1spF = prev1sp.format('WW');

  week = moment(today).format('WW');

  if (today.isBefore(this1sp)) {
    var daysInYear = getISOWeeks(+prevYear);
    years = prevYear + '/' + year;
    curWeek = daysInYear - prev1spF + +week;

  } else {
    years = year + '/' + nextYear;
    curWeek = week - this1spF + 1;
  }

  if (curWeek > maxWeek) {
    chetnaya = false
    return
  }

  chetnaya = !(curWeek % 2);
}

update();
