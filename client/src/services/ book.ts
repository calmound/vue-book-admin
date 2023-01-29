import type { BookType } from "@/types/book";
import axios from "axios";

// 书籍创建
export const bookAdd = (params: BookType) => {
  return axios({
    method: "post",
    url: "/api/book",
    data: params,
  });
};
