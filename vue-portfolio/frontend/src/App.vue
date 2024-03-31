<template>
  <main class="min-h-100dvh w-100dvw bg-white overflow-x-hidden pSm:hidden">
    <Loading v-if="isLoading" />
    <div v-else>
      <Main />
      <Sidebar />
    </div>
  </main>
  <div class="h-100dvh max-w-100dvw bg-stone-900 hidden pSm:grid place-items-center">
    <h1 class="text-7xl font-space-mono text-white">Sorry..</h1>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  import Sidebar from './components/Sidebar/Sidebar.vue'
  import Main from './components/Main/Main.vue'
  import Loading from './components/Loading/Loading.vue'

  const isLoading = ref(false);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 4500);
  });
</script>