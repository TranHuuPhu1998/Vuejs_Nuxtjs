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
          <div class="form-group">
            <button type="submit" class="btn btn_success btn-submit">
              Login
            </button>
          </div>
        </form>
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
        this.$axios
          .$post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`,
            {
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }
          )
          // eslint-disable-next-line no-console
          .then((data) => console.log(data))
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err))
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
