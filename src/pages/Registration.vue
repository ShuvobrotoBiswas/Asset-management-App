<template>
  <q-page
    class="  row justify-center items-center"
    style="background: linear-gradient;"
  >
   
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:520px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            </div>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="registration" class="q-px-sm q-pt-xl q-pb-lg">
              
              <q-input square clearable v-model="first_name" type="username" label="first_name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="last_name" type="username" label="last_name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="email" type="email" label="email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
        @update:model-value="val => { image = val[0] }"
        filled
        type="file"
        hint="Profile Picture"
        
      >  <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
               <q-input square clearable v-model="password" type="password" label="password_confirmation">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
           <q-btn 
                text-color="white"
                unelevated size="lg" color="purple-4" class="full-width text-white" 
                label="REGISTRATION"
                type="submit"
                no-caps
                v-close-popup
              /> 
            <!-- <q-btn @submit.prevent="registration" unelevated size="lg" color="purple-4" class="full-width text-white" label="REGISTRATION" /> -->
          </q-card-actions>
          <q-card-actions class="q-px-lg">
            <q-btn to="/" unelevated size="lg" color="purple-4" class="full-width text-white" label="Return to login" />
          </q-card-actions>
         
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      image: '',
      register: [],

    };
  },

  methods: {   
    onFileSelected(event){
console.log(event.target);
},
registration (){
  const register = new FormData();
  register.append( "first_name", this.first_name);
  register.append( "last_name",  this.last_name);
  register.append( "image",  this.image);
  register.append( "password",  this.password);
  register.append( "email",  this.email);
 
    const options = {
  method: 'POST',
  url: 'https://assets-api.dev.sandbox3000.com/api/admins/',
  headers: { "No Auth": " "},

  data: register,
};
 axios.request(options).then((response) => {
   console.log(response.data);
   this.register = response.data;
 })
 .catch(function (error) { console.error(error) ;
 } );
},
},
}
</script>
