import * as React from "react";
import { Button } from "./index";
import { UserIcon, CameraIcon, PlusIcon, TrashIcon, DownloadIcon } from "./icons";

/**
 * Полный набор примеров кнопок согласно дизайну Figma
 * Демонстрирует все цвета, варианты и состояния
 */

export const ButtonExamples = () => {
  return (
    <div className="space-y-12 p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center">VizaGen Button System</h1>

      {/* Основные варианты - Primary Color */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Primary Color - Все варианты и состояния</h2>
        
        {/* Без иконок */}
        <div className="mb-8">
          <h3 className="text-lg mb-4">Без иконок</h3>
          <div className="grid grid-cols-4 gap-4">
            {/* Solid */}
            <div>
              <h4 className="text-sm mb-2 text-gray-400">Solid</h4>
              <div className="space-y-2">
                <Button variant="solid" color="primary">Default</Button>
                <Button variant="solid" color="primary" className="!bg-[#00D6A8]">Active</Button>
                <Button variant="solid" color="primary" className="!bg-[#00D6A8]">Hover</Button>
                <Button variant="solid" color="primary" isDisabled>Disabled</Button>
              </div>
            </div>
            
            {/* Light */}
            <div>
              <h4 className="text-sm mb-2 text-gray-400">Light</h4>
              <div className="space-y-2">
                <Button variant="light" color="primary">Default</Button>
                <Button variant="light" color="primary" className="opacity-80">Active</Button>
                <Button variant="light" color="primary" className="opacity-90">Hover</Button>
                <Button variant="light" color="primary" isDisabled>Disabled</Button>
              </div>
            </div>
            
            {/* Flat */}
            <div>
              <h4 className="text-sm mb-2 text-gray-400">Flat</h4>
              <div className="space-y-2">
                <Button variant="flat" color="primary">Default</Button>
                <Button variant="flat" color="primary" className="opacity-80">Active</Button>
                <Button variant="flat" color="primary" className="opacity-90">Hover</Button>
                <Button variant="flat" color="primary" isDisabled>Disabled</Button>
              </div>
            </div>
          </div>
        </div>

        {/* С иконками */}
        <div className="mb-8">
          <h3 className="text-lg mb-4">С иконками</h3>
          <div className="grid grid-cols-4 gap-4">
            {/* Solid с иконками */}
            <div>
              <h4 className="text-sm mb-2 text-gray-400">Solid</h4>
              <div className="space-y-2">
                <Button variant="solid" color="primary" startContent={<UserIcon size={16} />}>Default</Button>
                <Button variant="solid" color="primary" startContent={<UserIcon size={16} />} className="!bg-[#00D6A8]">Active</Button>
                <Button variant="solid" color="primary" startContent={<UserIcon size={16} />} className="!bg-[#00D6A8]">Hover</Button>
                <Button variant="solid" color="primary" startContent={<UserIcon size={16} />} isDisabled>Disabled</Button>
              </div>
            </div>
            
            {/* Light с иконками */}
            <div>
              <h4 className="text-sm mb-2 text-gray-400">Light</h4>
              <div className="space-y-2">
                <Button variant="light" color="primary" startContent={<UserIcon size={16} />}>Default</Button>
                <Button variant="light" color="primary" startContent={<UserIcon size={16} />} className="opacity-80">Active</Button>
                <Button variant="light" color="primary" startContent={<UserIcon size={16} />} className="opacity-90">Hover</Button>
                <Button variant="light" color="primary" startContent={<UserIcon size={16} />} isDisabled>Disabled</Button>
              </div>
            </div>
            
            {/* Flat с иконками */}
            <div>
              <h4 className="text-sm mb-2 text-gray-400">Flat</h4>
              <div className="space-y-2">
                <Button variant="flat" color="primary" startContent={<UserIcon size={16} />}>Default</Button>
                <Button variant="flat" color="primary" startContent={<UserIcon size={16} />} className="opacity-80">Active</Button>
                <Button variant="flat" color="primary" startContent={<UserIcon size={16} />} className="opacity-90">Hover</Button>
                <Button variant="flat" color="primary" startContent={<UserIcon size={16} />} isDisabled>Disabled</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Только иконки */}
        <div className="mb-8">
          <h3 className="text-lg mb-4">Только иконки</h3>
          <div className="flex gap-4">
            <Button isIconOnly variant="solid" color="primary">
              <UserIcon size={16} />
            </Button>
            <Button isIconOnly variant="light" color="primary">
              <UserIcon size={16} />
            </Button>
            <Button isIconOnly variant="flat" color="primary">
              <UserIcon size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Все цветовые схемы */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Все цветовые схемы</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Secondary (Gold) */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-400">Secondary (Gold)</h3>
            <div className="space-y-2">
              <Button variant="solid" color="secondary">Solid</Button>
              <Button variant="light" color="secondary">Light</Button>
              <Button variant="flat" color="secondary">Flat</Button>
            </div>
          </div>

          {/* Success (Green) */}
          <div>
            <h3 className="text-lg mb-4 text-green-400">Success (Green)</h3>
            <div className="space-y-2">
              <Button variant="solid" color="success" startContent={<CameraIcon size={16} />}>
                Take a photo
              </Button>
              <Button variant="light" color="success">Light</Button>
              <Button variant="flat" color="success">Flat</Button>
            </div>
          </div>

          {/* Info (Blue) */}
          <div>
            <h3 className="text-lg mb-4 text-blue-400">Info (Blue)</h3>
            <div className="space-y-2">
              <Button variant="solid" color="info" startContent={<UserIcon size={16} />}>
                Solid Blue
              </Button>
              <Button variant="light" color="info">Light</Button>
              <Button variant="flat" color="info">Flat</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Размеры */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Размеры</h2>
        <div className="flex gap-4 items-center">
          <Button size="sm" color="primary">Small</Button>
          <Button size="md" color="primary">Medium</Button>
          <Button size="lg" color="primary">Large</Button>
          <Button size="figma" color="primary">Figma Size</Button>
        </div>
      </section>

      {/* Специальные кнопки */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Специальные кнопки</h2>
        <div className="space-y-4">
          {/* Кнопка с ценой как в дизайне */}
          <Button 
            variant="solid" 
            color="secondary" 
            size="figma"
            startContent={<PlusIcon size={16} />}
            endContent={<span className="text-sm">₽</span>}
          >
            Сгенерировать за 380
          </Button>

          {/* Кнопка Figma стиль */}
          <Button 
            useFigmaStyles
            startContent={<UserIcon size={20} />}
          >
            Pure Figma Styles
          </Button>

          {/* Полная ширина */}
          <Button 
            variant="solid" 
            color="primary" 
            fullWidth
            startContent={<DownloadIcon size={16} />}
          >
            Кнопка на всю ширину
          </Button>
        </div>
      </section>

      {/* Состояния */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Интерактивные состояния</h2>
        <div className="flex gap-4 items-center">
          <Button color="primary">Normal</Button>
          <Button color="primary" isLoading>Loading</Button>
          <Button color="primary" isDisabled>Disabled</Button>
          <Button color="secondary" isLoading startContent={<CameraIcon size={16} />}>
            Loading with Icon
          </Button>
        </div>
      </section>

      {/* Примеры из HeroUI документации */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Примеры из HeroUI документации</h2>
        <div className="flex gap-4 items-center">
          <Button color="success" endContent={<CameraIcon size={16} />}>
            Take a photo
          </Button>
          <Button color="info" startContent={<UserIcon size={16} />} variant="light">
            Delete user
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples; 