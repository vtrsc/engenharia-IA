# Next.js + Better Auth + GitHub OAuth Demo

Demo simples de autenticação com GitHub OAuth usando Next.js App Router, Better Auth e SQLite.

## 🚀 Quick Start

### 1. Copiar variáveis de ambiente

```bash
cp .env.example .env.local
```

### 2. Configurar GitHub OAuth

1. Acesse [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Clique em "New OAuth App"
3. Preencha os dados:
   - **Application name**: `Next.js Auth Demo`
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copie `Client ID` e `Client Secret` para `.env.local`:

```env
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
BETTER_AUTH_SECRET=your_secret_min_32_chars
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar migração do banco de dados

```bash
npm run migrate
```

Isso cria o arquivo `better-auth.sqlite` com as tabelas necessárias.

### 5. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura

```
.
├── app/
│   ├── api/auth/[...all]/route.ts    # Route handler do Better Auth
│   ├── login/page.tsx                # Página de login com GitHub
│   ├── page.tsx                      # Home page
│   ├── layout.tsx                    # Root layout
│   └── globals.css                   # Tailwind CSS
├── lib/
│   ├── auth.ts                       # Configuração do Better Auth (servidor)
│   └── auth-client.ts                # Cliente do Better Auth (navegador)
├── .env.local                        # Variáveis de ambiente (não versionar)
├── .env.example                      # Template de variáveis
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── better-auth.sqlite                # Banco de dados (gerado)
```

---

## 🎯 Fluxo

1. **Login**: Clique em "Entrar com GitHub" → redireciona para GitHub
2. **Callback**: GitHub redireciona para `/api/auth/callback/github`
3. **Sessão**: Better Auth cria a sessão no SQLite
4. **Home**: Página mostra "Logado como <email/nome>"
5. **Logout**: Botão "Sair" encerra a sessão

---

## 📦 Dependências principais

- **next**: Next.js 15+ com App Router
- **better-auth**: Framework de autenticação
- **better-sqlite3**: Driver SQLite (servidor)
- **tailwindcss**: Estilização
- **typescript**: Type safety

---

## 🔐 Segurança

- ✅ Cookies de sessão seguros (HTTPOnly)
- ✅ CSRF protection via Better Auth
- ✅ Variáveis sensíveis em `.env.local`
- ✅ TypeScript para type safety

---

## 🐛 Troubleshooting

### "GITHUB_CLIENT_ID não definido"
→ Verifique `.env.local` e reinicie o servidor (`npm run dev`)

### "Cannot find module 'better-sqlite3'"
→ Rode `npm install` de novo

### "Database error"
→ Delete `better-auth.sqlite` e rode `npm run migrate` de novo

### "OAuth callback URL não bate"
→ Confirme a URL em GitHub OAuth Apps settings

---

## 📝 Próximos passos

- Adicionar mais providers (Google, Discord, etc)
- Implementar email/password auth
- Adicionar 2FA
- Persistência de refresh tokens
- Sync entre abas com `useEffect`

---

**Criado com ❤️ usando Better Auth + Next.js**
