<!-- <template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white  text-white q-py-lg header">
      <q-toolbar >
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold q-ml-lg">
          <q-avatar>
            <img src="../assets/ourpass-logo.png" />
          </q-avatar>
          OurPass
        </q-toolbar-title>
        <q-toolbar-title class="text-weight-bold">
          <q-avatar>
            <img src="../assets/avatar.png" />
          </q-avatar>
          Inventory
        </q-toolbar-title>
        <q-input
          dark
          dense
          standout
          input-class="text-left "
          class="q-mr-lg bg-blue-grey-11 text-black rounded-border search-input"
          placeholder="search"
      
        >
          <template v-slot:append>
            <q-icon  name="search" />
          </template>
        </q-input>
          <q-space/>
          <q-list class="flex">
            <q-item>
              <q-btn round flat icon="notifications">
        <q-badge floating color="red" rounded label='2' />
      </q-btn>
            </q-item>
            <q-item>
              <q-btn round flat icon="settings" />
            </q-item>
            <q-item>
              <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
            </q-item>
          </q-list>
           
     

       
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered >
      
      <q-scroll-area class="fit">
      <q-list >
        <q-item>
          <q-item-section class="q-py-lg">
            <q-item-label class="text-h6">Menu</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/" class="q-py-lg" id='1' :active="link==='dashboard'" active-class="active" @click="link='dashboard'">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/createinventory" class="q-py-lg bg-white" :active="link==='createInventory'" active-class="active" @click="link='createInventory'" >
          <q-item-section avatar>
            <q-icon name="create" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Create Inventory</q-item-label>
          </q-item-section> </q-item
        >
   <q-item to="/inventory" class="q-py-lg" :active="link==='inventoryList'" active-class="active" @click="link='inventoryList'">
          <q-item-section avatar>
            <q-icon name="inventory" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Inventory list</q-item-label>
          </q-item-section> </q-item
        >
     
        <q-item to="/" class="q-py-lg">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template> -->

<!-- <script setup>
import { ref } from "vue";

    const leftDrawerOpen = ref(false);
    let link=ref('dashboard')

    

    function   toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
  
</script>
<style lang="scss" scoped>
.header{
  color:#102051 !important;
}
.rounded-border{
  border-radius: 5px;
}
.search-input{
  width: 20%;
}
.active{
  background-color: #a1a9c1 !important;
  border-right: 5px solid #102051;
}
.side{
   border: 2px solid red;
   position: fixed;
   top:0;
}
container style="height: 100vh"
</style> -->
<template>
    <q-layout view="hHh Lpr lff"  class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="230"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>
            <q-item>
              <p>Menu</p>
            </q-item>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable   :active="link===menuItem.link" v-ripple :to="menuItem.link " active-class="active">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
      <router-view />
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

const menuList = [
  {
    icon: 'inbox',
    label: 'Dashboard',
    separator: true,
    link:'/dashboard'
  },
  {
    icon: 'send',
    label: 'Create Inventory',
    separator: false,
    link:'/createinventory'
  },
  {
    icon: 'delete',
    label: 'Inventory',
    separator: false,
    link:'inventory'
  },
  {
    icon: 'error',
    label: 'Logout',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  setup () {
    return {
      drawer: ref(false),
      menuList
    }
  }
}
</script>
<style lang="scss">
  .active{
  background-color: #a1a9c1 !important;
  border-right: 5px solid #102051;
}
</style>

