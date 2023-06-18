<template>
    <div class="grid border-solid border-0.5 border-base-2 rounded">
        <div class="flex">
            <!-- <label class="bg-base-1 border-r-0.5 border-solid border-base-2 px-3 p-2">
                {{ props.name }}
            </label> -->
            <div v-for="[key, value] in editablePropEntries" class="px-3 p-2 bg-base-1">
                {{ key }}
                <Select variant="ghost" v-if="Array.isArray(value)" v-model="componentProps[key]">
                    <option v-for="v in value" :value="v">{{ v }}</option>
                </Select>
            </div>
        </div>
        <div class="p-4 border-y-0.5 border-solid border-base-2">
            <slot name="component" v-bind="componentProps" />
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
    editableProps?: Record<string, string | number | boolean | Array<string>>;
}>();

const editablePropEntries = ref(Object.entries(props.editableProps ?? {}));

const componentProps = ref(
    Object.fromEntries(
        editablePropEntries.value.map(([key, value]) => {
            if (Array.isArray(value)) {
                return [key, value[0]];
            }
            return [key, value];
        })
    )
);
</script>
