<template>
    <div class="min-h-screen flex justify-center items-center">
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 bg-violet-500">
            <h1 class="text-3xl text-white font-bold text-center mb-4 cursor-pointer">REGISTER</h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
                        account to enjoy all the services without any ads for free!</p>
            <form @submit.prevent="submit" ref="registform">
                <div class="space-y-4 mt-4">
                 <input type="text" v-model="form.name" placeholder="Name" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                 <span class="text-red-400 italic" v-if="errors.name">{{ errors.name[0] }}</span>
                </div>
                <div class="space-y-4 mt-4">
                    <input type="text" v-model="form.email" placeholder="Email" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <span class="text-red-400 italic" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>
                <div class="space-y-4 mt-4">
                    <input type="text" v-model="form.password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <span class="text-red-400 italic" v-if="errors.password">{{ errors.password[0] }}</span>
                </div>
			<div class="text-center mt-6">
				<button type="submit" class="py-3 w-64 text-xl text-white bg-violet-900 rounded-2xl">Create Account</button>
				<p class="mt-4 text-sm text-white">Already Have an Account? <span class="font-bold underline cursor-pointer"><NuxtLink to="/auth/login"> Sign In</NuxtLink></span>
				</p>
			</div>
            </form>
            
		</div>
	</div>
</template>

<script>
 export default{
    data: () => ({
        form: {
            name: '',
            email: '',
            password: '',
        },
        errors: []
    }),
    methods: {
        async submit() {
            try {
                await this.$axios.$get('sanctum/csrf-cookie')
                await this.$axios.$post('/api/register', this.form)
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