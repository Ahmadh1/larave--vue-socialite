<template>
    <div class="container">
        <div class="row">
            <div class="col-8 offset-2">
                <div class="card border-dark mt-5">
                    <div class="card-header">
                    Login
                    </div>
                    <div class="card-body">
                       <form>
                            <div class="form-group">
                              <label for="name">Email:</label>
                              <input type="email" class="form-control" v-model="form.email" id="email" aria-describedby="emailHelpId" placeholder="ABC@example.com">
                            </div>
                            <div class="form-group">
                              <label for="password">Pasword:</label>
                              <input type="password" class="form-control" v-model="form.password" id="password" aria-describedby="emailHelpId" placeholder="Enter Password">
                            </div>
                            <button class="btn btn-success" @click.prevent="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({
            login: 'login'
        }),
        submit() {
           this.login(this.form)
                .then(() => {
                    this.$router.push('dashboard')
                })
        }
    }
}
</script>

<style>

</style>