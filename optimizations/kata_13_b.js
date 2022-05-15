const talkingCalendar = function (date) {
  //create empty string
  let readable = "";

  // split string into year, month, day
  let stepA = date.split("/");

  if (stepA[2].startsWith("0")) {
    stepA[2] = stepA[2].slice(1, 2);
  }

  //create a variable of the year
  let year = `${stepA[0]}`;

  //change day to readable day
  let day = "";

  if (stepA[2].endsWith("1") && stepA[2] !== "11") {
    day = `${stepA[2]}st`;
  } else if (stepA[2].endsWith("2") && stepA[2] !== "12") {
    day = `${stepA[2]}nd`;
  } else if (stepA[2].endsWith("3") && stepA[2] !== "13") {
    day = `${stepA[2]}rd`;
  } else {
    day = `${stepA[2]}th`;
  }

  //change month to readable month
  let month = "";

  switch (stepA[1]) {
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

  //join back together
  readable = month + " " + day + ", " + year;
  return readable;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
