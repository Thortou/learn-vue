<script setup lang="ts">
import SetupOther from "@/share/settings/SetupOther.vue";

const emit = defineEmits<{ (e: "toggle"): void }>();
</script>
<template>
  <header
    class="flex items-center justify-between px-4 bg-white shadow-2xl md:min-h-[60px] min-h-[40px]"
  >
    <span
      class="md:text-lg text-[12px] font-bold text-slate-700"
      @click="emit('toggle')"
    >
      <i class="pi pi-bars hover:text-slate-500"></i>
    </span>
    <SetupOther />
  </header>
</template>
<style scoped>

</style>
