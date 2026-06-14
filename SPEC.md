# ChinaMart — Маркетплейс китайских товаров

## Concept & Vision

ChinaMart — современный маркетплейс для торговли китайскими товарами с полным циклом: от регистрации продавца до завершения сделки. Платформа объединяет покупателей и проверенных продавцов из Китая, обеспечивая прозрачные комиссии (5% с продавца, 2% с покупателя) и безопасные расчёты через escrow-систему.

## Design Language

### Aesthetic Direction
Премиальный маркетплейс с китайской эстетикой — чистый, современный, с акцентами красного (символ удачи в китайской культуре). Дизайн вызывает доверие и ощущение надёжности.

### Color Palette
- **Primary**: #e63946 (китайский красный)
- **Primary Dark**: #c1121f
- **Secondary**: #1d3557 (глубокий синий — доверие)
- **Accent**: #f4a261 (тёплый оранжевый)
- **Success**: #2a9d8f (зелёный для позитивных действий)
- **Background Light**: #f8f9fa
- **Background White**: #ffffff
- **Text Dark**: #1a1a2e
- **Text Medium**: #4a4a68
- **Text Light**: #8b8ba7
- **Border**: #e8e8f0

### Typography
- **Primary Font**: 'Inter', sans-serif (Google Fonts)
- **Headings**: Inter 700-800
- **Body**: Inter 400-500
- **Scale**: 14px base, 1.25 ratio

### Spatial System
- **Base unit**: 8px
- **Spacing scale**: 4, 8, 12, 16, 24, 32, 48, 64, 80px
- **Border radius**: 8px (buttons), 12px (cards), 20px (large containers)
- **Container max-width**: 1400px

### Motion Philosophy
- **Hover transitions**: 200-300ms ease
- **Page transitions**: 400ms ease-out
- **Micro-interactions**: subtle scale/shadow on hover
- **Loading states**: skeleton shimmer animation

## Layout & Structure

### Pages

1. **Главная (Landing)** — Hero-секция, категории, популярные товары, преимущества, регистрация продавцов, комиссии, доверие
2. **Каталог** — Сетка товаров с фильтрами, сортировкой, пагинацией
3. **Страница товара** — Фото, описание, характеристики, отзывы, похожие товары
4. **Корзина** — Список товаров, изменение количества, итоговая сумма с комиссиями
5. **Оформление заказа** — Адрес, способ доставки, оплата
6. **Личный кабинет покупателя** — Заказы, избранное, настройки
7. **Личный кабинет продавца** — Статистика, товары, заказы, настройки магазина
8. **Добавление/редактирование товара** — Форма с загрузкой фото
9. **Регистрация/авторизация** — Модальные окна

### Responsive Strategy
- Desktop: 4 колонки товаров
- Tablet: 3 колонки
- Mobile: 2 колонки, бургер-меню

## Features & Interactions

### Аутентификация
- **Регистрация продавца**: email, пароль, название магазина, телефон, категория
- **Вход**: email + пароль
- **Persistent session**: localStorage token
- **Logout**: clear session

### Каталог товаров
- **Фильтрация**: по категории, цене, рейтингу
- **Сортировка**: по цене, популярности, новизне
- **Поиск**: по названию и описанию
- **Пагинация**: 12 товаров на страницу

### Карточка товара
- **Галерея фото**: до 5 изображений
- **Информация**: название, описание, характеристики, цена
- **Отзывы**: рейтинг, текст, дата
- **Действия**: в корзину, в избранное

### Корзина
- **Список товаров**: фото, название, цена, количество
- **Изменение количества**: +/- кнопки
- **Удаление**: иконка корзины
- **Итоговая сумма**:
  - Сумма товаров
  - Комиссия покупателя (2%)
  - Доставка (рассчитывается)
  - **Итого**

### Оформление заказа
- **Адрес доставки**: город, улица, дом, квартира, индекс
- **Способ доставки**: стандартная (10-14 дней), экспресс (5-7 дней)
- **Оплата**: карта (mock), баланс кошелька
- **Подтверждение**: итоговая сумма, комиссии, кнопка оплаты

