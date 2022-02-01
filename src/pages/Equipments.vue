<template>
 <div class="q-pa-md " style="max-width: 1920px">
  
<q-list separator class="text-weight-bolder">
      <q-item
        v-for="list in attributes"
        :key="list.id"
      >
        
        <q-item-section > {{ list.attributes.brand}} <br> {{list.attributes.product_code}} {{ list.attributes.model}} 
        {{list.attributes.description}}
        </q-item-section>
        
        <q-btn  flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px"> 
            <q-item   clickable v-close-popup to="/Edit-Equipments">
              <q-item-section>Edit</q-item-section>
            </q-item>
             <q-separator />
             <q-item  @click="confirm = true" clickable v-close-popup >
              <q-item-section>Delete</q-item-section>
            </q-item>
             <q-separator />
            <q-item  @click="discard = true" clickable v-close-popup> 
              <q-item-section>Discard Item</q-item-section>
            </q-item>
            <q-separator />
            <q-item  @click="mark = true" clickable v-close-popup >
              <q-item-section>Mark Defective</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </q-item>
    </q-list>
    
    <!-- Edit -->

    <!-- Delete -->

   <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure you want to delete this category and all equipment under it?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="CANCEL" color="black" v-close-popup />
          <q-btn flat label="DELETE" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Discard -->

    <q-dialog v-model="discard" persistent>
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
          <q-btn flat label="SAVE" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Mark -->

  <q-dialog  v-model="mark" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">    
          
          
           the defect
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="save" autofocus @keyup.enter="mark = false" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="CANCEL" v-close-popup />
          <q-btn flat label="SAVE" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Add  -->

    <div class="q-pa-md q-gutter-sm fixed-bottom-right " > 
    <q-btn round color="primary" icon="add" to="/Add-Equipments" />
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
      confirm: false,
      mark: false,
      address: "",
      save: ref(''),
      attributes: [],
      flag: this.$route.params.id,
    };
  },


  // SHOW

  created (){
    const options = {
  method: 'GET',
  url: "https://assets-api.dev.sandbox3000.com/api/products/"+this.flag,
  headers: { "Authorization": "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu"}
};

axios.request(options).then( ( response) =>{
  console.log(response.data);
  this.attributes=response.data
}).catch(function (error) {
  console.error(error);
});

  },



methods: {   
// Delete

deleteCategory (){
  
    const options = {
  method: 'delete',
  url: "https://assets-api.dev.sandbox3000.com/api/products/"+this.flag,
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

},


}
</script>

