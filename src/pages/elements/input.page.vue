<template>
    <Wrapper
        #component="args"
        :code="code"
        :editable-props="{ required: true, label: 'Hello', hint: 'type something' }"
    >
        <FormControl #default="inputProps" v-bind="args">
            <Input v-bind="inputProps" />
        </FormControl>
    </Wrapper>
</template>
<script setup lang="ts">
const code = `
<FormControl label="Hello" hint="type something" #default="inputProps">
    <Input v-bind="inputProps" />
</FormControl>
`;
</script>
