<template>
    <Wrapper code="<Select></Select>" name="Select" #component="args">
        <Select v-model="value" v-bind="args">
            <option v-for="v in values" :value="v">{{ v }}</option>
        </Select>
    </Wrapper>
</template>
<script setup lang="ts">
const values = ["hello", "world"];
const value = ref(values[0]);
</script>
