<template>
  <div>
    <Header mode="light" />

    <section id="banner" class="w-full h-90 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url(${require('~/assets/img/links/mcw-p-hero.png')})`}"></section>

    <section class="px-6 container mx-auto py-32">
      <div class="grid gap-16 md:grid-cols-2 mb-32">
        <ul>
          <li class="text-4xl text-gray-400">Client:</li>
          <li class="text-4xl mb-4">My Construction Wallet</li>
          <li class="text-4xl text-gray-400">Services:</li>
          <li class="text-4xl">UX, UI, Strategy</li>
        </ul>

        <p class="text-2xl leading-normal">
          My Construction Wallet is a digital identity wallet for the construction industry. It allows an individual to instantly share their personal information, right to work, and qualifications securely whilst maintaining privacy. Using Quantum Ledger technology it provides transparent, immutable, and cryptographically verifiable candidate information to employers.
        </p>
      </div>

      <img class="project" src="~/assets/img/project-singles/mcw/banner.jpg" alt="My Construction Wallet" loading="lazy" />
    </section>

    <img src="~/assets/img/project-singles/mcw/screens.jpg" alt="My Construction Wallet" loading="lazy" />
    <img src="~/assets/img/project-singles/mcw/website.jpg" alt="My Construction Wallet" loading="lazy" />

    <Footer :flush="true" />
  </div>
</template>
