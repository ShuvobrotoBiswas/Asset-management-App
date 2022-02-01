<template>

         <!-- This is Dynamic Routing For Perameter Passing, I didn't put it on
         Equipments-Category.vue . I've taken here just like a draft -->

  <div class="q-pa-md ">
    <q-list
      class="row justify-between text-weight-bolder"
      bordered 
      v-for="list in category_name"
      :key="list.id"
    >
      <q-item
        class="col-10"
        clickable
        v-ripple
        :to="`/Equipments/${list.id}`"

        

      >
        <q-item-section> {{ list.name }}</q-item-section>
      </q-item>

      <q-item class="col-1">
        <q-btn active clickable v-ripple round flat dense  icon="more_vert">
          <q-menu auto-close :offset="[110, 0]">
            <q-list style="min-width: 150px">
              <q-item clickable @click="popEdit(list.id)">
                <q-item-section>Edit</q-item-section>
              </q-item>
              <q-item clickable @click="popDel(list.id)">
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-item>


<!-- Edit -->

      <q-dialog v-model="confirm1" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Category Name</div>
          </q-card-section>
          <q-form>
            <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model="name"
                autofocus
                @keyup.enter="confirm1 = false"
              ></q-input>
            </q-card-section>

            <q-card-actions align="right" class="text-primary"> 
              <q-btn flat label="CANCEL" v-close-popup />
              <q-btn
                v-model="flag"
                @click.prevent="editCategory(flag)"
                type="submit"
                color="primary"
                flat
                label="SAVE"
                v-close-popup
              />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- Delete Dialog -->

      <q-dialog v-model="confirm">
        <q-card>
          <q-card-section>
            <div class="text-h6">Delete</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Are you sure you want to delete this category and all equipment
            under it?
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="CANCEL" v-close-popup />
            <q-btn
              v-model="flag"
              @click="deleteCategory(flag)"
              color="red"
              flat
              label="DELETE"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-list>

 
    <q-page-sticky class="q-pa-md q-gutter-sm fixed-bottom-right ">
      <q-btn @click="prompt = true" round
      color="primary"
      icon="add"
      class="q-ma-md" />
    </q-page-sticky>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Category Name</div>
        </q-card-section>
        <q-form @submit.prevent="addCategory">
          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="name"
              autofocus
              @keyup.enter="prompt = false"
            ></q-input>
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="CANCEL" v-close-popup />
            <q-btn
              type="submit"
              color="primary"
              flat
              label="SAVE"
              v-close-popup
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from 'vue'
import axios from "axios";
export default {
  data() {
    return {
      prompt: false,
      confirm1: false,
      confirm: false,
      category_name: [],
      name: " ",
      flag: this.$route.params.id,
    };
  },

    // SHOW

  created() {
    this.getData();
  },
  methods: {
    getData() {
      const options = {
        method: "GET",
        url: "https://assets-api.dev.sandbox3000.com/api/categories",
        headers: { Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu"},
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.category_name = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },


    //ADD
    addCategory() {
      const options = {
        method: "POST",
        url: "https://assets-api.dev.sandbox3000.com/api/categories",
        data: {
          name: this.name,
        },
        headers: {
          Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu",
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.name = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.getData();
    },


    // EDIT
    popEdit(id)
     {
      this.confirm1 = true;
      this.flag = id;
    },
    editCategory(flag) {
      const options = {
        method: "PATCH",
        url: "https://assets-api.dev.sandbox3000.com/api/categories/"+this.flag,
        data: {
          name: this.name,
        },
        headers: {
          Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu",
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.name = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.getData();
    },


    //Delete
    popDel(id)
 {
      this.confirm = true;
      this.flag = id;
    },

    deleteCategory(flag) {
      const options = {
        method: "DELETE",
        url: "https://assets-api.dev.sandbox3000.com/api/categories"+this.flag,
        headers: {
          Authorization: "Bearer 90|qfca55VRwQmaJ1Mw4lEmU8GdVz7CLYOE30cJRwqu",
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.name = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.getData();
    },
  },
};
</script>
