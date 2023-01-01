<template>
    <div>
        <p>Produk Detail untuk {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vel enim similique laboriosam perferendis illum? Magnam pariatur repellendus deleniti. Nobis distinctio natus iure adipisci tenetur aliquid voluptatem omnis deleniti inventore?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>