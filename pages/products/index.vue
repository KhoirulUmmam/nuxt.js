<template>
    <div>
        <div v-if="products.length > 0" class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
        <div v-else class="font-bold">
            Data kosong
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch products
    const {data: products} = await useFetch('https://fakestoreapi.com/products/')

    useHead({
        title: 'Shiro Store | Voucher',
        meta:[
            { name: 'description', content: 'Paket A' }
        ]
    })
</script>

<style scoped>

</style>