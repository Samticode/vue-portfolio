<template>
    <section class="bg-stone-900 h-100dvh w-100dvw relative overflow-hidden flowout">
        <div class="w-full h-1/6 grid grid-cols-5 place-items-center absolute bottom-48">

            <div class="w-full h-full grid grid-cols-2 place-items-center">
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting">1</p>
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting">2</p>
            </div>

            <div class="w-full h-full grid grid-cols-2 place-items-center">
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 750ms;">3</p>
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 750ms;">5</p>
            </div>

            <div class="w-full h-full grid grid-cols-2 place-items-center">
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 1500ms;">5</p>
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 1500ms;">7</p>
            </div>
            <div class="w-full h-full grid grid-cols-2 place-items-center">
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 2350ms;">8</p>
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 2350ms;">1</p>
            </div>

            <div class="w-full h-full grid grid-cols-2 place-items-center">
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 3000ms;">9</p>
                <p class="h-full w-full overflow-hidden text-white font-space-mono text-bigXl customting" style="animation-delay: 3000ms;">9</p>
            </div>

        </div>
    </section>
</template>

<script>

</script>
  
<style scoped>
    .customting {
        position: relative;
        animation: swoop 750ms;
        animation-fill-mode: forwards;
        bottom: -100%;
    }

    .flowout {
        animation: flowout 4500ms;
    }

    @keyframes swoop {
        0% {
            bottom: -100%;
            opacity: 0;

        }
        90% {
            opacity: 1;
        }
        100% {
            bottom: 0;
            opacity: 0.9;
        }
    }
    @keyframes flowout {
        0% {
            opacity: 1;
        }

        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>