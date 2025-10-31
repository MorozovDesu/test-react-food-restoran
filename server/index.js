import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Мидлвары
app.use(cors());
app.use(express.json());

// Пример маршрута
app.get("/api", (req, res) => {
  res.json({ message: "Привет с backend!" });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
