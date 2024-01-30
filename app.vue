<script setup lang="ts">
const { data, refresh } = await useFetch('/api/status')
const readyState = ref(data.value ?? 0)
</script>

<template>
<div h-screen>
  {{ readyState }}
  <NuxtPage />
</div>
</template>
