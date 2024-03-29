<template>
    <div class="w-32">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
    </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>