import * as React from "react";
import { ButtonProps } from "./types";
import { buttonVariants, colorStyles, figmaButtonStyles, getButtonStyle } from "./variants";

// Временная утилита для объединения классов (до установки HeroUI)
const cn = (...classes: (string | readonly string[] | undefined | false)[]): string => {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ");
};

/**
 * Общий компонент Button на основе дизайн-системы VizaGen
 * Использует полную цветовую палитру и систему вариантов из Figma
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      color = "primary",
      variant = "solid", 
      size = "md",
      radius = "md",
      startIcon,
      endIcon,
      startContent,
      endContent,
      useFigmaStyles = false,
      isDisabled = false,
      isLoading = false,
      isIconOnly = false,
      fullWidth = false,
      onPress,
      onClick,
      ...props
    },
    ref
  ) => {
    // Определяем финальные startContent и endContent
    const finalStartContent = startIcon || startContent;
    const finalEndContent = endIcon || endContent;

    // Обработчик клика с поддержкой как onPress, так и onClick
    const handlePress = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isDisabled || isLoading) return;
        
        if (onPress) {
          onPress(e);
        }
        if (onClick) {
          onClick(e);
        }
      },
      [onPress, onClick, isDisabled, isLoading]
    );

    // Если используются чистые стили Figma
    if (useFigmaStyles) {
      const figmaClasses = cn(
        figmaButtonStyles.figmaStyle,
        isDisabled && "opacity-50 cursor-not-allowed",
        isLoading && "cursor-wait opacity-80",
        isIconOnly && "aspect-square min-w-0 p-0",
        fullWidth && "w-full",
        className
      );

      return (
        <button
          ref={ref}
          className={figmaClasses}
          style={{
            backgroundColor: '#24D7C0',
            color: '#000000',
            ...props.style,
          }}
          disabled={isDisabled || isLoading}
          onClick={handlePress}
          {...props}
        >
          {isLoading && !finalStartContent && (
            <span className="animate-spin mr-2">⟳</span>
          )}
          {finalStartContent}
          {!isIconOnly && children}
          {finalEndContent}
        </button>
      );
    }

    // Получаем стили для выбранного цвета и варианта
    const buttonStyle = getButtonStyle(variant, color, size, radius);
    
    // Собираем классы
    const buttonClasses = cn(
      buttonStyle.className,
      isIconOnly && buttonVariants.modifiers.iconOnly,
      isLoading && buttonVariants.modifiers.loading,
      isDisabled && buttonVariants.modifiers.disabled,
      fullWidth && buttonVariants.modifiers.fullWidth,
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        style={{
          ...buttonStyle.style,
          ...props.style,
        }}
        disabled={isDisabled || isLoading}
        onClick={handlePress}
        {...props}
      >
        {isLoading && !isIconOnly && (
          <span className="animate-spin">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
          </span>
        )}
        
        {finalStartContent && !isLoading}
        
        {!isIconOnly && children}
        
        {finalEndContent}
      </button>
    );
  }
);

Button.displayName = "Button";

// Экспортируем все нужные части системы
export type { ButtonProps };
export { 
  figmaButtonStyles, 
  buttonVariants, 
  colorStyles, 
  getButtonStyle 
};

// Экспортируем иконки для удобства
export { 
  UserIcon, 
  CameraIcon, 
  PlusIcon, 
  TrashIcon, 
  DownloadIcon,
  type IconProps 
} from "./icons";

// Экспортируем палитру для расширенного использования
export { colorPalette, semanticColors } from "./palette"; 