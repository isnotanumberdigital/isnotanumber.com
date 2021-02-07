<template>
  <div>
    <Header mode="dark" />

    <section class="w-full h-90 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/ud-p-hero.png')})`}"></section>

    <section class="px-6 container mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2 mb-32">
        <ul>
          <li class="text-4xl text-gray-400">Client:</li>
          <li class="text-4xl mb-4">BullyBillows</li>
          <li class="text-4xl text-gray-400">Project:</li>
          <li class="text-4xl mb-4">UpDog</li>
          <li class="text-4xl text-gray-400">Services:</li>
          <li class="text-4xl">UX, UI, Branding, Strategy, Mobile App</li>
        </ul>

        <p class="text-2xl leading-normal">
          UpDog is a one of a kind social media platform and is the only place to go to showcase your beloved furry best friends. From friendly online competitions to accumulating in-app currency. Users are able to enter competitions and acquire BB coins which can then be exchanged for rewards and prizes through vouchers codes from premium dog brands.
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
