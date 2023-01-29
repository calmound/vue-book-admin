<template>
  <el-dialog
    v-model="visible"
    :title="!isEdit ? '新增图书' : '编辑图书'"
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
      <el-form-item class="desc" label="描述" l>
        <el-input v-model="form.desc" />
      </el-form-item>
      <el-form-item
        prop="tag"
        label="类别"
        label-width="120px"
        :rules="[
          {
            required: true,
            message: '类别不能为空',
            trigger: 'blur',
          },
        ]"
      >
        <el-select v-model="form.tag" style="width: 100%">
          <el-option
            :label="item.name"
            :value="item.id"
            v-for="item in tagList"
          />
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
import { bookAdd } from "@/services/ book";
import { getTagList } from "@/services/tag";
import type { TagType } from "@/types/tag";
import { onMounted, ref } from "vue";

const visible = ref(false);
const isEdit = ref();

const form = ref({ name: "", tag: -1, desc: "" });

const tagList = ref<TagType[]>([]);

onMounted(() => {
  // 获取类别列表
  getTagList(0).then((data) => {
    tagList.value = data.list;
  });
});

const handleSubmit = async () => {
  bookAdd({
    name: form.value.name,
    tag: form.value.tag,
    desc: form.value.desc,
  })
    .then((data) => {
      visible.value = false;
    })
    .catch(() => {});
};

const setVisible = (vis: boolean, edit?: boolean) => {
  visible.value = vis;
  isEdit.value = edit;
};

defineExpose({ setVisible });
</script>

<style lang="less" scoped></style>
