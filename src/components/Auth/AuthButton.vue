<template>
    <div>
        <q-btn
            :loading="loading"
            type="submit"
            :label="label"
            class="full-width login-btn"
          />
    </div>
</template>

<script>
    export default {
        props:{
            loading:{
                type:Boolean
            },
            label:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
.login-btn {
  background-color: #000;
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin-top: 8px;
  text-transform: capitalize;
  box-shadow: none;
  padding: 0.9rem;
}
</style>