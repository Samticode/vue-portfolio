<template>
  <main class="min-h-100dvh w-100dvw bg-white overflow-x-hidden">
    <Loading v-if="isLoading" />
    <div v-else>
      <Sidebar />
      <Main />
    </div>
  </main>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import Sidebar from './components/Sidebar/Sidebar.vue'
  import Main from './components/Main/Main.vue'
  import Loading from './components/Loading/Loading.vue'

  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 4500);
  });
</script>