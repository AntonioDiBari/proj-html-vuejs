import { reactive } from "vue";

export const store = reactive({
  navLinks: [
    "Home",
    "Shop",
    "About",
    "Gallery",
    "Locations",
    "Journals",
    "Contact",
    "My Account",
    "Orders",
  ],
  slides: [
    {
      name: "Choco Chip Cookies",
      imagePath: "choco-chip-cookies-600x765.jpg",
      description: "Cookies, Pastries",
      price: "$19.00 - $39.00",
    },
    {
      name: "Strawberry Jam Cookies",
      imagePath: "strawberry-jam-cookies-600x765.jpg",
      description: "Cookies, Pastries",
      price: "$24.00 - $62.00",
    },
    {
      name: "Strawberry Donut",
      imagePath: "strawberry-donut-600x765.jpg",
      description: "Donuts, Pastries",
      price: "$24.00 - $42.00",
    },
    {
      name: "Perfect Macarons",
      imagePath: "perfect-macarons-600x765.jpg",
      description: "Macarons, French Pastries",
      price: "$18.00 - $52.00",
    },
    {
      name: "Blackberry Stuffed Bread",
      imagePath: "blackberry-stuffed-bread-600x765.jpg",
      description: "Bread, Bakery",
      price: "$14.00 - $32.00",
    },
    {
      name: "Cherry Cake",
      imagePath: "cherry-cake-600x765.jpg",
      description: "Cake, Pastries",
      price: "$24.00 - $52.00",
    },
    {
      name: "Cookies with Ice Cream",
      imagePath: "cookies-with-ice-cream-600x765.jpg",
      description: "Cookies, Pastries",
      price: "$18.00 - $28.00",
    },
    {
      name: "Glazed Pancake with Lemon",
      imagePath: "glazed-pancake-with-lemon-600x765.jpg",
      description: "Pancakes, Pastries",
      price: "$28.00 - $42.00",
    },
    {
      name: "Home Bread",
      imagePath: "home-bread-600x765.jpg",
      description: "Bread, Bakery",
      price: "$10.00 - $18.00",
    },
    {
      name: "Premium Bread",
      imagePath: "premium-bread-600x765.jpg",
      description: "Bread, Bakery",
      price: "$18.00 - $24.00",
    },
    {
      name: "Small Cupcake",
      imagePath: "small-cupcake-600x765.jpg",
      description: "Cupcakes, Pastries",
      price: "$10.00 - $14.00",
    },
  ],
});
