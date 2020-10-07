<template>
  <form @submit.prevent="onSave">
    <h3>Are you sure you want to delete this deck ?</h3>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" type="button" @click.prevent="closeModal">
        No
      </button>
      <button
        class="btn btn_success ml_3"
        type="submit"
        @click.prevent="onSave"
      >
        Yes
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
      deletedDeck: this.deck,
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'DeleteDeckModal' })
    },
    onSave() {
      this.$emit('submitDeckDelete', this.deletedDeck)
    },
  },
}
</script>
