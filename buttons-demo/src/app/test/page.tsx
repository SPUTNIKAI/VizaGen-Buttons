'use client';

import { Button, UserIcon, CameraIcon, PlusIcon } from '@/components/common/Button';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Тест отображения цветов
        </h1>
        
        {/* Тест иконок */}
        <div className="mb-8">
          <h2 className="text-xl text-white mb-4">Тест иконок</h2>
          <div className="flex gap-8 mb-6">
            <Button color="primary" variant="solid" startIcon={<UserIcon />}>
              С UserIcon
            </Button>
            <Button color="primary" variant="light" startIcon={<CameraIcon />}>
              С CameraIcon  
            </Button>
            <Button color="primary" variant="flat" startIcon={<PlusIcon />}>
              С PlusIcon
            </Button>
          </div>
          
          {/* Прямые иконки для проверки */}
          <div className="flex gap-4 mb-4">
            <div className="text-white">
              <UserIcon />
            </div>
            <div className="text-teal-500">
              <CameraIcon />
            </div>
            <div className="text-green-500">
              <PlusIcon />
            </div>
          </div>
        </div>
        
        {/* Тест 1: Жёстко закодированные стили */}
        <div className="mb-8">
          <h2 className="text-xl text-white mb-4">1. Жёстко закодированные стили</h2>
          <div className="flex gap-8 mb-6">
            <button className="px-4 h-12 bg-teal-500 text-white rounded-2xl">
              Solid Primary
            </button>
            <button className="px-4 h-12 bg-teal-500/10 text-teal-500 border border-teal-500/20 rounded-2xl">
              Light Primary
            </button>
            <button className="px-4 h-12 bg-teal-500/20 text-teal-500 rounded-2xl">
              Flat Primary
            </button>
          </div>
        </div>

        {/* Тест 2: CSS переменные */}
        <div className="mb-8">
          <h2 className="text-xl text-white mb-4">2. CSS переменные</h2>
          <div className="flex gap-4 mb-4">
            <button 
              className="px-4 h-12 bg-[var(--btn-bg)] text-[var(--btn-text)] rounded-2xl"
              style={{
                '--btn-bg': '#00D6BF',
                '--btn-text': '#ffffff'
              } as any}
            >
              Solid с переменными
            </button>
            <button 
              className="px-4 h-12 bg-[var(--btn-bg)]/10 text-[var(--btn-color)] rounded-2xl"
              style={{
                '--btn-bg': '#00D6BF',
                '--btn-color': '#00D6BF'
              } as any}
            >
              Light с переменными
            </button>
          </div>
        </div>

        {/* Тест 3: Tailwind цвета */}
        <div className="mb-8">
          <h2 className="text-xl text-white mb-4">3. Tailwind цвета</h2>
          <div className="flex gap-4 mb-4">
            <button className="px-4 h-12 bg-emerald-500 text-white rounded-2xl">
              Emerald
            </button>
            <button className="px-4 h-12 bg-blue-500 text-white rounded-2xl">
              Blue
            </button>
            <button className="px-4 h-12 bg-amber-500 text-white rounded-2xl">
              Amber
            </button>
          </div>
        </div>

        {/* Тест 4: Проверка text-* классов */}
        <div className="mb-8">
          <h2 className="text-xl text-white mb-4">4. Проверка text-* классов</h2>
          <div className="flex gap-4 mb-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-teal-500">text-teal-500</p>
              <p className="text-emerald-500">text-emerald-500</p>
              <p className="text-blue-500">text-blue-500</p>
              <p className="text-amber-500">text-amber-500</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="/" 
            className="text-teal-500 hover:text-teal-400 underline"
          >
            ← Назад к главной
          </a>
        </div>
      </div>
    </div>
  );
} 