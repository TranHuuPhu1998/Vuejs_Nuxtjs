<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now!</button>
          <button
            class="btn btn_primary"
            @click.prevent="openModal('CreateCardModal')"
          >
            Create a card
          </button>
          <button
            class="btn btn_warning"
            @click.prevent="openModal('DeckFromModal')"
          >
            Edit Deck
          </button>
          <button
            class="btn btn_success"
            @click.prevent="openModal('DeleteDeckModal')"
          >
            Delete Deck
          </button>
        </div>
        <hr class="devide" />
        <div class="r cards">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <v-modal name="CreateCardModal">
      <div class="test__body">
        <h1>Create a new Card</h1>
        <form @submit.prevent="openModal">
          <div class="form_group">
            <label for="namef">Name:</label>
            <input
              id="namef"
              class="form_control"
              name="name"
              type="text"
              placeholder="Please enter name deck"
            />
          </div>
          <div class="form_group">
            <p for="Description">Description:</p>
            <textarea
              class="form_control"
              name="Description"
              placeholder="Please enter description"
            ></textarea>
          </div>
          <div class="form_group">
            <p for="Thumbnai">Thumbnai:</p>

            <input type="file" name="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close Model
            </button>
            <button class="btn btn_success ml_3" @click.prevent="openModal">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
import axios from 'axios'

import CardList from '@/components/Cards/CardList'
export default {
  components: {
    CardList,
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-learing-english.firebaseio.com/decks/${context.params.id}.json`
      )
      .then((response) => {
        return {
          deck: response.data,
        }
      })
      .catch((e) => {
        context.error(e)
      })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU',
          keyword: 'English 1',
        },
        {
          _id: 2,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU',
          keyword: 'English 2',
        },
        {
          _id: 3,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU',
          keyword: 'English 3',
        },
        {
          _id: 4,
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU',
          keyword: 'English 4',
        },
      ],
    }
  },
  methods: {
    openModal(name) {
      switch (name) {
        case 'CreateCardModal':
          this.$modal.open({ name: 'CreateCardModal' })
          break
        case 'DeckFromModal':
          this.$modal.open({
            name: 'DeckFromModal',
            payload: { ...this.deck, id: this.$route.params.id },
          })
          break
        case 'DeleteDeckModal':
          this.$modal.open({
            name: 'DeleteDeckModal',
            payload: { ...this.deck, id: this.$route.params.id },
          })
          break
        default:
          break
      }
    },
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 100%;
    }
  }
  .devide {
    margin: 2rem 0;
  }
}
.test {
  &__body {
    background-color: #fff;
    padding: 1rem;
  }
}
</style>
