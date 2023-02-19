<template>
    <div class="container">
        <v-btn @click="goToProfile">

            <v-icon class="profile" dark>
                mdi-account-circle
            </v-icon>

        </v-btn>
        <h1>Welcome to the home page!</h1>

    </div>
</template>
<script>
export default {
    name: 'Home',
    methods: {
        goToProfile() {
            this.$router.push('/profile')
        }
    },
    mounted() {

    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    justify-content: space-between;
}

.profile {
    margin-right: auto;
}
</style>