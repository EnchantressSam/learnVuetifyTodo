<template>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
                
        <v-btn text v-on="on" class="success">
            Add new project
        </v-btn>
         </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                    <!-- date pickers 
                    <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="computedDateFormattedDatefns"
              clearable
              label="Formatted with datefns"
              readonly
              v-on="on"
              @click:clear="date = null"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @change="menu2 = false"
          ></v-date-picker>
        </v-menu>
        

        <script>
  import moment from 'moment'
  import format from 'date-fns/format'

  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns () {
        return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
      },
    },
  }
</script>
        
        -->
                    <v-menu max-width="290">
                        <template v-slot:activator="{ on }">
                            <v-text-field v-on="on" :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" >
                            </v-text-field>
                            </template>
                            <v-date-picker v-model="due" ></v-date-picker>
                    </v-menu>

                    <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
         
    </v-dialog>
</template>
<script>
//import format from 'date-fns/format'
//import parseISO from 'date-fns/parseISO'
import moment from 'moment'
export default {
    data() {
        return {
           title: '',
           content: '',
          due: null,
                   
        }
    },
    methods: {
        submit(){
          //console.log(this.title, this.content)  
        }
    },
    computed: {
       formattedDate(){
        return this.due ? moment(this.due).format('Do MMM YYYY') : ''
       }
    }
}
</script>