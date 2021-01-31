<template>
  <div>
    <Header mode="dark" />

    <section class="px-6 mx-auto py-16 md:pt-24 md:pb-18 lg:pt-56 lg:pb-18">
      <div class="grid gap-16 grid-cols-1">
        <h3 class="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight">
          Recent Work
        </h3>
      </div>
    </section>

    <section class="px-6 mx-auto py-8">
      <div class="grid gap-16 md:grid-cols-2">
        <!-- UpDog -->
        <NuxtLink to="/updog" class="project group" v-scroll-reveal="{ delay: 75, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/ud-p-hero.png')})`}"></div>
          <h3 class="mt-8 text-2xl">UpDog</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Your best friends social
          </p>
          <p class="cta transform -translate-y-4 transition duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
            View Project
          </p>
        </NuxtLink>

        <!-- balansa+ -->
        <NuxtLink to="/balansa" class="project group" v-scroll-reveal="{ delay: 125, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/bp-p-hero.png')})`}"></div>
          <h3 class="mt-8 text-2xl">balansa+</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Streaming for the wellness industry
          </p>
          <p class="cta transform -translate-y-4 transition duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
            View Project
          </p>
        </NuxtLink>

        <!-- MCW -->
        <NuxtLink to="/my-construction-wallet" class="project group" v-scroll-reveal="{ delay: 175, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/mcw-p-hero.png')})`}"></div>
          <h3 class="mt-8 text-2xl">My Construction Wallet</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Credentials &amp; verification made easy
          </p>
          <p class="cta transform -translate-y-4 transition duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
            View Project
          </p>
        </NuxtLink>

        <!-- GradSmart -->
        <NuxtLink to="/gradsmart" class="project group" v-scroll-reveal="{ delay: 225, viewFactor: 0.5 }">
          <div class="image aspect-w-16 aspect-h-9 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/gs-p-hero.png')})`}"></div>
          <h3 class="mt-8 text-2xl">Gradsmart</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Find the career that fits your personality
          </p>
          <p class="cta transform -translate-y-4 transition duration-300 opacity-100 font-bold text-lg tracking-wider uppercase group-hover:opacity-100 group-hover:translate-y-0 md:opacity-0">
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

      <NuxtLink to="/balansa" class="button transition duration-300 group-hover:translate-y-0 ease-in-out text-lg leading-none inline-block rounded-full font-bold bg-dark text-white transform hover:-translate-y-1 hover:scale-110">
        Learn more
      </NuxtLink>
    </section>

    <Footer />
  </div>
</template>
