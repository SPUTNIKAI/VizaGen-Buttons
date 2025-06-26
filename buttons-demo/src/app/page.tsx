'use client';

import { ButtonExamples } from '@/components/common/Button/examples';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            VizaGen Button System
          </h1>
          <div className="flex justify-center gap-4 mb-6">
            <Link 
              href="/" 
              className="text-teal-400 hover:text-teal-300 font-medium"
            >
              Все компоненты
            </Link>
            <Link 
              href="/figma" 
              className="text-teal-400 hover:text-teal-300 font-medium"
            >
              Figma Recreation
            </Link>
            <Link 
              href="/test" 
              className="text-teal-400 hover:text-teal-300 font-medium"
            >
              Тест цветов
            </Link>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Дизайн-система кнопок
          </p>
        </div>
        
        <ButtonExamples />
      </div>
    </div>
  );
}
