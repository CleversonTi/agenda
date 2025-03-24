<script  lang="js">
import { ref, shallowRef } from 'vue';
import sidebarItems from './vertical-sidebar/sidebarItem';
import NavGroup from './vertical-sidebar/NavGroup/index.vue';
import NavItem from './vertical-sidebar/NavItem/index.vue';
import ExtraBox from './vertical-sidebar/extrabox/ExtraBox.vue';
import Logo from './logo/Logo.vue';
// Icon Imports
import { Menu2Icon, BellRingingIcon } from 'vue-tabler-icons';
// dropdown imports
import NotificationDD from './vertical-header/NotificationDD.vue';
import ProfileDD from './vertical-header/ProfileDD.vue';
const sidebarMenu = shallowRef(sidebarItems);
import { Monitor } from 'lucide-vue-next';
const sDrawer = ref(true);
</script>

<template>
    <div class="topo">
        <v-app-bar elevation="0" height="80">
            <div class="d-flex align-center justify-space-between w-100">

                <div class="logo-wrapper">
                    <div class="logo">
                        <router-link to="/">
                            <img src="@/assets/images/logos/logo.png" />
                        </router-link>
                    </div>
                </div>
                <div class="side-bars">
                    <ul>
                        <li>
                            <router-link to="/"> <Monitor /><span> Abrir no site </span> </router-link>
                        </li>
                        <li class="toogle-menu">
                            <div class="alias">
                            <span>PV</span>
                            </div>
                            <div>
                            <router-link to="/"> Primeiro nome Segundo nome </router-link>
                            </div>

                            
                        </li>
                    </ul>
                </div>
                <div>
                    <!-- Upgrade button -->
                    <v-btn class="mr-2 bg-primary" href="https://adminmart.com/templates/vuejs/?product_sortby=free" target="_blank">Download Free</v-btn>
                    <!-- User Profile -->
                    <ProfileDD />
                </div>
            </div>
        </v-app-bar>
    </div>
    <!------Sidebar-------->
    <v-navigation-drawer left elevation="0"  app class="leftSidebar"  v-model="sDrawer">
        <!---Logo part -->
        <div class="pa-5">
            <Logo />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <div>
            <v-list class="pa-6">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu">
                    <!---Item Sub Header -->
                    <NavGroup :item="item" v-if="item.header" :key="item.title" />

                    <!---Single Item-->
                    <NavItem :item="item" v-else class="leftPadding" />
                    <!---End Single Item-->
                </template>
            </v-list>
            <div class="pa-4">
                <ExtraBox />
            </div>
        
    </div>

    </v-navigation-drawer>
    <!------Header-------->



    
</template>
