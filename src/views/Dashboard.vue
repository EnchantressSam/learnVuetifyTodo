<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">

    
      <v-layout row class="mb-3">
      <v-tooltip top>
      <template v-slot:activator="{ on }">
      <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
        <v-icon left small>mdi-folder</v-icon>
        <span class="caption text-lowercase">By project name</span>
      </v-btn>
      </template>
      <span>Sort projects by project name</span>
       </v-tooltip>

       <v-tooltip top>
      <template v-slot:activator="{ on }">
      <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
        <v-icon left small>mdi-account</v-icon>
        <span class="caption text-lowercase">By person</span>
      </v-btn>
      </template>
      <span>Sort projects by person</span>
       </v-tooltip>
       </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md6>
          <div class="caption grey--text">
            Project title
            </div>
            <div>{{ project.title }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">
            Person
            </div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
          <div class="caption grey--text">
            Due by
            </div>
            <div>{{ project. due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
           <div align="right">
             <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
           </div>
          </v-flex>
      </v-layout>
      <v-divider>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores atque praesentium dignissimos debitis reiciendis, voluptas placeat quod qui blanditiis nobis tempora repellat explicabo eius temporibus nihil laudantium eveniet expedita.</v-divider>

      </v-card>


      
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
        {title: 'Create a community forum', person: 'Max', due: '22th Jan 20202', status: 'overdue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores atque praesentium dignissimos debitis reiciendis, voluptas placeat quod qui blanditiis nobis tempora repellat explicabo eius temporibus nihil laudantium eveniet expedita.'}
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  }

</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid #ffaa2c;
  }
  .project.overdue{
    border-left: 4px solid #f83e70;
  }
  
  .v-chip.complete{
    background: #3cd1c2 !important;
  }
  .v-chip.ongoing{
    background: #ffaa2c !important;
  }
  .v-chip.overdue{
    background: #f83e70 !important;
  }
  
  
</style>
