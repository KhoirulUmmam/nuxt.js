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

        <!-- crud of steak / title -->
    <main>
        <div
				class="flex flex-col items-center justify-between mt-5 space-y-3 md:space-y-0 md:flex-row"
			>
				<!-- <div class="relative w-full md:mr-10 grow">
					<span class="absolute -translate-y-1/2 top-1/2 left-3">
						<Icon name="ep:search" size="24" class="text-gray-400" />
					</span>
					<input
						placeholder="Search steaks..."
						v-model="search"
						type="search"
						name="search"
						id="search"
						class="pl-11 input"
					/>
				</div> -->
				
		<div class="flex items-center justify-between h-20 px-3 max-w-7xl">
			<nav class="flex items-center space-x-2">
				<template v-for="n in menu" :key="`menuItem${n.name}`">
					<NuxtLink
						class="px-3 py-2 text-sm font-medium text-white-500 transition-all link hover:text-primary hover:bg-violet-50"
						:to="n.link"
						>{{ n.name }}</NuxtLink
					>
				</template>
			</nav>
		</div>
				<button
					@click="steakModal.openModal()"
					class="w-full py-3.5 md:py-2.5 md:w-auto btn shrink-0"
				>
					Add Steak
				</button>
			</div>

			<div class="relative mt-5 border border-gray-100 rounded-lg">
				<ClientOnly>
					<EasyDataTable
						:search-value="search"
						empty-message="No Steak Found"
						theme-color="#f97316"
						table-class-name="eztble"
						:headers="headers"
						:items="steakStore.steaks"
					>
						<!-- Show name with custom styles -->
						<template #item-nama="{ nama }">
							<span class="font-semibold">{{ nama }}</span>
						</template>
						<template #item-pengiriman="{ pengiriman }">
							<span>{{ dayjs(pengiriman).format("MMM DD, YYYY") }}</span>
						</template>
						<template #item-kelurahan="{ kelurahan }">
							<span class="font-semibold">{{ kelurahan }}</span>
						</template>
						<template #item-kecamatan="{ kecamatan }">
							<span class="font-semibold">{{ kecamatan }}</span>
						</template>
						<template #item-kota="{ kota }">
							<span class="font-semibold">{{ kota }}</span>
						</template>
						<!-- Action items for table -->
						<template #item-actions="steak">
							<div class="flex space-x-4 text-gray-500">
								<button @click="steakModal.openModal(steak)">
									<Icon size="18" name="fluent:pen-24-regular" />
								</button>
								<button @click="removeSteak(steak)">
									<Icon size="18" name="fluent:delete-24-regular" />
								</button>
							</div>
						</template>
					</EasyDataTable>
				</ClientOnly>
			</div>
		</main>
		<!-- Steak modal comp -->
		<SteakModal ref="steakModal" />
    </div>
</template>

<script setup lang="ts">
    import { Header } from "vue3-easy-data-table";
    import dayjs from "dayjs";

    definePageMeta({
        layout: 'posts'
    })

    const { data: steaks } = await useFetch('api/steak')

    // Steak store from pinia
	const steakStore = useSteakStore();
	// Get steaks with async data
	await useAsyncData(() => steakStore.getAll(), {
		initialCache: false,
	});

	// Modal refence - used to open modal
	const steakModal = ref();
	//Search for record in table
	// const search = ref("");

	// headers for the table
	const headers: Header[] = [
		{ text: "Nama", value: "nama", sortable: true, width: 150 },
		{ text: "Pengiriman", value: "pengiriman", width: 150 },
		{ text: "Kualitas", value: "kualitas", sortable: true },
		{ text: "Kelurahan", value: "kelurahan", sortable: true },
		{ text: "Kecamatan", value: "kecamatan", sortable: true },
		{ text: "Kota", value: "kota", sortable: true },
		// { text: "Page Count", value: "pageCount", sortable: true, width: 200 },
		{ text: "Actions", value: "actions", width: 100 },
	];

	// Method used to remove a steak
	const removeSteak = async (steak) => {
		await steakStore.remove(steak._id);
	};

	const menu = ref([
		{ name: "Steaks", link: "/posts" },
	]);

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

	.router-link-active.link {
		@apply text-primary bg-primary-50;
	}

	.router-link-exact-active {
		color: aquamarine;
	}
</style>