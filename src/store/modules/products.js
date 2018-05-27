import inventory from "../../api/inventory";

const state = {
  all: []
};

const getters = {
  allProducts: state => state.all
};

const actions = {
  getAllProducts({ commit }) {
    commit("setProducts", inventory.getAllProducts());
  }
};

const mutations = {
  setProducts(state, products) {
    state.all = products;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
