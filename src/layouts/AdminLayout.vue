<template>
    <Navbar />
    <Navdrawer />
    <div>
        <main>
            <slot />
        </main>
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import Navdrawer from "../components/Navdrawer.vue"
export default{
    name:"AdminLayout",
    components:{Navbar,Navdrawer}
}
</script>