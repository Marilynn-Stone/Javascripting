const whereCanIPark = function (spots, vehicle) {
  let spotTypesToSearchFor = [];
  // What am I searching for?
  switch (vehicle) {
    case "small":
      {
        spotTypesToSearchFor = ["R", "S"];
      }
      break;
    case "motorcycle":
      {
        spotTypesToSearchFor = ["R", "S", "M"];
      }
      break;
    default: {
      spotTypesToSearchFor = ["R"];
    }
  }

  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      const spot = spots[y][x];
      if (spotTypesToSearchFor.includes(spot)) {
        return [x, y];
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);
