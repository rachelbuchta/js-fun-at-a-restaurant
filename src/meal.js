function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
};

function createMenuItem(menuItemName, price, type) {
  var menuItemName = {
    name: menuItemName,
    price: price,
    type: type
  };

  return menuItemName;
};

function addIngredients(ingredientName, ingredients) {
  if (ingredients.includes(ingredientName) !== true) {
    ingredients.push(ingredientName);
  } else {
    return ingredients;
  };
};

function formatPrice(initialPrice) {
  return "$" + initialPrice;
};

function decreasePrice(initialPrice) {
  var decreasedPrice = (initialPrice / 10);
  return (initialPrice - decreasedPrice);
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };

  return recipe;
};









module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
