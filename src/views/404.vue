<template functional>
  <b-row
    cols="12"
    class="vh-100 text-center justify-content-center"
    align-v="center"
  >
    <b-col col lg="8" md="6">
      <div
        class="text-custom text-center text-info text-uppercase font-weight-bold"
      >
        404
      </div>
      <p class="text-sub text-black-50">Page not found</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'page-is-not-found',
}
</script>

<style lang="scss" scoped>
.text-custom {
  font-size: 10rem;
}
.text-sub {
  font-size: 5rem;
}
</style>
