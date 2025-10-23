export const products = [
  // Бургеры
  { id: 1, name: "Чизбургер", price: 150, image: "public/classic-burger.jpg", tag: "hit", category: "Бургеры" },
  { id: 2, name: "Бургер с беконом", price: 170, image: "/images/bacon_burger.jpg", tag: null, category: "Бургеры" },
  { id: 3, name: "Двойной бургер", price: 220, image: "/images/double_burger.jpg", tag: "new", category: "Бургеры" },
  { id: 4, name: "Вегетарианский бургер", price: 180, image: "/images/veggie_burger.jpg", tag: null, category: "Бургеры" },

  // Твистеры
  { id: 5, name: "Твистер Классик", price: 200, image: "public/double-burger.jpg", tag: null, category: "Твистеры" },
  { id: 6, name: "Твистер острый", price: 210, image: "/images/spicy_twister.jpg", tag: "hot", category: "Твистеры" },
  { id: 7, name: "Твистер с сыром", price: 220, image: "/images/cheese_twister.jpg", tag: null, category: "Твистеры" },
  { id: 8, name: "Твистер BBQ", price: 230, image: "/images/bbq_twister.jpg", tag: "hit", category: "Твистеры" },

  // Курица
  { id: 9, name: "Куриные наггетсы", price: 120, image: "/images/nuggets.jpg", tag: "new", category: "Курица" },
  { id: 10, name: "Куриные крылышки", price: 150, image: "/images/wings.jpg", tag: null, category: "Курица" },
  { id: 11, name: "Стрипсы", price: 180, image: "/images/strips.jpg", tag: null, category: "Курица" },
  { id: 12, name: "Курица BBQ", price: 200, image: "/images/bbq_chicken.jpg", tag: "hit", category: "Курица" },

  // Баскеты
  { id: 13, name: "Баскет малый", price: 300, image: "/images/basket_small.jpg", tag: null, category: "Баскеты" },
  { id: 14, name: "Баскет средний", price: 450, image: "/images/basket_medium.jpg", tag: "hit", category: "Баскеты" },
  { id: 15, name: "Баскет большой", price: 600, image: "/images/basket_large.jpg", tag: null, category: "Баскеты" },
  { id: 16, name: "Снэки в баскете", price: 400, image: "/images/snack_basket.jpg", tag: "new", category: "Баскеты" },

  // Снеки
  { id: 17, name: "Картофель фри", price: 100, image: "/images/fries.jpg", tag: null, category: "Снеки" },
  { id: 18, name: "Луковые кольца", price: 120, image: "/images/onion_rings.jpg", tag: null, category: "Снеки" },
  { id: 19, name: "Куриные попкорн", price: 130, image: "/images/popcorn_chicken.jpg", tag: "hit", category: "Снеки" },
  { id: 20, name: "Мини-сэндвичи", price: 150, image: "/images/mini_sandwich.jpg", tag: "new", category: "Снеки" },

  // Соусы
  { id: 21, name: "Кетчуп", price: 20, image: "/images/ketchup.jpg", tag: null, category: "Соусы" },
  { id: 22, name: "Майонез", price: 25, image: "/images/mayo.jpg", tag: null, category: "Соусы" },
  { id: 23, name: "Барбекю", price: 30, image: "/images/bbq_sauce.jpg", tag: null, category: "Соусы" },
  { id: 24, name: "Чесночный", price: 30, image: "/images/garlic_sauce.jpg", tag: "hit", category: "Соусы" },

  // Напитки
  { id: 25, name: "Кока-Кола", price: 80, image: "/images/coke.jpg", tag: null, category: "Напитки" },
  { id: 26, name: "Спрайт", price: 80, image: "/images/sprite.jpg", tag: null, category: "Напитки" },
  { id: 27, name: "Фанта", price: 80, image: "/images/fanta.jpg", tag: null, category: "Напитки" },
  { id: 28, name: "Морс", price: 70, image: "/images/mors.jpg", tag: "new", category: "Напитки" },

  // Кофе и чай
  { id: 29, name: "Кофе Американо", price: 120, image: "/images/americano.jpg", tag: null, category: "Кофе и чай" },
  { id: 30, name: "Капучино", price: 150, image: "/images/cappuccino.jpg", tag: "hit", category: "Кофе и чай" },
  { id: 31, name: "Латте", price: 160, image: "/images/latte.jpg", tag: null, category: "Кофе и чай" },
  { id: 32, name: "Чай зелёный", price: 90, image: "/images/green_tea.jpg", tag: null, category: "Кофе и чай" },

  // Десерты
  { id: 33, name: "Мороженое", price: 100, image: "/images/ice_cream.jpg", tag: null, category: "Десерты" },
  { id: 34, name: "Чизкейк", price: 180, image: "/images/cheesecake.jpg", tag: "hit", category: "Десерты" },
  { id: 35, name: "Пирожное", price: 120, image: "/images/cake.jpg", tag: null, category: "Десерты" },
  { id: 36, name: "Шоколадный торт", price: 200, image: "/images/choco_cake.jpg", tag: "new", category: "Десерты" },

  // Хиты по 50
  { id: 37, name: "Снэк 50г", price: 50, image: "/images/snack50_1.jpg", tag: "hit", category: "Хиты по 50" },
  { id: 38, name: "Наггетсы 50г", price: 50, image: "/images/snack50_2.jpg", tag: null, category: "Хиты по 50" },

  // Хиты по 100
  { id: 39, name: "Снэк 100г", price: 100, image: "/images/snack100_1.jpg", tag: null, category: "Хиты по 100" },
  { id: 40, name: "Наггетсы 100г", price: 100, image: "/images/snack100_2.jpg", tag: "hit", category: "Хиты по 100" },

  // Хиты по 250
  { id: 41, name: "Снэк 250г", price: 250, image: "/images/snack250_1.jpg", tag: "hit", category: "Хиты по 250" },
  { id: 42, name: "Наггетсы 250г", price: 250, image: "/images/snack250_2.jpg", tag: null, category: "Хиты по 250" },

  // Хиты по 350
  { id: 43, name: "Снэк 350г", price: 350, image: "/images/snack350_1.jpg", tag: null, category: "Хиты по 350" },
  { id: 44, name: "Наггетсы 350г", price: 350, image: "/images/snack350_2.jpg", tag: "hit", category: "Хиты по 350" },

  // Хиты по 500
  { id: 45, name: "Снэк 500г", price: 500, image: "/images/snack500_1.jpg", tag: null, category: "Хиты по 500" },
  { id: 46, name: "Наггетсы 500г", price: 500, image: "/images/snack500_2.jpg", tag: "hit", category: "Хиты по 500" },
  
];
