<template>
    <select :class="classes" v-model="model">
        <slot />
    </select>
</template>
<script setup lang="ts">
const { variant = "base" } = defineProps<{
    variant: "base" | "ghost" | "neutral" | "primary";
}>();

const model = defineModel<string | number | boolean>();

const classes = computed(() => ({
    select: variant === "base",
    "select-ghost": variant === "ghost",
    "select-neutral": variant === "neutral",
    "select-primary": variant === "primary",
}));
</script>
