<template>
  <div>
    <Header mode="dark" />

    <div id="carousel">
      <VueSlickCarousel
        class="home-slider w-full h-90 relative z-0"
        @beforeChange="onBeforeChange"
        v-bind="settings"
        ref="carousel"
      >
        <div class="home-slider-intro text-dark h-90 bg-cover bg-center bg-no-repeat">
          <div class="px-6 lg:pl-48 mx-auto p-8 h-screen flex items-center">
            <h2 class="text-6xl md:text-8xl">
              Why fit in when <br>you can <span class="animate-lil-stand-out md:animate-big-stand-out relative inline-block">stand out</span>
            </h2>
          </div>
        </div>

        <div class="home-slider-item h-90 bg-cover bg-center bg-no-repeat home-slider-1 dark"></div>
        <div class="home-slider-item h-90 bg-cover bg-center bg-no-repeat home-slider-2 dark"></div>
        <div class="home-slider-item h-90 bg-cover bg-center bg-no-repeat home-slider-3"></div>
        <div class="home-slider-item h-90 bg-cover bg-center bg-no-repeat home-slider-4 dark"></div>
        <div class="home-slider-item h-90 bg-cover bg-center bg-no-repeat home-slider-5"></div>
        <div class="home-slider-item h-90 bg-cover bg-center bg-no-repeat home-slider-6"></div>
      </VueSlickCarousel>
    </div>

    <section class="px-6 container mx-auto py-16 md:py-24 lg:py-32">
      <div class="grid gap-16 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div></div>
        <p class="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight">
          We are a fully integrated digital agency – partners to the brave,
          makers of the exceptional, your end-to-end solution.
        </p>
      </div>
    </section>

    <section class="px-6 container mx-auto py-8">
      <div class="grid gap-16 md:grid-cols-2">
        <!-- UpDog -->
        <NuxtLink to="/updog" class="project group" v-scroll-reveal="{ delay: 75, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/ud-p-hero.webp')})`}"></div>
          <h3 class="mt-8 text-2xl">UpDog</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Your best friends social
          </p>
          <p class="transform transition-all -translate-y-4 duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:transform-none group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
            View Project
          </p>
        </NuxtLink>

        <!-- balansa+ -->
        <NuxtLink to="/balansa" class="project group" v-scroll-reveal="{ delay: 125, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/bp-p-hero.webp')})`}"></div>
          <h3 class="mt-8 text-2xl">balansa+</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Streaming for the wellness industry
          </p>
          <p class="transform transition-all -translate-y-4 duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:transform-none group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
            View Project
          </p>
        </NuxtLink>

        <!-- MCW -->
        <NuxtLink to="/my-construction-wallet" class="project group" v-scroll-reveal="{ delay: 175, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/mcw-p-hero.webp')})`}"></div>
          <h3 class="mt-8 text-2xl">My Construction Wallet</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Credentials &amp; verification made easy
          </p>
          <p class="transform transition-all -translate-y-4 duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:transform-none group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
            View Project
          </p>
        </NuxtLink>

        <!-- GradSmart -->
        <NuxtLink to="/gradsmart" class="project group" v-scroll-reveal="{ delay: 225, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/gs-p-hero.webp')})`}"></div>
          <h3 class="mt-8 text-2xl">GradSmart</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Find the career that fits your personality
          </p>
          <p class="transform transition-all -translate-y-4 duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:transform-none group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
            View Project
          </p>
        </NuxtLink>
      </div>
    </section>

    <section class="px-6 mx-auto py-32 md:py-44 lg:py-56 text-center">
      <p class="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight-tight mx-auto mb-12 max-w-4xl">
        We are a fully integrated digital agency – partners to the brave, makers
        of the exceptional, your end-to-end solution.
      </p>

      <NuxtLink to="/about" class="button transition duration-300 group-hover:translate-y-0 ease-in-out text-lg leading-none inline-block rounded-full font-bold bg-dark text-white transform hover:-translate-y-1 hover:scale-110">
        Learn more
      </NuxtLink>
    </section>

    <Footer />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        arrows: false,
        fade: true,
        cssEase: 'linear',
      },
    }
  },
  methods: {
    onBeforeChange(slideIndex) {
      const slides = document.getElementsByClassName('home-slider-item')
      const activeSlide = document.getElementsByClassName('slick-active')[0]
      const next = [].indexOf.call(activeSlide.parentElement.children, activeSlide);
      const activeSlideItem = slides[next]
      const header = document.getElementsByTagName('header')[0]

      if (activeSlideItem?.classList.contains('dark')) {
        header.classList.remove('text-dark')
        header.classList.add('text-white')
      } else {
        if (window.scrollY > header.offsetHeight) return

        header.classList.remove('text-dark')
        header.classList.remove('text-white')
        header.classList.add('text-dark')
      }
    }
  }
}
</script>
