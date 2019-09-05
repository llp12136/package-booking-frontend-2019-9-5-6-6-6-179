import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    initTodos: function (state, todos) {
      state.todoList = todos
    },

  },
  actions: {
    fetchTodos(context) {
      const url = "http://localhost:8082/packge";
      axios.get(url).then(function (response) {
        context.commit('initTodos', response.data);
        // console.log(30)
        console.log(response)
      }
      )
    },
    createTodos(context, content) {
      const url = "http://localhost:8082/packge";
      axios.post(url, content).then(function (reponse) {
        context.dispatch('fetchTodos');
      }).catch(function (error) {
        alert(error)
      })
    }
  }
})
