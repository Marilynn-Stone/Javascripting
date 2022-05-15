const instructorWithLongestName = function (instructors) {
  let longestName = { name: "", course: "" };
  for (let instructor of instructors) {
    if (instructor["name"].length > longestName["name"].length) {
      longestName = instructor;
    }
  }
  return longestName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremia", course: "Web" },
    { name: "Ophilias", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
