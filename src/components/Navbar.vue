<template>
    <v-app-bar color="deep-purple" dark>
        <v-avatar color="indigo">
            <v-icon dark>
                mdi-account-circle
            </v-icon>
        </v-avatar>
        <v-toolbar-title class="title">User Name</v-toolbar-title>
        <v-btn @click="logout">Logout</v-btn>
        <v-btn @click="goToHome">
            <v-icon>mdi-home</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: 'Navbar',
    methods: {
        goToHome() {
            this.$router.push('/');
        },
        logout() {
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
.title {
    margin-right: auto;
}
</style>