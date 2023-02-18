<template>
    <navbar />
    <div>
        <main>
            <slot />
        </main>
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
export default{
    name:"UserLayout",
    components:{Navbar}
}
</script>