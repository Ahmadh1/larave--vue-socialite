import axios from 'axios'
const state = {
    isLoggedIn: false,
    userDetails: {}
};

const getters = {
    loggedIn(state) {
        return state.isLoggedIn;
    }
};
const mutations = {
    /*
    * [@name]
    ** Description: 
    * [return]
    * [data]
    */
    setLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    }
};

const actions = {
    login(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/api/login', payload)
                  .then((res) => {
                      localStorage.setItem('token', res.data.access_token);
                      ctx.commit('setLoggedIn', true);
                      resolve(res);
                   })
                  .catch((err) => {
                    //   console.log(err)
                    reject(err);
                   })
        })
    },
    logout(ctx) {
        return new Promise((resolve) => {
            
            localStorage.removeItem('token');
            ctx.commit('setLoggedIn', false);
            resolve(true);
        });
    },
    setLoginState(ctx) {
        return new Promise((resolve) => {
            if (localStorage.getItem('token')) {
                ctx.commit('setLoggedIn', true)
                resolve(true)
            } else {
                ctx.commit('setLoggedIn', false)
                resolve(false)
            }
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}