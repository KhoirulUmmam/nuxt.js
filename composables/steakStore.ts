import { defineStore } from "pinia";
import { ISteak } from "~~/types";
import useToast from "./useToast";

export const useSteakStore = defineStore("steak-store", {
	state: () => ({
		// List of all steaks
		steaks: [] as ISteak[],
	}),
	actions: {
		// Get all steaks from DB
		async getAll() {
			try{
				let data = await $fetch<ISteak[]>("/api/steaks");
				this.steaks = data;
				return data as ISteak[];
			}catch(e) {
				useToast().error(e.message);
			}
		},
		// Create a new steak
		async create(steak: ISteak) {
			await $fetch("/api/steaks/create", {
				method: "POST",
				body: steak,
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Steak created");
				});
		},
		// Update a steak
		async update(id: string, steak: ISteak) {
			await $fetch(`/api/steaks/${id}`, {
				method: "PUT",
				body: steak,
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Steak updated");
				});
		},
		// delete a steak
		async remove(id: string) {
			await $fetch(`/api/steaks/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Steak removed");
				});
		},
	},
});
