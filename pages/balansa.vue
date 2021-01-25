<template>
  <div>
    <Header mode="dark" />

    <section class="w-full h-90 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/bp-p-hero.png')})`}"></section>

    <section class="px-6 mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2 mb-32">
        <div>
          <h3 class="text-4xl text-gray-400">Client:</h3>
          <h3 class="text-4xl mb-4">balansa+</h3>
          <h3 class="text-4xl text-gray-400">Services:</h3>
          <h3 class="text-4xl">UX, UI, Strategy</h3>
        </div>

        <p class="text-2xl leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <img class="project" src="~/assets/img/project-singles/balansa/bp-ps-1.png" alt="balansa+" v-scroll-reveal="{ viewFactor: 0.5 }" />
    </section>

    <img class="project-image" src="~/assets/img/project-singles/balansa/bp-ps-2.png" alt="balansa+" v-scroll-reveal />
    <img class="project-image" src="~/assets/img/project-singles/balansa/bp-ps-3.png" alt="balansa+" v-scroll-reveal />
    <img class="project-image" src="~/assets/img/project-singles/balansa/bp-ps-4.png" alt="balansa+" v-scroll-reveal />
    <img class="project-image" src="~/assets/img/project-singles/balansa/bp-ps-5.png" alt="balansa+" v-scroll-reveal />
    <img class="project-image" src="~/assets/img/project-singles/balansa/bp-ps-6.png" alt="balansa+" v-scroll-reveal />
    <img class="project-image" src="~/assets/img/project-singles/balansa/bp-ps-7.png" alt="balansa+" v-scroll-reveal />
    <img class="project-image" src="~/assets/img/project-singles/balansa/bp-ps-8.png" alt="balansa+" v-scroll-reveal />

    <Footer />
  </div>
</template>
