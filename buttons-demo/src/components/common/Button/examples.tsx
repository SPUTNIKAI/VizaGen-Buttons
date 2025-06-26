'use client';

import { Button } from "./index";
import { UserIcon, CameraIcon, PlusIcon, TrashIcon, DownloadIcon } from "./icons";

/**
 * Полный набор примеров кнопок согласно дизайну Figma
 * Демонстрирует все цвета, варианты и состояния
 */

export function ButtonExamples() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Primary Color - Все варианты и состояния */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">
            Primary Color - Все варианты и состояния
          </h2>
          
          {/* Без иконок */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-300 mb-4">Без иконок</h3>
            <div className="grid grid-cols-3 gap-8">
              {/* Solid */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">Solid</h4>
                <div className="space-y-6">
                  <Button color="primary" variant="solid">Default</Button>
                  <Button color="primary" variant="solid" className="bg-[#1ABAA6] hover:bg-[#1ABAA6]">Active</Button>
                  <Button color="primary" variant="solid" className="hover:bg-[#00C2AC]">Hover</Button>
                  <Button color="primary" variant="solid" isDisabled>Disabled</Button>
                </div>
              </div>
              
              {/* Light */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">Light</h4>
                <div className="space-y-6">
                  <Button color="primary" variant="light">Default</Button>
                  <Button color="primary" variant="light" className="bg-[#00D6BF]/30">Active</Button>
                  <Button color="primary" variant="light" className="hover:bg-[#00D6BF]/20">Hover</Button>
                  <Button color="primary" variant="light" isDisabled>Disabled</Button>
                </div>
              </div>
              
              {/* Flat */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">Flat</h4>
                <div className="space-y-6">
                  <Button color="primary" variant="flat">Default</Button>
                  <Button color="primary" variant="flat" className="bg-[#00D6BF]/40">Active</Button>
                  <Button color="primary" variant="flat" className="hover:bg-[#00D6BF]/30">Hover</Button>
                  <Button color="primary" variant="flat" isDisabled>Disabled</Button>
                </div>
              </div>
            </div>
          </div>

          {/* С иконками */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-300 mb-4">С иконками</h3>
            <div className="grid grid-cols-3 gap-8">
              {/* Solid */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">Solid</h4>
                <div className="space-y-6">
                  <Button color="primary" variant="solid" startIcon={<UserIcon />}>Default</Button>
                  <Button color="primary" variant="solid" startIcon={<UserIcon />} className="bg-[#1ABAA6]">Active</Button>
                  <Button color="primary" variant="solid" startIcon={<UserIcon />} className="hover:bg-[#00C2AC]">Hover</Button>
                  <Button color="primary" variant="solid" startIcon={<UserIcon />} isDisabled>Disabled</Button>
                </div>
              </div>
              
              {/* Light */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">Light</h4>
                <div className="space-y-6">
                  <Button color="primary" variant="light" startIcon={<UserIcon />}>Default</Button>
                  <Button color="primary" variant="light" startIcon={<UserIcon />} className="bg-[#00D6BF]/30">Active</Button>
                  <Button color="primary" variant="light" startIcon={<UserIcon />} className="hover:bg-[#00D6BF]/20">Hover</Button>
                  <Button color="primary" variant="light" startIcon={<UserIcon />} isDisabled>Disabled</Button>
                </div>
              </div>
              
              {/* Flat */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">Flat</h4>
                <div className="space-y-6">
                  <Button color="primary" variant="flat" startIcon={<UserIcon />}>Default</Button>
                  <Button color="primary" variant="flat" startIcon={<UserIcon />} className="bg-[#00D6BF]/40">Active</Button>
                  <Button color="primary" variant="flat" startIcon={<UserIcon />} className="hover:bg-[#00D6BF]/30">Hover</Button>
                  <Button color="primary" variant="flat" startIcon={<UserIcon />} isDisabled>Disabled</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Только иконки */}
          <div>
            <h3 className="text-lg font-medium text-gray-300 mb-4">Только иконки</h3>
            <div className="flex gap-12">
              <Button color="primary" variant="solid" isIconOnly>
                <UserIcon />
              </Button>
              <Button color="primary" variant="light" isIconOnly>
                <CameraIcon />
              </Button>
              <Button color="primary" variant="flat" isIconOnly>
                <PlusIcon />
              </Button>
            </div>
          </div>
        </section>

        {/* Все цветовые схемы */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">
            Все цветовые схемы
          </h2>
          
          <div className="grid grid-cols-2 gap-12">
            {/* Secondary (Gold) */}
            <div>
              <h3 className="text-lg font-medium text-yellow-400 mb-6">Secondary (Gold)</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <Button color="secondary" variant="solid">Solid</Button>
                  <Button color="secondary" variant="light">Light</Button>
                  <Button color="secondary" variant="flat">Flat</Button>
                </div>
              </div>
            </div>

            {/* Success (Green) */}
            <div>
              <h3 className="text-lg font-medium text-green-400 mb-6">Success (Green)</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <Button color="success" variant="solid">Take a photo</Button>
                  <Button color="success" variant="light">Light</Button>
                  <Button color="success" variant="flat">Flat</Button>
                </div>
              </div>
            </div>

            {/* Info (Blue) */}
            <div>
              <h3 className="text-lg font-medium text-blue-400 mb-6">Info (Blue)</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <Button color="info" variant="solid">Solid Blue</Button>
                  <Button color="info" variant="light">Light</Button>
                  <Button color="info" variant="flat">Flat</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Размеры */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Размеры</h2>
          <div className="flex gap-8 items-end">
            <Button color="primary" variant="solid" size="sm">Small</Button>
            <Button color="primary" variant="solid" size="md">Medium</Button>
            <Button color="primary" variant="solid" size="lg">Large</Button>
            <Button color="primary" variant="solid" size="figma">Figma Size</Button>
          </div>
        </section>

        {/* Специальные кнопки */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Специальные кнопки</h2>
          <div className="space-y-6">
            <div className="flex gap-8">
              <Button 
                color="secondary" 
                variant="solid"
                size="figma"
                radius="figma"
              >
                Сгенерировать за 380 ₽
              </Button>
              <Button 
                color="primary" 
                variant="solid"
                size="figma"
                radius="figma"
                startIcon={<DownloadIcon />}
              >
                Pure Figma Styles
              </Button>
            </div>
          </div>
        </section>

        {/* Интерактивные состояния */}
        <section className="pb-8">
          <h2 className="text-2xl font-bold text-white mb-8">Интерактивные состояния</h2>
          <div className="flex gap-6">
            <Button color="primary" variant="solid">Normal</Button>
            <Button color="primary" variant="solid" isLoading>Loading</Button>
            <Button color="success" variant="flat" isLoading>Loading with text</Button>
            <Button color="secondary" variant="light" isDisabled>Disabled</Button>
          </div>
        </section>

        {/* Примеры из HeroUI документации */}
        <section className="pb-8">
          <h2 className="text-2xl font-bold text-white mb-8">Примеры из HeroUI документации</h2>
          <div className="flex gap-6">
            <Button color="success" variant="solid" startIcon={<CameraIcon />}>Take a photo</Button>
            <Button color="info" variant="light">Delete user</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ButtonExamples; 