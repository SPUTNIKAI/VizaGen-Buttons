import { semanticColors } from "./palette";

/**
 * Варианты стилей для Button компонента
 * Основан на дизайн-системе с полной цветовой палитрой
 */

/**
 * Функция для создания CSS-переменных из цветов
 */
const createColorVariables = (colors: any) => ({
  '--btn-bg': colors.default,
  '--btn-bg-hover': colors.hover,
  '--btn-bg-active': colors.active,
  '--btn-bg-disabled': colors.disabled,
  '--btn-text': colors.text,
  '--btn-text-disabled': colors.textDisabled,
});

/**
 * Основные варианты кнопок
 */
export const buttonVariants = {
  // Базовые стили
  base: [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "transition-all",
    "duration-200",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed",
    "select-none",
    "relative",
    "overflow-hidden",
  ].join(" "),

  // Варианты дизайна
  variant: {
    solid: [
      "bg-[var(--btn-bg)]",
      "text-[var(--btn-text)]",
      "hover:bg-[var(--btn-bg-hover)]",
      "active:bg-[var(--btn-bg-active)]",
      "disabled:bg-[var(--btn-bg-disabled)]",
      "disabled:text-[var(--btn-text-disabled)]",
      "shadow-lg",
      "hover:shadow-xl",
      "hover:scale-[1.02]",
      "active:scale-[0.98]",
    ].join(" "),
    
    light: [
      "bg-[var(--btn-bg)]/10",
      "text-[var(--btn-bg)]",
      "hover:bg-[var(--btn-bg)]/20",
      "active:bg-[var(--btn-bg)]/30",
      "disabled:bg-[var(--btn-bg-disabled)]/10",
      "disabled:text-[var(--btn-text-disabled)]",
      "border",
      "border-[var(--btn-bg)]/20",
      "hover:border-[var(--btn-bg)]/40",
    ].join(" "),
    
    flat: [
      "bg-[var(--btn-bg)]/20",
      "text-[var(--btn-bg)]",
      "hover:bg-[var(--btn-bg)]/30",
      "active:bg-[var(--btn-bg)]/40",
      "disabled:bg-[var(--btn-bg-disabled)]/20",
      "disabled:text-[var(--btn-text-disabled)]",
      "backdrop-blur-sm",
    ].join(" "),
  },
  
  // Размеры
  size: {
    sm: "px-3 h-8 text-sm gap-1 min-w-16",
    md: "px-4 h-10 text-sm gap-2 min-w-20",
    lg: "px-6 h-12 text-base gap-2 min-w-24",
    figma: "px-4 h-12 text-base gap-2 min-w-[156px]", // Из дизайна Figma
  },
  
  // Радиус углов
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    figma: "rounded-2xl", // 16px из дизайна
  },
  
  // Модификаторы
  modifiers: {
    iconOnly: "aspect-square min-w-0 p-0",
    loading: "cursor-wait opacity-80",
    disabled: "pointer-events-none",
    fullWidth: "w-full",
  },
} as const;

/**
 * Стили для конкретных цветовых схем
 */
export const colorStyles = {
  primary: createColorVariables(semanticColors.button.primary),
  secondary: createColorVariables(semanticColors.button.secondary),
  success: createColorVariables(semanticColors.button.success),
  info: createColorVariables(semanticColors.button.info),
};

/**
 * Специальные стили из дизайна Figma
 */
export const figmaButtonStyles = {
  // Чистые стили из дизайна Figma
  figmaStyle: [
    "px-4",
    "min-w-[156px]",
    "h-12", 
    "text-base",
    "gap-2",
    "rounded-2xl",
    "font-medium",
    "transition-all",
    "duration-200",
    "flex",
    "items-center",
    "justify-center",
    "shadow-lg",
    "hover:scale-[1.02]",
    "active:scale-[0.98]",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
  ].join(" "),
  
  // Контейнеры для контента
  iconContainer: "flex items-center justify-center",
  contentWrapper: "flex items-center gap-2",
  
  // Эффекты
  ripple: "after:absolute after:inset-0 after:bg-white after:opacity-0 hover:after:opacity-10 after:transition-opacity",
} as const;

/**
 * Утилиты для работы с вариантами
 */
export const getButtonStyle = (
  variant: keyof typeof buttonVariants.variant,
  color: keyof typeof colorStyles,
  size: keyof typeof buttonVariants.size = 'md',
  radius: keyof typeof buttonVariants.radius = 'md',
  additionalClasses?: string
) => {
  const colorVars = colorStyles[color];
  const variantClass = buttonVariants.variant[variant];
  const sizeClass = buttonVariants.size[size];
  const radiusClass = buttonVariants.radius[radius];
  
  return {
    style: colorVars,
    className: `${buttonVariants.base} ${variantClass} ${sizeClass} ${radiusClass} ${additionalClasses || ""}`,
  };
}; 