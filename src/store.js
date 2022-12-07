import Vue from 'vue'
import Vuex from 'vuex'
import { getCartData, addToCart } from './services/api'

Vue.use(Vuex)

// All the states here
const state = {
  cart: []
}

const mutations = {
  fetchId(state, id) {
    state.acc_id = id;
  }
}

const actions = {

  // Fetching all the Cart Items
  async fetchCart({ state }, id) {
    const res = await getCartData(id);
    const data = res.data;
    state.cart = data;
    return data;
  },

  async addToCart({ dispatch }, payload) {
    try {
      const res = await addToCart(payload);
      dispatch('fetchCart');
      return res;
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})