import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Тестовый маршрут
app.get('/api', (req, res) => {
  res.json({ message: 'Привет с backend!' });
});

// Новый маршрут для оформления заказа
app.post('/api/order', (req, res) => {
  const order = req.body; // фронт отправляет JSON
  console.log('Новый заказ:', order);

  // здесь можно сохранять заказ в БД (пока просто имитируем)
  res.status(201).json({
    success: true,
    message: 'Заказ получен на сервере!',
    order,
  });
});

app.listen(PORT, () =>
  console.log(`Сервер запущен на http://localhost:${PORT}`)
);
