function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type){
  return{
    name: name,
    price: price,
    type: type
  }
}
function addIngredients(ingredients, array){
  if (!array.includes(ingredients)){
    return array.push(ingredients)
  }
}

function formatPrice(initialPrice){
  return `$${initialPrice}`
}

function decreasePrice(price){
  return price*.9
}

function createRecipe(title, ingredients, type){
  return{
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


