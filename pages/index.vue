<template>
  <div>
    <Header />

    <div class="home-slider">
      <div class="home-slider-intro">
        <div class="container mx-auto p-8 h-screen flex items-center">
          <h2 class="text-6xl md:text-8xl">
            Why fit in when <br>you can <span class="stand-out">stand out</span>
          </h2>
        </div>
      </div>

      <div class="home-slider-single home-slider-1 dark"></div>
      <div class="home-slider-single home-slider-2 dark"></div>
      <div class="home-slider-single home-slider-3"></div>
      <div class="home-slider-single home-slider-4 dark"></div>
      <div class="home-slider-single home-slider-5"></div>
      <div class="home-slider-single home-slider-6"></div>
    </div>

    <section class="container mx-auto py-16 md:py-24 lg:py-32">
      <div class="grid gap-16 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <h3 class="text-4xl text-gray-400"></h3>
        <p class="text-3xl md:text-4xl lg:text-5xl leading-tight">
          We are a fully integrated digital agency – partners to the brave,
          makers of the exceptional, your end-to-end solution.
        </p>
      </div>
    </section>
    <section class="container mx-auto py-8">
      <div class="grid gap-16 md:grid-cols-2">
        <a class="project">
          <div class="image sixteen-nine link-updog"></div>
          <h3 class="mt-8 text-2xl">UpDog</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Your best friends social
          </p>
          <p class="cta font-bold text-lg tracking-wider uppercase">
            View Project
          </p>
        </a>
        <a class="project" href="/balansa.html">
          <div class="image sixteen-nine link-balansa"></div>
          <h3 class="mt-8 text-2xl">balansa+</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Streaming for the wellness industry
          </p>
          <p class="cta font-bold text-lg tracking-wider uppercase">
            View Project
          </p>
        </a>
        <a class="project">
          <div class="image sixteen-nine link-mcw"></div>
          <h3 class="mt-8 text-2xl">My Construction Wallet</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Credentials & verification made easy
          </p>
          <p class="cta font-bold text-lg tracking-wider uppercase">
            View Project
          </p>
        </a>
        <a class="project">
          <div class="image sixteen-nine link-gradsmart"></div>
          <h3 class="mt-8 text-2xl">Gradsmart</h3>
          <p class="mb-4 md:mb-8 text-2xl text-gray-400">
            Find the career that fits your personality
          </p>
          <p class="cta font-bold text-lg tracking-wider uppercase">
            View Project
          </p>
        </a>
      </div>
    </section>

    <section class="container mx-auto py-32 md:py-44 lg:py-56 text-center">
      <p class="text-3xl md:text-4xl lg:text-5xl leading-tight mx-auto mb-12 max-w-4xl">
        We are a fully integrated digital agency – partners to the brave, makers
        of the exceptional, your end-to-end solution.
      </p>

      <a href="#" class="button button-default">Learn more</a>
    </section>

    <Footer />
  </div>
</template>
