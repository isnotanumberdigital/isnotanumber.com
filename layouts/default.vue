<template>
  <div
    class="transition-opacity duration-1000 ease-out opacity-100"
    style="opacity: 0;"
    ref="layout"
  >
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.layout.removeAttribute('style')
  }
}
</script>
