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
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                    <!-- date pickers -->
                    <v-menu max-width="290">
                        <template v-slot:activator="{ on }">
                            <v-text-field :rules="inputRules" v-on="on" :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" >
                            </v-text-field>
                            </template>
                            <v-date-picker v-model="due" ></v-date-picker>
                    </v-menu>
                      <v-spacer></v-spacer>
                    <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
         
    </v-dialog>
</template>
<script>

import moment from 'moment'
import db from '@/fb'
export default {
    data() {
        return {
           title: '',
           content: '',
          due: null,
          inputRules: [
            v => v.length >= 3 || 'Minimum length is 3 characters' 
          ],
         loading: false,
         dialog: false         
        }
    },
    methods: {
        submit(){
           if (this.$refs.form.validate()){
               this.loading = true;
               const project = {
                   title: this.title,
                   content: this.content,
                   due: moment(this.due).format('Do MMM YYYY'),
                   person: 'Enchantress',
                   status: 'ongoing'
               }
               db.collection('projects').add(project).then(() => {
                   this.loading = false;
                   this.dialog = false;
                   this.$emit('projectAdded')
                   //console.log('added to db')
               })
          //console.log(this.title, this.content) 
          } 
        }
    },
    computed: {
       formattedDate(){
        return this.due ? moment(this.due).format('Do MMM YYYY') : ''
         }
    }
}
</script>