<template>
   <div class="q-pa-md q-gutter-md" >
     <q-form @submit.prevent="addProducts"
    >
     <!-- Inputs -->
      
     <q-select v-model="category_name" :options="displayProduct" label="CATEGORY" option-label="name" />
     <!-- Date -->
      <q-input  v-model="date" mask="date" :rules="['date']" label="DATE ADDED">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
     </q-input>
     <!-- Date End -->
     <q-input v-model="category_id" label="CATEGORY ID" />
     <q-input v-model="product_code"  label="PRODUCT CODE" />
     <q-input v-model="brand_name" label="BRAND" />
     <q-input v-model="model" label="MODEL" />
     <q-input v-model="description" label="DESCRIPTION" />

     <!-- Checkbox -->
     <div>
      <q-checkbox
        v-model="defect_details"
        color="blue"
        label="Mark Defected"
        true-value="yes"
        false-value="no"
      />
      
     <q-input v-model="text" label="REASON FOR DEFECTING" />
     </div>
     <div>
      <q-checkbox
        v-model="discard_details"
        color="blue"
        label="Mark Discarded"
        true-value="yes"
        false-value="no"
      />
      
     <q-input v-model="text" label="REASON FOR DISCARDING" />
     </div>
    
     <!-- Checkbox End -->
     <q-card-actions align="right" class="text-primary">
        <q-btn to="/Equipments" label="Cancel" type="reset" color="primary" flat class="q-ml-sm" />
         <q-btn unelevated label="Submit" type="submit" color="primary"/>
        </q-card-actions>
     </q-form>
   </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import axios from "axios";

export default {
  // name: 'PageName',
  data () {

    return {
      product_code: '',
      brand_name: '',
      category_name: '',
      category_id: '',
      model: '',
      text: '',
      description:'' ,
      displayProduct: [],
      name: '',
      attributes: [],
      date: '',
      defect_details: '',
      discard_details: '',
      save: ref(''),
    };
  },

      // SHOW

  created (){
    const options = {
  method: 'GET',
  url: 'https://assets-api.dev.sandbox3000.com/api/categories/',
  headers: { "Authorization": "Bearer 4|h3dn0QCHz7pSe4VBqVERSoI9VMsKDG8kM0sYkX6P"}
};

axios.request(options).then( ( response) =>{
  console.log(response.data);
  this.displayProduct=response.data
}).catch(function (error) {
  console.error(error);
});

  },
// Add
  methods: {   
addProducts (){
    const attributes = new FormData();
  attributes.append( "product_code", this.product_code);
  attributes.append( "category_id",  this.category_id);
  attributes.append( "brand",  this.brand);
  attributes.append( "date",  this.date);
  attributes.append( "model",  this.model);
  attributes.append( "description",  this.description);
  attributes.append( "defect_details",  this.defect_details);
  attributes.append( "discard_details",  this.discard_details);
  
    const options = {
  method: 'POST',
  url: 'https://assets-api.dev.sandbox3000.com/api/products/',
data: attributes,
  headers: { Authorization: "Bearer 4|h3dn0QCHz7pSe4VBqVERSoI9VMsKDG8kM0sYkX6P" } 
};
 axios.request(options).then((response) => {
   console.log(response.data);
   this.attributes = response.data;
 })
 .catch(function (error) { console.error(error) ;
 } );

},
}
}
</script>
