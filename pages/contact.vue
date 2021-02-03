<template>
  <div>
    <Header mode="dark" :shouldMix="true" />

    <section class="px-6 container mx-auto pt-32 pb-18 lg:pt-56 lg:pb-18">
      <div class="grid gap-16 grid-cols-1">
        <h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight">
          Start building your brand
        </h2>
      </div>
    </section>

    <section class="px-6 container mx-auto pt-8 pb-8 sm:pb-0">
      <div class="grid gap-16 md:grid-cols-2">
        <div class="flex items-start flex-col">
          <h3 class="mb-8">Contact</h3>
          <a href="mailto:hi@isnotanumber.com" class="mb-2 text-2xl">hi@isnotanumber.com</a>
          <a href="tel:+442073786699" class="text-2xl">+44 20 7378 6699</a>
        </div>

        <div class="flex items-start flex-col">
          <h3 class="mb-8">Connect</h3>
          <a href="https://www.linkedin.com/company/isnotanumber/" target="_blank" class="mb-2 text-2xl">LinkedIn</a>
          <a href="https://www.instagram.com/notanumberdigital/" target="_blank" class="text-2xl">Instagram</a>
        </div>
      </div>
    </section>

    <img src="~/assets/img/contact/mountain@2x.jpg" alt="Mountains" loading="lazy" />
  </div>
</template>