### Личный кабинет продавца
- **Статистика**: продажи за период, выручка, рейтинг
- **Управление товарами**: CRUD операции
- **Заказы**: список, статусы (новый, в обработке, отправлен, доставлен)
- **Выплаты**: история, заявка на вывод
- **Настройки**: профиль магазина, контактные данные

### Добавление товара
- **Форма**:
  - Название (обязательно)
  - Категория (обязательно)
  - Цена (обязательно)
  - Описание
  - Характеристики (ключ-значение)
  - Фотографии (до 5, drag & drop)
  - Количество на складе
- **Валидация**: все обязательные поля
- **Превью**: как товар будет выглядеть

### Комиссии (система расчёта)
```
Стоимость товара: 1000 ₽
Комиссия продавца (5%): 50 ₽ → Продавец получает: 950 ₽
Комиссия покупателя (2%): 20 ₽ → Итого к оплате: 1020 ₽
```

## Component Inventory

### Header
- Logo с иконкой
- Navigation (Каталог, Продавцам, Покупателям)
- Поиск
- Иконки: избранное (с счётчиком), корзина (с счётчиком)
- Avatar + dropdown для авторизованных
- Кнопки: Войти / Регистрация для гостей

### Product Card
- **Default**: изображение, бейдж (скидка/хит/новый), название, рейтинг, цена, продавец
- **Hover**: подъём карточки, появление кнопки "В корзину"
- **In Cart**: галочка вместо "В корзину"
- **Out of Stock**: затемнённое изображение, текст "Нет в наличии"

### Category Card
- Иконка, название, количество товаров
- Hover: подъём, изменение тени

### Form Elements
- **Input**: border 2px, focus: primary color, shadow
- **Select**: кастомный dropdown
- **Checkbox**: стилизованный, primary color
- **Button Primary**: red background, white text, hover darken
- **Button Secondary**: outlined, hover fill
- **Button Ghost**: transparent, hover background

### Modal
- Backdrop blur
- Centered card
- Close button
- Smooth enter/exit animation

### Toast Notifications
- Success (green), Error (red), Info (blue)
- Auto-dismiss 3 seconds
- Position: bottom-right

## Technical Approach

### Stack
- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: CSS Modules + CSS Variables
- **State Management**: React Context + useReducer
- **Routing**: React Router v6
- **Icons**: Lucide React

### Data Layer
- **Mock API**: встроенные данные + localStorage для persistence
- **Mock Data**: категории, товары, продавцы, заказы

### Architecture
```
/src
  /components     # Переиспользуемые компоненты
  /pages          # Страницы
  /context        # React Context (auth, cart, products)
  /hooks          # Custom hooks
  /data           # Mock данные
  /utils          # Утилиты (форматирование, расчёты)
  /styles         # Глобальные стили
```

### API Design (Mock)
- `GET /products` — список товаров (фильтры, пагинация)
- `GET /products/:id` — детали товара
- `POST /products` — создание товара (seller)
- `PUT /products/:id` — обновление товара
- `DELETE /products/:id` — удаление товара
- `POST /orders` — создание заказа
- `GET /orders` — список заказов
- `POST /auth/register` — регистрация
- `POST /auth/login` — авторизация

### Data Models
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'buyer' | 'seller';
  sellerData?: SellerProfile;
}

interface SellerProfile {
  storeName: string;
  category: string;
  description: string;
  rating: number;
  salesCount: number;
  createdAt: string;
}

interface Product {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  characteristics: Record<string, string>;
  stock: number;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  createdAt: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  buyerId: string;
  items: CartItem[];
  totalAmount: number;
  buyerCommission: number;
  sellerRevenue: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: Address;
  createdAt: string;
}
```

### Commission Calculator
```typescript
function calculateOrder(productPrice: number, quantity: number) {
  const subtotal = productPrice * quantity;
  const buyerCommission = Math.round(subtotal * 0.02); // 2%
  const sellerRevenue = Math.round(subtotal * 0.95);   // 95% (5% commission)
  const total = subtotal + buyerCommission;
  return { subtotal, buyerCommission, sellerRevenue, total };
}
```
