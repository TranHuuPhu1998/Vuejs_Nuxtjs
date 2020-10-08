import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
      token: null,
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
      setToken(state, token) {
        state.token = token
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(process.env.baseApiUrl + '/decks.json')
          .then((data) => {
            const decksArr = []
            for (const key in data) {
              decksArr.push({ ...data[key], id: key })
            }
            vuexContext.commit('setDecks', decksArr)
          })
          .catch((e) => vuexContext.error(e))
      },
      addDeck(vuexContent, deckData) {
        return this.$axios
          .$post(
            process.env.baseApiUrl +
              '/decks.json?auth=' +
              vuexContent.state.token,
            deckData
          )
          .then((data) => {
            vuexContent.commit('addDeck', { ...deckData, id: data.name })
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      authenticateUser(vuexContent, credentials) {
        // CHECK login or register first
        return new Promise((resolve, reject) => {
          let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`

          if (!credentials.isLogin) {
            authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
          }

          this.$axios
            .$post(authUrlApi, {
              email: credentials.email,
              password: credentials.password,
              returnSecureToken: true,
            })
            // eslint-disable-next-line no-console
            .then((result) => {
              vuexContent.commit('setToken', result.idToken)
              resolve({ success: true })
            })
            .catch((e) => {
              reject(e.response)
            })
        })
      },
      editDeck(vuexContent, deckData) {
        const deckId = deckData.id
        delete deckData.id
        return this.$axios
          .$put(
            `${process.env.baseApiUrl}/decks/${deckId}.json?auth=${vuexContent.state.token}`,
            deckData
          )
          .then((data) => {
            vuexContent.commit('editDeck', { ...data, id: deckId })
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      deleteDeck(vuexContent, deckData) {
        const deckId = deckData.id
        delete deckData.id
        return this.$axios
          .$delete(
            `${process.env.baseApiUrl}/decks/${deckId}.json?auth=${vuexContent.state.token}`,
            deckData
          )
          .then((data) => {
            vuexContent.commit('deleteDeck', { ...data, id: deckId })
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
