<template>
    <component :is="layout">
        <slot></slot>
    </component>
</template>
<script>
export default {
    computed: {
        layout() {
            return this.$route.meta.layout || "DefaultLayout"
        }
    }
}
</script>