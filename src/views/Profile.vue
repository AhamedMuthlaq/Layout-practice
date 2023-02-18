<template>
    <v-card class="mx-auto overflow-hidden" height="100vh">
        <Navbar />
        <v-spacer></v-spacer>
        <v-card-text class="text-center">
            <v-container fluid size="large">
                This is your profile page!!
                <v-spacer></v-spacer>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
import Navbar from "../components/Navbar.vue"
export default {
    name: "Profile",
    methods: {
        goToHome() {
            this.$router.push({ name: "Home" });
        }
    },
    components: {
        Navbar
    }
}
</script>
<style scoped>
.title {
    margin-right: auto;
}

.text-center {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: larger;
}
</style>