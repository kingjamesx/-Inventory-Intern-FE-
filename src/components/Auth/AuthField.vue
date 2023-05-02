
<template>
   <div class="q-mb-lg">
              <label class="label">{{ label }}</label>
              <q-input
                outlined
                :mask="mask"
                type="text"
                :placeholder="placeholder"
                :rules="rules"
                :model-value="modelValue"
                @update:model-value="(value)=>$emit('update:modelValue',value)"
              />
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
                type:String,
                default:'label'
            },
           modelValue:{
             type:String,
             default: ''
           },
           placeholder:{
            type:String
           },
           rules:{
            type:Array
           },
           mask:{
            type:String
           }

          
        },
    
  }
       
</script>
<style lang="scss">
  .label{
    display: block;
    margin-bottom: 0.3rem;
  }
</style>
