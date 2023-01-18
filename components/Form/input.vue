<template>
    <div class="w-full">
        <label class="label" v-if="label" :for="$attrs.id">{{ label }}</label>
        <input v--model="value" v-bind="$attrs" class="input" />
        <div class="mt-1 text-xs text-red-500">
            <span class="text-transparent">.</span>
            <span>
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { useField } from "vee-validate"
    const props = definePorps({
        label: String,
        name: String,
        rules: String,
        modelValue: [String, Number],
    });

    // get value and error message to use in template
    const { errorMessage, value } = useField(ref(props.name), props.rules, {
        initialValue: props.modalValue, // set initial value
        label: props.label || props.name, // label used for displaying errors
    });
</script>

<style scoped>

</style>