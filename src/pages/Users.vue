<template>
  <div>
        <q-toolbar>
          <q-toolbar-title>
            USERS
          </q-toolbar-title>
        </q-toolbar>
      
    <q-list v-if="listUser.length" bordered separator class="text-weight-bolder">
      <q-item :to="`/User-Equipments/${user.id}`" clickable v-ripple
        v-for="user in listUser"
        :key="user.uid"
      >
      
        <q-item-section avatar>
          <q-avatar>
           <img :src="user.image" alt="" />
           <!-- <img :src="user.image" alt="" /> -->
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ user.full_name }} </q-item-section>
      </q-item>
    </q-list>

    <!-- Add Users -->
    
    <div class="q-pa-md q-gutter-sm fixed-bottom-right " >
    <q-btn
      @click="prompt = true"
      id="add"
      round
      color="primary"
      icon="add"
      class="q-ma-md"
    />
    </div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
      <q-form @submit.prevent="addUsers"  class="q-gutter-md">
      <q-input
        name="first_name"
        v-model="first_name"
        color="primary"
        label="First Name"
      />
       <q-input
        name="last_name"
        v-model="last_name"
        color="primary"
        label="Last Name"
      />
      <q-input
        @update:model-value="val => { image = val[0] }"
        filled
        type="file"
        hint="Native file"
      />

      <div>
        <q-btn class="q-mt-xl" color="gray" text-color="#ddd"
                unelevated
                label="Cancel"
                no-caps
                v-close-popup
              />
         <q-btn
                class="q-mt-xl"
                color="blue"
                text-color="white"
                unelevated
                label="Save"
                type="submit"
                no-caps
                v-close-popup
              />     
      </div>
    </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
   
  </div>

</template>

<script>
import axios from "axios";

export default {
  // name: 'PageName',
   data()  {
    return {
      first_name: '  ',
      last_name: ' ',
      image: '',
      full_name: ' ',
      prompt: false,
      listUser:[],
      address: "",
     
    };
  },
// SHOW
  created (){
    const options = {
  method: 'GET',
  url: 'https://assets-api.dev.sandbox3000.com/api/users',
  headers: { "Authorization": "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu"}
  // headers:{"Authorization" : 'Bearer ' + localStorage.getItem("token")}
};

axios.request(options).then( ( response) =>{
  console.log(response.data);
  this.listUser=response.data
}).catch(function (error) {
  console.error(error);
});

  },
  // ADD
methods: {   
onFileSelected(event){
console.log(event.target);
},

addUsers (){
  const user = new FormData();
  user.append( "first_name", this.first_name);
  user.append( "last_name",  this.last_name);
  user.append( "image",  this.image);
  
    const options = {
  method: 'POST',
  url: 'https://assets-api.dev.sandbox3000.com/api/users',
  data: user,

  headers: { Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu" } 
};
 axios.request(options).then((response) => {
   console.log(response.data);
   this.user = response.data;
 })
 .catch(function (error) { console.error(error) ;
 } );

},

},


}
</script>
