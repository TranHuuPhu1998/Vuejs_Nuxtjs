<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Resginter</h3>
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
          <div class="form-group">
            <label for="re-password">Re-Password</label>
            <input
              id="re-password"
              v-model="rePassword"
              type="password"
              class="form_control"
              placeholder="Please enter re-password"
            />
          </div>
          <div class="form-group my_3">
            <button type="submit" class="btn btn_success btn-submit">
              Resginter
            </button>
          </div>
        </form>
        <div class="other text_center">
          <span
            >Have your accounts?
            <nuxt-link to="/login" tag="a">Login hear</nuxt-link></span
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
      rePassword: '',
    }
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword
    },
    onSubmit() {
      const validPassword = this.checkValidPassword()

      if (validPassword) {
        this.$store
          .dispatch('authenticateUser', {
            email: this.email,
            password: this.password,
          })
          .then((result) => {
            if (result.success) {
              this.$router.push('/login')
            }
          })
      } else {
        // eslint-disable-next-line no-console
        console.log('Password is not valid')
      }
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
