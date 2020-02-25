<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text--text">Projects</h1>

   
    <v-container class="my-5">
      <v-expansion-panels>
     <v-expansion-panel v-for="project in myProjects" :key="project.title">
      
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
           <v-expansion-panel-content>
           <v-card flat> 
            <v-card-text  class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
       </v-expansion-panel-content>
     </v-expansion-panel>
     </v-expansion-panels>
    </v-container>
    </div>
</template>

<script>

export default {
    data() {
      return {
        projects: [
        {title: 'Design a new website', person: 'Enchantress', due: '21th Feb 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic in quam natus deserunt temporibus eligendi est placeat ipsam aliquam vel qui, mollitia autem laudantium minus. Culpa sunt unde et!'},
        {title: 'Code up the homepage', person: 'Anna', due: '25th Jan 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero, rem nam nihil nostrum numquam molestiae est sunt reiciendis doloribus consequuntur. Asperiores ipsam illo non! Cumque exercitationem voluptas asperiores non.'},
        {title: 'Design video thumbnails', person: 'Lora', due: '1st Feb 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis possimus, est obcaecati quas ipsum enim quibusdam quam commodi quidem omnis, reiciendis voluptatem veniam, cupiditate sed hic tempora expedita velit!'},
        {title: 'Create a community forum', person: 'Max', due: '22th Jan 20202', status: 'overdue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores atque praesentium dignissimos debitis reiciendis, voluptas placeat quod qui blanditiis nobis tempora repellat explicabo eius temporibus nihil laudantium eveniet expedita.'},
        {title: 'Design a new website.. again', person: 'Enchantress', due: '21th Feb 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic in quam natus deserunt temporibus eligendi est placeat ipsam aliquam vel qui, mollitia autem laudantium minus. Culpa sunt unde et!'},
      ]
      }
    },
    computed: {
      myProjects(){
        return this.projects.filter(project =>{
          return project.person === 'Enchantress'
        })
      }
    },
  }

</script>