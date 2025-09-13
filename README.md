# Forex Factory News System

Sistema web completo de filtro de notícias econômicas baseado no EA BlackGPT v14, desenvolvido com React e integração com o XML do Forex Factory.

## 🚀 Funcionalidades Implementadas

### ✅ Sistema de Coleta de Notícias
- **Integração com Forex Factory XML**: Busca automática de dados das URLs oficiais
- **Fallback para dados mock**: Sistema resiliente que funciona mesmo sem conexão
- **Atualização automática**: Refresh a cada 15 minutos
- **Parser XML robusto**: Processa dados de 2 semanas (atual + próxima)

### ✅ Interface de Usuário Moderna
- **Design Dark Theme**: Visual profissional inspirado no EA original
- **Sistema de Abas**: Dashboard, Notícias, Cronômetro e Configurações
- **Responsivo**: Funciona em desktop e mobile
- **Componentes shadcn/ui**: Interface moderna e acessível

### ✅ Sistema de Filtros Avançados
- **Filtro por Impacto**: High (vermelho), Medium (amarelo), Low (verde)
- **Filtro por País**: Seleção específica de moedas/países
- **Bandeiras Visuais**: Identificação rápida por país
- **Contadores em Tempo Real**: Quantidade de eventos por tipo

### ✅ Cronômetro e Proteção
- **Relógio em Tempo Real**: Atualização a cada segundo
- **Status de Proteção**: Indicação visual de bloqueios ativos
- **Countdown Preciso**: Tempo até próximo evento e fim de bloqueio
- **Próximo Evento**: Destaque para próxima notícia importante

### ✅ Sistema de Bloqueios Configurável
- **Bloqueio High Impact**: 3h antes + 4h depois (padrão)
- **Bloqueio Medium Impact**: 1h antes + 1h depois (opcional)
- **Bloqueio Low Impact**: Configurável (padrão desabilitado)
- **Configuração Granular**: Ajuste individual de horas antes/depois

### ✅ Gerenciamento de Fuso Horário
- **25 Fusos Horários**: Cobertura global completa
- **Sincronização Automática**: Ajuste de horários das notícias
- **Informações em Tempo Real**: Offset atual e horários ajustados
- **Foco no Brasil**: UTC-3 (BRT) destacado

### ✅ Persistência de Configurações
- **LocalStorage**: Configurações salvas no navegador
- **Backup/Restore**: Sistema de reset para configurações padrão
- **Validação**: Verificação de consistência das configurações

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Estilização moderna
- **shadcn/ui**: Componentes de interface
- **Lucide Icons**: Ícones profissionais
- **JavaScript ES6+**: Lógica moderna

## 📁 Estrutura do Projeto

```
forex-news-system/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── NewsTimer.jsx    # Cronômetro avançado
│   │   └── AdvancedSettings.jsx # Configurações
│   ├── services/
│   │   └── forexFactoryService.js # Integração XML
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globais
│   └── main.jsx             # Entry point
├── public/                  # Assets estáticos
├── package.json             # Dependências
└── README.md               # Documentação
```

## 🎯 Funcionalidades do EA BlackGPT Replicadas

### ✅ Sistema de Notícias
- [x] Busca XML do Forex Factory
- [x] Parser de eventos econômicos
- [x] Filtros por impacto (High/Medium/Low)
- [x] Ordenação cronológica
- [x] Bandeiras de países
- [x] Títulos encurtados

### ✅ Sistema de Proteção
- [x] Bloqueios configuráveis por impacto
- [x] Cálculo de janelas de tempo
- [x] Status visual de proteção ativa
- [x] Countdown para próximos eventos
- [x] Fundo vermelho durante bloqueios

### ✅ Configurações Avançadas
- [x] Offset de fuso horário
- [x] Habilitação/desabilitação de bloqueios
- [x] Configuração de horas antes/depois
- [x] Persistência de configurações
- [x] Reset para padrões

### ✅ Interface Visual
- [x] Tema escuro profissional
- [x] Cores por impacto (vermelho/amarelo/verde)
- [x] Cronômetro em tempo real
- [x] Status cards informativos
- [x] Layout responsivo

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   cd forex-news-system
   pnpm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   pnpm run dev --host
   ```

3. **Acessar aplicação**:
   - Local: http://localhost:5173
   - Rede: http://[IP]:5173

## 🔧 Configuração

### Fuso Horário
- Acesse a aba "Configurações" → "Fuso Horário"
- Selecione seu fuso horário local
- Clique em "Salvar Configurações"

### Bloqueios
- Acesse a aba "Configurações" → "Bloqueios"
- Configure horas antes/depois para cada tipo de impacto
- Habilite/desabilite bloqueios conforme necessário

### Filtros
- Use a aba "Dashboard" para filtros rápidos
- Selecione tipos de impacto desejados
- Filtre por país específico se necessário

## 📊 Status da Aplicação

- ✅ **Sistema Funcional**: Todas as funcionalidades principais implementadas
- ✅ **Interface Completa**: 4 abas com funcionalidades específicas
- ✅ **Integração XML**: Conexão real com Forex Factory
- ✅ **Configurações**: Sistema completo de personalização
- ✅ **Responsivo**: Funciona em diferentes dispositivos
- ✅ **Tempo Real**: Atualizações automáticas e cronômetro

## 🎨 Design System

### Cores
- **Background**: `bg-gray-900` (tema escuro)
- **Cards**: `bg-gray-800` com bordas `border-gray-700`
- **High Impact**: `bg-red-500` / `text-red-400`
- **Medium Impact**: `bg-yellow-500` / `text-yellow-400`
- **Low Impact**: `bg-green-500` / `text-green-400`
- **Títulos**: `text-yellow-400` (dourado)

### Componentes
- **Cards**: Estrutura consistente com header/content
- **Badges**: Indicadores coloridos por impacto
- **Switches**: Controles de habilitação/desabilitação
- **Selects**: Dropdowns para seleções
- **Buttons**: Ações primárias e secundárias

## 🔮 Próximas Melhorias

- [ ] Notificações push para eventos importantes
- [ ] Histórico de notícias passadas
- [ ] Gráficos de impacto no mercado
- [ ] Integração com APIs de cotações
- [ ] Exportação de configurações
- [ ] Modo claro/escuro
- [ ] Suporte a múltiplos idiomas

## 📝 Notas Técnicas

- **CORS**: Utiliza proxy `allorigins.win` para acessar XML do Forex Factory
- **Fallback**: Sistema robusto com dados mock quando API indisponível
- **Performance**: Atualizações otimizadas e componentes memoizados
- **Acessibilidade**: Componentes shadcn/ui com suporte completo
- **SEO**: Meta tags e estrutura semântica adequada

---

**Desenvolvido com base no EA BlackGPT v14 - Sistema completo de filtro de notícias econômicas para traders.**
