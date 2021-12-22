<template>
  <div class="q-pa-md" style="max-width: 1920px">
   
    <!-- Laptop Section -->
 <div >
     <div class=" text-black">
      <q-toolbar> 
        <q-toolbar-title>LAPTOP</q-toolbar-title>
        <q-btn flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup to="/Category-Mod">
              <q-item-section>Edit</q-item-section>
              
            </q-item>
               <q-separator />
            <q-item clickable v-close-popup to="/Category-Delete">
              <q-item-section>Delete</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
     </q-toolbar>
    </div>
   </div>
    <q-separator />
    <q-separator />
<!-- Mouse Section -->

    <div >
     <div class=" text-black">
      <q-toolbar> 
        <q-toolbar-title>MOUSE</q-toolbar-title>
        <q-btn flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup to="/Category-Mod">
              <q-item-section>Edit</q-item-section>
            </q-item>
               <q-separator />
            <q-item clickable v-close-popup to="/Category-Delete"> 
              <q-item-section>Delete</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
     </q-toolbar>
    </div>
   </div>
    <q-separator />
    <q-separator />

    <!-- Headphone section  -->
    <div >
     <div class=" text-black">
      <q-toolbar> 
        <q-toolbar-title>HEADPHONE</q-toolbar-title>
        <q-btn flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup to="/Category-Mod">
              <q-item-section>Edit</q-item-section>
            </q-item>
               <q-separator />
            <q-item clickable v-close-popup to="/Category-Delete">
              <q-item-section>Delete</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
     </q-toolbar>
    </div>
   </div>
    <q-separator />
    <q-separator />
<!-- Monitor sewction -->
<div >
     <div class=" text-black">
      <q-toolbar> 
        <q-toolbar-title>MONITOR</q-toolbar-title>
        <q-btn flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup to="/Category-Mod">
              <q-item-section>Edit</q-item-section>
            </q-item>
               <q-separator />
            <q-item clickable v-close-popup to="/Category-Delete">
              <q-item-section>Delete</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
     </q-toolbar>
    </div>
   </div>
    <q-separator />
    <q-separator />

    <!-- Corner BTN -->
    <div class="q-pa-md q-gutter-sm fixed-bottom-right ">
    <q-btn round color="primary" icon="add" />
  </div>
  <!-- Corner BTN -->
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