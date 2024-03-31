<template>
    <section class="bg-white w-15dvw h-100dvh fixed inset-0 border-r-2 border-neutral-300">
        <div class="size-full">

            <div class="w-full 3xl:h-91dvh h-88dvh border-b-2 border-neutral-200">
                <div class="flex flex-col gap-5 mx-8 pt-10 pb-4 border-b-2 border-neutral-200">
                    <a href="/" class="font-raleway font-medium 3xl:text-4xl text-3xl">Home</a>
                    <a href="" class="font-raleway font-medium 3xl:text-4xl text-3xl">CV</a>
                </div>

                <div class="mx-8 py-4 border-b-2 border-neutral-200">
                    <p class="font-raleway font-light 3xl:text-2xl text-xl hover:cursor-pointer" @click="scrollTo(0)">About</p>
                    <p class="font-raleway font-light 3xl:text-2xl text-xl hover:cursor-pointer" @click="scrollTo(56)">Projects</p>
                    <p class="font-raleway font-light 3xl:text-2xl text-xl hover:cursor-pointer" @click="scrollTo(100)">Contact</p>
                </div>
            </div>

            <div class="3xl:h-20 3xl:w-40 h-16 w-32 grid place-items-center rounded-lg absolute bottom-4 right-5 bg-neutral-200">
                <h1 class="3xl:text-6xl text-5xl">ﺻَﻤﺖ</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  methods: {
    scrollTo(percentage) {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTarget = height * (percentage / 100);
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  }
};
</script>
