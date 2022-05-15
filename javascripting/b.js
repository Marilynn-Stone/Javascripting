const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let whichRecipe of recipes) {
    for (let x = 0; x < whichRecipe.ingredients.length; x++) {
      for (let y = 0; y < whichRecipe.ingredients.length; y++) {
        if (
          bakeryA.includes(whichRecipe.ingredients[x]) &&
          bakeryB.includes(whichRecipe.ingredients[y])
        ) {
          return whichRecipe.name;
        }
      }
    }
  }
};
