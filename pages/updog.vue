<template>
  <div>
    <Header mode="dark" />

    <section class="w-full h-90 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/ud-p-hero.png')})`}"></section>

    <section class="px-6 mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2 mb-32">
        <ul>
          <li class="text-4xl text-gray-400">Client:</li>
          <li class="text-4xl mb-4">BullyBillows</li>
          <li class="text-4xl text-gray-400">Project:</li>
          <li class="text-4xl mb-4">UpDog</li>
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

      <img class="project" src="~/assets/img/project-singles/updog/branding.jpg" alt="UpDog" loading="lazy" />
    </section>

    <img src="~/assets/img/project-singles/updog/banner-badge.jpg" alt="UpDog" loading="lazy" />
    <img src="~/assets/img/project-singles/updog/all-screens.jpg" alt="UpDog" loading="lazy" />
    <img src="~/assets/img/project-singles/updog/app-upclose.jpg" alt="UpDog" loading="lazy" />
    <img src="~/assets/img/project-singles/updog/billboard.jpg" alt="UpDog" loading="lazy" />
    <img src="~/assets/img/project-singles/updog/screens.jpg" alt="UpDog" loading="lazy" />

    <Footer :flush="true" />
  </div>
</template>
