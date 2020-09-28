<template>
  <b-row class="mt-5">
    <b-col cols="12" lg="9" md="auto">
      <h3 class="text-capitalize font-italic mb-4 text-secondary">
        Last Posts
      </h3>
      <b-row>
        <loader v-if="loading" />
        <b-col
          v-else
          cols="12"
          lg="6"
          sm="auto"
          v-for="(card, idx) in 6"
          :key="idx"
        >
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            no-body
            class="mb-4 shadow rounded"
            border-variant="light"
          >
            <b-card-body class="p-3 mb-2">
              <b-card-title>
                <b-link
                  :to="{ name: 'article', params: { id: idx + 1 } }"
                  class="card-link text-success"
                  >Title</b-link
                >
              </b-card-title>
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card-body>
            <b-card-footer
              class="d-flex justify-content-between p-2"
              footer-border-variant="dark"
              footer-bg-variant="dark"
            >
              <b-button variant="dark" disabled>
                <b-icon icon="eye" title="eye" class="mr-2"></b-icon>
                <span>102</span>
              </b-button>
              <b-button variant="dark" disabled>
                <b-icon
                  icon="chat-square-text"
                  title="chat"
                  class="mr-2"
                ></b-icon>
                <span>3</span>
              </b-button>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
      <b-pagination
        total-rows="12"
        per-page="2"
        class="mt-3 justify-content-center"
        v-if="!loading"
      ></b-pagination>
    </b-col>
    <b-col>
      <widget>
        <template #head>
          Categories
        </template>
        <template #body>
          <b-list-group>
            <b-list-group-item
              v-for="item in 5"
              :key="item"
              to="#"
              class="d-flex justify-content-between align-items-center"
            >
              Category
              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
          </b-list-group>
        </template>
      </widget>
    </b-col>
  </b-row>
</template>

<script>
import Loader from '@/components/Loader'
import Widget from '@/components/Widgets'
export default {
  name: 'index',
  data: () => ({
    loading: false,
  }),
  components: { Loader, Widget },
}
</script>

<style lang="scss" scoped></style>
