<template>
    <div class="text-base-content bg-base-0">
        <nav class="">
            <input type="checkbox" v-model="darkMode" />
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
</script>
