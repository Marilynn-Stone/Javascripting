const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

const coneVolume = function (radius, height) {
  return (1 / 3) * PI * Math.pow(radius, 2) * height;
};

const prismVolume = function (height, width, depth) {
  return width * depth * height;
};

const totalVolume = function (solids) {
  let volume = 0;
  for (let solid of solids) {
    if (solid.type === "sphere") {
      volume += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      volume += coneVolume(solid.radius, solid.height);
    } else if (solid.type === "prism") {
      volume += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return volume;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(totalVolume(duck));

/*const shapes = {
  "sphere": sphereVolume,
  "cone": coneVolume,
  "prism": prismVolume,
};*/
