<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>
      VueBlog 🖖
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="font-weight-bold ma-0"
          exact
          >{{ link.name }}</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form class="mr-3">
          <b-form-input class="mr-sm-2" placeholder="Search..."></b-form-input>
          <b-button class="my-2 my-sm-0" variant="outline-success" type="submit"
            >Search
          </b-button>
        </b-nav-form>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right v-if="isAuth">
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navabr',
  data: () => ({
    isAuth: false,
    navLinks: [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/category',
        name: 'Categories',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
