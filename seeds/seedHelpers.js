//`https://picsum.photos/400?random=${Math.floor(Math.random()+1)}`


const products = [
  // Pizzas
  { name: "Margherita Pizza", price: 12.99, rating: 5, ingredients: ["Tomato", "Mozzarella", "Basil"], category: "pizza" },
  { name: "Pepperoni Pizza", price: 14.99, rating: 4, ingredients: ["Tomato", "Mozzarella", "Pepperoni"], category: "pizza" },
  { name: "BBQ Chicken Pizza", price: 16.99, rating: 4, ingredients: ["BBQ Sauce", "Chicken", "Red Onion", "Mozzarella"], category: "pizza" },
  { name: "Hawaiian Pizza", price: 15.99, rating: 3, ingredients: ["Tomato", "Ham", "Pineapple", "Mozzarella"], category: "pizza" },
  { name: "Veggie Pizza", price: 13.99, rating: 5, ingredients: ["Tomato", "Bell Peppers", "Mushrooms", "Olives", "Mozzarella"], category: "pizza" },
  // { name: "Meat Lovers Pizza", price: 18.99, rating: 5, ingredients: ["Pepperoni", "Sausage", "Ham", "Bacon", "Mozzarella"], category: "pizza" },
  // { name: "Buffalo Chicken Pizza", price: 16.99, rating: 4, ingredients: ["Buffalo Sauce", "Chicken", "Blue Cheese", "Mozzarella"], category: "pizza" },
  // { name: "Four Cheese Pizza", price: 14.99, rating: 5, ingredients: ["Mozzarella", "Parmesan", "Gorgonzola", "Cheddar"], category: "pizza" },
  // { name: "Mushroom and Spinach Pizza", price: 14.49, rating: 4, ingredients: ["Spinach", "Mushrooms", "Garlic", "Mozzarella"], category: "pizza" },
  // { name: "White Pizza", price: 15.49, rating: 3, ingredients: ["Garlic Sauce", "Ricotta", "Mozzarella", "Parmesan"], category: "pizza" },
  // { name: "Mexican Pizza", price: 16.99, rating: 5, ingredients: ["Spicy Salsa", "Jalapeños", "Ground Beef", "Mozzarella"], category: "pizza" },
  // { name: "Truffle Pizza", price: 19.99, rating: 5, ingredients: ["Truffle Oil", "Mushrooms", "Mozzarella", "Parmesan"], category: "pizza" },
  // { name: "Seafood Pizza", price: 20.99, rating: 4, ingredients: ["Shrimp", "Mussels", "Clams", "Tomato", "Mozzarella"], category: "pizza" },
  // { name: "Prosciutto Pizza", price: 17.99, rating: 5, ingredients: ["Prosciutto", "Arugula", "Parmesan", "Mozzarella"], category: "pizza" },
  // { name: "Sausage and Peppers Pizza", price: 16.49, rating: 4, ingredients: ["Italian Sausage", "Bell Peppers", "Tomato Sauce", "Mozzarella"], category: "pizza" },
  // { name: "Greek Pizza", price: 15.99, rating: 4, ingredients: ["Feta", "Olives", "Spinach", "Mozzarella"], category: "pizza" },
  // { name: "Chicken Alfredo Pizza", price: 16.99, rating: 4, ingredients: ["Alfredo Sauce", "Chicken", "Spinach", "Mozzarella"], category: "pizza" },
  // { name: "Taco Pizza", price: 17.49, rating: 4, ingredients: ["Ground Beef", "Cheddar", "Lettuce", "Tomatoes", "Taco Sauce"], category: "pizza" },
  // { name: "Bacon Cheeseburger Pizza", price: 17.99, rating: 5, ingredients: ["Ground Beef", "Bacon", "Cheddar", "Pickles", "Mozzarella"], category: "pizza" },
  // { name: "Pesto Chicken Pizza", price: 16.49, rating: 4, ingredients: ["Pesto Sauce", "Chicken", "Sun-Dried Tomatoes", "Mozzarella"], category: "pizza" },

  // Sandwiches
  { name: "Turkey Club", price: 9.99, rating: 4, ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato", "Mayo", "Toasted Bread"], category: "sandwich" },
  { name: "Philly Cheesesteak", price: 11.99, rating: 5, ingredients: ["Steak", "Onions", "Peppers", "Provolone", "Hoagie Roll"], category: "sandwich" },
  { name: "Chicken Caesar Wrap", price: 8.99, rating: 4, ingredients: ["Grilled Chicken", "Romaine Lettuce", "Caesar Dressing", "Tortilla"], category: "sandwich" },
  { name: "Tuna Melt", price: 8.49, rating: 3, ingredients: ["Tuna Salad", "Cheddar", "Tomato", "Sourdough Bread"], category: "sandwich" },
  { name: "BLT Sandwich", price: 7.99, rating: 5, ingredients: ["Bacon", "Lettuce", "Tomato", "Mayo", "White Bread"], category: "sandwich" },
  // { name: "Caprese Sandwich", price: 9.49, rating: 4, ingredients: ["Mozzarella", "Tomato", "Basil", "Balsamic", "Ciabatta"], category: "sandwich" },
  // { name: "Meatball Sub", price: 10.99, rating: 5, ingredients: ["Meatballs", "Marinara Sauce", "Mozzarella", "Hoagie Roll"], category: "sandwich" },
  // { name: "Italian Sub", price: 11.49, rating: 4, ingredients: ["Salami", "Ham", "Provolone", "Lettuce", "Tomato", "Italian Dressing"], category: "sandwich" },
  // { name: "Ham and Cheese Sandwich", price: 7.49, rating: 3, ingredients: ["Ham", "Cheddar", "Lettuce", "Mayo", "White Bread"], category: "sandwich" },
  // { name: "Pulled Pork Sandwich", price: 10.99, rating: 5, ingredients: ["Pulled Pork", "BBQ Sauce", "Coleslaw", "Brioche Bun"], category: "sandwich" },
  // { name: "Chicken Parmesan Sandwich", price: 11.99, rating: 5, ingredients: ["Breaded Chicken", "Marinara Sauce", "Mozzarella", "Italian Roll"], category: "sandwich" },
  // { name: "Roast Beef Sandwich", price: 10.49, rating: 4, ingredients: ["Roast Beef", "Swiss Cheese", "Horseradish", "Rye Bread"], category: "sandwich" },
  // { name: "Grilled Cheese Sandwich", price: 5.99, rating: 4, ingredients: ["Cheddar Cheese", "Butter", "White Bread"], category: "sandwich" },
  // { name: "Buffalo Chicken Wrap", price: 9.49, rating: 4, ingredients: ["Buffalo Chicken", "Lettuce", "Ranch", "Tortilla"], category: "sandwich" },
  // { name: "Pastrami on Rye", price: 11.49, rating: 5, ingredients: ["Pastrami", "Swiss Cheese", "Mustard", "Rye Bread"], category: "sandwich" },

  // Desserts
  { name: "Chocolate Cake", price: 5.99, rating: 5, ingredients: ["Chocolate", "Flour", "Sugar", "Eggs"], category: "dessert" },
  { name: "Cheesecake", price: 6.49, rating: 5, ingredients: ["Cream Cheese", "Graham Cracker Crust", "Sugar", "Eggs"], category: "dessert" },
  { name: "Tiramisu", price: 6.99, rating: 4, ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa Powder"], category: "dessert" },
  { name: "Apple Pie", price: 4.99, rating: 5, ingredients: ["Apples", "Cinnamon", "Pie Crust", "Sugar"], category: "dessert" },
  { name: "Brownie", price: 3.99, rating: 4, ingredients: ["Chocolate", "Butter", "Sugar", "Eggs"], category: "dessert" },
  { name: "Ice Cream Sundae", price: 4.49, rating: 4, ingredients: ["Vanilla Ice Cream","Chocolate Sauce" ], category : "dessert"},
  { name: "Panna Cotta", price: 5.49, rating: 5, ingredients: ["Cream", "Sugar", "Gelatin", "Vanilla"], category: "dessert" },
  { name: "Eclairs", price: 4.99, rating: 5, ingredients: ["Choux Pastry", "Cream", "Chocolate"], category: "dessert" },
  { name: "Cupcakes", price: 3.99, rating: 4, ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Frosting"], category: "dessert" },
  { name: "Fruit Salad", price: 4.49, rating: 3, ingredients: ["Mixed Fruits", "Honey", "Lemon Juice"], category: "dessert" },
  { name: "Mousse au Chocolat", price: 6.99, rating: 5, ingredients: ["Chocolate", "Cream", "Eggs", "Sugar"], category: "dessert" },



  //drinks
{ name: "Coca Cola", price: 1.99, rating: 4, ingredients: ["Carbonated Water", "Sugar", "Caramel Color"], category: "drink" },
{ name: "Pepsi", price: 1.99, rating: 4, ingredients: ["Carbonated Water", "Sugar", "Caramel Color"], category: "drink" },
{ name: "Sprite", price: 1.99, rating: 4, ingredients: ["Carbonated Water", "Lemon-Lime Flavor", "Sugar"], category: "drink" },
{ name: "Dr. Pepper", price: 1.99, rating: 4, ingredients: ["Carbonated Water", "Sugar", "Flavoring"], category: "drink" },
// { name: "Mountain Dew", price: 1.99, rating: 4, ingredients: ["Carbonated Water", "Sugar", "Citrus Flavor"], category: "drink" },
// { name: "Iced Tea", price: 2.49, rating: 4, ingredients: ["Tea", "Sugar", "Lemon"], category: "drink" },
// { name: "Lemonade", price: 2.49, rating: 4, ingredients: ["Water", "Lemon Juice", "Sugar"], category: "drink" },
// { name: "Orange Juice", price: 2.99, rating: 5, ingredients: ["Orange Juice"], category: "drink" },
// { name: "Apple Juice", price: 2.99, rating: 5, ingredients: ["Apple Juice"], category: "drink" },
// { name: "Milkshake", price: 3.99, rating: 5, ingredients: ["Milk", "Ice Cream", "Flavoring"], category: "drink" }


]


module.exports = products;