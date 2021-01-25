<template>
  <div class="bg-darker">
    <Header mode="dark" />

    <section class="about-hero fixed w-full min-h-screen clear-img bg-center bg-no-repeat"></section>

    <section class="about-hero fixed w-full min-h-screen blurred-img opacity-0 bg-center bg-no-repeat"></section>

    <section class="px-6 mx-auto max-w-screen-xl pt-90 relative z-10 text-white sm:px-24">
      <div class="grid gap-16 md:grid-cols-2 mb-32 align-bottom">
        <!-- suggestion: multiple paragraphs instead of brs? -->
        <p class="text-2xl leading-normal">
          First things first. Fuck 2020.<br><br>It has been a year we won’t
          forget. <br><br>But also one of reflection. <br><br>For some,
          it has exposed fallacies in business that have been ingrained by many
          as inherent truths. For the longest time we have valued figures above
          people. <br><br>We must do better. <br><br>Not a number was
          created by a group of young digital entrepreneurs in the summer of
          2020 with the purpose of supplying good work to good people with
          honesty and sincerity. <br><br>We love to collaborate with
          likeminded start ups and established businesses to make them stand out
          rather than fit in.
        </p>

        <div class="text-right md:pt-56">
          <h3 class="text-2xl text-gray-400 mb-2">Services:</h3>
          <h3 class="text-2xl mb-2">Web Design</h3>
          <h3 class="text-2xl mb-2">App Development</h3>
        </div>
      </div>
    </section>

    <Footer mode="dark" :transparent="true" />
  </div>
</template>

<script>
export default {
  mounted () {
    window.onscroll = () => {
      const blurredImg = document.getElementsByClassName('blurred-img')[0]
      blurredImg.style.opacity = window.scrollY / 150.0
    }
  }
}
</script>
