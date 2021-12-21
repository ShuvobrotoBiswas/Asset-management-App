<template>
  <div class="q-pa-md" style="max-width: 1920px">
    <div class="flex flex-center" >
   <q-avatar size="100px" >
      <img src="~assets/asset-1.png">
    </q-avatar>
    </div>
<q-separator />
<q-separator />
 <div class="q-pa-md q-gutter-sm">
    <div class="text-h6">
      EQUIPMENTS
    </div>
 </div>
    <q-separator />
    <q-separator />

    <!-- Laptop Section -->
 <div >
    <div class=" text-black">
      <q-toolbar> 
        <q-toolbar-title>LAPTOP</q-toolbar-title>
        <q-btn flat round dense 
        label="40 days"
        class="q-mr-xs" />
        <q-btn flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Restock to Inventory</q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="/Discard-Items"> 
              <q-item-section>Discard Item</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup to="/Mark-Defective">
              <q-item-section>Mark Defective</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <div class="row">
      <div class="col text-h6">
        Lenovo X1 Carbon <br>
        i5 664-U, 8GB, 128GB, 1080p, Touch
      </div>
      </div>
    </div>
  </div>
    <q-separator />
    <q-separator />
<!-- Mouse Section -->

    <div >
    <div class=" text-black">
      <q-toolbar> 
        <q-toolbar-title>MOUSE</q-toolbar-title>
        <q-btn flat round dense 
        label="128 days"
        class="q-mr-xs" />
        <q-btn flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Restock to Inventory</q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="/Discard-Items">
              <q-item-section>Discard Item</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup to="/Mark-Defective">
              <q-item-section>Mark Defective</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <div class="row">
      <div class="col text-h6">
        Logitec <br>
        Wireless pointing
      </div>
      </div>
    </div>
  </div>
    <q-separator />
    <q-separator />

    <!-- Headphone section  -->
    <div >
    <div class=" text-black">
      <q-toolbar> 
        <q-toolbar-title>HEADPHONE</q-toolbar-title>
        <q-btn flat round dense 
        label="35 days"
        class="q-mr-xs" />
        <q-btn flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Restock to Inventory</q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="/Discard-Items">
              <q-item-section>Discard Item</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup to="/Mark-Defective">
              <q-item-section>Mark Defective</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <div class="row">
      <div class="col text-h6">
       Lenovo <br>
       Bluetooth headphone
      </div>
      </div>
    </div>
  </div>
    <q-separator />
    <q-separator />
 <!-- Corner BTN -->
    <div class="q-pa-md q-gutter-sm fixed-bottom-right ">
    <q-btn round color="primary" icon="add" />
  </div>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>


<style lang="sass">

$center1-content-position : center
</style>