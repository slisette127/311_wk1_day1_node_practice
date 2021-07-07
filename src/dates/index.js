// import moment here; use this package in each function

const today = () => {
  // write code for dates.today
  let oneDay = moment('02-01-2021', 'DD-MM-YYYY');
  let dayName = oneDay.format('dddd');
  
}

const calendar = () => {
  // write code for dates.calendar

}

const currentTime = () => {
  // write code for dates.currentTime

}

module.exports = {
  today,
  calendar,
  currentTime
}