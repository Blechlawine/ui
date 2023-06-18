<template>
    <component :is="tag" :class="classes">
        <slot />
    </component>
</template>
<script setup lang="ts">
const {
    variant = "base",
    to,
    is,
} = defineProps<{
    to?: string;
    is?: string;
    variant?: "base" | "ghost" | "neutral" | "primary";
}>();

const tag = computed(() => (is ?? to ? "router-link" : "button"));

const classes = computed(() => ({
    "btn-primary": variant === "primary",
    "btn-ghost": variant === "ghost",
    "btn-neutral": variant === "neutral",
    btn: variant === "base",
}));
</script>
