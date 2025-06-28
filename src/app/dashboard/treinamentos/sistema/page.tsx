'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const materiais = [
  {
    id: 1,
    titulo: 'Introdução ao CRM Imobiliário',
    tipo: 'video',
    duracao: '15:30',
    descricao: 'Conheça as funcionalidades principais do sistema CRM.',
    thumbnail: '🎥',
    url: '#',
    tags: ['Básico', 'Obrigatório'],
    visualizacoes: 245,
    avaliacao: 4.8
  },
  {
    id: 2,
    titulo: 'Como Cadastrar Leads',
    tipo: 'video',
    duracao: '8:45',
    descricao: 'Aprenda o processo completo de cadastro de leads no sistema.',
    thumbnail: '🎥',
    url: '#',
    tags: ['Básico', 'Obrigatório'],
    visualizacoes: 189,
    avaliacao: 4.9
  },
  {
    id: 3,
    titulo: 'Gestão de Imóveis',
    tipo: 'video',
    duracao: '12:20',
    descricao: 'Como adicionar e gerenciar imóveis no sistema.',
    thumbnail: '🎥',
    url: '#',
    tags: ['Intermediário'],
    visualizacoes: 156,
    avaliacao: 4.7
  },
  {
    id: 4,
    titulo: 'Manual Completo do Sistema',
    tipo: 'pdf',
    tamanho: '2.3 MB',
    descricao: 'Documentação completa com todas as funcionalidades.',
    thumbnail: '📄',
    url: '#',
    tags: ['Referência'],
    downloads: 89,
    avaliacao: 4.6
  },
  {
    id: 5,
    titulo: 'Configurações Avançadas',
    tipo: 'video',
    duracao: '18:15',
    descricao: 'Personalize o sistema de acordo com suas necessidades.',
    thumbnail: '🎥',
    url: '#',
    tags: ['Avançado'],
    visualizacoes: 98,
    avaliacao: 4.5
  },
  {
    id: 6,
    titulo: 'Relatórios e Métricas',
    tipo: 'video',
    duracao: '10:30',
    descricao: 'Aprenda a gerar e interpretar relatórios importantes.',
    thumbnail: '🎥',
    url: '#',
    tags: ['Intermediário'],
    visualizacoes: 134,
    avaliacao: 4.8
  },
  {
    id: 7,
    titulo: 'FAQ - Dúvidas Frequentes',
    tipo: 'link',
    descricao: 'Respostas para as principais dúvidas sobre o sistema.',
    thumbnail: '🔗',
    url: '#',
    tags: ['Suporte'],
    acessos: 67,
    avaliacao: 4.4
  },
  {
    id: 8,
    titulo: 'Atalhos e Dicas de Produtividade',
    tipo: 'pdf',
    tamanho: '1.1 MB',
    descricao: 'Guia com atalhos e dicas para usar o sistema de forma mais eficiente.',
    thumbnail: '📄',
    url: '#',
    tags: ['Produtividade'],
    downloads: 45,
    avaliacao: 4.7
  }
];

