<template>
  <div class="bg-darker">
    <Header mode="light" />

    <section class="about-hero fixed w-full min-h-screen clear-img bg-center bg-no-repeat"></section>

    <section class="about-hero fixed w-full min-h-screen blurred-img opacity-0 bg-center bg-no-repeat"></section>

    <section class="px-6 mx-auto max-w-screen-xl pt-90 relative z-10 text-white sm:px-24">
      <div class="grid gap-16 md:grid-cols-2 mb-32 align-bottom">
        <p class="text-2xl leading-normal">
          First things first. Fuck 2020.<br><br>
          It has been a year we won’t forget.<br><br>
          But also one of reflection.<br><br>
          For some, it has exposed fallacies in business that have been ingrained by many as inherent truths. For the longest time, we have valued figures above people.<br><br>
          We must do better.<br><br>
          Not a number was created by a group of young digital entrepreneurs in the summer of 2020 to supply good work to good people with honesty and sincerity.<br><br>
          We love to collaborate with like-minded start-ups and established businesses to make them stand out rather than fit in.
        </p>

        <div class="text-right md:pt-56">
          <h3 class="text-2xl text-gray-400">Services:</h3>

          <h3 class="mt-2 text-2xl">Strategy</h3>
          <h5 class="mt-1 text-xl text-white text-opacity-75">Brand, Content, Social</h5>

          <h3 class="mt-2 text-2xl">Creative</h3>
          <h5 class="mt-1 text-xl text-white text-opacity-75">UX, Web Design, Branding</h5>

          <h3 class="mt-4 text-2xl">Technical</h3>
          <h5 class="mt-1 text-xl text-white text-opacity-75">Web, Mobile, Infrastructure</h5>
        </div>
      </div>
    </section>

    <Footer mode="dark" :transparent="true" />
  </div>
</template>

<script>
export default {
  mounted () {
    const blurredImg = document.getElementsByClassName('blurred-img')[0]

    window.onscroll = () => {
      blurredImg.style.opacity = window.scrollY / 150.0
    }
  }
}
</script>
