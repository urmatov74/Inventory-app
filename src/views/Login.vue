<template>
    <v-content>
        <v-card class="login-card mx-auto mt-9">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-text-field label="Username" prepend-icon="mdi-account-circle" />
                <v-text-field 
                label="Password" 
                :type="showPassword ? 'text' : 'password'" 
                prepend-icon="mdi-lock" 
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append="showPassword = !showPassword" />
            </v-card-text>
        </v-card>
    </v-content>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .login-card {
        width: 500px;
        padding: 15px;
    }
</style>