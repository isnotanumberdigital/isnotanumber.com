<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted () {
    if (document.getElementsByClassName('project')) {
      ScrollReveal().reveal('.project', {
        delay: 375,
        duration: 300,
        distance: '60px',
        viewFactor: 0.5,
        interval: 300
      })
    }

    if (document.getElementsByClassName('project-image')) {
      ScrollReveal().reveal('.project-image', {
        delay: 375,
        duration: 300,
        distance: '60px',
        interval: 300
      })
    }
  }
}
</script>
