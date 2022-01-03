<template>
 <div class="q-pa-md ">
  
<q-list separator class="text-weight-bolder">
      <q-item to="/Equipments" active clickable v-ripple
        v-for="list in equipmentlist" 
        :key="list.uid" 
      >
        
        <q-item-section >{{ list.Equipment  }}
        
        </q-item-section>
        <q-btn active clickable v-ripple flat round dense icon="more_vert" class="q-mr-xs">
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

    <div class="q-pa-md q-gutter-sm fixed-bottom-right " >
    <q-btn round color="primary" icon="add" to="/Edit-Equipments" />
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const quiplist = [
  {
    uid: 1,
    Equipment: "LAPTOP", 
  },
  {
    uid: 2,
    Equipment: "MOUSE",
  },
  {
    uid: 3,
    Equipment: "HEADPHONE",
  },
   {
    uid: 4,
    Equipment: "MONITOR",
  },
];

export default {
  // name: 'PageName',
   data() {
    return {
      confirm: false,
      equipmentlist: quiplist,
      address: "",
      save: ref('')
    };
  },

}
</script>
<style>

</style>
