<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Shiro Store</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div>
            <slot />
        </div>
        
        <footer>
            <ul>
                <li><NuxtLink to ="/">Home</NuxtLink></li>
                <li><NuxtLink to ="/about">About</NuxtLink></li>
                <li><NuxtLink to ="/Products">Products</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>


<style scoped>
    .router-link-exact-active{
        color: aquamarine;
    }
</style>