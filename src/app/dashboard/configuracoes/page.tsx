'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ConfiguracoesPage() {
  const { theme, setTheme } = useTheme();
  const [zapiToken, setZapiToken] = React.useState('');

  return (
    <div className="min-h-screen bg-[#F5F6FA] dark:bg-[#181C23] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2E2F38] dark:text-white mb-6 text-left">Configurações</h1>
        {/* Dados do usuário */}
        <div className="bg-white dark:bg-[#23283A] rounded-2xl shadow-soft border border-[#E8E9F1] dark:border-[#23283A] p-6 mb-8">
          <h2 className="text-lg font-bold text-[#2E2F38] dark:text-white mb-4">Dados do Usuário</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#6B6F76] dark:text-gray-300 mb-1">Nome</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-[#E8E9F1] dark:border-[#23283A] bg-white dark:bg-[#181C23] text-[#2E2F38] dark:text-white" placeholder="Seu nome" defaultValue="Usuário Exemplo" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#6B6F76] dark:text-gray-300 mb-1">E-mail</label>
              <input type="email" className="w-full px-3 py-2 rounded-lg border border-[#E8E9F1] dark:border-[#23283A] bg-white dark:bg-[#181C23] text-[#2E2F38] dark:text-white" placeholder="Seu e-mail" defaultValue="usuario@email.com" />
            </div>
          </div>
        </div>
        {/* Preferências */}
        <div className="bg-white dark:bg-[#23283A] rounded-2xl shadow-soft border border-[#E8E9F1] dark:border-[#23283A] p-6 mb-8">
          <h2 className="text-lg font-bold text-[#2E2F38] dark:text-white mb-4">Preferências</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#6B6F76] dark:text-gray-300 mb-2">Modo de exibição</label>
              <div className="flex gap-4">
                <button
                  className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${theme === 'light' ? 'bg-[#3478F6] text-white border-[#3478F6]' : 'bg-[#E8E9F1] text-[#2E2F38] border-[#E8E9F1]'}`}
                  onClick={() => setTheme('light')}
                >
                  <span className="mr-2">☀️</span>Claro
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${theme === 'dark' ? 'bg-[#23283A] text-white border-[#23283A]' : 'bg-[#E8E9F1] text-[#2E2F38] border-[#E8E9F1]'}`}
                  onClick={() => setTheme('dark')}
                >
                  <span className="mr-2">🌙</span>Escuro
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Integração Z-API */}
        <div className="bg-white dark:bg-[#23283A] rounded-2xl shadow-soft border border-[#E8E9F1] dark:border-[#23283A] p-6 mb-8">
          <h2 className="text-lg font-bold text-[#2E2F38] dark:text-white mb-4">Integração Z-API (WhatsApp)</h2>
          <label className="block text-sm font-semibold text-[#6B6F76] dark:text-gray-300 mb-1">Token de Integração</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-[#E8E9F1] dark:border-[#23283A] bg-white dark:bg-[#181C23] text-[#2E2F38] dark:text-white mb-2"
            placeholder="Cole aqui o token da Z-API"
            value={zapiToken}
            onChange={e => setZapiToken(e.target.value)}
          />
          <p className="text-xs text-[#6B6F76] dark:text-gray-400">Consulte seu painel Z-API para obter o token de integração.</p>
        </div>
      </div>
    </div>
  );
} 