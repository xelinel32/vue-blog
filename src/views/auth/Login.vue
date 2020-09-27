<template>
  <b-row cols="12" class="vh-100 justify-content-center" align-v="center">
    <b-col col lg="6">
      <h1 class="text-uppercase text-center mb-5 text-secondary">Login Form</h1>
      <b-form @submit.stop.prevent="onSubmit" class="shadow p-4 rounded">
        <b-form-group id="email" label="Email address:" label-for="email">
          <b-form-input
            v-model.trim="form.email"
            type="email"
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Your password:" label-for="password">
          <b-form-input
            v-model.trim="form.password"
            placeholder="Enter password"
            type="password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
      <b-alert class="mt-5" variant="success" dismissible :show="true"
        >Logged</b-alert
      >
    </b-col>
  </b-row>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<style lang="scss" scoped></style>
