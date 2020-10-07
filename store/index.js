import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      addDeck(state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === editDeck.id
        )
        state.decks[deckIndex] = editDeck
      },
      deleteDeck(state, deleteDeck) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === deleteDeck.id
        )

        state.decks.splice(deckIndex, 1)
      },
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
      addDeck(vuexContent, deckData) {
        return axios
          .post(
            'https://nuxt-learing-english.firebaseio.com/decks.json',
            deckData
          )
          .then((result) => {
            vuexContent.commit('addDeck', { ...deckData, id: result.data.name })
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      editDeck(vuexContent, deckData) {
        const deckId = deckData.id
        delete deckData.id
        return axios
          .put(
            `https://nuxt-learing-english.firebaseio.com/decks/${deckId}.json`,
            deckData
          )
          .then((result) => {
            // eslint-disable-next-line no-console
            console.log('editDeck -> result', result)

            vuexContent.commit('editDeck', { ...result.data, id: deckId })
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      deleteDeck(vuexContent, deckData) {
        const deckId = deckData.id
        delete deckData.id
        return axios
          .delete(
            `https://nuxt-learing-english.firebaseio.com/decks/${deckId}.json`,
            deckData
          )
          .then((result) => {
            // eslint-disable-next-line no-console
            console.log('editDeck -> result', result)

            vuexContent.commit('deleteDeck', { ...result.data, id: deckId })
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
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
