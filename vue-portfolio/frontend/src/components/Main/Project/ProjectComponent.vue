<template>
    <div class="w-full h-full flex flex-col items-center justify-around" :class="project.gridPlacement">

      <div class="w-full h-5/6 border-2 rounded-t-3xl border-neutral-300 bg-neutral-100 grid place-items-center">
        <img :src="project.image" alt="project image" class="3xl:w-9/12 w-10/12">
      </div>
        
      <div class="w-full h-1/6 flex justify-between items-center px-6">
          <h1 class="text-2xl 3xl:text-3xl">{{ project.title }}</h1>
          <p>-</p>
          <p class="text-2xl 3xl:text-3xl">{{ project.date }}</p>
      </div>

    </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: false
    }
  }
};
</script>