<template>
  <div class="ct">
    <h3>List of your decks:</h3>
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
</template>

<script>
export default {
  data() {
    return {
      deckID: '1',
    }
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
</style>
