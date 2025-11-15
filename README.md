# 🔗 Linktree Pessoal - GitHub Pages

Uma landing page estilo linktree bonita e responsiva exibindo meus principais projetos.

## 🎨 Recursos

- ✨ Design moderno com gradientes e tema escuro
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🎭 Animações suaves e efeitos de hover
- ⚡ Carregamento rápido e performance otimizada
- ♿ Acessível com navegação por teclado
- 🎯 Metadados amigáveis para SEO

## 🚀 Projetos em Destaque

### 1. Tangram
Plataforma educacional completa com:
- App mobile React Native
- Backend API NestJS
- Banco de dados PostgreSQL
- Integração com Machine Learning
- Análises de Business Intelligence

**Stack Tecnológico:** React Native, NestJS, PostgreSQL, ML

### 2. Genius Finance
Assistente financeiro com IA apresentando:
- Frontend Next.js
- Backend NestJS
- Integração com bot WhatsApp
- Análises financeiras inteligentes
- Rastreamento automático de transações

**Stack Tecnológico:** Next.js, NestJS, WhatsApp API, IA

### 3. BikeRevision System
Gestão B2B de manutenção de bicicletas com:
- Rastreamento de revisões via WhatsApp
- Integração de pagamentos Stripe
- Identificação de clientes por QR code
- Suporte multi-empresa
- Notificações em tempo real

**Stack Tecnológico:** NestJS, WhatsApp Web.js, Stripe, PostgreSQL

## 📦 Deploy no GitHub Pages

### Método 1: Deploy Simples

1. **Crie um novo repositório** chamado `<username>.github.io` (substitua `<username>` pelo seu nome de usuário do GitHub)

2. **Faça upload dos arquivos:**
   ```bash
   cd linktree-github-page
   git init
   git add .
   git commit -m "Initial commit: Landing page estilo linktree"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```

3. **Acesse seu site** em `https://<username>.github.io`

### Método 2: Deploy em Repositório Existente

1. **Faça upload para qualquer repositório:**
   ```bash
   git add .
   git commit -m "Add linktree landing page"
   git push
   ```

2. **Ative o GitHub Pages:**
   - Vá para Configurações (Settings) do repositório
   - Navegue até a seção "Pages"
   - Selecione a fonte: branch `main`, pasta `/root`
   - Salve e aguarde o deploy

3. **Acesse seu site** em `https://<username>.github.io/<nome-do-repositorio>`

## 🛠️ Personalização

### Atualizar Informações do Perfil

Edite `index.html`:

```html
<!-- Mudar nome -->
<h1 class="name">Seu Nome</h1>

<!-- Mudar bio -->
<p class="bio">Seu Título | Sua Descrição</p>

<!-- Atualizar nome de usuário do GitHub -->
<a href="https://github.com/SeuUsername">...</a>
```

### Atualizar Links dos Projetos

Substitua os links do GitHub em cada card:

```html
<a href="https://github.com/SeuUsername/SeuProjeto" ...>
```

### Personalizar Cores

Edite as variáveis em `styles.css`:

```css
:root {
    --bg-primary: #0f172a;        /* Fundo principal */
    --accent-tangram: #8b5cf6;    /* Cor de destaque Tangram */
    --accent-genius: #10b981;     /* Cor de destaque Genius */
    --accent-bike: #f59e0b;       /* Cor de destaque Bike */
}
```

### Adicionar Mais Projetos

Copie um template de card de link em `index.html`:

```html
<a href="seu-link" class="link-card classe-customizada">
    <div class="link-icon">
        <!-- Seu ícone SVG -->
    </div>
    <div class="link-content">
        <h2 class="link-title">Nome do Projeto</h2>
        <p class="link-description">Descrição</p>
        <div class="link-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
    </div>
    <div class="link-arrow">...</div>
</a>
```

## 🎯 Recursos Incluídos

### Animações
- Fade-in no carregamento da página
- Transições suaves no hover
- Efeito de elevação dos cards ao passar o mouse
- Efeito ripple ao clicar
- Partículas flutuantes (opcional)

### Acessibilidade
- Suporte à navegação por teclado
- Labels ARIA
- Estados de foco
- Amigável para leitores de tela

### Performance
- CSS otimizado
- JavaScript mínimo
- Tempos de carregamento rápidos
- Design mobile-first

## 📱 Suporte de Navegadores

- ✅ Chrome (última versão)
- ✅ Firefox (última versão)
- ✅ Safari (última versão)
- ✅ Edge (última versão)
- ✅ Navegadores mobile

## 🔧 Desenvolvimento Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SeuUsername/seu-repo.git
   cd seu-repo
   ```

2. **Abra no navegador:**
   - Simplesmente abra `index.html` no seu navegador
   - Ou use um servidor local:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx http-server
     
     # VS Code
     # Use a extensão Live Server
     ```

3. **Acesse localmente:**
   Abra `http://localhost:8000` no seu navegador

## 📝 Estrutura de Arquivos

```
linktree-github-page/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilos e animações
├── script.js           # Recursos interativos
└── README.md          # Documentação
```

## 🤝 Contribuindo

Sinta-se livre para fazer fork deste projeto e personalizá-lo para seu próprio uso!

## 📄 Licença

Este projeto é open source e está disponível sob a Licença MIT.

## 💡 Dicas

1. **Atualize seu avatar:** A página carrega automaticamente seu avatar do GitHub. Certifique-se de que seu perfil do GitHub tenha uma boa foto.

2. **Adicione analytics:** Descomente o código de rastreamento de analytics em `script.js` para rastrear visitas.

3. **Domínio customizado:** Você pode usar um domínio customizado adicionando um arquivo `CNAME`.

4. **Otimização SEO:** Atualize a meta description em `index.html` para melhor visibilidade em buscas.

5. **Compartilhamento social:** Adicione meta tags Open Graph para melhor compartilhamento em redes sociais.

## 🌟 Showcase

Esta página linktree apresenta:
- Design limpo e moderno
- Apresentação profissional
- Navegação fácil
- Experiência otimizada para mobile
- Performance rápida

Perfeito para compartilhar em:
- README do perfil do GitHub
- Bios de redes sociais
- Assinaturas de email
- Cartões de visita (QR code)
- Networking profissional

---

Feito com ❤️ para a comunidade open-source.

**[Ver Demo ao Vivo](https://seuusername.github.io)**
# linktree
