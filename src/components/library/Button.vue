<template>
    <component :is="tag" class="btn">
        <slot />
    </component>
</template>
<script setup lang="ts">
const props = defineProps<{
    to?: string;
    is?: string;
}>();

const tag = computed(() => (props.is ?? props.to ? "router-link" : "button"));
</script>
