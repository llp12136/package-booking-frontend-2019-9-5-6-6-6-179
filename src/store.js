import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    createTodos(context,content){
      const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
      axios.post(url,content).then(function(reponse){
      context.dispatch('fetchTodos');
      }).catch(function(error){
      alert(error)
      })
      }
  }
})
