<template>
    <div class="sidetext">
        <div class="sidetext__content">
            <q-img src="../../assets/inventory-logo.png" class="sidetext-icon"/>
            <h3 class="sidetext__title">Take your Inventory to the next level. </h3>
             <p class="sidetext__text">Manage stock levels, monitor sales trends,receive low stock alerts and enjoy simple tools that help you build and grow your business faster.</p>
             <article class="list">
             <div class="list-item ">
                <q-icon class="fa-solid fa-chevron-right arrow-1"/>
                <p>Keep track of all your inventory in one place</p>  
              </div>
              <div class="list-item">
                <q-icon class="fa-solid fa-chevron-right  arrow-2"/>
                <p>Access inventory information from anywhere, at any time</p>  
              </div>
              <div class="list-item">
                <q-icon class="fa-solid fa-chevron-right arrow-3"/>
                <p>Reduce manual data entry and errors</p>  
              </div>
              <div class="list-item">
                <q-icon class="fa-solid fa-chevron-right arrow-4"/>
                <p>Save time and money by optimizing your inventory management</p>  
              </div>
            </article> 
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
   .sidetext{
    &-icon{
        width: 170px;
    }
    &__content{
        padding-inline: 3rem;
        margin-top: 5rem;
    }
    &__title{
        font-weight: 700;
        font-size: 1.6rem;
        margin-top: 4rem;
        margin-bottom: 0.5rem;
    }
    &__text{
       color: #666;
    }
    @media (max-width:1044px) {
        display: none;
    }
 }
 .list{
    margin-top: 1rem;
    &-item{
        margin-top: 0.3rem;
        display: flex;
        align-items: center;
        gap: 8px;
       
        & p{
            margin-top: 0.9rem;
            font-weight: 500;
            font-size: 1rem;
        }
    }
 }
 
.arrow{
    &-1{
      color: #38a6a4;
    }
    &-2{
        color: #efc029;
    }
    &-3{
        color: #6f3e71;
    }
    &-4{
        color: #e99982;
    }
}
</style>