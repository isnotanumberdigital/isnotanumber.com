<template>
  <header
    class="p-8 flex absolute w-full z-40 header"
    :class="{'header-dark': mode === 'dark'}"
    ref="header"
  >
    <div id="logo" class="flex-auto inline-block">
      <NuxtLink to="/">
        <h1 class="text-3xl text-center lg:text-left">Not a Number</h1>
      </NuxtLink>
    </div>

    <nav class="navigation inline-block flex-auto text-right">
      <ul class="space-x-2">
        <li class="inline-block px-4 text-3xl link">
          <NuxtLink to="/balansa">Work</NuxtLink>
        </li>
        <li class="inline-block px-4 text-3xl link">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="inline-block px-4 text-3xl link">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li class="inline-block px-4 text-3xl link-email">
          <a href="mailto:hi@isnotanumber.com">hi@isnotanumber.com</a>
        </li>
      </ul>
    </nav>

    <div class="mob-menu">
      <a href="#" class="button transition duration-300 ease-in-out text-lg leading-none inline-block rounded-full font-bold bg-white text-dark transform hover:-translate-y-1 hover:scale-110">
        <div class="hamburger inline-block">
          <div class="hamburgerTop block absolute bg-black"></div>
          <div class="hamburgerMiddle block absolute bg-black"></div>
          <div class="hamburgerBottom block absolute bg-black"></div>
        </div>
        <span class="inline-block text-xl leading-none">Menu</span>
      </a>
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
  data () {
    return {
      open: false
    }
  },
  mounted () {
    const hamburgerTop = document.getElementsByClassName('hamburgerTop')[0]
    const hamburgerMiddle = document.getElementsByClassName('hamburgerMiddle')[0]
    const hamburgerBottom = document.getElementsByClassName('hamburgerBottom')[0]

    const mobileMenu = document.getElementsByClassName('mob-menu')[0]
    mobileMenu.addEventListener('click', () => {
      if (this.open) {
        hamburgerTop.classList.remove('open')
        hamburgerMiddle.classList.remove('open')
        hamburgerBottom.classList.remove('open')

        this.open = false

        return
      }

      hamburgerTop.classList.add('open')
      hamburgerMiddle.classList.add('open')
      hamburgerBottom.classList.add('open')

      this.open = true

      const navigation = document.getElementsByClassName('navigation')[0]

      navigation?.classList.contains('open-menu')
        ? navigation?.classList.remove('open-menu')
        : navigation?.classList.add('open-menu')
    })
  }
}
</script>
