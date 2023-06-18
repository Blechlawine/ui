<template>
    <div class="grid border-solid border-0.5 border-base-2 rounded">
        <label>{{ props.name }}</label>
        <div class="p-4 border-y-0.5 border-solid border-base-2">
            <slot name="component" />
        </div>
        <code class="bg-base-1 p-3 px-4">
            {{ props.code }}
        </code>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string;
    code: string;
    editableProps?: Record<string, string | number | boolean>;
}>();
</script>
