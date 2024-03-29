<template>
    <section class="w-full">
        <h2 class="text-5xl font-raleway font-light text-right mr-2dvw mt-1dvw pb-2 border-b-2 border-neutral-300">Projects</h2>

        <div class="w-full min-h-50dvh flex flex-wrap justify-center bg-lime-100">
            <ProjectComponent v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
    </section>
</template>

<script>
import ProjectComponent from './ProjectComponent.vue';

export default {
  components: {
    ProjectComponent
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'This is a description of project 1',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'This is a description of project 2',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'This is a description of project 3',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 4,
          title: 'Project 4',
          description: 'This is a description of project 4',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 5,
          title: 'Project 5',
          description: 'This is a description of project 5',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 6,
          title: 'Project 6',
          description: 'This is a description of project 6',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 7,
          title: 'Project 7',
          description: 'This is a description of project 7',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 8,
          title: 'Project 8',
          description: 'This is a description of project 8',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 9,
          title: 'Project 9',
          description: 'This is a description of project 9',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 10,
          title: 'Project 10',
          description: 'This is a description of project 10',
          image: 'https://via.placeholder.com/150'
        }
      ]
    };
  }
};
</script>