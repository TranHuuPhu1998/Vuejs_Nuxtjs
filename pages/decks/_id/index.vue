<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: Learn English {{ $route.params.id }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now!</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Create a card
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
        <form action="">
          <div class="form_group">
            <lable for="name">Name:</lable>
            <input
              class="form_control"
              name="name"
              type="text"
              placeholder="Please enter name deck"
            />
          </div>
          <div class="form_group">
            <lable for="Description">Description:</lable>
            <textarea
              class="form_control"
              name="Description"
              placeholder="Please enter description"
            ></textarea>
          </div>
          <div class="form_group">
            <lable for="Thumbnai">Thumbnai:</lable>

            <input type="file" name="file" />
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
  </section>
</template>

<script>
import CardList from '@/components/Cards/CardList'
export default {
  components: {
    CardList,
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
    openModal() {
      this.$modal.open({ name: 'CreateCardModal' })
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
