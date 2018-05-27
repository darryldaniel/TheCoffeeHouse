const state = {
  items: []
};

const getters = {
  numberOfItems: ({ items }) => {
    return items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }
};

const actions = {
  addToCart: ({ state, commit }, product) => {
    if (state.items.find(item => item.id === product.id)) {
      commit("incrementItemQuantity", { id: product.id });
    } else {
      commit("pushProductToCart", { id: product.id });
    }
  }
};

const mutations = {
  pushProductToCart: (state, { id }) => {
    state.items.push({
      id,
      quantity: 1
    });
  },
  incrementItemQuantity: (state, { id }) => {
    state.items.find(item => item.id === id).quantity++;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
