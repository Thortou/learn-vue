<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps<{ toggle: boolean }>()

const dropdownOpen = ref(false)
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>
<template>
  <nav class="fixed top-0 left-0 z-50 w-0 h-full overflow-hidden overflow-y-auto transition-all bg-white whitespace-nowrap" :class="{ 'md:w-[260px] w-[150px] border': props.toggle}">
    <div class="flex items-center justify-start px-4 shadow-2xl md:h-[60px] h-[40px]">
      <h1 class="md:text-xl text-[10px] font-bold text-slate-700 uppercase">
        web Admin 5 
        <span class="text-lg -ml-[4px] drop-shadow-[100px] pi pi-star-fill text-slate-800"></span>
      </h1>
    </div>
  
    <ul>
      <li class="">
        <router-link
          to="/"
          class="block p-2 rounded homepage text-slate-600 hover:bg-slate-400/50 hover:text-slate-800 px-4 pl-8 mt-3 m-1"
          ><i class="pi pi-home -mt-[0.4rem] mr-2"></i>ໜ້າຫຼັກ</router-link
        >
      </li>
      <li class="-mt-2">
        <router-link
          to="/"
          class="block p-2 rounded homepage text-slate-600 hover:bg-slate-400/50 hover:text-slate-800 px-4 pl-8 mt-3 m-1"
          ><i class="pi pi-calendar-clock -mt-[0.4rem] mr-2"></i>ການບໍລິການ</router-link
        >
      </li>

      <!-- dropdown -->
      <li class=" ml-[4px]">
        <button
          @click="toggleDropdown"
          class=" p-2 rounded dataUser focus:outline-none text-left px-4 pl-8 text-slate-800 hover:bg-slate-400/50 hover:text-slate-800 gap-[6px] flex items-center justify-center pr-[1.9rem]"
        >
          <i class="pi pi-users mr-[0.1rem]"></i>
          ຜູ້ນຳໃຊ້
          <svg
            class="inline w-4 h-4 ml-[6rem]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <ul v-if="dropdownOpen" class="mt-2 space-y-1 pl-4 text-sm ml-7">
          <li>
            <router-link to="/findAllUser" class="block p-2 rounded findAllUser hover:bg-slate-400/50 hover:text-slate-800 mr-1">
              <i class="pi pi-box mr-[0.2rem]"></i>
              ຂໍ້ມູນຜູ້ໃຊ້ທັງໝົດ
            </router-link>
          </li>
          <li>
            <router-link to="/form_user" class="block p-2 rounded addUser hover:bg-slate-400/50 hover:text-slate-800 mr-1">
              <i class="pi pi-plus mr-[0.2rem]"></i>
              ເພີ່ມຂໍ້ມູນຜູ້ໃຊ້
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
