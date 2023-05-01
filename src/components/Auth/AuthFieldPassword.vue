<template>
    <div class="q-mb-md">
              <label class="label">{{ label }}</label>
              <q-input
                outlined
                :placeholder="placeholder"
                :type="isPwd ? 'password' : 'text'"
                :rules="rules"
                :model-value="modelValue"
                @update:model-value="(value)=>$emit('update:modelValue',value)"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
</template>

<script>
    export default {
        emits:{
            'update:modelValue':{
                    type:String
            }
        },
         props:{
            label:{
                type:String
            },
             placeholder:{
                type:String
             },
             rules:{
                type:Array
             },
             modelValue:{
             type:String,
             default: ''
           }
         },

         data(){
            return{
                isPwd: true,
            }
         }
    }
</script>

