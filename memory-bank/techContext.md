# Tech Context - VizaGen

## Основные технологии

### UI Framework
- **HeroUI v2.7.0** - основная UI библиотека
  - Построена на основе Tailwind CSS и React Aria
  - Предоставляет готовые компоненты с accessibility
  - Поддерживает кастомизацию через variants

### Frontend Stack
- **React** - основной фреймворк для UI
- **TypeScript** - для типобезопасности
- **Tailwind CSS** - CSS framework (через HeroUI)
- **React Aria** - для accessibility (через HeroUI)

## HeroUI Button - Технические детали

### Доступные варианты (variants)
- `solid` | `bordered` | `light` | `flat` | `faded` | `shadow` | `ghost`

### Цвета (color)
- `default` | `primary` | `secondary` | `success` | `warning` | `danger`

### Размеры (size)
- `sm` | `md` | `lg`

### Радиус (radius)
- `none` | `sm` | `md` | `lg` | `full`

### Состояния
- `isDisabled` - отключенное состояние
- `isLoading` - состояние загрузки со спиннером
- `fullWidth` - кнопка на всю ширину
- `isIconOnly` - только иконка

### Дополнительные возможности
- `startContent` и `endContent` - контент в начале и конце
- `spinner` - кастомный спиннер
- `spinnerPlacement` - позиция спиннера
- `disableRipple` - отключение ripple эффекта
- `disableAnimation` - отключение анимаций

## Методы расширения
- `extendVariants()` - для создания кастомных вариантов
- `className` - для переопределения стилей
- Tailwind classes работают напрямую с HeroUI 