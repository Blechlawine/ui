<template>
    <Wrapper
        name="Button"
        :editable-props="{ variant: ['base', 'ghost', 'neutral', 'primary'] }"
        code="<Button>Button</Button>"
        #component="args"
    >
        <Button v-bind="args">Button</Button>
    </Wrapper>
</template>
<script setup lang="ts"></script>
