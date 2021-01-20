<template>
  <footer
    class="relative"
    :class="{'text-white': mode === 'dark', 'bg-transparent': transparent}"
  >
    <div class="footer container mx-auto mt-16 py-32">
      <div class="grid gap-16 md:grid-cols-2">
        <div class="footer-half">
          <h3 class="mb-8">Contact</h3>
          <a href="mailto:hi@isnotanumber.com" class="mb-2 text-2xl">hi@isnotanumber.com</a>
          <a href="tel:+442073786699" class="text-2xl">+44 20 7378 6699</a>
        </div>

        <div class="footer-half">
          <h3 class="mb-8">Connect</h3>
          <a href="#" class="mb-2 text-2xl">Linkedin</a>
          <a href="#" class="text-2xl">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'light'
    },
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>
