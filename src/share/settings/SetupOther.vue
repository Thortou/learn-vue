<script setup lang="ts">
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import router from "@/router";
import { createVNode, ref } from 'vue';
import { useAuthStore } from '@/modules/ui/auth/store/AuthStore';
const {logout} = useAuthStore();

const confirmLogout = () => {
  Modal.confirm({
    title: "ກົດຢືນຢັນ",
    icon: createVNode(ExclamationCircleOutlined),
    content: "ຕ້ອງການອອກຈາກລະບົບບໍ່?",
    okText: "ຕົກລົງ",
    cancelText: "ຍົກເລີກ",
    onOk() {
      return new Promise((resolve) => {
        logout().then(() => { // Call logout method to handle the logout process
          router.push({ name: 'login.index' }); // Redirect to login page after logout
          resolve(null); // Resolve the promise to close the modal
        });
      });
    },
  });
};

// Drawer state management
const open = ref<boolean>(false);

const showDrawer = () => {
  open.value = true;
};

</script>

<template>
  <div class="setting">
    <span class="md:text-lg text-[12px] font-bold text-slate-700" @click="showDrawer">
      <i class="pi pi-cog hover:text-slate-500"></i>
    </span>
  </div>
  
  <a-drawer v-model:open="open" title="ການຕັ້ງຄ່າທົ່ວໄປ" :width="300" placement="right">
    <div class="-mt-4 px-2 py-2 shadow-md h-full bg-slate-100 ring-slate-200 rounded-md ring-1">
      <router-link to="#">
        <div class="flex items-center gap-2 shadow-lg py-1 px-1 ring-1 ring-slate-200 cursor-pointer hover:bg-slate-200 rounded-md">
          <img src="../../assets/profile.jpg" alt="" class="w-10 h-10 rounded-full flex items-center justify-center">
          <p class="text-slate-600 mt-1">admin development</p>
        </div>
      </router-link>

      <div class="mt-4 items-center h-[150px] gap-2 ring-1 ring-slate-200 shadow-xl py-1 px-1 cursor-pointer rounded-md">
        <ul>
          <li>
            <router-link to="#" class="flex gap-2 items-center p-2 rounded homepage text-md text-slate-500 hover:bg-slate-200 hover:text-slate-600">
              <span class="pi pi-wrench"></span>
              <p class="mt-1">ກຳນົດບົດບາດໃຫ້ຜູ້ໃຊ້</p>
            </router-link>
          </li>
          <li class="-mt-2">
            <router-link to="#" class="flex gap-2 items-center p-2 rounded homepage text-md text-slate-500 hover:bg-slate-200 hover:text-slate-600">
              <span class="pi pi-cog"></span>
              <p class="mt-1">ຕັ້ງຄ່າ (role)</p>
            </router-link>
          </li>
          <li class="-mt-2">
            <router-link to="#" class="flex gap-2 items-center p-2 rounded homepage text-md text-slate-500 hover:bg-slate-200 hover:text-slate-600">
              <span class="pi pi-slack"></span>
              <p class="mt-1">ຢືນຢັນໃຫ້ຜູ້ໃຊ້</p>
            </router-link>
          </li>
          <li class="-mt-2">
            <router-link to="#" class="flex gap-2 items-center p-2 rounded homepage text-md text-slate-500 hover:bg-slate-200 hover:text-slate-600">
              <span class="pi pi-sliders-h"></span>
              <p class="mt-1">ກຳນົດສິດທີໃຫ້ຜູ້ໃຊ້</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="mt-4 h-[50px] gap-2 ring-1 ring-slate-200 hover:bg-slate-200 shadow-xl py-1 px-1 cursor-pointer rounded-md">
        <button class="text-slate-500 text-[15px] flex gap-2 p-2">
          <span class="pi pi-moon"></span>
          ໂໝດມືດ
        </button>
      </div>
      
        <button @click="confirmLogout" class="mt-4 h-[50px] gap-2 w-full items-center ring-1 ring-slate-200 hover:bg-slate-200 shadow-xl py-1 px-3 cursor-pointer rounded-md text-slate-500 text-[15px] flex p-2">
          <span class="pi pi-sign-out"></span>
          ອອກຈາກລະບົບ
        </button>
    </div>
  </a-drawer>
</template>

<style scoped>
</style>
