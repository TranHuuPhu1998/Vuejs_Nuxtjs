<template>
  <div>
    <default-header />
    <Nuxt />
    <default-footer />
  </div>
</template>

<script>
import DefaultHeader from '@/components/Header/DefaultHeader'
import DefaultFooter from '@/components/Footer/DefaultFooter'
export default {
  components: {
    DefaultHeader,
    DefaultFooter,
  },
}
</script>
