<script setup lang="ts">
import AppSidebarVue from "./AppSidebar.vue";
import AppTopbarVue from "./AppTopbar.vue";
import AppFooterVue from "./AppFooter.vue";
import { ref } from "vue";

const toggle = ref<boolean>(true);
</script>
<template>
  <div class="flex scroll-smooth w-full">
    <AppSidebarVue :toggle="toggle" />
    <div
      class="flex flex-col w-full transition-all"
      :class="{ 'md:ml-64 ml-[9rem]': toggle }"
    >
      <div
        class="min-w-full transition-all sticky top-0 z-10"
        :class="{ 'ml-0': !toggle }"
      >
        <AppTopbarVue @toggle="() => (toggle = !toggle)" />
      </div>
      <main
        class="flex justify-center min-h-screen px-4 py-8 -mt-4 shadow-xl"
      >
        <div class="2xl:max-w-[1280px] w-full">
          <RouterView />
        </div>
      </main>
      <AppFooterVue />
    </div>
  </div>
</template>
