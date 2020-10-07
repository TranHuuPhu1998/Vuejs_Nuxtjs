<template>
  <form @submit.prevent="onSave">
    <div class="form_group">
      <lable for="name">Name:</lable>
      <input
        id="name"
        v-model="editedDeck.name"
        class="form_control"
        type="text"
        placeholder="Please enter name deck"
      />
    </div>
    <div class="form_group">
      <p for="Description">Description:</p>
      <textarea
        id="Description"
        v-model="editedDeck.description"
        class="form_control"
        placeholder="Please enter description"
        name="Description"
      ></textarea>
    </div>
    <div class="form_group">
      <p for="Thumbnai">Thumbnai:</p>
      <input
        id="Thumbnai"
        v-model="editedDeck.thumbnail"
        type="text"
        placeholder="https://example.com/foo.png"
        name="Thumbnai"
      />
      <div class="preview"></div>
    </div>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" type="button" @click.prevent="closeModal">
        Close Model
      </button>
      <button class="btn btn_success ml_3" type="submit">
        {{ editedDeck && editedDeck.id ? 'Edit' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'DeckForm',
  props: {
    deck: {
      type: Object,
      required: false,
      default: () => ({
        name: '',
        description: '',
        thumbnail: '',
      }),
    },
  },
  data() {
    return {
      editedDeck: this.deck
        ? { ...this.deck }
        : { name: '', description: '', thumbnail: '' },
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'DeckFromModal' })
    },
    onSave() {
      this.$emit('submit', this.editedDeck)
    },
  },
}
</script>
