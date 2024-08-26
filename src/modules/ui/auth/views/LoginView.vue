<template>
  <!-- <div class="">e</div> -->
  <!-- <a-spin tip="Loading..."> -->
  <div
    class="m-0 w-full h-screen flex flex-col items-center justify-center bg-slate-200"
  >
    <div class="flex flex-wrap items-center mb-10">
      <button
        class="custom-button -mt-3 -ml-5 text-slate-700 font-semibold py-2 w-[15rem] h-14 rounded-lg text-2xl uppercase"
      >
        ເວັບແອັບມິນ 5 ດາວ
      </button>
    </div>
    <div
      class="form-container bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
    >
      <h1 class="font-bold text-xl text-slate-500 text-center">ເຂົ້າສູ່ລະບົບ</h1>
      <h6 class="text-sm text-gray-400 text-center mb-6">
        ຍິນດີຕ້ອນຮັບທຸກທ່ານ
      </h6>
      <a-form
        :model="form"
        name="basic"
        class="myfont"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້' }]"
        >
          <span class="text-slate-500">ຊື່ຜູ້ໃຊ້</span>
          <a-input v-model:value="form.username" placeholder="ປ້ອນຊື່ຜູ້ໃຊ້" />
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'ກະລຸນາປ້ອນລະຫັດຜໍາກ່ອນ!' }]"
        >
          <span class="text-slate-500">ລະຫັດຜ່ານ</span>
          <a-input-password
            v-model:value="form.password"
            placeholder="********"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            @click="onSubmit"
            :loading="isLoading"
            html-type="submit"
            class="w-full btn"
          >
            ລ໋ອກອິນ
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
  <!-- </a-spin> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/modules/ui/auth/store/AuthStore";
import { storeToRefs } from "pinia";
import { LoginFormInterface } from "../interfaces/login.interface";

const { login } = useAuthStore();
const { isLoading } = storeToRefs(useAuthStore());
const formRef = ref();
const form = ref<LoginFormInterface>(new LoginFormInterface());

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

async function onSubmit() {
  await login(form.value);
}
</script>

<style>
.myfont span,
.btn {
  font-family: Lao_Patuxai3;
}
/* Ensure that font is applied to error messages */
.ant-form-item .ant-form-item-explain {
  font-family: Lao_Patuxai3 !important;
}

/* Ensure placeholder text uses custom font */
.ant-input::placeholder,
.ant-input-password::placeholder {
  font-family: Lao_Patuxai3 !important;
}

/* Ensure form labels use custom font */
.ant-form-item-label > label {
  font-family: Lao_Patuxai3 !important;
}

/* Custom button styles */
.custom-button {
  background: linear-gradient(145deg, #d5e3ee, #cccecf);
  box-shadow: 5px 5px 10px #979ea3, -5px -5px 10px #cee1ec;
}

.custom-button:hover {
  background: linear-gradient(145deg, #d5e3ee, #c1c7ca);
  box-shadow: 5px 5px 10px #979ea3, -5px -5px 10px #cee1ec;
}
</style>
