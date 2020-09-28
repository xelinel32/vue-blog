<template>
  <section class="article pt-5 pb-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item active
        >Article {{ $route.params.id }}</b-breadcrumb-item
      >
    </b-breadcrumb>
    <b-row>
      <b-col>
        <b-card no-body class="border-0"> </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'article-single',
}
</script>

<style lang="scss" scoped></style>
