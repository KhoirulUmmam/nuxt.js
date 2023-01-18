import { defineStore } from "pinia";
import { IImport } from "~~/types";
import useToast from "./useToast";

export const useSteakStore = defineStore("steak-store", {
    state: () => ({
        steaks: [] as IImport[],
    }),
    actions: {
        // get all steaks from DB
        async getAll() {
            try {
                let data = await $fetch<IImport[]>("/api/steaks");
                this.steaks = data;
                return data as IImport[];
            }catch(e) {
                useToast().error(e.message);
            }
        },
        // create new steak
        async create(name:string) {
            await $fetch("/api/authors/create", {
                method: "POST",
                body: { name },
            })
                .catch((e) => {
                    useToast().error(e.message);
                })
                .then(async() => {
                    await this.getAll();
                    useToast().success("Import created");
                });
        },
        // Update an import
        async update(id: string, name: string) {
            await $fetch(`/api/steaks/${id}`, {
                method: "POST",
                body: { name },
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async() => {
                    await this.getAll();
                    useToast().success("Import updated");
                });
        },
        async remove(id: string) {
            await $fetch(`/api/steaks/${id}`, {
                method: "DELETE",
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async() => {
                    await this.getAll();
                    useToast().success("Import removed");
                });
        },
    },
})