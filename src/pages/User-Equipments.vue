<template>
 <div>
    <div class="flex flex-center" >
   <q-avatar size="100px" >
      <img src="~assets/asset-1.png">
    </q-avatar>
    </div>
    <div class="flex-break q-py-md"></div>
<q-separator />
<q-separator />
 <div class="q-pa-md q-gutter-sm text-h6 ">
      EQUIPMENTS
 </div>
    <q-separator />
    <q-separator />

    <!-- Header -->

<q-list separator class="text-weight-bolder">
      <q-item
        v-for="list in equipmentlist"
        :key="list.uid"
      >
        
        <q-item-section >{{ list.Equipment  }} <br> {{ list.element}} <br> {{ list.element1}}
        
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
            <q-item  @click="mark = true" clickable v-close-popup >
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

  </div>
</template>

<script>
import { ref } from 'vue'
const quiplist = [
  {
    uid: 1,
    Equipment: "LAPTOP",
    element: "Lenovo X1 Carbon ",
    element1: " i5 664-U, 8GB, 128GB, 1080p, Touch"
  },
  {
    uid: 2,
    Equipment: "MOUSE",
    element: "Logitec ",
    element1: "Wireless pointing"
  },
  {
    uid: 3,
    Equipment: "HEADPHONE",
    element: "Lenovo",
    element1: " Bluetooth headphone"
  },
];

export default {
  // name: 'PageName',
   data() {
    return {
      discard: false,
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
