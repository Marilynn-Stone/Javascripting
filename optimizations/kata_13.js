const talkingCalendar = function (date) {
  let day = date.slice(8, 10);
  let month = date.slice(5, 7);
  let year = date.slice(0, 4);

  if (day.endsWith("1") & (day !== "11")) {
    day = `${day}st`;
  } else if (day.endsWith("2") & (day !== "12")) {
    day = `${day}nd`;
  } else if (day.endsWith("3") & (day !== "13")) {
    day = `${day}rd`;
  } else {
    day = `${day}th`;
  }

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }

  return `${month} ${Number(day)}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*December 2nd, 2017
November 11th, 2007
August 24th, 1987*/
