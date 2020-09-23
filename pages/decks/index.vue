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
        <li>
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://img.freepik.com/free-vector/english-word-education-banner_66675-157.jpg?size=626&ext=jpg"
                alt="Thumbnai card"
              />
              <div class="card_body">
                <h3>Title card content</h3>
                <p>Description card content</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://img.freepik.com/free-vector/english-word-education-banner_66675-157.jpg?size=626&ext=jpg"
                alt="Thumbnai card"
              />
              <div class="card_body">
                <h3>Title card content</h3>
                <p>Description card content</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/3">
            <div class="card deck-card">
              <img
                src="https://img.freepik.com/free-vector/english-word-education-banner_66675-157.jpg?size=626&ext=jpg"
                alt="Thumbnai card"
              />
              <div class="card_body">
                <h3>Title card content</h3>
                <p>Description card content</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <v-modal name="test">
      <div class="test__body">
        <h1>Hello test Model</h1>
        <button class="btn btn_danger" @click.prevent="closeModal">
          Close Model
        </button>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$modal.open({ name: 'test' })
    },
    closeModal() {
      this.$modal.close({ name: 'test' })
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
