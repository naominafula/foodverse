const foods = [
  {
    id: 1,
    name: "Classic Beef Burger",
    category: "Fast Food",
    price: 850,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    description: "Juicy beef burger with fresh vegetables and cheese.",
    preparationTime: "25 minutes",
    ingredients: [
      "Beef patty",
      "Burger bun",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onion"
    ]
  },

  {
    id: 2,
    name: "Italian Pizza",
    category: "Lunch",
    price: 1200,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    description: "Delicious pizza topped with cheese and fresh ingredients.",
    preparationTime: "30 minutes",
    ingredients: [
      "Pizza dough",
      "Mozzarella cheese",
      "Tomato sauce",
      "Mushrooms",
      "Olives"
    ]
  },

  {
    id: 3,
    name: "Pancakes",
    category: "Breakfast",
    price: 550,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    description: "Soft pancakes served with syrup and fresh fruits.",
    preparationTime: "15 minutes",
    ingredients: [
      "Flour",
      "Milk",
      "Eggs",
      "Sugar",
      "Butter"
    ]
  },

  {
    id: 4,
    name: "Grilled Chicken",
    category: "Dinner",
    price: 1100,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800",
    description: "Seasoned grilled chicken served with vegetables.",
    preparationTime: "40 minutes",
    ingredients: [
      "Chicken",
      "Garlic",
      "Black pepper",
      "Lemon",
      "Vegetables"
    ]
  },

  {
    id: 5,
    name: "Fresh Fruit Juice",
    category: "Drinks",
    price: 300,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
    description: "Refreshing freshly prepared fruit juice.",
    preparationTime: "5 minutes",
    ingredients: [
      "Fresh fruits",
      "Water",
      "Ice"
    ]
  },

  {
    id: 6,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 450,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    description: "Rich chocolate cake with a smooth chocolate topping.",
    preparationTime: "45 minutes",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Eggs",
      "Butter"
    ]
  },
  {
    id: 7,
    name: "Caesar Salad",
    category: "Lunch",
    price: 700,
    image: "/images/The Best Grilled Chicken Caesar Salad Recipe.jpeg",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    preparationTime: "20 minutes",
    ingredients: [
      "Romaine lettuce",
      "Caesar dressing",
      "Croutons",
      "Parmesan cheese"
    ]
  },
  {
    id: 8,
    name: "Spaghetti Bolognese",
    category: "Dinner",
    price: 950,
    image: "/images/432908582956162477.jpeg",
    description: "Classic Italian pasta dish with rich meat sauce.",
    preparationTime: "35 minutes",
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic"
    ]
  }
  ,
  {
     id: 9,
    name: "Avocado Toast",
    category: "Breakfast",
    price: 400,
    image: "/images/Crispy Shrimp & Avocado Breakfast Toast 🍞✨ _ High Protein Healthy Breakfast Idea.jpeg",
    description: "Toasted bread topped with mashed avocado and seasonings.",
    preparationTime: "10 minutes",
    ingredients: [
      "Bread",
      "Avocado",
      "Lemon juice",
      "Salt",
      "Pepper"
]
},
  {
    id: 10,
    name: "Veggie Wrap",
    category: "Snacks",
    price: 600,
    image: "/images/Cheesy Chicken Wrap Recipe Food Inspiration.jpeg",
    description: "A healthy wrap filled with fresh vegetables and hummus.",
    preparationTime: "15 minutes",
    ingredients: [
      "Tortilla wrap",
      "Hummus",
      "Lettuce",
      "Tomato",
      "Cucumber"
    ]
  },

  {
    id: 11,
    name: "Mango Smoothie",
    category: "Drinks",
    price: 350,
    image: "/images/912541943268814490.jpeg",
    description: "A refreshing smoothie made with ripe mangoes and yogurt.",
    preparationTime: "5 minutes",
    ingredients: [
      "Mango",
      "Yogurt",
      "Honey",
      "Ice"
    ]
  },

{
  id: 12,
  name: "Chocolate Chip Cookies",
  category: "Desserts",
  price: 250,
  image: "/images/Chocolate Chip Cookies – Soft, Chewy & Bakery-Style Homemade Cookies (1).jpeg",
  description: "Classic cookies loaded with chocolate chips.",
  preparationTime: "20 minutes",
  ingredients: [
    "Flour",
    "Sugar",
    "Butter",
    "Eggs",
    "Chocolate chips"
  ]
},
{
  id: 13,
  name: "Caprese Salad",
  category: "Lunch",
  price: 650,
  image: "/images/Caprese Salad (Italian).jpeg",
  description: "Fresh salad with tomatoes, mozzarella, and basil.",
  preparationTime: "15 minutes",
  ingredients: [
    "Tomatoes",
    "Mozzarella cheese",
    "Basil leaves",
    "Olive oil",
    "Balsamic vinegar"
  ]
},
{
  id: 14,
  name: "Grilled Salmon",
  category: "Dinner",
  price: 1300,
  image: "/images/1116259457704547209.jpeg",
  description: "Perfectly grilled salmon fillet with lemon and herbs.",
  preparationTime: "30 minutes",
  ingredients: [
    "Salmon fillet",
    "Lemon",
    "Garlic",
    "Olive oil",
    "Herbs"
  ]
}, 
{
  id: 15,
  name: "Fruit Parfait",
  category: "Breakfast",
  price: 500,
  image: "/images/444308319512319141.jpeg",
  description: "Layered dessert with yogurt, granola, and fresh fruits.",
  preparationTime: "10 minutes",
  ingredients: [
    "Yogurt",
    "Granola",
    "Fresh fruits",
    "Honey"
  ]
},

