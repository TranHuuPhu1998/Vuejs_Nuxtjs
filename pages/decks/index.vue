/* eslint-disable no-console */
<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your Deck:</h3>
        <button class="btn btn_primary" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>
      <ul class="decks-list">
        <deck-list
          v-for="deck in decks"
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :decription="deck.decription"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
import DeckList from '@/components/Decks/DeckList'

export default {
  components: {
    DeckList,
  },

  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'DeckFromModal' })
    },
  },
  head: {
    title: 'Own Decks | Learning English',
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.decks-list {
  margin: 0;
  padding: 0;
  .deck {
    display: block;
  }
  li {
    margin-bottom: 1rem;
    list-style: none;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.deck-card {
  display: flex;
  height: 250px;
  flex-direction: row;
  img {
    width: 250px;
    height: auto;
  }
}
.test {
  &__body {
    background-color: #fff;
    padding: 1rem;
  }
}
</style>
