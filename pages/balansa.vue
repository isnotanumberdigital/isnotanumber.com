<template>
  <div>
    <Header mode="dark" />

    <section class="w-full h-90 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/bp-p-hero.png')})`}"></section>

    <section class="px-6 container mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2 mb-32">
        <ul>
          <li class="text-4xl text-gray-400">Client:</li>
          <li class="text-4xl mb-4">balansa+</li>
          <li class="text-4xl text-gray-400">Services:</li>
          <li class="text-4xl">UX, UI, Strategy</li>
        </ul>

        <p class="text-2xl leading-normal">
          balansa+ is a platform dedicated to health and fitness live-streaming; connecting visitors directly with the very best industry leading instructors. We were approached to help design and build the live streaming platform, creating a user experience enabling visitors to quickly and easily navigate to suitable content of their preferred category.
        </p>
      </div>

      <img class="project" src="~/assets/img/project-singles/balansa/bp-ps-1.png" alt="balansa+" loading="lazy" />
    </section>

    <img src="~/assets/img/project-singles/balansa/bp-ps-2.png" alt="balansa+" loading="lazy" />
    <img src="~/assets/img/project-singles/balansa/bp-ps-3.png" alt="balansa+" loading="lazy" />
    <img src="~/assets/img/project-singles/balansa/bp-ps-4.png" alt="balansa+" loading="lazy" />
    <img src="~/assets/img/project-singles/balansa/bp-ps-5.png" alt="balansa+" loading="lazy" />
    <img src="~/assets/img/project-singles/balansa/bp-ps-6.png" alt="balansa+" loading="lazy" />
    <img src="~/assets/img/project-singles/balansa/bp-ps-7.png" alt="balansa+" loading="lazy" />
    <img src="~/assets/img/project-singles/balansa/bp-ps-8.png" alt="balansa+" loading="lazy" />

    <Footer :flush="true" />
  </div>
</template>
