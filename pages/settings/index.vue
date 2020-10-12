<template>
  <main class="main">
    <h3>General Setting...</h3>
  </main>
</template>
<script>
export default {
  middleware: ['check-auth', 'auth'],
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 3rem;
}
</style>
