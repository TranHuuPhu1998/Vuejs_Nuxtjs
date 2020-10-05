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
          :id="deck._id"
          :key="deck._id"
          :name="deck.name"
          :decription="deck.decription"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="test__body">
        <h1>Create a new Deck</h1>
        <form action="">
          <div class="form_group">
            <lable for="name">Name:</lable>
            <input
              class="form_control"
              type="text"
              name="name"
              placeholder="Please enter name deck"
            />
          </div>
          <div class="form_group">
            <lable for="Description">Description:</lable>
            <textarea
              class="form_control"
              placeholder="Please enter description"
              name="Description"
            ></textarea>
          </div>
          <div class="form_group">
            <lable for="Thumbnai">Thumbnai:</lable>
            <input type="file" name="Thumbnai" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close Model
            </button>
            <button class="btn btn_success ml_3" @click.prevent="createModal">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
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
      this.$modal.open({ name: 'CreateDeckModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'CreateDeckModal' })
    },
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
