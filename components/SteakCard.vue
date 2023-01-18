<template>
    <div class="card text-center">
        <img :src="steak.image" alt="steak thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ steak.name }}</p>
        <p class="font-bold text-gray-500 m-4 truncate">{{ steak.price }}</p>
        <NuxtLink :to="`/steaks/${steak.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { steak } = defineProps(['steak'])
</script>

<style scoped>

.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}

</style>