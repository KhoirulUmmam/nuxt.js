<template>
    <div>
        <h2>List of Steaks</h2>
        <div class="grid grid-cols-3 gap-5">
            <div 
                v-for="s in steaks"
                :key="s"
                >
                <SteakCard :steak="s"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'posts'
    })

    const { data: steaks } = await useFetch('api/steak')

//     export default {
//         data(){
//             return {
//                 show: false,
//                 fields: ['title', 'content', 'actions'],
//                 posts:[]
//             }
//         },
//         methods: {
//             async submit(){
//                 await this.$axios.$get('/api/posts')
//                 .then(response => {
          
//             //assign response ke state "posts"
//             this.posts = response.data.data

//             })
//             .catch(error => {
//             console.log(error.response.data)
//             })
//         }
//     }
// }

</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 30px;
    }

    p {
        margin: 20px 0;
    }
</style>