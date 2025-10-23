import "./CategoryMenu.css";

export default function CategoryMenu({ selected, onSelect }) {
  const categories = [
    "Бургеры",
    "Твистеры",
    "Курица",
    "Баскеты",
    "Снеки",
    "Соусы",
    "Напитки",
    "Кофе и чай",
    "Десерты",
    "Хиты по 50",
    "Хиты по 100",
    "Хиты по 250",
    "Хиты по 350",
    "Хиты по 500",
  ];

  return (
    <div className="category-menu">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-item ${selected === category ? "active" : ""}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
