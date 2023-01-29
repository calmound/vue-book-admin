<template>
  <el-form :inline="true" :model="form" class="demo-form-inline">
    <el-form-item label="名称">
      <el-input v-model="form.name" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="类别">
      <el-select v-model="form.color" placeholder="请选择">
        <el-option label="红色" value="red" />
        <el-option label="绿色" value="green" />
        <el-option label="蓝色" value="blue" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  color: "",
  name: "",
});

const handleSubmit = () => {};
</script>

<style lang="less" scoped></style>
