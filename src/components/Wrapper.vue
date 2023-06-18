<template>
    <div class="grid border-solid border-0.5 border-base-2 rounded">
        <div class="flex">
            <label class="bg-base-1 border-r-0.5 border-solid border-base-2 px-3 p-2">
                {{ props.name }}
            </label>
        </div>
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
