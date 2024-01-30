<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>
<template>
  <h1 class="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-3 text-center">Index page</h1>
  {{ data?.hello }}
</template>
