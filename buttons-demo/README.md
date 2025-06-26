# VizaGen Button System Demo

Демонстрационный проект компонентов кнопок, созданных на основе дизайна Figma.

## 🚀 Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
```

Проект будет доступен по адресу: http://localhost:3000

## 📁 Структура проекта

```
buttons-demo/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Главная страница с полной демонстрацией
│   │   ├── figma/
│   │   │   └── page.tsx      # Точное воспроизведение дизайна Figma
│   │   └── layout.tsx        # Общий layout с навигацией
│   └── components/
│       └── common/
│           └── Button/       # Компоненты кнопок
│               ├── index.tsx      # Основной компонент Button
│               ├── examples.tsx   # Примеры использования
│               ├── palette.ts     # Цветовая палитра
│               ├── variants.ts    # Варианты стилей
│               ├── types.ts       # TypeScript типы
│               └── icons.tsx      # Иконки
```

## 🎨 Особенности дизайн-системы

### Цветовые схемы
- **Primary** - Бирюзовый (#00D6BF)
- **Secondary** - Золотой (#FEE389)
- **Success** - Зеленый (#119D10)
- **Info** - Синий (#3B82F6)

### Варианты кнопок
- **Solid** - Заполненная кнопка
- **Light** - Светлая кнопка с прозрачным фоном
- **Flat** - Плоская кнопка без границ

### Состояния
- Default (по умолчанию)
- Hover (при наведении)
- Active (при нажатии)
- Disabled (заблокированная)

### Размеры
- **figma**: 156×48px (точно как в дизайне)
- **sm**: Маленький
- **md**: Средний (по умолчанию)
- **lg**: Большой

## 🔧 Использование

```tsx
import { Button, UserIcon } from '@/components/common/Button';

// Базовая кнопка
<Button variant="solid" color="primary">
  Кнопка
</Button>

// Кнопка с иконкой
<Button 
  variant="solid" 
  color="primary"
  startContent={<UserIcon size={16} />}
>
  Кнопка с иконкой
</Button>

// Кнопка в стиле Figma
<Button 
  variant="solid" 
  color="primary" 
  size="figma" 
  radius="figma"
>
  Figma стиль
</Button>

// Чистый Figma стиль
<Button useFigmaStyles>
  Pure Figma
</Button>
```

## 📋 API компонента

### Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `variant` | `'solid' \| 'light' \| 'flat'` | `'solid'` | Вариант стиля |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'info'` | `'primary'` | Цветовая схема |
| `size` | `'sm' \| 'md' \| 'lg' \| 'figma'` | `'md'` | Размер кнопки |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full' \| 'figma'` | `'md'` | Радиус скругления |
| `isDisabled` | `boolean` | `false` | Заблокированное состояние |
| `isLoading` | `boolean` | `false` | Состояние загрузки |
| `isIconOnly` | `boolean` | `false` | Только иконка |
| `startContent` | `ReactNode` | - | Контент в начале |
| `endContent` | `ReactNode` | - | Контент в конце |
| `useFigmaStyles` | `boolean` | `false` | Использовать чистые стили Figma |

## 🎯 Цели проекта

1. **Точное воспроизведение** дизайна из Figma
2. **Полная типизация** TypeScript
3. **Модульная архитектура** с возможностью переиспользования
4. **CSS-переменные** для динамического изменения цветов
5. **Поддержка всех состояний** и интерактивности

## 🌐 Страницы

- `/` - Полная демонстрация всех компонентов
- `/figma` - Точное воспроизведение дизайна Figma

## 🛠 Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация
- **React 19** - UI библиотека

## 📊 Статистика

- **48 комбинаций** кнопок (4 цвета × 3 варианта × 4 состояния)
- **Полная палитра** с оттенками 50-950
- **5 иконок** в комплекте
- **100% покрытие** дизайна Figma