export default function TreinamentoSistemaPage() {
  const [filterTipo, setFilterTipo] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const materiaisFiltrados = materiais.filter(material => {
    const matchTipo = filterTipo === 'todos' || material.tipo === filterTipo;
    const matchSearch = material.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       material.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    return matchTipo && matchSearch;
  });

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'video': return '🎥';
      case 'pdf': return '📄';
      case 'link': return '🔗';
      default: return '📁';
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'video': return 'Vídeo';
      case 'pdf': return 'PDF';
      case 'link': return 'Link';
      default: return 'Arquivo';
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] dark:bg-[#181C23] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <Link 
              href="/dashboard/treinamentos"
              className="text-[#3478F6] hover:text-[#2E6FD9] transition-colors"
            >
              ← Voltar aos Treinamentos
            </Link>
          </div>
        </div>

        {/* Título e Descrição */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl">💻</span>
            <h1 className="text-4xl font-bold text-[#2E2F38] dark:text-white">Treinamento do Sistema</h1>
          </div>
          <p className="text-xl text-[#6B6F76] dark:text-gray-300 max-w-3xl mx-auto">
            Aprenda a usar todas as funcionalidades do CRM e do sistema de forma eficiente e produtiva.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-[#23283A] rounded-2xl p-6 shadow-soft border border-[#E8E9F1] dark:border-[#23283A] text-center">
            <p className="text-3xl mb-2">🎥</p>
            <p className="text-2xl font-bold text-[#2E2F38] dark:text-white">{materiais.filter(m => m.tipo === 'video').length}</p>
            <p className="text-sm text-[#6B6F76] dark:text-gray-300">Vídeos</p>
          </div>
          <div className="bg-white dark:bg-[#23283A] rounded-2xl p-6 shadow-soft border border-[#E8E9F1] dark:border-[#23283A] text-center">
            <p className="text-3xl mb-2">📄</p>
            <p className="text-2xl font-bold text-[#2E2F38] dark:text-white">{materiais.filter(m => m.tipo === 'pdf').length}</p>
            <p className="text-sm text-[#6B6F76] dark:text-gray-300">PDFs</p>
          </div>
          <div className="bg-white dark:bg-[#23283A] rounded-2xl p-6 shadow-soft border border-[#E8E9F1] dark:border-[#23283A] text-center">
            <p className="text-3xl mb-2">🔗</p>
            <p className="text-2xl font-bold text-[#2E2F38] dark:text-white">{materiais.filter(m => m.tipo === 'link').length}</p>
            <p className="text-sm text-[#6B6F76] dark:text-gray-300">Links</p>
          </div>
          <div className="bg-white dark:bg-[#23283A] rounded-2xl p-6 shadow-soft border border-[#E8E9F1] dark:border-[#23283A] text-center">
            <p className="text-3xl mb-2">⭐</p>
            <p className="text-2xl font-bold text-[#2E2F38] dark:text-white">4.7</p>
            <p className="text-sm text-[#6B6F76] dark:text-gray-300">Avaliação Média</p>
          </div>
        </div>

        {/* Filtros e Busca */}
        <div className="bg-white dark:bg-[#23283A] rounded-2xl p-6 shadow-soft border border-[#E8E9F1] dark:border-[#23283A] mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar materiais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F6FA] dark:bg-[#181C23] border border-[#E8E9F1] dark:border-[#23283A] rounded-xl text-[#2E2F38] dark:text-white placeholder-[#6B6F76] dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3478F6] transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterTipo('todos')}
                className={`px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  filterTipo === 'todos' 
                    ? 'bg-[#3478F6] text-white' 
                    : 'bg-[#F5F6FA] dark:bg-[#181C23] text-[#6B6F76] dark:text-gray-300 hover:bg-[#E8E9F1] dark:hover:bg-[#2E2F38]'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilterTipo('video')}
                className={`px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  filterTipo === 'video' 
                    ? 'bg-[#3478F6] text-white' 
                    : 'bg-[#F5F6FA] dark:bg-[#181C23] text-[#6B6F76] dark:text-gray-300 hover:bg-[#E8E9F1] dark:hover:bg-[#2E2F38]'
                }`}
              >
                🎥 Vídeos
              </button>
              <button
                onClick={() => setFilterTipo('pdf')}
                className={`px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  filterTipo === 'pdf' 
                    ? 'bg-[#3478F6] text-white' 
                    : 'bg-[#F5F6FA] dark:bg-[#181C23] text-[#6B6F76] dark:text-gray-300 hover:bg-[#E8E9F1] dark:hover:bg-[#2E2F38]'
                }`}
              >
                📄 PDFs
              </button>
              <button
                onClick={() => setFilterTipo('link')}
                className={`px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  filterTipo === 'link' 
                    ? 'bg-[#3478F6] text-white' 
                    : 'bg-[#F5F6FA] dark:bg-[#181C23] text-[#6B6F76] dark:text-gray-300 hover:bg-[#E8E9F1] dark:hover:bg-[#2E2F38]'
                }`}
              >
                🔗 Links
              </button>
            </div>
          </div>
        </div>

        {/* Grid de Materiais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materiaisFiltrados.map((material) => (
            <div key={material.id} className="bg-white dark:bg-[#23283A] rounded-2xl shadow-soft border border-[#E8E9F1] dark:border-[#23283A] overflow-hidden hover:shadow-lg transition-all duration-200 group">
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-[#3478F6] to-[#2E6FD9] flex items-center justify-center">
                <span className="text-6xl">{material.thumbnail}</span>
                <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">{getTipoLabel(material.tipo)}</span>
                </div>
                {material.tipo === 'video' && (
                  <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">⏱️ {material.duracao}</span>
                  </div>
                )}
                {material.tipo === 'pdf' && (
                  <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">📏 {material.tamanho}</span>
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E2F38] dark:text-white mb-2 group-hover:text-[#3478F6] transition-colors">
                  {material.titulo}
                </h3>
                <p className="text-[#6B6F76] dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {material.descricao}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {material.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tag === 'Obrigatório' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          : tag === 'Básico'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : tag === 'Intermediário'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : tag === 'Avançado'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-[#6B6F76] dark:text-gray-300 mb-4">
                  <div className="flex items-center gap-4">
                    {material.tipo === 'video' && (
                      <span>👁️ {material.visualizacoes} visualizações</span>
                    )}
                    {material.tipo === 'pdf' && (
                      <span>⬇️ {material.downloads} downloads</span>
                    )}
                    {material.tipo === 'link' && (
                      <span>🔗 {material.acessos} acessos</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{material.avaliacao}</span>
                  </div>
                </div>

                {/* Botão de Ação */}
                <button className="w-full bg-[#3478F6] hover:bg-[#2E6FD9] text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  {material.tipo === 'video' && '▶️ Assistir'}
                  {material.tipo === 'pdf' && '📄 Baixar'}
                  {material.tipo === 'link' && '🔗 Acessar'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {materiaisFiltrados.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-bold text-[#2E2F38] dark:text-white mb-2">Nenhum material encontrado</h3>
            <p className="text-[#6B6F76] dark:text-gray-300">Tente ajustar os filtros ou termos de busca.</p>
          </div>
        )}
      </div>
    </div>
  );
} 