{
  id: 16,
  name: "Veggie Burger",
  category: "Snacks",
  price: 750,
  image: "/images/Veggie Burger.jpeg",
  description: "A delicious burger made with a plant-based patty and fresh vegetables.",
  preparationTime: "20 minutes",
  ingredients: [
    "Plant-based patty",
    "Burger bun",
    "Lettuce",
    "Tomato",
    "Onion"
  ]
},

{
  id: 17,
  name: "Iced Coffee",
  category: "Drinks",
  price: 400,
  image: "/images/🧊 Iced Coffee.jpeg",
  description: "Chilled coffee served over ice with milk and sweetener.",
  preparationTime: "5 minutes",
  ingredients: [
    "Coffee",
    "Ice",
    "Milk",
    "Sweetener"
  ]
},

{
  id: 18,
  name: "Tiramisu",
  category: "Desserts",
  price: 600,
  image: "/images/Classic Italian Tiramisu Recipe _ No-Bake Dessert.jpeg",
  description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
  preparationTime: "30 minutes",
  ingredients: [
    "Ladyfingers",
    "Mascarpone cheese",
    "Coffee",
    "Cocoa powder",
    "Sugar"
  ]
},

{
  id: 19,
  name: "Chicken Caesar Wrap",
  category: "Lunch",
  price: 800,
  image: "/images/😘😘😘😘.jpeg",
  description: "A wrap filled with grilled chicken, romaine lettuce, and Caesar dressing.",
  preparationTime: "15 minutes",
  ingredients: [
    "Grilled chicken",
    "Tortilla wrap",
    "Romaine lettuce",
    "Caesar dressing",
    "Parmesan cheese"
  ]
},

{
  id: 20,
  name: "Beef Stir-Fry",
  category: "Dinner",
  price: 1100,
  image: "/images/Beef Stir-Fry with Vegetables.jpeg",
  description: "Tender beef strips stir-fried with vegetables and a savory sauce.",
  preparationTime: "25 minutes",
  ingredients: [
    "Beef strips",
    "Bell peppers",
    "Onions",
    "Soy sauce",
    "Garlic"
  ]
},

{
  id: 21,
  name: "Avocado Smoothie",
  category: "Drinks",
  price: 450,
  image: "/images/🟢 It’s Avocado Season!  Let’s Get Creative! 🥑✨.jpeg",
  description: "A creamy smoothie made with ripe avocados, milk, and a touch of honey.",
  preparationTime: "5 minutes",
  ingredients: [
    "Avocado",
    "Milk",
    "Honey",
    "Ice"
  ]
},

{
  id: 22,
  name: "Lemon Tart",
  category: "Desserts",
  price: 550,
  image: "/images/Classic Lemon Curd Tart.jpeg",
  description: "A tangy and sweet dessert with a buttery crust and lemon filling.",
  preparationTime: "40 minutes",
  ingredients: [
    "Flour",
    "Butter",
    "Sugar",
    "Eggs",
    "Lemon juice"
  ]
},

{
  id: 23,
  name: "Greek Salad",
  category: "Lunch",
  price: 700,
  image: "/images/Best Recipe for Greek Salad _ Healthy Greek Recipe _ Summer Meal Idea _ Greek Horiatiki _ Mediterranean Salad Cookbook _ Ebook _ Download.jpeg",
  description: "A refreshing salad with cucumbers, tomatoes, olives, and feta cheese.",
  preparationTime: "15 minutes",
  ingredients: [
    "Cucumbers",
    "Tomatoes",
    "Olives",
    "Feta cheese",
    "Olive oil"
  ]
},

{
  id: 24,
  name: "Shrimp Tacos",
  category: "Dinner",
  price: 950,
  image: "/images/Zesty Tajín Lime Seasoned Shrimp Tacos.jpeg",
  description: "Soft tacos filled with seasoned shrimp, fresh vegetables, and a zesty sauce.",
  preparationTime: "20 minutes",
  ingredients: [
    "Shrimp",
    "Tortilla wraps",
    "Cabbage",
    "Avocado",
    "Lime"
  ]
},

