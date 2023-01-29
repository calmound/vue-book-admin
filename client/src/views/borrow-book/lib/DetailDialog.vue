<template>
  <el-dialog
    v-model="visible"
    :title="!isEdit ? '新增类别' : '编辑类别'"
    width="400px"
  >
    <el-form
      ref="formRef"
      :model="form"
      label-width="120px"
      class="demo-dynamic"
    >
      <el-form-item
        class="name"
        prop="name"
        label="名称"
        :rules="[
          {
            required: true,
            message: '名称不能为空',
            trigger: 'blur',
          },
        ]"
      >
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item prop="color" label="颜色" label-width="120px">
        <el-select v-model="form.color" style="width: 100%">
          <el-option label="红色" value="red" />
          <el-option label="绿色" value="green" />
          <el-option label="蓝色" value="blue" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit"> 提交 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

const visible = ref(false);
const isEdit = ref();

const form = ref({ name: "", color: "blue" });

const handleSubmit = async () => {
  await axios({
    method: "post",
    url: "/api/tag/add",
    data: {
      name: form.value.name,
      color: form.value.color,
    },
  });
  visible.value = false;
};

const setVisible = (vis: boolean, edit?: boolean) => {
  visible.value = vis;
  isEdit.value = edit;
};

defineExpose({ setVisible });
</script>

<style lang="less" scoped></style>
