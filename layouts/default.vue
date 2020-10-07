<template>
  <div>
    <default-header />
    <Nuxt />
    <v-modal v-slot="payload" name="DeleteDeckModal">
      <div class="test__body">
        <deck-delete
          :deck="payload.payload"
          @submitDeckDelete="onDeleteSubmit"
        />
      </div>
    </v-modal>
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
import DeckDelete from '@/components/Decks/DeckDelete'
import DeckForm from '@/components/Decks/DeckForm'
import DefaultHeader from '@/components/Header/DefaultHeader'
import DefaultFooter from '@/components/Footer/DefaultFooter'

export default {
  components: {
    DeckForm,
    DefaultHeader,
    DefaultFooter,
    DeckDelete,
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        this.$store.dispatch('addDeck', deckData).then(() => {
          this.$modal.close({ name: 'DeckFromModal' })
        })
      } else {
        this.$store.dispatch('editDeck', deckData).then(() => {
          this.$modal.close({ name: 'DeckFromModal' })
          this.$router.push('/decks')
        })
      }
    },
    onDeleteSubmit(deckData) {
      if (deckData && deckData.id) {
        // eslint-disable-next-line no-console
        console.log('onDeleteSubmit -> deckData', deckData)
        this.$store.dispatch('deleteDeck', deckData).then(() => {
          this.$modal.close({ name: 'DeleteDeckModal' })
          this.$router.push('/decks')
        })
      }
    },
  },
}
</script>
