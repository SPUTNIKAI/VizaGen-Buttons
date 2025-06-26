# Active Context - VizaGen

## Текущая задача
Создание общего компонента Button в папке `components/common` на основе HeroUI Button компонента.

## Что нужно реализовать

### 1. Структура Button компонента
- Создать `components/common/Button/` папку
- Основной файл `index.tsx` с компонентом
- Файл `types.ts` для типов
- Файл `variants.ts` для кастомных вариантов (если нужно)

### 2. Функциональность
- Поддержка всех базовых HeroUI Button props
- Все стандартные состояния (hover, focus, active, disabled, loading)
- Все варианты стилизации из дизайна
- TypeScript типизация

### 3. API компонента
Базируется на HeroUI Button API:
- `variant`: solid | bordered | light | flat | faded | shadow | ghost
- `color`: default | primary | secondary | success | warning | danger  
- `size`: sm | md | lg
- `radius`: none | sm | md | lg | full
- `isDisabled`, `isLoading`, `fullWidth`, `isIconOnly`
- `startContent`, `endContent` для иконок
- Event handlers: `onPress`, `onPressStart`, etc.

## Выполнено ✅
1. ✅ Создана структура папки Button
2. ✅ Реализован основной компонент с поддержкой HeroUI API
3. ✅ Добавлена полная TypeScript типизация
4. ✅ Созданы кастомные стили для дизайна Figma (#24D7C0)
5. ✅ Создан файл примеров использования

## Следующие шаги
1. Установить зависимости: `npm install @heroui/react tailwindcss framer-motion`
2. Настроить Tailwind CSS в проекте
3. Заменить временную реализацию на настоящий HeroUI Button
4. Протестировать все состояния и варианты
5. Создать дополнительные общие компоненты

## Дизайн требования
- Следовать дизайн-системе проекта
- Поддерживать все состояния согласно дизайну
- Обеспечить консистентность с другими компонентами

## Технические ограничения
- Использовать только HeroUI как базу
- Сохранить все accessibility возможности
- Поддерживать TypeScript
- Следовать архитектурным паттернам проекта 