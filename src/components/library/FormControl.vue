<template>
    <div class="form-control">
        <label class="label" v-if="label" :for="inputRef?.id">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
        </label>
        <slot :required="required" :ref="inputRef" />
        <span class="hint" v-if="hint">{{ hint }}</span>
    </div>
</template>
<script setup lang="ts">
import type { VNodeRef } from "vue";

const inputRef = ref<VNodeRef | null>(null);

const { required, label, hint } = defineProps<{
    required?: boolean;
    label?: string;
    hint?: string;
}>();
</script>
