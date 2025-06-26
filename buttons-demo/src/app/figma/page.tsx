'use client';

import React from 'react';
import { Button, UserIcon, CameraIcon, PlusIcon } from '@/components/common/Button';

export default function FigmaPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Figma Recreation
          </h1>
          <p className="text-gray-300 mb-6">
            Точное воспроизведение дизайна из Figma с оригинальными размерами и цветами
          </p>
          <a 
            href="/" 
            className="text-teal-400 hover:text-teal-300 underline"
          >
            ← Назад к главной
          </a>
        </div>

        {/* Точная копия структуры из Figma */}
        <div className="space-y-12">
          {/* Primary Buttons */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6">Primary Buttons</h2>
            
            {/* Без иконок */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 mb-4">Without Icons</h3>
              <div className="flex gap-4 mb-6">
                <Button 
                  color="primary" 
                  variant="solid" 
                  size="figma" 
                  radius="figma"
                >
                  Default
                </Button>
                <Button 
                  color="primary" 
                  variant="light" 
                  size="figma" 
                  radius="figma"
                >
                  Default
                </Button>
                <Button 
                  color="primary" 
                  variant="flat" 
                  size="figma" 
                  radius="figma"
                >
                  Default
                </Button>
              </div>
            </div>

            {/* С иконками */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 mb-4">With Icons</h3>
              <div className="flex gap-4 mb-6">
                <Button 
                  color="primary" 
                  variant="solid" 
                  size="figma" 
                  radius="figma"
                  startIcon={<UserIcon />}
                >
                  Default
                </Button>
                <Button 
                  color="primary" 
                  variant="light" 
                  size="figma" 
                  radius="figma"
                  startIcon={<UserIcon />}
                >
                  Default
                </Button>
                <Button 
                  color="primary" 
                  variant="flat" 
                  size="figma" 
                  radius="figma"
                  startIcon={<UserIcon />}
                >
                  Default
                </Button>
              </div>
            </div>

            {/* Только иконки */}
            <div>
              <h3 className="text-sm text-gray-400 mb-4">Icon Only</h3>
              <div className="flex gap-4">
                <Button 
                  color="primary" 
                  variant="solid" 
                  size="figma" 
                  radius="figma"
                  isIconOnly
                >
                  <UserIcon />
                </Button>
                <Button 
                  color="primary" 
                  variant="light" 
                  size="figma" 
                  radius="figma"
                  isIconOnly
                >
                  <CameraIcon />
                </Button>
                <Button 
                  color="primary" 
                  variant="flat" 
                  size="figma" 
                  radius="figma"
                  isIconOnly
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
          </section>

          {/* All Color Schemes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6">All Color Schemes</h2>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Secondary */}
              <div>
                <h3 className="text-yellow-400 mb-4">Secondary (Gold)</h3>
                <div className="flex gap-4">
                  <Button color="secondary" variant="solid" size="figma" radius="figma">
                    Solid
                  </Button>
                  <Button color="secondary" variant="light" size="figma" radius="figma">
                    Light
                  </Button>
                  <Button color="secondary" variant="flat" size="figma" radius="figma">
                    Flat
                  </Button>
                </div>
              </div>

              {/* Success */}
              <div>
                <h3 className="text-green-400 mb-4">Success (Green)</h3>
                <div className="flex gap-4">
                  <Button color="success" variant="solid" size="figma" radius="figma">
                    Take a photo
                  </Button>
                  <Button color="success" variant="light" size="figma" radius="figma">
                    Light
                  </Button>
                  <Button color="success" variant="flat" size="figma" radius="figma">
                    Flat
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="col-span-2">
                <h3 className="text-blue-400 mb-4">Info (Blue)</h3>
                <div className="flex gap-4">
                  <Button color="info" variant="solid" size="figma" radius="figma">
                    Solid Blue
                  </Button>
                  <Button color="info" variant="light" size="figma" radius="figma">
                    Light
                  </Button>
                  <Button color="info" variant="flat" size="figma" radius="figma">
                    Flat
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Special Buttons */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6">Special Buttons</h2>
            <div className="flex gap-4">
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
                useFigmaStyles
                startIcon={<UserIcon />}
              >
                Pure Figma Styles
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 