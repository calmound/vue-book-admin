<template>
  <el-table class="table" :data="list" style="width: 100%">
    <el-table-column label="名称" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="颜色" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.color }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="创建时间">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.createdAt }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="更新时间">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.updatedAt }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click="handleBack(scope.$index, scope.row)"
          >归还</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    class="pagination"
    background
    layout="prev, pager, next"
    :total="total"
    :current-page="pageNumber"
    :page-size="10"
    @current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts">
import { getTagList } from "@/services/tag";
import { onMounted, ref } from "vue";

const list = ref([]);
const total = ref(0);
const pageNumber = ref(1);

onMounted(async () => {
  const data = await getTagList(0);
  list.value = data.list;
  total.value = data.total;
});

const handleBack = (index: number, row: any) => {
  // detailDialogRef.value?.setVisible(true, true);
};

const handleCurrentChange = async (val: number) => {
  pageNumber.value = val;

  const data = await getTagList(pageNumber.value);
  list.value = data.list;
};
</script>

<style lang="less" scoped></style>
