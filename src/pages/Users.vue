<template>
  <div>
    <q-list v-if="listUser.length" bordered separator class="text-weight-bolder">
      <q-item to="/User-Equipments" clickable v-ripple
        v-for="user in listUser"
        :key="user.uid"
      >
      
        <q-item-section avatar>
          <q-avatar>
            <img :src=" 'http://127.0.0.1:8000\\uploads\\users\\'+ user.image" alt="" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ user.full_name }} {{ user.image}}</q-item-section>
      </q-item>
    </q-list>
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
          <q-form>
            <q-input v-model="save" type="text" label="First Name" />
            <q-input type="text" label="Last Name" />
            <q-card-actions align="right">
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
                no-caps
                v-close-popup
              />
            </q-card-actions>
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
      prompt: false,
      listUser:[],
      address: "",
    };
  },

  created (){
    const options = {
  method: 'GET',
  url: 'http://127.0.0.1:8000/api/users',
  headers: { "Authorization": "Bearer 2|CowcsAIjzegopghpUBJu0cjv3dMeQtFdS9Z2Ovfl"}
};

axios.request(options).then( ( response) =>{
  console.log(response.data);
  this.listUser=response.data
}).catch(function (error) {
  console.error(error);
});
  },
  

}
</script>
<style>

</style>
