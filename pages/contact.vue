<template>
  <div>
    <Header mode="dark" />

    <section class="container mx-auto max-w-screen-xl py-56">
      <div class="grid gap-16 md:grid-cols-2">
        <div class="footer-half">
          <h3 class="mb-8">Contact</h3>
          <p class="mb-2 text-2xl">hi@isnotanumber.com</p>
          <p class="text-2xl">+44 20 7378 6699</p>
        </div>

        <div class="footer-half">
          <h3 class="mb-8">Connect</h3>
          <p class="mb-2 text-2xl">Linkedin</p>
          <p class="text-2xl">Instagram</p>
        </div>
      </div>
    </section>

    <img class="project-image" src="~/assets/img/contact/mountain@2x.jpg" alt="Mountains" v-scroll-reveal />

    <Footer />
  </div>
</template>
