<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <div class="caption grey--text">
            Project title
            </div>
            <div>Create a new website</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">
            Person
            </div>
            <div>Enchantress</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
          <div class="caption grey--text">
            Due by
            </div>
            <div>11th Feb 2020</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
          <div class="caption grey--text">
            Status
            </div>
            <div>ongoing</div>
          </v-flex>
      </v-layout>
      

      </v-card>


      
    </v-container>
    </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  }

</script>
