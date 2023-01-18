<template>
    <!-- component -->
    <div class="min-h-screen flex justify-center items-center">
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 bg-violet-500">
            <div>
                <span class="text-red-400 italic" v-if="errors.email">{{ errors.email[0] }}</span>
                <h1 class="text-3xl text-white font-bold text-center mb-4 cursor-pointer">LOGIN</h1>
                <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Log in using an account that has been registered</p>
            </div>
            <div class="space-y-4">
                 <input type="text" v-model="form.email" placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                 <input type="text" v-model="form.password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            </div>
            <div class="mt-6 flex flex-wrap justify-center">
                
                <p class="text-xs font-semibold text-white"><NuxtLink to="#">Forgot Password?</NuxtLink></p>
            </div>
			<div class="text-center mt-6 text-white">
				<button class="py-3 w-64 text-xl text-white bg-violet-900 rounded-2xl">Login</button>
				<p class="mt-8justify-around my-4 text-sm">Need an Account? <span class="underline font-bold"><NuxtLink to="/auth/register"> Sign In</NuxtLink></span></p>
			</div>
		</div>
	</div>
</template>

<script>
 export default{
    data: () => ({
        form: {
            email: '',
            password: '',
        },
        errors: []
    }),
    methods: {
        async submit() {
            try {
                await this.$axios.$get('sanctum/csrf-cookie')
                await this.$auth.loginWith('laravelSanctum', {data: this.form})
            } catch (error) {
                this.errors = error.response.data.errors
            }
        }
    }
 }
</script>

<style scoped>

</style>