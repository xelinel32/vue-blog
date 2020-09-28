<template>
  <section class="widgets">
    <h3 class="text-capitalize font-italic mb-4 text-secondary">
      <slot name="head"></slot>
    </h3>
    <slot name="body"></slot>
  </section>
</template>

<script>
export default {
  name: 'widget',
}
</script>

<style lang="scss" scoped></style>
