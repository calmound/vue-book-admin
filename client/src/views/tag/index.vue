<template>
  <div class="title">
    类别管理
    <el-button type="primary" class="add-button" @click="handleAdd"
      >新增</el-button
    >
  </div>
  <SearchFilter />
  <DetailDialog :isEdit="isEdit" ref="detailDialogRef" />
  <DataList />
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchFilter from "./lib/SearchFilter.vue";
import DetailDialog from "./lib/DetailDialog.vue";
import DataList from "./lib/DataList.vue";

const isEdit = ref(false);

interface User {
  date: string;
  name: string;
  address: string;
}

const detailDialogRef = ref<InstanceType<typeof DetailDialog>>();
const handleAdd = () => {
  detailDialogRef.value?.setVisible(true);
};
</script>

<style lang="less" scoped>
.title {
  font-size: 24px;
  margin-bottom: 24px;
}

.add-button {
  float: right;
}

.name {
  margin-bottom: 32px;
}
</style>
