<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/" class="font-bold">Shiro Store</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
        
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to ="/">Home</NuxtLink></li>
                <li><NuxtLink to ="/about">About</NuxtLink></li>
                <li><NuxtLink to ="/products">Products</NuxtLink></li>
                <li><NuxtLink to ="/posts">Post</NuxtLink></li>
                <li><NuxtLink to ="https://shiroostore.netlify.app/" target="_blank">Partnership</NuxtLink></li>
                <li><NuxtLink to ="/auth/register">REGISTER</NuxtLink></li>
                <li><NuxtLink to ="/auth/login">LOGIN</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>


<style scoped>
    .router-link-exact-active{
        color: aquamarine;
    }
</style>