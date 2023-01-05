<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto py-4 px-8 mb-6 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Shiro</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to ="/">Home</NuxtLink></li>
                    <li><NuxtLink to ="/about">About</NuxtLink></li>
                    <li><NuxtLink to ="/products" class="btn">Products</NuxtLink></li>
                    <li><NuxtLink to ="/products/abc">Abc Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto py-4 px-8 mb-8">
            <slot />
        </div>
    </div>
</template>


<style scoped>
    .router-link-exact-active{
        color: aquamarine;
    }
</style>