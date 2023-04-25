<template>
  <div class="flex" style="gap: 3rem">
    <div>
      <q-form class="q-pa-md shadow-2" @submit.prevent="addProduct">
        <label>Product Name</label>
        <LongInput
          :placeholder="'Canon EOS Rebel T7'"
          v-model="name"
          type="text"
          required
        />
        <SelectInput :label="'Select Product Category'" />

        <div class="flex" style="justify-content: space-between">
          <LongInput
            :placeholder="'Selling price'"
            style="width: 18rem"
            type="number"
          />
          <LongInput
            :placeholder="'Cost price'"
            style="width: 18rem"
            type="number"
          />
        </div>
        <SelectInput :label="'Order Type'" />
        <div>
          <label class="q-mr-md">Discount</label>
          <label class="q-mr-md">Add Discount</label>
          <q-toggle v-model="value" color="blue" />
        </div>
        <div class="flex" style="justify-content: space-between">
          <SelectInput :label="'Type'" style="width: 18rem" />
          <LongInput :placeholder="'value'" style="width: 18rem" />
        </div>
        <div>
          <label class="q-mr-md">Expiry Date</label>
          <label class="q-mr-md">Add Expiry Date</label>
          <q-toggle v-model="vals" color="blue" />
        </div>
        <LongInput type="date" />
        <div>
          <label class="q-ml-md">Product Long Description</label>
          <TextEditor v-model="description" />
          <span class="q-ml-md">Add a long description for your producet</span>
        </div>
        <div>
          <label class="q-mr-md">Return Policy</label>
          <label class="q-mr-md">Add Product</label>
          <q-toggle v-model="val" color="blue" />
        </div>
        <label>Date Added</label>
        <div class="flex" style="justify-content: space-between">
          <LongInput type="date" class="q-mr-md" style="width: 18rem" />
          <LongInput type="time" class="q-mr-md" style="width: 18rem" />
        </div>
        <!-- <q-uploader
          v-model="image"
          label="Image"
          accept=".jpg,.png,.jpeg"
          @added="handleImageAdded"
        >
          <q-icon name="cloud_upload" />
        </q-uploader>
        <q-btn type="submit" label="Submit" class="q-mt-md" />
        <button type="submit">SUBMIT</button> -->
      </q-form>
    </div>

    <q-form class="column q-pa-md shadow-2 q-mr-lg">
      <div style="width: 22rem">
        <UploadFile style="height: 20rem" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LongInput from "components/LongInput.vue";
import SelectInput from "./SelectInput.vue";
import TextEditor from "./TextEditor.vue";
import UploadFile from "./UploadFile.vue";
import { ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MainForm",
  components: { LongInput, SelectInput, TextEditor, UploadFile },
  setup() {
    const name = ref("");
    const store = useStore();
    const description = ref("");
    const price = ref("");

    const addProduct = () => {
      const product = {
        name: name.value,
        description: description.value,
        price: price.value,
      };

      store.dispatch("addProduct", product);
      name.value = "";
      description.value = "";
      price.value = "";
    };

    return {
      value: ref(true),
      vals: ref(true),
      val: ref(false),
      name,
      description,
      price,
      addProduct,
    };
  },
});
</script>
