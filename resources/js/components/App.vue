<template>
   <div>
        <navbar />
        <router-view />    
   </div>
</template>

<script>
    import navbar from './common/Navbar'

    export default {
        components: { navbar },
        mounted() {
            created: {
                console.log('component mounted')
            }
        }
    }
</script>
