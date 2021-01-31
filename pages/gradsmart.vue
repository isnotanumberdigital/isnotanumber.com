<template>
  <div>
    <Header mode="dark" />

    <section class="w-full h-90 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/gs-p-hero.png')})`}"></section>

    <section class="px-6 mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2 mb-32">
        <ul>
          <li class="text-4xl text-gray-400">Client:</li>
          <li class="text-4xl mb-4">GradSmart</li>
          <li class="text-4xl text-gray-400">Services:</li>
          <li class="text-4xl">UX, UI, Strategy</li>
        </ul>

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

      <img class="project" src="~/assets/img/project-singles/gradsmart/banner.jpg" alt="GradSmart" loading="lazy" />
    </section>

    <img src="~/assets/img/project-singles/gradsmart/home.jpg" alt="GradSmart" loading="lazy" />
    <img src="~/assets/img/project-singles/gradsmart/personalities.jpg" alt="GradSmart" loading="lazy" />
    <img src="~/assets/img/project-singles/gradsmart/how-it-works.jpg" alt="GradSmart" loading="lazy" />
    <img src="~/assets/img/project-singles/gradsmart/results.jpg" alt="GradSmart" loading="lazy" />

    <Footer :flush="true" />
  </div>
</template>
