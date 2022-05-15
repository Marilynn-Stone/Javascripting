const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let total = bakeryA.concat(bakeryB);
  for (let recipe of recipes) {
    const containsAll = recipe.ingredients.every((element) => {
      return total.includes(element);
    });
    console.log(recipe.name);
  }
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
