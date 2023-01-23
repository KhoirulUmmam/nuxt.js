<template>
	<TransitionRoot :show="open">
		<!-- Dialog -->
		<Dialog as="div" class="relative z-20" @close="closeModal">
			<!-- Dialog overlay -->
			<TransitionChild
				enter="duration-200"
				leave="duration-200"
				enter-from="opacity-0"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black/30 backdrop-blur" />
			</TransitionChild>

			<!-- Full-screen scrollable container -->
			<div class="fixed inset-0 overflow-y-auto">
				<!-- Container to center the panel -->
				<div class="flex items-center justify-center min-h-full p-4">
					<!-- The actual dialog panel -->
					<TransitionChild
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel class="w-full min-w-[360px] p-5 bg-white shadow-lg rounded-2xl">
							<div class="flex items-center justify-between">
								<!-- Conditional rendering for text -->
								<DialogTitle class="text-xl font-medium text-gray-700"
									>{{ steak._id ? "Update" : "Create" }} Steak</DialogTitle
								>
							</div>
							<p class="mt-1 text-sm text-gray-500">
								{{ steak._id ? "Update this steak" : "Create a new steak here" }}
							</p>

							<form @submit="submitSteak" class="mt-5">
								<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div class="col-span-full">
										<FormInput rules="required" label="Nama" type="text" name="nama" id="nama" />
									</div>
									<!-- <div class="mb-4 col-span-full">
										<FormSteakInput v-model="steaks" />
									</div> -->
									<div class="col-span-1">
										<FormInput label="Kualitas" type="text" name="kualitas" id="kualitas" />
									</div>
									<div class="col-span-1">
										<FormInput
											placeholder="Pilih Tanggal"
											rules="required"
											label="Tanggal Pengiriman"
											type="date"
											name="pengiriman"
											id="pengiriman"
										/>
									</div>
									<div class="col-span-1">
										<FormInput label="Kelurahan" type="text" name="kelurahan" id="kelurahan" />
									</div>
									<div class="col-span-1">
										<FormInput label="Kecamatan" type="text" name="kecamatan" id="kecamatan" />
									</div>
									<div class="col-span-1">
										<FormInput label="Kota" type="text" name="kota" id="kota" />
									</div>
									<!-- <div class="col-span-1">
										<FormInput
											min="0"
											rules="required|min_value:0"
											label="Page count"
											type="number"
											name="pageCount"
											id="count"
										/>
									</div> -->
								</div>
								<!-- Form buttons -->
								<div class="flex items-center justify-end space-x-3 mt-7">
									<button
										@click="closeModal()"
										type="button"
										class="px-4 text-sm bg-gray-100 py-2.5 rounded-md"
									>
										Cancel
									</button>
									<button type="submit" class="btn">{{ steak._id ? "Update" : "Create" }}</button>
								</div>
							</form>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
	import {
		Dialog,
		DialogPanel,
		DialogTitle,
		TransitionRoot,
		TransitionChild,
	} from "@headlessui/vue";
	import { useForm } from "vee-validate";

	// instantiate book store
	const steakStore = useSteakStore();
	// Initial form values
	const steak = ref({});

	// Get function used to handle form submission and set init form values
	const { handleSubmit } = useForm({
		initialValues: steak,
	});

	// Function used to update or create the record
	const submitSteak = handleSubmit(async (values, ctx) => {
		if (!steak.value._id) {
			// create steak
			await steakStore.create({ ...values });
			closeModal();
		} else {
			// Updated steak
			steakStore.update(steak.value._id, { ...values });
			closeModal();
		}
	});

	// Controll state of teh modal
	const open = ref(false);
	const openModal = (item) => {
		// Set init values if an object is passed
		if (item) {
			steak.value = JSON.parse(
				JSON.stringify({ ...item, published: item.published.substring(0, 10) })
			);
			authors.value = item.authors.map((a) => a._id);
		}
		open.value = true;
	};
	const closeModal = () => {
		steak.value = {};
		open.value = false;
	};

	// Expose these methods to parent components
	defineExpose({
		openModal,
		closeModal,
	});
</script>

<style></style>
