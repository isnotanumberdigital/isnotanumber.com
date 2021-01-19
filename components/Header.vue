<template>
  <header
    class="p-8 flex absolute w-full z-40 header"
    :class="{'header-dark': mode === 'dark'}"
  >
    <div id="logo" class="flex-auto">
      <h1 class="text-3xl text-center lg:text-left">Not a Number</h1>

      <!-- <img class="logo" src="~/assets/img/nan-logo-full.svg" alt="Not a Number"> -->
    </div>

    <nav class="navigation flex-auto text-right">
      <ul>
        <li class="px-4 ml-2 text-3xl link">Work</li>
        <li class="px-4 ml-2 text-3xl link">About</li>
        <li class="px-4 ml-2 text-3xl link">Contact</li>
        <li class="px-4 ml-2 text-3xl link-email">hi@isnotanumber.com</li>
      </ul>
    </nav>

    <div class="mob-menu">
      <a href="#" class="button">
        <div class="hamburger">
          <div class="hamburgerTop"></div>
          <div class="hamburgerMiddle"></div>
          <div class="hamburgerBottom"></div>
        </div>
        <span>Menu</span>
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
  }
}
</script>
