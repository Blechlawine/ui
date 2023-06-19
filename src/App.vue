<template>
    <div class="text-base-content bg-base-0 min-h-screen p-2 flex flex-col gap-2">
        <nav class="">
            <Button
                variant="ghost"
                @click="toggleDark()"
                :icon="darkMode ? 'i-tabler-moon' : 'i-tabler-sun'"
            />
            <Button to="/elements/button" icon="i-tabler-click">Button</Button>
            <Button to="/elements/select" icon="i-tabler-chevron-down">Select</Button>
            <Button to="/elements/input" icon="i-tabler-forms">Input</Button>
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
