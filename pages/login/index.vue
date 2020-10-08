<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Login</h3>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="text"
              class="form_control"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="form-group">
            <label for="password">PassWord</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="form_control"
              placeholder="Please enter password"
            />
          </div>
          <div class="form-group my_3">
            <button type="submit" class="btn btn_success btn-submit">
              Login
            </button>
          </div>
        </form>
        <div class="other text_center">
          <span
            >Have your accounts?
            <nuxt-link to="/register" tag="a">Resginter hear</nuxt-link></span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authenticateUser', {
          email: this.email,
          password: this.password,
          isLogin: this.isLogin,
        })
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log('onSubmit -> result', result)
          if (result.success) {
            this.$router.push('/')
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.page {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  .card-form {
    width: 500px;
  }
  .btn-submit {
    width: 100%;
  }
}
</style>
