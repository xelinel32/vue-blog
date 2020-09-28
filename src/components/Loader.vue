<template>
  <div class="d-flex align-items-center w-100">
    <b-spinner
      class="m-auto custom-spinner"
      type="grow"
      variant="primary"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'loader',
}
</script>

<style lang="scss" scoped>
.custom-spinner {
  width: 5rem;
  height: 5rem;
}
</style>
