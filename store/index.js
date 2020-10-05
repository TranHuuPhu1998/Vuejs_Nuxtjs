import Vuex from 'vuex'

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
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            resolve({
              decks: [
                {
                  _id: 1,
                  name: 'Learn English',
                  decription:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting's industry. Lorem Ipsum has been the industrys standard dummy",
                  thumbnail:
                    'https://img.freepik.com/free-vector/english-word-education-banner_66675-157.jpg?size=626&ext=jpg',
                },
                {
                  _id: 2,
                  name: 'Learn Japan 2',
                  decription:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting's industry. Lorem Ipsum has been the industrys standard dummy",
                  thumbnail:
                    'https://img.freepik.com/free-vector/english-word-education-banner_66675-157.jpg?size=626&ext=jpg',
                },
                {
                  _id: 3,
                  name: 'Learn VietName 3',
                  decription:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting's industry. Lorem Ipsum has been the industrys standard dummy",
                  thumbnail:
                    'https://img.freepik.com/free-vector/english-word-education-banner_66675-157.jpg?size=626&ext=jpg',
                },
              ],
            })
          }, 1500)
        }).then((data) => {
          vuexContext.commit('setDecks', data.decks)
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
