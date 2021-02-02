<template>
  <footer
    class="relative bg-opacity-10"
    :class="{
      'text-white': mode === 'dark',
      'bg-light': !transparent,
      'bg-transparent': transparent,
      'mt-16': !flush
    }"
  >
    <div class="footer px-6 mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2">
        <div class="flex items-start flex-col">
          <h3 class="mb-8">Contact</h3>
          <a href="mailto:hi@isnotanumber.com" class="mb-2 text-2xl">hi@isnotanumber.com</a>
          <a href="tel:+442073786699" class="text-2xl">+44 20 7378 6699</a>
        </div>

        <div class="flex items-start flex-col">
          <h3 class="mb-8">Connect</h3>
          <a href="https://www.linkedin.com/company/isnotanumber/" target="_blank" class="mb-2 text-2xl">LinkedIn</a>
          <a href="https://www.instagram.com/notanumberdigital/" target="_blank" class="text-2xl">Instagram</a>
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
    },
    flush: {
      type: Boolean,
      default: false
    }
  }
}
</script>
