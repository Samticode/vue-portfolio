<template>
    <div class="w-full h-full flex flex-col items-centerr" :class="project.gridPlacement">

      <div class="w-full h-5/6 border-2 rounded-t-3xl border-neutral-200 hover:shadow-xl hover:cursor-pointer bg-neutral-100 grid place-items-center">
        <img :src="project.image" alt="project image" class="3xl:w-9/12 w-10/12 rounded-lg">
      </div>
        
      <div class="w-full flex justify-between items-center px-6 mt-5">
          <h1 class="font-raleway text-2xl 3xl:text-3xl">{{ project.title }}</h1>

          <p class="font-raleway text-stone-400 text-xl 3xl:text-2xl">{{ project.date }}</p>
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