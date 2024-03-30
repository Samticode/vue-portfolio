<template>
    <section class="bg-transparet w-85dvw min-h-150dvh ml-15dvw overflow-x-hidden">
        <Leader />
        <div class="bg-stone-900 pt-2dvh">
            <Project />
        </div>
        <Footer />
    </section>
</template>

<script setup>
    import Leader from './Leader/Leader.vue'
    import Project from './Project/Project.vue'
    import Footer from './Footer/Footer.vue'
</script> 