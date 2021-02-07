<template>
  <div>
    <Header mode="dark" />

    <section class="w-full h-90 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/gs-p-hero.png')})`}"></section>

    <section class="px-6 container mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2 mb-32">
        <ul>
          <li class="text-4xl text-gray-400">Client:</li>
          <li class="text-4xl mb-4">GradSmart</li>
          <li class="text-4xl text-gray-400">Services:</li>
          <li class="text-4xl">UX, UI, Strategy, Web App</li>
        </ul>

        <p class="text-2xl leading-normal">
          GradSmart is a recruitment service that takes a radically different approach to helping applicants find their suitable role. Assessing from a short questionnaire, applicants can match themselves to positions based on personality traits, ensuring that users of the platform are paired with positions that align with their skill set.
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
