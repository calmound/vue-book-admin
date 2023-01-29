import axios from "axios";

// 查询类别列表
export const getTagList = async (pageNumber: number) => {
  const res = await axios({
    method: "get",
    url: "/api/tag/list",
    params: { pageNumber },
  });

  return {
    list: res.data.list,
    total: res.data.total,
  };
};

// 添加类别
export const tagAdd = async (params: { name: string; color: string }) => {
  return axios({
    method: "post",
    url: "/api/tag/add",
    data: params,
  });
};

// 删除类别
export const tagDelete = async (id: number) => {
  return axios({
    method: "delete",
    url: `/api/tag/${id}`,
  });
};

// 修改类别
