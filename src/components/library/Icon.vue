<template>
    <span :class="props.name" />
</template>
<script setup lang="ts">
const props = defineProps<{
    name: string;
}>();
</script>
