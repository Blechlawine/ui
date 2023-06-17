<template>
    <div class="grid border-solid border-0.5 border-base-2 rounded">
        <label>{{ props.name }}</label>
        <div>
            <slot name="component" />
        </div>
        <code>
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
