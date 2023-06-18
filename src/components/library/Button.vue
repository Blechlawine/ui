<template>
    <component :is="tag" :class="classes" @click="emit('click', $event)" :to="to">
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

const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
}>();

const tag = computed(() => (is ?? to ? "router-link" : "button"));

const classes = computed(() => ({
    "btn-primary": variant === "primary",
    "btn-ghost": variant === "ghost",
    "btn-neutral": variant === "neutral",
    "btn-link": to !== undefined,
    btn: variant === "base",
}));
</script>
