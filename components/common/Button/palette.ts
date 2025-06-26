/**
 * Цветовая палитра дизайн-системы VizaGen
 * Основана на дизайне Figma с оттенками 50-950
 */

export const colorPalette = {
  // Primary - бирюзовый (основной цвет дизайна)
  primary: {
    50: '#E6FFFA',   // самый светлый
    100: '#B2F5EA',  
    200: '#81E6D9',  
    300: '#4FD1C7',  
    400: '#38B2AC',  
    500: '#00D6BF',  // основной цвет из дизайна
    600: '#00B7A3',  
    700: '#009688',  
    800: '#007D6B',  
    900: '#00564A',  
    950: '#003B36',  // самый темный
    hover: '#00D6A8' // специальный hover цвет из палитры
  },

  // Gold - желтый/бежевый
  gold: {
    50: '#FFFEF7',
    100: '#FFFBEB',
    200: '#FEF3C7',
    300: '#FDE68A',
    400: '#FCD34D',
    500: '#FEE389',  // основной из палитры
    600: '#F59E0B',
    700: '#D97706',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
    hover: '#FFC73D' // hover вариант
  },

  // Green - зеленый  
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#119D10',  // основной из палитры
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
    hover: '#22C55E' // hover вариант
  },

  // Blue - синий
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE', 
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#119D10',  // основной из палитры (нужно уточнить)
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
    hover: '#3B82F6' // hover вариант
  },

  // Нейтральные цвета для текста и фонов
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A'
  }
} as const;

/**
 * Типы для цветовых ключей
 */
export type ColorName = keyof typeof colorPalette;
export type ColorShade = keyof typeof colorPalette.primary;

/**
 * Утилита для получения цвета
 */
export const getColor = (color: ColorName, shade: ColorShade): string => {
  return (colorPalette[color] as any)[shade];
};

/**
 * Предустановленные комбинации цветов для компонентов
 */
export const semanticColors = {
  // Для кнопок
  button: {
    primary: {
      default: colorPalette.primary[500],
      hover: colorPalette.primary.hover,
      active: colorPalette.primary[600],
      disabled: colorPalette.primary[300],
      text: colorPalette.neutral[50],
      textDisabled: colorPalette.neutral[400]
    },
    secondary: {
      default: colorPalette.gold[500],
      hover: colorPalette.gold.hover,
      active: colorPalette.gold[600],
      disabled: colorPalette.gold[300],
      text: colorPalette.neutral[800],
      textDisabled: colorPalette.neutral[400]
    },
    success: {
      default: colorPalette.green[500],
      hover: colorPalette.green.hover,
      active: colorPalette.green[600],
      disabled: colorPalette.green[300],
      text: colorPalette.neutral[50],
      textDisabled: colorPalette.neutral[400]
    },
    info: {
      default: colorPalette.blue[500],
      hover: colorPalette.blue.hover,
      active: colorPalette.blue[600],
      disabled: colorPalette.blue[300],
      text: colorPalette.neutral[50],
      textDisabled: colorPalette.neutral[400]
    }
  }
} as const; 