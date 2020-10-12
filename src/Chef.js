class Chef {
  constructor(chefName, newRestaurant) {
    this.name = chefName;
    this.restaurant = newRestaurant;
    this.greetCustomer = function(newCustomer, isMorning) {
      if (isMorning == true) {
        return `Good morning, ${newCustomer}!`
      } else {
        return `Hello, ${newCustomer}!`
      };
    };
    this.checkForFood = function(foodItem) {
      if (newRestaurant.menus.breakfast.includes(foodItem) || newRestaurant.menus.lunch.includes(foodItem)) {
        return `Yes, we're serving ${foodItem.name} today!`;
      };

        return `Sorry, we aren't serving ${foodItem.name} today.`;
    };
  };
};


module.exports = Chef;
