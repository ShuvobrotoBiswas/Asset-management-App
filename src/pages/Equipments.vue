<template>
 <div class="q-pa-md " style="max-width: 1920px">
  
<q-list separator class="text-weight-bolder">
      <q-item
        v-for="list in equipmentlist"
        :key="list.uid"
      >
        
        <q-item-section >{{ list.Equipment  }} <br> {{ list.element}}
        
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
          <div class="text-h6">Explain the defect
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
    <div class="q-pa-md q-gutter-sm fixed-bottom-right ">
    <q-btn round color="primary" icon="add" />
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const quiplist = [
  {
    uid: 1,
    Equipment: "Lenovo X1 Carbon",
    element: "i5 664-U, 8GB, 128GB, 1080p, Touch",
  },
  {
    uid: 2,
    Equipment: "Lenovo X240",
    element: "i3 400-U, 16GB, 256GB, 1080p, Backlit",
  },
  {
    uid: 3,
    Equipment: "Dell XPS 13",
    element: "i7 664-U, 16GB, 512GB, 1440x900, stylus",
  },
   {
    uid: 4,
    Equipment: "Lenovo X1 Carbon",
    element: "i5 664-U, 8GB, 128GB, 1080p, Touch",
  },
   {
    uid: 5,
    Equipment: "Lenovo X1 Carbon",
    element: "i5 664-U, 8GB, 128GB, 1080p, Touch",
  },
];

export default {
  // name: 'PageName',
   data() {
    return {
      discard: false,
      confirm: false,
      mark: false,
      equipmentlist: quiplist,
      address: "",
      save: ref('')
    };
  },

}
</script>
<style>

</style>
