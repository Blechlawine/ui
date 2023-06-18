<template>
    <div class="text-base-content bg-base-0 min-h-screen p-2 flex flex-col gap-2">
        <nav class="">
            <Button @click="toggleDark()">{{ darkMode ? "Light" : "Dark" }}</Button>
            <Button to="/elements/button">Button</Button>
            <Button to="/elements/select">Select</Button>
        </nav>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

const darkMode = useDark({
    valueDark: "dark",
    valueLight: "light",
});
const toggleDark = useToggle(darkMode);
</script>
