<template>
 <div>
  <q-list bordered  separator class="text-weight-bolder">

   <!-- User Profile -->

<q-header elevated>
        <q-toolbar>
          <q-avatar>
            <q-btn to="/Users" flat round dense icon="arrow_back" />
          </q-avatar>

          <q-toolbar-title>
          {{ assign.full_name }}
          </q-toolbar-title>
   <!-- Edit User -->
          <q-btn
          active clickable v-ripple
      @click="confirm1 = true"
      id="edit"
      flat round dense
      icon="edit"
    />
    <q-dialog v-model="confirm1"> 
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Edit User</div>
            <q-form @submit.prevent="editUser(flag)" class="q-gutter-md">
      <q-input
        name="first_name"
        v-model="first_name"
        color="primary"
        label="First Name"
        dense
        autofocus
        @keyup.enter="confirm1 = false"
      />
       <q-input
        name="last_name"
        v-model="last_name"
        color="primary"
        label="Last Name"
        dense
        autofocus
        @keyup.enter="confirm1 = false"
      />
      <q-input
        @update:model-value="val => { image = val[0] }"
        filled
        type="file"
        hint="Please Choose A Picture"
        dense
        autofocus
        @keyup.enter="confirm1 = false"
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
                 
                type="submit"
                color="primary"
                flat
                label="SAVE"
                v-close-popup
              />     
      </div>
    </q-form>
          </q-card-section>
      </q-card>
       </q-dialog>


        </q-toolbar>
      </q-header>
    <div class="flex flex-center" >
    <q-avatar size="100px" >
     <img :src=" 'http://127.0.0.1:8000\\uploads\\users\\'+ assign.image" alt="" />
    </q-avatar>
    </div>

            <q-separator />
            <q-separator />

          <!-- User Equipments -->

     <div class="q-pa-md q-gutter-sm text-h6 text-weight-bolder">
      Products
     </div>
    <q-separator />
    <q-separator />

      <q-item
        v-for="list in assign.products"
        :key="list.id"
      >
        
        <q-item-section > {{ list.brand }} <br> {{list.description}} <br> {{ list.model}}
        
        </q-item-section>
        <q-btn  flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item  clickable v-close-popup>
              <q-item-section>Restock to Inventory</q-item-section>
            </q-item>
             <q-separator />
            <q-item  @click="discard = true" clickable v-close-popup> 
              <q-item-section>Discard Item</q-item-section>
            </q-item>
            <q-separator />
            <q-item  @click="markDefective = true" clickable v-close-popup >
              <q-item-section>Mark Defective</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </q-item>
    </q-list>
    <!-- Discard -->
    <q-dialog  v-model="discard" persistent>
      <q-card style="min-width: 350px">
        
        <q-card-section>
          <div class="text-h6">Reason for discarding
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="save" autofocus @keyup.enter="discard = false" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="CANCEL" v-close-popup />
          <q-btn v-model="flag" @click="discard(flag)"  flat label="SAVE" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
   <!-- Mark -->
    <q-dialog  v-model="markDefective" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Explain the defect </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="save" autofocus @keyup.enter="markDefective = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="CANCEL" v-close-popup />
          <q-btn @submit.prevent="markDefective" flat label="SAVE" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


 <!-- ADD Equipments -->

     <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
        
      <q-form   class="q-gutter-md">
      <q-input
        name="Equipment"
        v-model="Equipment"
        color="primary"
        label="Equipment ID"
      />
        <!-- <q-search
        v-model="searchModel"
        :debounce="600"
         placeholder="Hotels"
         icon="local_hotel"
         >
         </q-search>
         <q-search v-model="products" /> -->

      <div>
        <q-btn class="q-mt-xl" color="gray" text-color="#ddd"
                unelevated
                label="Cancel"
                no-caps
                v-close-popup
              />
         <q-btn @submit.prevent="addEquipment"
                class="q-mt-xl"
                color="blue"
                text-color="white"
                unelevated
                label="Search"
                type="submit"
                no-caps
                v-close-popup
              />     
      </div>
    </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

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

  </div>
</template>

<script>
import { ref } from 'vue'
import axios from "axios";
export default {
  // name: 'PageName',
   data() {
    return {
      discard: false,
      markDefective: false,
      first_name: '  ',
      last_name: ' ',
      image: '',
      full_name: ' ',
      prompt: false,
      address: "",
      Equipment: ' ',
      element: '',
      confirm1: false,
      addEquipment: '',
      searchModel: '',
      assign: [],
      flag: this.$route.params.id,
      save: ref('')
    };
  },


  // SHOW 


  created ( ){
    const options = {
  method: 'GET',
  url: "https://assets-api.dev.sandbox3000.com/api/users/"+this.flag,
  headers: { Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu"},
};

axios.request(options).then( ( response) =>{
  console.log(response.data);
  this.assign=response.data
}).catch(function (error) {
  console.error(error);
});
  },

  // discard

  discard (){
  
    const options = {
  method: 'PATCH',
  url:  "https://assets-api.dev.sandbox3000.com/api/products/discard/"+this.flag,
  data: {
    name:this.products
  },
  headers: { Authorization: "Bearer 190|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu" } 
};
 axios.request(options).then((response) => {
   console.log(response.data);
   this.products = response.data;
 })
 .catch(function (error) { console.error(error) ;
 } );

},

// Mark Defective
markDefective (){
  
    const options = {
  method: 'PATCH',
  url:  "https://assets-api.dev.sandbox3000.com/api/products/defect/"+this.flag ,
  data: {
    name:this.name
  },
  headers: { Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu" } 
};
 axios.request(options).then((response) => {
   console.log(response.data);
   this.name = response.data;
 })
 .catch(function (error) { console.error(error) ;
 } );

},

    // EDIT

     popEdit(id)
     {
      this.confirm1 = true;
      this.flag = id;
    },
    methods: {   
   onFileSelected(event){
   console.log(event.target);
   },
    editUser(flag) {
        const user = new FormData();
        user.append( "first_name", this.first_name);
        user.append( "last_name",  this.last_name);
        user.append( "image",  this.image);
      const options = {
        method: "PUT",
        url: "https://assets-api.dev.sandbox3000.com/api/users"+this.flag,
        data:  user,

        headers: {
          Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu",
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.getData();
    },
    },


}
</script>
