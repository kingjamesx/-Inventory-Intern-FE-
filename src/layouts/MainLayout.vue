<template>
    <q-layout view="hHh Lpr lff"  class="shadow-2 rounded-borders body">
      <q-header  :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'" >
        <q-toolbar class="toolbar">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"  />

        <q-toolbar-title class="text-weight-bold q-ml-lg ourpass">
          <q-avatar>
            <img src="../assets/ourpass-logo.png" />
          </q-avatar>
          OurPass
        </q-toolbar-title>
        <q-toolbar-title class="text-weight-bold inventory">
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
          <q-space class="space"/>
          <q-list class="flex actions">
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
     
      <q-drawer
       class="drawer"
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
              <q-item   clickable v-ripple @click="active" :to="menuItem.link" active-class="active" exact >
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>
            <q-item   clickable v-ripple @click="logout" active-class="active" exact >
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>
                <q-item-section>
                 Logout
                </q-item-section>
              </q-item>
          </q-list>
        </q-scroll-area>
        <div  class="circle">
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
      </q-drawer>

      <q-page-container>
      <router-view />
      </q-page-container>
    </q-layout>
</template>

<script>
import { useRouter } from 'vue-router'

const menuList = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    separator: true,
    link:'/dashboard',
 
  },
  {
    icon: 'create',
    label: 'Create Inventory',
    separator: false,
    link:'/createinventory',
  },
  {
    icon: 'inventory',
    label: 'Inventory',
    separator: false,
    link:'inventory',

  },
  {
    icon: 'book',
    label: 'Subscriptions',
    separator: true,
    link:'/logout',

  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false,
    link:'/settings',

  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false,
    link:'/feedback',

  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
    link:'/help',

  }
]

export default {
  data () {
    return {
      drawer: false,
      menuList,
      active:true,
      router:useRouter()
    }
  },
  methods:{
    logout(){
       this.$store.commit('auth/logout',null)
       localStorage.clear();
       this.router.push({ path: "/" });
    }
  }
}
</script>
<style lang="scss">
  .active{
  background-color: #a1a9c1 !important;
  border-right: 5px solid #102051;
}
.toolbar{
  background-color: white;
  color: #142863;
  padding: 0.7rem;
  @media (max-width:1061px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
}
.space{
  @media (max-width:1061px) {
    display: none;
  }
}
.ourpass{
  @media (max-width:1061px) {
    display: none;
  }
}
.search-input{
  border-radius: 5px;
  @media (max-width:1061px) {
    display: none;
  }
}
.actions{
  @media (max-width:1061px) {
    display: none;
  }
}
.inventory{
  @media (max-width:1061px) {
    align-items: center;
  }
}
.body{
  background-color: #f2f2f2;
}
.drawer{
  background-color: #fff !important;
}
.circle{
  border-end-end-radius: 2px solid red;
  position: absolute;
  top: -0.1rem;
  left: 13rem;
  z-index: 50;
}
</style>

