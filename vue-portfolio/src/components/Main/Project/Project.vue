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

          extraStyle: 'row-start-2',
          languages: ['https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png', 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699166-icon-89-document-file-sql-512.png'],
            description: `This was a assignment from the school. The task was to create a portal for bow corps where they could have controll over members, platoons end companies. There were three levels og access. Admin, who could change every company, platoon and member, leader, who could change his company, platoons and members, and member, who could only change his own information. The portal was created with React, Node.js and sqLite.`
        },
        {
          id: 2,
          gridPlacement: 'col-span-2 row-span-2',
          title: 'Chatbot',
          date: 'April 2024',
          image: 'https://media.wired.com/photos/6595c546f6145f9ca1309145/master/pass/_BC-wired_selmasabanovic_kaylareeferphoto-127.jpg',

          extraStyle: 'col-start-2 row-start-2',
          languages: ['https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png'],
          description: 'My internship at the time wantet a chatbot that could answear FAQ questions. I created the first version of it with Python and would take the user input, seperate it into words, compare it with the user input that matches the user input of a FAQ entry, and then return the answer. I then started trying to make the chatbot more advanced by using machine learning, which solved some of the problems i had wiht the first version, but also created new ones.'
        },
        {
          id: 3,
          gridPlacement: 'col-span-2 row-span-3',
          title: 'Chores App',
          date: 'March 2024',
          image: 'https://i.pinimg.com/736x/64/76/cf/6476cfa661578dff2575e42a66c72cdb.jpg',

          extraStyle: 'row-start-2',
          languages: ['https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png', 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699166-icon-89-document-file-sql-512.png'],
          description: 'This is a chore app for families built with React, Node.js and sqLite. Made so that parents can create chores, with points, for the members of their family. There is also some simple things like profile pictures and a leaderboard.'
        },
        {
          id: 4,
          gridPlacement: 'col-span-2 row-span-3',
          title: 'Storage',
          date: 'Dec 2023',
          image: 'https://3.imimg.com/data3/PU/HB/MY-7398697/library-bookshelf.jpg',


          languages: ['https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png', 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png', 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699166-icon-89-document-file-sql-512.png'],
          description: "This was also at the time at my past internship. They wanted a local storage system to store information about their PC's. This was pretty simple, made with HTML, CSS, JavaScript, Node.js and mySql, and another version with sqLite. The system could add, delete and update information about the PC's, with a GUI for the user."
        },
        {
          id: 5,
          gridPlacement: 'col-span-2 row-span-2',
          title: 'Teen Company',
          date: 'Dec 2023',
          image: 'https://www.dengodenaboub.no/img/dgnLogo.png',

          extraStyle: 'row-start-2',
          languages: [ 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png', 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png', 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png', 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png'],
          description: 'This is a project from one of my school mates who needed a website for their teen company (ungdomsbedrift). The version which is live is made with  HTML, CSS and JS, but i recreated it with React to get some practice with a framework.'
        },
        {
          id: 6,
          gridPlacement: 'col-span-2 row-span-2',
          title: 'Valgomat',
          date: 'Oct 2023',
          image:'https://media.snl.no/media/49445/standard_stortinget1.jpg',

          extraStyle: 'row-start-2',
          languages: ['https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png', 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png'],
          description: 'This was a school project for when the election was coming up. The task was to create a valgomat, where the user would answer some questions and then get a result of which party they should vote for. The project was made with HTML, CSS and JS.'
        }
      ]
    };
  }
};
</script>