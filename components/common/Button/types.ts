import * as React from "react";

// Цвета из дизайн-системы
export type ButtonColor = 
  | "primary"    // Бирюзовый #00D6BF
  | "secondary"  // Желтый/Gold  
  | "success"    // Зеленый
  | "info";      // Синий

// Варианты кнопки из дизайна Figma
export type ButtonVariant = 
  | "solid"  // Сплошная заливка
  | "light"  // Светлый вариант
  | "flat";  // Плоский вариант

// Размеры с учетом дизайна  
export type ButtonSize = 
  | "sm" 
  | "md" 
  | "lg"
  | "figma"; // Размер из дизайна (156×48)

// Радиус border
export type ButtonRadius = 
  | "none" 
  | "sm" 
  | "md" 
  | "lg" 
  | "full"
  | "figma"; // Радиус из дизайна (16px)

// Базовые props на основе стандартных HTML button атрибутов
interface BaseButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Контент кнопки */
  children?: React.ReactNode;
  /** Цвет кнопки */
  color?: ButtonColor;
  /** Вариант отображения */
  variant?: ButtonVariant;
  /** Размер кнопки */
  size?: ButtonSize;
  /** Радиус углов */
  radius?: ButtonRadius;
  /** Кастомная иконка слева (как в дизайне) */
  startIcon?: React.ReactNode;
  /** Кастомная иконка справа (как в дизайне) */
  endIcon?: React.ReactNode;
  /** Контент в начале кнопки (совместимость с HeroUI) */
  startContent?: React.ReactNode;
  /** Контент в конце кнопки (совместимость с HeroUI) */
  endContent?: React.ReactNode;
  /** Кнопка отключена */
  isDisabled?: boolean;
  /** Состояние загрузки */
  isLoading?: boolean;
  /** Кнопка только с иконкой */
  isIconOnly?: boolean;
  /** Кнопка на всю ширину */
  fullWidth?: boolean;
  /** Применить стили из дизайна Figma */
  useFigmaStyles?: boolean;
  /** Обработчик нажатия (совместимость с HeroUI) */
  onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Отключить анимацию ripple */
  disableRipple?: boolean;
  /** Отключить все анимации */
  disableAnimation?: boolean;
  /** Кастомный спиннер для состояния загрузки */
  spinner?: React.ReactNode;
  /** Позиция спиннера */
  spinnerPlacement?: "start" | "end";
}

// Основной интерфейс для Button
export interface ButtonProps extends BaseButtonProps {}

// Экспорт для переиспользования
export type { ButtonProps as CommonButtonProps }; 