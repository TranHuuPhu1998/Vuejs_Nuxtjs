<template>
  <div class="ct">
    <div class="banner">
      <div class="thumbnail-banner">
        <img src="~assets/images/banner.jpg" alt="banner" />
      </div>
    </div>
    <div class="popular-decks">
      <h3 class="text_center my_3">3 Popular Decks for you</h3>
      <div class="r">
        <div v-for="deck in decks" :key="deck.id" class="c_4">
          <div class="card">
            <p>{{ deck.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decks: [
        {
          _id: 1,
          name: 'deck 1',
        },
        {
          _id: 2,
          name: 'deck 2',
        },
        {
          _id: 3,
          name: 'deck 3',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.thumbnail-banner {
  margin-top: 3rem;
  img {
    width: 100%;
  }
}
</style>
