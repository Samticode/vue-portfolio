<template>
    <div class="w-full h-full flex flex-col items-centerr" :class="project.gridPlacement">

      <div class="w-full h-5/6 border-2 rounded-t-3xl border-neutral-200 hover:shadow-xl hover:cursor-pointer bg-neutral-100 grid place-items-center" @click="showProjectInfo = true">
        <img :src="project.image" alt="project image" class="3xl:w-9/12 w-10/12 rounded-lg">
      </div>
        
      <div class="w-full flex justify-between items-center px-6 mt-5">
          <h1 class="font-raleway text-2xl 3xl:text-3xl">{{ project.title }}</h1>

          <p class="font-raleway text-stone-400 text-xl 3xl:text-2xl">{{ project.date }}</p>
      </div>

      <div v-if="showProjectInfo">
          <div class="fixed z-50 inset-0 bg-stone-900 h-100dvh max-w-100dvw p-5 pSm:hidden">
              <div class="size-full bg-white p-5 rounded-lg grid grid-cols-12 grid-rows-12 gap-2">
                <h1 class="col-span-8 col-start-2 row-span-2 3xl:text-8xl text-6xl font-raleway flex items-center">Project Name: {{ project.title }}</h1>
                <h2 class="size-full 3xl:text-6xl text-4xl text-stone-400 font-raleway flex justify-end items-center col-span-2 row-span-2">{{ project.date }}</h2>

                <div class="border-2 3xl:border-neutral-300 border-neutral-200 shadow-md rounded-lg row-span-8 row-start-3 col-span-4 col-start-2 grid grid-cols-3">
                  <img class="w-full" :class="project.extraStyle" v-for="(language, index) in project.languages" :key="index" :src="language"/>
                </div>

                <div class="border-2 3xl:border-neutral-300 border-neutral-200 shadow-lg rounded-lg row-span-8 row-start-3 col-span-6 col-start-6 grid place-items-center">
                  <p class="3xl:text-5xl text-4xl font-raleway w-10/12"> {{ project.description }} </p>
                </div>

                <button @click="showProjectInfo = false" class="absolute bottom-3 left-5 w-20 hover:scale-110 active:scale-95"><img src="../../../assets/back-arrow.png" alt="description" /></button>
              </div>
          </div>
  
          <div class="h-100dvh max-w-100dvw bg-stone-900 hidden pSm:grid place-items-center">
              <h1 class="text-7xl font-space-mono text-white">Sorry..</h1>
          </div>
      </div>

    </div>
</template>

<script>
  import { ref } from 'vue';
  import Projectinfo from './Projectinfo.vue';

  export default {
    props: {
      project: {
        type: Object,
        required: false
      }
    },
    setup() {
      const showProjectInfo = ref(false);
      return { showProjectInfo };
    }
  };
</script>