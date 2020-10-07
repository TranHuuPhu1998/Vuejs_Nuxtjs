<template>
  <div>
    <default-header />
    <Nuxt />
    <v-modal v-slot="payload" name="DeckFromModal">
      <div class="test__body">
        <h1>
          {{ payload && payload.payload ? 'Edit a Deck' : 'Create a new Deck' }}
        </h1>
        <deck-form :deck="payload.payload" @submit="onSubmit" />
      </div>
    </v-modal>
    <default-footer />
  </div>
</template>

<script>
import axios from 'axios'

import DeckForm from '@/components/Decks/DeckForm'
import DefaultHeader from '@/components/Header/DefaultHeader'
import DefaultFooter from '@/components/Footer/DefaultFooter'
export default {
  components: {
    DeckForm,
    DefaultHeader,
    DefaultFooter,
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        axios
          .post(
            'https://nuxt-learing-english.firebaseio.com/decks.json',
            deckData
          )
          .then((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      } else {
        const deckId = deckData.id
        delete deckData.id
        axios
          .put(
            `https://nuxt-learing-english.firebaseio.com/decks/${deckId}.json`,
            deckData
          )
          .then((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      }
    },
  },
}
</script>
