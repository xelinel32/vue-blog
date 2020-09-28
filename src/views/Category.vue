<template>
  <section class="category mt-5">
    <h3 class="text-capitalize font-italic mb-4 text-secondary">
      Categories
    </h3>
    <b-row>
      <b-col>
        <b-card
          class="mb-4"
          no-body
          tag="article"
          v-for="card in 5"
          :key="card"
        >
          <b-card-header
            header-border-variant="danger"
            header-text-variant="light"
            header-bg-variant="dark"
          >
            <b-card-title>Text</b-card-title>
            <b-card-sub-title>Sub title</b-card-sub-title>
          </b-card-header>
          <b-card-body>
            <b-card-text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque dolore hic excepturi sit libero quibusdam? Fugit
              officiis nostrum quisquam eius ipsa id vero dolorem magni ea?
              Ullam pariatur sed accusamus?
            </b-card-text>
          </b-card-body>
          <b-card-footer class="text-right">
            <b-button variant="light" disabled>
              <b-icon
                icon="eye"
                title="eye"
                aria-label="eye"
                class="mr-2"
              ></b-icon>
              <span class=" text-primary">2</span>
            </b-button>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'Category',
}
</script>

<style lang="scss" scoped></style>