{
  id: 25,
  name: "Berry Parfait",
  category: "Breakfast",
  price: 500,
  image: "/images/Coffee Room - Coffee Room added a new photo_.jpeg",
  description: "A layered dessert with yogurt, granola, and fresh berries.",
  preparationTime: "10 minutes",
  ingredients: [
    "Yogurt",
    "Granola",
    "Fresh berries",
    "Honey"
  ]
},

{
  id: 26,
  name: "Falafel Wrap",
  category: "Snacks",
  price: 650,
  image: "/images/Ultimate Crispy Falafel Wrap_ Healthy Mediterranean Recipe.jpeg",
  description: "A wrap filled with crispy falafel, fresh vegetables, and tahini sauce.",
  preparationTime: "15 minutes",
  ingredients: [
    "Falafel",
    "Tortilla wrap",
    "Lettuce",
    "Tomato",
    "Tahini sauce"
  ]
},

{
  id: 27,
  name: "Iced Matcha Latte",
  category: "Drinks",
  price: 400,
  image: "/images/Iced matcha latte in a clear glass with layered green matcha and creamy milk.jpeg",
  description: "A refreshing iced latte made with matcha green tea and milk.",
  preparationTime: "5 minutes",
  ingredients: [
    "Matcha powder",
    "Milk",
    "Ice",
    "Sweetener"
  ]
},

{
  id: 28,
  name: "Vanilla Cupcakes",
  category: "Desserts",
  price: 300,
  image: "/images/Fluffy & Moist Vanilla Cupcakes 🧁✨.jpeg",
  description: "Soft and fluffy vanilla cupcakes topped with creamy frosting.",
  preparationTime: "30 minutes",
  ingredients: [
    "Flour",
    "Sugar",
    "Butter",
    "Eggs",
    "Vanilla extract"
  ]
},

{
  id: 29,
  name: "pilau",
  category: "Lunch",
  price: 750,
  image: "/images/Siri ya Kupika Pilau ya Ng’ombe Tamu Kama ya hotelini _ Ina Harufu Nzuri 😍.jpeg",
  description: "A healthy salad made with quinoa, fresh vegetables, and a light dressing.",
  preparationTime: "20 minutes",
  ingredients: [
    "rice",
    "beef",
    "onion",
    "garlic",
    "spices"
  ]
},

{
  id: 30,
  name: "Beef chapati",
  category: "Dinner",
  price: 900,
  image: "/images/Chapati with Beef Stew and Vegetables.jpeg",
  description: "Soft chapati with beef stew and veggies.",
  preparationTime: "20 minutes",
  ingredients: [
    "Beef",
    "Chapati",
    "Cabbage",
    "Onion",
    "Tomato"
  ]
},

{
  id: 31,
  name: "french fries",
  category: "fast food",
  price: 400,
  image: "/images/348466089941477616.jpeg",
  description: "Crispy golden french fries served with ketchup.",
  preparationTime: "15 minutes",
  ingredients: [
    "Potatoes",
    "Salt",
    "Oil"
  ]
},

{
  id: 32,
  name: "chicken biryani",
  category: "Dinner",
  price: 1200,
  image: "/images/Chicken Biryani _ Fragrant  Rice Dish🍚🍗.jpeg",
  description: "A flavorful rice dish with marinated chicken and aromatic spices.",
  preparationTime: "45 minutes",
  ingredients: [
    "Chicken",
    "Basmati rice",
    "Yogurt",
    "Onion",
    "Spices"
  ]
},

{
  id: 33,
  name: "toast bread with eggs",
  category: "breakfast",
  price: 350,
  image: "/images/Breakfast.jpeg",
  description: "Toasted bread served with scrambled eggs and avocado slices.",
  preparationTime: "10 minutes",
  ingredients: [
    "Bread",
    "Eggs",
    "Avocado",
    "Salt",
    "Pepper"
  ]
},

{
  id: 34,
  name: "chicken wings",
  category: "snacks",
  price: 600,
  image: "/images/Crispy Old Bay Chicken Wings.jpeg",
  description: "Crispy chicken wings tossed in a tangy sauce.",
  preparationTime: "25 minutes",
  ingredients: [
    "Chicken wings",
    "Hot sauce",
    "Butter",
    "Garlic powder",
    "Salt"
  ]
}, 
{
  id: 35,
  name: "fruits juice",
  category: "drinks",
  price: 300,
  image: "/images/Ultimate Social Media Explosion 🎉📱.jpeg",
  description: "A refreshing blend of fresh fruits and vegetables.",
  preparationTime: "5 minutes",
  ingredients: [
    "Mixed fruits",
    "Vegetables",
    "Water",
    "Sweetener"
  ]
},

{
  id: 36,
  name: "ice cream sundae",
  category: "desserts",
  price: 450,
  image: "/images/Luxurious Cherry Chocolate Sundae 🍨🍫 _ The Ultimate Ice Cream Indulgence!.jpeg",
  description: "A delightful sundae topped with ice cream and various toppings.",
  preparationTime: "10 minutes",
  ingredients: [
    "Ice cream",
    "Sauce",
    "Toppings"
  ]
}



];

export default foods;