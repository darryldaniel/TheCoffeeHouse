const _coffee = [
  {
    id: 1,
    name: "Equador Single Origin",
    type: "coffee",
    price: "79.00",
    quantity: 10
  },
  {
    id: 2,
    name: "Indonesia Single Origin",
    type: "coffee",
    price: "89.00",
    quantity: 8
  },
  {
    id: 3,
    name: "Blended Multi-Origin",
    type: "coffee",
    price: "69.00",
    quantity: 20
  }
];

const _aparatus = [
  {
    id: 4,
    name: "French Press",
    type: "aparatus",
    price: "199.00",
    quantity: 5
  },
  {
    id: 5,
    name: "Grinder",
    type: "aparatus",
    price: "109.00",
    quantity: 7
  }
];

export default {
  getAllProducts() {
    return [..._coffee, ..._aparatus];
  },
  getAllCoffee() {
    return _coffee;
  },
  getAllAparatus() {
    return _aparatus;
  }
};
