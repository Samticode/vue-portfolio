<template>
    <section class="w-83dvw mx-auto py-10 rounded-xl bg-white">
        <h2 class="3xl:text-5xl text-4xl font-raleway font-light text-right mr-2dvw ml-3 pb-2 border-b-2 border-neutral-200">Projects</h2>

        <div class="max-w-full h-115dvh mt-14 mx-11 grid grid-cols-6 grid-rows-5 gap-12 gap-y-20">
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
          gridPlacement: 'col-span-2 row-span-3',
          title: 'Buekorps Portal',
          date: 'Nov 2023',
          image: 'https://media.snl.no/media/14879/standard_buekorpsenesdag__003.jpg',
        },
        {
          id: 2,
          gridPlacement: 'col-span-2 row-span-2',
          title: 'Chatbot',
          date: 'April 2024',
          image: 'https://media.wired.com/photos/6595c546f6145f9ca1309145/master/pass/_BC-wired_selmasabanovic_kaylareeferphoto-127.jpg',
        },
        {
          id: 3,
          gridPlacement: 'col-span-2 row-span-3',
          title: 'Chores App',
          date: 'March 2024',
          image: 'https://i.pinimg.com/736x/64/76/cf/6476cfa661578dff2575e42a66c72cdb.jpg',
        },
        {
          id: 4,
          gridPlacement: 'col-span-2 row-span-3',
          title: 'Storage',
          date: 'Dec 2023',
          image: 'https://3.imimg.com/data3/PU/HB/MY-7398697/library-bookshelf.jpg',
        },
        {
          id: 5,
          gridPlacement: 'col-span-2 row-span-2',
          title: 'Teen Company',
          date: 'Dec 2023',
          image: 'https://www.dengodenaboub.no/img/dgnLogo.png',
        },
        {
          id: 6,
          gridPlacement: 'col-span-2 row-span-2',
          title: 'Valgomat',
          date: 'Oct 2023',
          image:'https://media.snl.no/media/49445/standard_stortinget1.jpg',
        }
      ]
    };
  }
};
</script>