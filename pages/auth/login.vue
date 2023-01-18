<template>
    <!-- component -->
    <div class="min-h-screen flex justify-center items-center">
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 bg-violet-500">
            <div>
                <span class="text-red-400 italic" v-if="errors.email">{{ errors.email[0] }}</span>
                <h1 class="text-3xl text-white font-bold text-center mb-4 cursor-pointer">LOGIN</h1>
                <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Log in using an account that has been registered</p>
            </div>
            <form @submit.prevent="submit">
                <div class="space-y-4">
                 <input 
                    type="email" 
                    v-model="form.email" 
                    placeholder="Email Address" 
                    required
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                 <input 
                    type="password" 
                    v-model="form.password"
                    placeholder="Password" 
                    autocomplete="current-password"
                    required
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            </div>
            <div class="mt-6 flex flex-wrap justify-center">
                
                <p class="text-xs font-semibold text-white"><NuxtLink to="#">Forgot Password?</NuxtLink></p>
            </div>
			<div class="text-center mt-6 text-white">
				<button type="submit" class="py-3 w-64 text-xl text-white bg-violet-900 rounded-2xl">Login</button>
				<p class="mt-8justify-around my-4 text-sm">Need an Account? <span class="underline font-bold"><NuxtLink to="/auth/register"> Sign In</NuxtLink></span></p>
			</div>
            </form>
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
    async mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods:{
        async submit(){
            try{
                const formData = new FormData(this.$refs.loginForm);
                await this.$auth.loginWith('laravelSanctum',{data:formData});
                console.log('user login');
                this.$router.push({
                    path:'/',
                });
            }catch(e){
                console.log(e);
            }
        }
    }
 };
</script>