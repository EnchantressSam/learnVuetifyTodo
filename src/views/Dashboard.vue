<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">

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
          <div class="caption grey--text">
            Status
            </div>
            <div>{{ project.status }}</div>
          </v-flex>
      </v-layout>
      <v-divider></v-divider>

      </v-card>


      
    </v-container>
    </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {title: 'Design a new website', person: 'Enchantress', due: '21th Feb 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero, rem nam nihil nostrum numquam molestiae est sunt reiciendis doloribus consequuntur. Asperiores ipsam illo non! Cumque exercitationem voluptas asperiores non.'},
        {title: 'Code up the homepage', person: 'Anna', due: '25th Jan 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero, rem nam nihil nostrum numquam molestiae est sunt reiciendis doloribus consequuntur. Asperiores ipsam illo non! Cumque exercitationem voluptas asperiores non.'},
        {title: 'Design video thumbnails', person: 'Lora', due: '1st Feb 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero, rem nam nihil nostrum numquam molestiae est sunt reiciendis doloribus consequuntur. Asperiores ipsam illo non! Cumque exercitationem voluptas asperiores non.'},
        {title: 'Create a community forum', person: 'Max', due: '22th Jan 20202', status: 'overdue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero, rem nam nihil nostrum numquam molestiae est sunt reiciendis doloribus consequuntur. Asperiores ipsam illo non! Cumque exercitationem voluptas asperiores non.'}
      ]
    }
  },
  }

</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
  .project.overdue{
    border-left: 4px solid tomato;
  }
</style>
