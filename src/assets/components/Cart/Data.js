export const products = [
  // Бургеры
  { id: 1, name: "Чизбургер", price: 150, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", tag: "hit", category: "Бургеры" },
  { id: 2, name: "Бургер с беконом", price: 170, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop", tag: null, category: "Бургеры" },
  { id: 3, name: "Двойной бургер", price: 220, image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop", tag: "new", category: "Бургеры" },
  { id: 4, name: "Вегетарианский бургер", price: 180, image: "https://images.unsplash.com/photo-1525059693554-b44c50b723bf?w=400&h=300&fit=crop", tag: null, category: "Бургеры" },

  // Твистеры
  { id: 5, name: "Твистер Классик", price: 200, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop", tag: null, category: "Твистеры" },
  { id: 6, name: "Твистер острый", price: 210, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop", tag: "hot", category: "Твистеры" },
  { id: 7, name: "Твистер с сыром", price: 220, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop", tag: null, category: "Твистеры" },
  { id: 8, name: "Твистер BBQ", price: 230, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop", tag: "hit", category: "Твистеры" },

  // Курица
  { id: 9, name: "Куриные наггетсы", price: 120, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "new", category: "Курица" },
  { id: 10, name: "Куриные крылышки", price: 150, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop", tag: null, category: "Курица" },
  { id: 11, name: "Стрипсы", price: 180, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Курица" },
  { id: 12, name: "Курица BBQ", price: 200, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop", tag: "hit", category: "Курица" },

  // Баскеты
  { id: 13, name: "Баскет малый", price: 300, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Баскеты" },
  { id: 14, name: "Баскет средний", price: 450, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "hit", category: "Баскеты" },
  { id: 15, name: "Баскет большой", price: 600, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Баскеты" },
  { id: 16, name: "Снэки в баскете", price: 400, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "new", category: "Баскеты" },

  // Снеки
  { id: 17, name: "Картофель фри", price: 100, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop", tag: null, category: "Снеки" },
  { id: 18, name: "Луковые кольца", price: 120, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop", tag: null, category: "Снеки" },
  { id: 19, name: "Куриные попкорн", price: 130, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "hit", category: "Снеки" },
  { id: 20, name: "Мини-сэндвичи", price: 150, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop", tag: "new", category: "Снеки" },

  // Соусы
  { id: 21, name: "Кетчуп", price: 20, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", tag: null, category: "Соусы" },
  { id: 22, name: "Майонез", price: 25, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", tag: null, category: "Соусы" },
  { id: 23, name: "Барбекю", price: 30, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", tag: null, category: "Соусы" },
  { id: 24, name: "Чесночный", price: 30, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", tag: "hit", category: "Соусы" },

  // Напитки
  { id: 25, name: "Кока-Кола", price: 80, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop", tag: null, category: "Напитки" },
  { id: 26, name: "Спрайт", price: 80, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop", tag: null, category: "Напитки" },
  { id: 27, name: "Фанта", price: 80, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop", tag: null, category: "Напитки" },
  { id: 28, name: "Морс", price: 70, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop", tag: "new", category: "Напитки" },

  // Кофе и чай
  { id: 29, name: "Кофе Американо", price: 120, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop", tag: null, category: "Кофе и чай" },
  { id: 30, name: "Капучино", price: 150, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop", tag: "hit", category: "Кофе и чай" },
  { id: 31, name: "Латте", price: 160, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop", tag: null, category: "Кофе и чай" },
  { id: 32, name: "Чай зелёный", price: 90, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop", tag: null, category: "Кофе и чай" },

  // Десерты
  { id: 33, name: "Мороженое", price: 100, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", tag: null, category: "Десерты" },
  { id: 34, name: "Чизкейк", price: 180, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", tag: "hit", category: "Десерты" },
  { id: 35, name: "Пирожное", price: 120, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", tag: null, category: "Десерты" },
  { id: 36, name: "Шоколадный торт", price: 200, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", tag: "new", category: "Десерты" },

  // Хиты по 50
  { id: 37, name: "Снэк 50г", price: 50, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "hit", category: "Хиты по 50" },
  { id: 38, name: "Наггетсы 50г", price: 50, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Хиты по 50" },

  // Хиты по 100
  { id: 39, name: "Снэк 100г", price: 100, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Хиты по 100" },
  { id: 40, name: "Наггетсы 100г", price: 100, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "hit", category: "Хиты по 100" },

  // Хиты по 250
  { id: 41, name: "Снэк 250г", price: 250, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "hit", category: "Хиты по 250" },
  { id: 42, name: "Наггетсы 250г", price: 250, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Хиты по 250" },

  // Хиты по 350
  { id: 43, name: "Снэк 350г", price: 350, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Хиты по 350" },
  { id: 44, name: "Наггетсы 350г", price: 350, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "hit", category: "Хиты по 350" },

  // Хиты по 500
  { id: 45, name: "Снэк 500г", price: 500, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: null, category: "Хиты по 500" },
  { id: 46, name: "Наггетсы 500г", price: 500, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", tag: "hit", category: "Хиты по 500" },
  
];
