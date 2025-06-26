# System Patterns - VizaGen

## Архитектура компонентов

### Структура папок
```
components/
├── common/
│   ├── Button/          # Сложные компоненты (папка)
│   │   ├── index.tsx    # Основной компонент
│   │   ├── types.ts     # Типы компонента
│   │   └── variants.ts  # Варианты стилизации
│   └── SimpleComponent.tsx  # Простые компоненты (файл)
```

### Паттерн расширения HeroUI компонентов

1. **Прямое использование HeroUI** - для базовых случаев
2. **Обертка (Wrapper)** - для добавления бизнес-логики
3. **Расширение variants** - для кастомных стилей через `extendVariants`

### Именование и экспорт
- Компоненты именуются в PascalCase
- Экспорт через `index.tsx` для папок
- Re-export всех типов и вариантов

### Типизация
- Расширение базовых типов HeroUI
- Добавление кастомных пропсов через intersection
- Строгая типизация для variants

## Паттерны стилизации

### Приоритет стилей
1. HeroUI default styles
2. Custom variants (через extendVariants)
3. className overrides
4. Inline styles (избегать)

### Responsive design
- Использование Tailwind responsive утилит
- Mobile-first подход
- Адаптивные variants

## Accessibility
- Следование React Aria паттернам
- Сохранение keyboard navigation
- Поддержка screen readers
- ARIA атрибуты из коробки (через HeroUI) 