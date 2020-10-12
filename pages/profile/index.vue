<template>
  <h1>Profile is the hear</h1>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
}
</script>
