<template>
    <main>
        <navbar />
        <div>
            <main>
                <slot />
            </main>
        </div>
    </main>
</template>
<script>
import Navbar from "../components/Navbar.vue"
export default {
    name: "UserLayout",
    components: { Navbar }
}
</script>