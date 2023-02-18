<template>
    <v-card class="mx-auto overflow-hidden" height="100vh">
        <Navbar />
        <Navdrawer />
        <v-card-text class="text-center">
            <v-container fluid size="large">
                This is your Admin page!!
                <v-spacer></v-spacer>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import Navdrawer from "../components/Navdrawer.vue"
export default {
    name: "Admin",
    components: { Navbar, Navdrawer }
}
</script>
<style>
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