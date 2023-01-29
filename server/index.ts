import express, { Request, Response } from "express";
import { myDataSource } from "./config/database";
import dotenv from "dotenv";
import { Tag, Book } from "./entities";

const tagRepository = myDataSource.getRepository(Tag);
const bookRepository = myDataSource.getRepository(Book);
dotenv.config();

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT;

// 查询类别
app.get("/api/tag/list", async (req: Request, res: Response) => {
  const tags = await tagRepository.find();
  return res.json({ list: tags, total: 70 });
});

// 添加类别
app.post("/api/tag/add", async (req: Request, res: Response) => {
  try {
    const { name, color } = req.body;
    const tag = new Tag();
    tag.name = name;
    tag.color = color;
    await tagRepository.save(tag);
    return res.json({ code: 200 });
  } catch (error) {
    return res.json({ code: 500, message: "服务器错误，保存失败" });
  }
});

// 删除类别
app.delete("/api/tag/:id", async (req: Request, res: Response) => {
  try {
    await tagRepository.delete(req.params.id);
    return res.json({ code: 200 });
  } catch (error) {
    return res.json({ code: 500, message: "服务器错误" });
  }
});

// 书籍创建
app.post("/api/book", async (req: Request, res: Response) => {
  const { name, desc, tag } = req.body;
  try {
    const book = new Book();
    book.name = name;
    book.desc = desc;
    book.tag = tag;

    await bookRepository.save(book);
    return res.json({ code: 200 });
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
