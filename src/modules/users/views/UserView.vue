<template>
  <a-table
    class="whitespace-nowrap"
    :scroll="{ x: true }"
    :row-key="(record: any) => record.id"
    :columns="columns"
    show-size-changer
    :data-source="userList"
  >
    <template #expandedRowRender="{ record }">
      <div class="flex flex-col px-6 w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
        <h4>Link Banner</h4>
        <p class="px-4 whitespace-break-spaces">
          {{ record.link }}
        </p>
        <h4>Description</h4>
        <p class="px-4 whitespace-break-spaces">
          {{ record.description }}
        </p>
      </div>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/user.store';
import axios from 'axios'
const data = ref([]);
  const fetchData = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/api/users/`);
      console.log("API response data:", result.data);
      data.value = result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
};

onMounted(() => {
  fetchData();
});
const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    width: 100
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  }
];
</script>

<style scoped>
/* Add scoped styles here if necessary */
</style>
