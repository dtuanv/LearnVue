<template>
  <div class="q-pa-md">

      <!-- make form in center -->
      <div class="">

        <q-form  @submit="addproduct()" >

          <div class="justify-center flex text-h5 	q-mb-lg">Add product</div>
    <!-- content -->
    <div class="q-gutter-md edit_product  " style="max-width: 500px">

      <q-input filled v-model="product.name" label="Name" />
      <q-input filled v-model="product.imageUrl" label="Image Url" />
      <q-input filled v-model="product.decription" label="Decription" />
      <q-input filled v-model="product.price" label="Price" />

      <q-btn
            color="primary"
            type="submit"

            icon="cloud_upload"
          />
     </div>

        </q-form>
      </div>
       </div>
      <!-- <div class="col-6"></div> -->
      <!-- <div class="col-6"></div> -->
</template>
<script >
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import {WebApi} from "/src/apis/WebApi";

const product=ref({})
export default {
  setup() {
    const route = useRoute()
    const $q = useQuasar();
    const router = useRouter();

    if(route.params.id == 0){
        product.value = {
          name:"",
          imageUrl:"",
          decription:"",
          price:"",
        }
        }else{

    axios.get(`${WebApi.server}/admin/product/add/`+route.params.id+'/')
    .then(response => {
      product.value = response.data
    })
  }
    return {
      product,
      // name: ref(""),
      // decription: ref(""),
      // imageUrl: ref(""),
      ///check new or old product

      addproduct() {

        // const product = {
        //   name: this.name,
        //   decription: this.decription,
        //   imageUrl: this.imageUrl,
        // };


        axios({
          method: "post",
          url:  `${WebApi.server}/admin/product/add/`,
          // data: JSON.stringify(product),
          data: product.value,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            $q.notify({
              message:'new product was created',

              color:'positive',
              avatar:'/img/trangTi.png',
            })
            console.log("product saved");
            router.replace("/admin/product/edit");
          })
          .catch((err) => {
            console.log(err);
          });

      },
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
    .edit_product{
    max-width: 500px;
    text-align: center;
    display: block;
    margin-inline: auto;
  }
</style>
