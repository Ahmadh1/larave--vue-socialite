<template>
    <div class="container">
        <div class="row">
            <div class="col-8 offset-2">
                <div class="card border-primary mt-5">
                    <div class="card-header">
                    Register
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                              <label for="name">Name:</label>
                              <input type="text" class="form-control" v-model="form.name" id="name" aria-describedby="emailHelpId" placeholder="Enter Name">
                            </div>
                            <div class="form-group">
                              <label for="name">Email:</label>
                              <input type="email" class="form-control" v-model="form.email" id="email" aria-describedby="emailHelpId" placeholder="ABC@example.com">
                            </div>
                            <div class="form-group">
                              <label for="password">Pasword:</label>
                              <input type="password" class="form-control" v-model="form.password" id="password" aria-describedby="emailHelpId" placeholder="Enter Password">
                            </div>
                            <div class="form-group">
                              <label for="cnf_pass">Confirm Password:</label>
                              <input type="password" class="form-control" v-model="cnf_pass" id="cnf_pass" aria-describedby="emailHelpId" placeholder="Confirm Password">
                              <span v-show="warn" class="text-danger text-sm-center">Password and Confirm Password must be same</span>
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
export default {
    name: 'Register',
    data() {
        return {
           form: {
                name: '',
                email: '',
                password: ''
            },
            cnf_pass: '',
            warn: false
        }
    },
    methods: {
        submit () {
            axios.post('/api/register', this.form)
                  .then((res) => {
                      console.log(res)
                   })
                  .catch((err) => {
                      console.log(err)
                   })
        }
    }
}
</script>

<style>

</style>