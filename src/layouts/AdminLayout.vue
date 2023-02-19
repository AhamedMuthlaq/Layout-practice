<template>
    <main>
        <Navbar />
        <Navdrawer />
        <div>
            <main>
                <slot />
            </main>
        </div>
    </main>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import Navdrawer from "../components/Navdrawer.vue"

export default {
    name: "AdminLayout",
    components: { Navbar, Navdrawer },
    methods: {
        isAdmin() {
            return store.$state.role == "admin"
        }
    }
}
</script>