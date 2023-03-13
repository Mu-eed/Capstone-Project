import { createStore } from 'vuex'
import axios from 'axios';
const renderURL = "https://meedleez.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setMessage(state, value){
      state.message = value
    },
    setProducts(state, values){
      state.products = values
    },
    setMessage(state, values){
      state.message = values
    },
    setSpinner(state, value){
      showSpinner = value
    }
  },
  actions: {
    async login(context, payload){
      const res = await axios.patch(`${renderURL}login`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
      }else{
        context.commit('setMessage', err);
      }
    },
    async register(context, payload){
      let res = await axios.post(`${renderURL}register`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else{
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context){
      let res = await axios.get(`${renderURL}users`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUser', results);
      }else{
        context.commit('setMessage', err);
      }
    },
    async updateUser(context, payload){
      let res = await axios.put(`${renderURL}users/${payload.id}`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers')
      }else{
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, payload){
      console.log(`Delete: ${id}`);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers');
      }else{
        context.commit('setMessage', err);
      }
    },
    async addProduct(context, payload){
      let res = axios.post(`${renderURL}product`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg)
      }
    },
    async fetchProducts(context){
      const res = await axios.get(`${renderURL}products`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      }
      if(err) {
        context.commit('setMessage', err);
      }
    },
    async fetchProduct(context, id){
      const res = await axios.get(`${renderURL}product/${id}`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProduct', results);
        context.commit('setSpinner', false);
      }
      if(err) {
        context.commit('setMessage', err)
      }
    },
    async updateProduct(context, payload){
      const res = await axios.put(`${renderURL}product/${payload.id}`, payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchProducts');
      }
      if(err) {
        context.commit('setMessage', msg || err)
      }
    },
    async deleteProduct(context, id){
      const res = await axios.delete(`${renderURL}product/${id}`);
      const {err, msg} = await res.data;
      if(msg) {
        context.dispatch('fetchProducts');
      }
      if(err) {
        context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})
