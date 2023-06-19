<template>
    <input
        class="input"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        v-model="model"
    />
</template>
<script setup lang="ts">
const { type = "text" } = defineProps<{
    type?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
}>();

const model = defineModel<string | number>();
</script>
