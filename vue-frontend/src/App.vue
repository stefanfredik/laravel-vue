<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import HomeView from "./views/HomeView.vue";
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav class="m-2 p-2">
        <RouterLink
          class="text-white px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="text-white px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded"
          to="/skills"
          >Skills</RouterLink
        >
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
    <HomeView />
  </main>

  <RouterView />
</template>
