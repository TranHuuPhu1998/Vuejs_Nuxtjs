import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-learing-english.firebaseio.com/decks.json')
          .then((response) => {
            const decksArr = []
            for (const key in response.data) {
              decksArr.push({ ...response.data[key], id: key })
            }
            vuexContext.commit('setDecks', decksArr)
          })
          .catch((e) => vuexContext.error(e))
      },
      setDecks(vuexContent, decks) {
        vuexContent.commit('setDecks', decks)
      },
    },
    getters: {
      decks(state) {
        return state.decks
      },
    },
  })
}

export default createStore
