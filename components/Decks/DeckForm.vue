<template>
  <form @submit.prevent="onSave">
    <div class="form_group">
      <lable for="name">Name:</lable>
      <input
        v-model="editedDeck.name"
        class="form_control"
        type="text"
        name="name"
        placeholder="Please enter name deck"
      />
    </div>
    <div class="form_group">
      <lable for="Description">Description:</lable>
      <textarea
        v-model="editedDeck.description"
        class="form_control"
        placeholder="Please enter description"
        name="Description"
      ></textarea>
    </div>
    <div class="form_group">
      <lable for="Thumbnai">Thumbnai:</lable>
      <input
        v-model="editedDeck.thumbnail"
        type="text"
        placeholder="https://example.com/foo.png"
      />
      <div class="preview"></div>
    </div>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" type="submit" @click.prevent="closeModal">
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
