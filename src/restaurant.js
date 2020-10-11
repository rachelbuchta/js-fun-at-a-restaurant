function createRestaurant(restaurantName) {
    var restaurant = {
      name: restaurantName,
      menus: menus = {
        breakfast: [],
        lunch: [],
        dinner: []
      }
    }
    return restaurant;
};

  function addMenuItem(restaurant, menuItem) {
      if (menuItem.type === "breakfast" && restaurant.menus.breakfast.includes(menuItem) !== true) {
        restaurant.menus.breakfast.push(menuItem);
      } else if (menuItem.type === "lunch" && restaurant.menus.lunch.includes(menuItem) !== true) {
        restaurant.menus.lunch.push(menuItem);
      } else if (menuItem.type === "dinner" && restaurant.menus.dinner.includes(menuItem) !== true) {
        restaurant.menus.dinner.push(menuItem);
      }

  };

  function removeMenuItem(restaurant, menuItem, type) {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (restaurant.menus.breakfast[i].name === menuItem && restaurant.menus.breakfast[i].type === type) {
        restaurant.menus.breakfast.splice(i,1);
        return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
      }
    };
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (restaurant.menus.dinner[i].name === menuItem && restaurant.menus.dinner[i].type === type) {
        restaurant.menus.dinner.splice(i,1);
        return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
      }
    };
        return "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!"
      };









  module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
