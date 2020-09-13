import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
    token: localStorage.getItem('token') || '',
    authStatus: '',
    user: {}
  },
  mutations: {
    addToCart (state, payload) {
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    }, 
    removeFromCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      state.cart.splice(indexToDelete, 1)
    },
    plusCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      ++indexToDelete.qty
    },
    minusCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      if (indexToDelete.qty == 1) {
        state.cart.splice(indexToDelete, 1)
      }else{
        --indexToDelete.qty
      }
    },
    saveCart(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    getData(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    },
    auth_request(state){
      state.authStatus = 'loadings...'
    },
    auth_success(state,token){
      state.authStatus = 'success'
      localStorage.setItem('token',token)
      state.token = token
    },
    auth_fail(state){
      state.authStatus = 'fail'
    },
    logout(state){
      localStorage.removeItem('token')
      state.token = null
      state.user = null
    },
    storeUserData(state,user){
      state.user = user
    },
  },
  actions:{
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
      commit('saveCart')
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('saveCart')
    },
    plusCart({ commit }, payload) {
      commit('plusCart', payload)
      commit('saveCart')
    },
    minusCart({ commit }, payload) {
      commit('minusCart', payload)
      commit('saveCart')
    },
    getData({ commit }){
      commit('getData')
    },
    login({commit,dispatch},user){
      return new Promise((resolve, reject) => {
          commit('auth_request');
          let data = {
              client_id: 2,
              client_secret: 'ksyzDp1Er5CkmSoKuk2sWjJL9MJOF9lFC6Tfnnzx',
              grant_type: 'password',
              username: user.username,
              password: user.password
          };
          axios.post('http://localhost:8000/oauth/token', data)
              .then(res => {
                  const token = res.data.access_token;
                  localStorage.setItem('token', token);

                  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                  commit('auth_success', token);
                  dispatch('getUser');
                  resolve(res);
              })
              .catch(err => {
                  commit('auth_fail');
                  localStorage.removeItem('token');
                  reject(err);
              });
      });
    },
    getUser(state){
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/user')
        .then(res => {
            state.commit('storeUserData', res.data);
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
      });
    },
    loginSuccess({commit},token){
      commit('auth_success',token)
    },
    loginFail({commit}){
      commit('auth_fail')
    },
    logout({commit}){
      commit('logout')
    },
    storeUserData({commit},user){
      commit('storeUserData',user)
    },
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.authStatus,
  }
})

export default store