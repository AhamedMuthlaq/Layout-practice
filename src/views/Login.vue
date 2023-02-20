<template>
    <v-sheet class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" clearable
                    label="Email"></v-text-field>

                <v-text-field class="mb-2" v-model="password" :readonly="loading" :rules="[required]" clearable
                    label="Password" placeholder="Enter your password"></v-text-field>

                <br>

                <v-btn class="btn" :disabled="!form" :loading="loading" block size="large" type="submit" variant="elevated">
                    Login
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>
<script>
import { userRoleStore } from '@/store/userRole.js'

const store = userRoleStore()

export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => (this.loading = false), 2000)

            this.$router.push({ name: 'Home' })

            if (this.email === store.getAdminEmail) {
                store.setRole("admin")
            } else {
                store.setRole("user")
            }
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>
<style scoped>
.bg-deep-purple {
    margin: 10rem 29rem 0;
}

.btn {
    color: black;
}
</style>