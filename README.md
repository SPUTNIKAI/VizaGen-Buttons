# VizaGen - Общие UI компоненты

Библиотека общих UI компонентов на основе HeroUI с поддержкой кастомного дизайна.

## Установка зависимостей

```bash
npm install @heroui/react tailwindcss framer-motion
```

## Настройка Tailwind CSS

Создайте `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

module.exports = {
  content: [
    // Ваши файлы
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // HeroUI компоненты
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
```

## Использование Button компонента

### Базовый пример

```tsx
import { Button } from "./components/common/Button";

function App() {
  return (
    <div>
      <Button color="primary">Обычная кнопка</Button>
      <Button color="cyan">Кнопка из дизайна</Button>
    </div>
  );
}
```

### Кнопка согласно дизайну Figma

```tsx
import { Button, UserIcon } from "./components/common/Button";

function FigmaButton() {
  return (
    <Button 
      color="cyan"           // Цвет #24D7C0
      size="figma"          // Размер 156×48px
      radius="figma"        // Border radius 16px
      startIcon={<UserIcon size={20} />}  // Иконка слева
    >
      Кнопка
    </Button>
  );
}
```

### Примеры с иконками (точно как в HeroUI)

```tsx
import { Button, UserIcon, CameraIcon } from "./components/common/Button";

function IconExamples() {
  return (
    <div className="flex gap-4 items-center">
      <Button color="success" endContent={<CameraIcon />}>
        Take a photo
      </Button>
      <Button color="danger" startContent={<UserIcon />} variant="bordered">
        Delete user
      </Button>
    </div>
  );
}
```

### Все доступные props

```tsx
interface ButtonProps {
  // Внешний вид
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "cyan";
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  size?: "sm" | "md" | "lg" | "figma";
  radius?: "none" | "sm" | "md" | "lg" | "full" | "figma";
  
  // Содержимое
  children?: React.ReactNode;
  startIcon?: React.ReactNode;     // Иконка слева (кастомное)
  endIcon?: React.ReactNode;       // Иконка справа (кастомное)
  startContent?: React.ReactNode;  // Контент слева (HeroUI)
  endContent?: React.ReactNode;    // Контент справа (HeroUI)
  
  // Состояния
  isDisabled?: boolean;
  isLoading?: boolean;
  isIconOnly?: boolean;
  fullWidth?: boolean;
  
  // События
  onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  
  // Дополнительно
  className?: string;
  useFigmaStyles?: boolean; // Использовать чистые стили Figma
}
```

### Примеры использования

```tsx
// Размеры
<Button size="sm">Маленькая</Button>
<Button size="md">Средняя</Button>
<Button size="lg">Большая</Button>
<Button size="figma">Размер из дизайна</Button>

// Цвета
<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="danger">Danger</Button>
<Button color="cyan">Cyan (из дизайна)</Button>

// Состояния
<Button isDisabled>Отключена</Button>
<Button isLoading>Загрузка</Button>
<Button fullWidth>На всю ширину</Button>

// С иконками
<Button startIcon={<UserIcon />}>С иконкой</Button>
<Button isIconOnly><UserIcon /></Button>

// Обработчики событий
<Button onPress={() => console.log('Pressed!')}>
  onPress
</Button>
<Button onClick={() => console.log('Clicked!')}>
  onClick
</Button>
```

## Структура проекта

```
components/
├── common/
│   └── Button/
│       ├── index.tsx      # Основной компонент
│       ├── types.ts       # TypeScript типы
│       ├── variants.ts    # Кастомные стили
│       └── examples.tsx   # Примеры использования
```

## Дизайн системы

### Цвета из дизайна
- **Primary/500**: `#24D7C0` (cyan)
- **Border radius**: `16px` (figma)
- **Размер**: `156×48px` (figma)
- **Padding**: `16px`

### Поддерживаемые состояния
- ✅ Default (обычное)
- ✅ Hover (наведение)
- ✅ Focus (фокус)
- ✅ Active (нажатие)
- ✅ Disabled (отключено)
- ✅ Loading (загрузка)

## Accessibility

Компонент Button полностью поддерживает accessibility:
- ✅ Keyboard navigation (Space, Enter)
- ✅ Focus management
- ✅ Screen reader support
- ✅ ARIA атрибуты
- ✅ Cross-browser compatibility

## Совместимость

- React 18+
- TypeScript 4.5+
- Tailwind CSS 3.4+
- HeroUI 2.7.0+

## Доступные иконки

Компонент включает набор иконок, совместимых с дизайном:

```tsx
import { 
  UserIcon,      // Иконка пользователя
  CameraIcon,    // Иконка камеры
  PlusIcon,      // Иконка плюса
  TrashIcon,     // Иконка удаления
  DownloadIcon   // Иконка скачивания
} from "./components/common/Button";

// Иконки поддерживают кастомизацию
<UserIcon size={24} fill="#24D7C0" />
<CameraIcon height={20} width={20} />

// Использование в кнопках
<Button startContent={<UserIcon />}>С иконкой</Button>
<Button endContent={<CameraIcon />}>Сделать фото</Button>
```

### Интерфейс иконок

```tsx
interface IconProps {
  fill?: string;      // Цвет заливки (по умолчанию "currentColor")
  size?: number;      // Размер (одинаковая ширина и высота)
  height?: number;    // Высота (если нужна отдельно)
  width?: number;     // Ширина (если нужна отдельно)
  [key: string]: any; // Другие SVG свойства
}
```

## Следующие компоненты

Планируются к созданию:
- Input
- Select
- Modal
- Card
- и другие... 