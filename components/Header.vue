<template>
  <header
    class="p-8 flex absolute w-full z-40 header transition-colors duration-300"
    :class="{'text-white': mode === 'dark'}"
    ref="header"
  >
    <div id="logo" class="flex-auto inline-block">
      <NuxtLink to="/">
        <h1 class="text-3xl text-center md:text-left">Not a Number</h1>
      </NuxtLink>
    </div>

    <nav>
      <div class="flex-auto text-right hidden sm:block" id="desktop">
        <ul class="space-x-2">
          <li class="inline-block text-left px-4 text-3xl">
            <NuxtLink to="/balansa">Work</NuxtLink>
          </li>
          <li class="inline-block text-left px-4 text-3xl">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="inline-block text-left px-4 text-3xl">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
          <li class="inline-block text-left px-4 text-3xl">
            <a href="mailto:hi@isnotanumber.com">hi@isnotanumber.com</a>
          </li>
        </ul>
      </div>

      <div
        class="navigation transition-opacity duration-700 w-full h-screen sm:hidden bg-dark fixed left-0 top-0 right-0 bottom-0"
        id="mobile"
        style="opacity: 0;"
        ref="navigation"
      >
        <ul class="p-8 space-y-4">
          <li class="block text-center px-4 text-3xl">
            <NuxtLink class="text-white" to="/balansa">Work</NuxtLink>
          </li>
          <li class="block text-center px-4 text-3xl">
            <NuxtLink class="text-white" to="/about">About</NuxtLink>
          </li>
          <li class="block text-center px-4 text-3xl">
            <NuxtLink class="text-white" to="/contact">Contact</NuxtLink>
          </li>
          <li class="block text-center px-4 text-3xl">
            <a class="text-white" href="mailto:hi@isnotanumber.com">hi@isnotanumber.com</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="mob-menu -mt-5 fixed bottom-5 left-0 w-full text-center block sm:hidden">
      <button
        class="button focus:outline-none shadow-2xl transition duration-300 ease-in-out text-lg leading-none inline-block rounded-full font-bold bg-white text-dark transform hover:-translate-y-1 hover:scale-110"
        @click="toggleMenu()"
      >
        <div class="hamburger inline-block">
          <div class="hamburgerTop block absolute bg-black" :class="{'open': open}"></div>
          <div class="hamburgerMiddle block absolute bg-black" :class="{'open': open}"></div>
          <div class="hamburgerBottom block absolute bg-black" :class="{'open': open}"></div>
        </div>

        <span class="ml-2 inline-block text-xl leading-none">Menu</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open

      this.$refs.navigation.style.opacity = this.open ? 1 : 0
    }
  }
}
</script>
