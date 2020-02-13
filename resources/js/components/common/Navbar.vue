<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <div class="navbar-nav navbar-right">
      <button class="btn btn-danger btn-sm" @click.prevent="logout" v-if="loggedIn">logout</button>
    </div>
  </div>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  created() {
    this.setState()
  },
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn'
    })
  },
  methods: {
    ...mapActions({
      logoutUser: 'logout',
      setState: 'setLoginState'
    }),
    logout() {
      this.logoutUser()
          .then(() => {
            this.$router.push('login');
          })
    }
  }
}
</script>