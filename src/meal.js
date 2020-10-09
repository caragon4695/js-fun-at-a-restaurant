function nameMenuItem(menuItemName) {
  var result = `Delicious ${menuItemName}`;
  return result;
}

function createMenuItem(menuItemName, menuItemPrice, menuItemType) {
  var menuItem = {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType,
  };
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) return;
  ingredients.push(ingredient);
};

function formatPrice(initialPrice) {
  var formattedPrice = `$${initialPrice}`;
  return formattedPrice;
};

function decreasePrice(initialPrice) {
  var decreasedPrice = (initialPrice * .9);
  return decreasedPrice;
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}
