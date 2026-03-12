# PetBookys — Frontend Next.js

## Stack

- **Next.js 14** (App Router, Server & Client Components)
- **TypeScript** estrito
- **Tailwind CSS** com design system customizado
- **Framer Motion** para animações
- **Recharts** para gráficos
- **React Hook Form + Zod** para formulários
- **TanStack Query** para cache de dados
- **Lucide React** para ícones
- **date-fns** para manipulação de datas

## Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `teal-600` | `#26A3A7` | Cor primária, CTAs |
| `amber-400` | `#F59E0B` | Cor de destaque |
| `cream-50`  | `#FDFCF8` | Background |
| `forest-600`| `#356D5A` | Sucesso, completado |
| Playfair Display | serif | Títulos, números |
| Plus Jakarta Sans | sans | Corpo, interface |

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page pública |
| `/login` | Login (employee / owner) |
| `/dashboard` | Visão geral com KPIs e gráficos |
| `/dashboard/agenda` | Agenda visual (dia / semana / lista) |
| `/dashboard/pets` | Gestão de pets com perfil detalhado |
| `/dashboard/services` | Catálogo de serviços com preço variável |
| `/dashboard/clients` | Gestão de clientes |
| `/dashboard/reports` | Relatórios financeiros |
| `/agendar/[slug]` | **Fluxo público** de agendamento (4 steps) |

## Quick Start

```bash
# Clone e instale
npm install

# Variáveis de ambiente
cp .env.example .env.local

# Desenvolvimento
npm run dev
```

## Variáveis de Ambiente

```env
NEXT_PUBLIC_API_URL=http://localhost:3333/api/v1
NEXT_PUBLIC_MP_PUBLIC_KEY=TEST-xxxx
```

## Fluxo de agendamento público

O fluxo em `/agendar/[slug]` funciona sem autenticação:

1. **Serviço** — lista de serviços com preço e duração
2. **Pet** — nome, espécie, porte e dados do tutor
3. **Data & Hora** — calendário + slots disponíveis em tempo real
4. **Pagamento** — PIX ou cartão via Mercado Pago
5. **Confirmado** — QR Code PIX ou redirect para checkout

## Estrutura de pastas

```
src/
├── app/
│   ├── page.tsx                    ← Landing page
│   ├── layout.tsx                  ← Root layout
│   ├── (auth)/login/               ← Login
│   ├── (dashboard)/                ← Dashboard layout + sidebar
│   │   ├── layout.tsx
│   │   ├── dashboard/              ← Home com KPIs
│   │   ├── agenda/                 ← Agenda visual
│   │   ├── pets/                   ← Gestão de pets
│   │   ├── services/               ← Catálogo de serviços
│   │   ├── clients/                ← Clientes
│   │   └── reports/                ← Relatórios
│   └── agendar/[slug]/             ← Booking público
├── components/
│   ├── ui/                         ← Button, Input, Badge, Modal...
│   ├── layout/                     ← Sidebar, Header, PageTitle
│   ├── dashboard/                  ← Cards, Charts, Tables
│   └── booking/                    ← Steps, ServiceCard, SlotGrid
├── lib/
│   ├── api.ts                      ← Axios instance + interceptors
│   └── utils.ts                    ← cn(), formatCurrency(), etc.
├── hooks/
│   ├── useAppointments.ts
│   ├── useAvailability.ts
│   └── useTenant.ts
└── styles/
    └── globals.css                 ← Design system tokens
```
