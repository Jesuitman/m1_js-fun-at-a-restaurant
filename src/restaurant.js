function createRestaurant(name,menus){
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch:[],
      dinner:[]
    }
  }
}

function addMenuItem(restaurant,items){
  var menuTypeArray=restaurant.menus[items.type]
  for (var i=0;i<menuTypeArray.length;i++){
    if (menuTypeArray[i].name === items.name){
      return
    }
  }
  menuTypeArray.push(items)
}

function removeMenuItem(restaurant, itemName, menuType) {
  var menuTypeArray = restaurant.menus[menuType];
  
  for (var i = 0; i < menuTypeArray.length; i++) {
    if (menuTypeArray[i].name === itemName) {
      var removedItem = menuTypeArray.splice(i, 1)[0];
      return `No one is eating our ${removedItem.name} - it has been removed from the ${menuType} menu!`;
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

function checkForFood(restaurant,requestedItem){
  var menuTypeArray=restaurant.menus[requestedItem.type]
  for (var i=0;i<menuTypeArray.length;i++){
    if (menuTypeArray[i].name === requestedItem.name){
      return `Yes, we're serving ${requestedItem.name} today!`
    }
  } 
  return `Sorry, we aren't serving ${requestedItem.name} today.` 
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}