<template>
    <div class="text-base-content bg-base-0">
        <nav class="">
            <input type="checkbox" v-model="darkMode" />
        </nav>
        <Wrapper name="Button" :editable-props="{}" code="<Button>Button</Button>" #component>
            <Button>Button</Button>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

const darkMode = useDark({
    valueDark: "dark",
    valueLight: "light",
});
</script>
