# 🚀 Guia Rápido de Deploy

## Deploy no GitHub Pages em 3 Passos

### Passo 1: Criar Repositório no GitHub

Crie um novo repositório no GitHub com um destes nomes:
- `<seu-username>.github.io` (recomendado para página principal do perfil)
- Qualquer nome (ex: `linktree`, `links`, `portfolio`)

### Passo 2: Enviar Seu Código

```bash
cd /Users/esdrasalbino/Documents/linktree-github-page

# Inicializar repositório git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit das mudanças
git commit -m "feat: Adicionar landing page estilo linktree com showcase de projetos"

# Adicionar seu repositório GitHub como remote
# Substitua <username> e <repositório> pelos seus valores
git remote add origin https://github.com/<username>/<repositório>.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. Vá para seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. Role até a seção **Pages** (barra lateral esquerda)
4. Em **Source** (Fonte), selecione:
   - Branch: `main`
   - Pasta: `/ (root)`
5. Clique em **Save** (Salvar)
6. Aguarde 1-2 minutos para o deploy

Seu site estará disponível em:
- Se usar `<username>.github.io`: `https://<username>.github.io`
- Se usar nome customizado: `https://<username>.github.io/<nome-do-repositório>`

## 🎨 Checklist de Personalização

Antes de fazer o deploy, personalize estes itens:

### Em `index.html`:

- [ ] Linha 31: Atualizar nome de usuário do GitHub na URL do avatar
- [ ] Linha 33: Mudar nome para o seu
- [ ] Linha 34: Atualizar bio/título
- [ ] Linha 36: Atualizar URL do perfil do GitHub
- [ ] Linha 43: Atualizar URL do perfil do LinkedIn (ou remover se não aplicável)
- [ ] Linhas 54, 70, 86: Atualizar URLs dos repositórios dos projetos

### Personalizações Opcionais:

- [ ] Atualizar descrições dos projetos para corresponder às suas propostas de valor
- [ ] Mudar cores de destaque em `styles.css` (linhas 2-6)
- [ ] Adicionar URL da sua própria imagem de perfil
- [ ] Atualizar ano e mensagem do rodapé
- [ ] Adicionar ID de rastreamento do Google Analytics em `script.js`

## 🔥 Dicas Profissionais

### Domínio Customizado

Para usar um domínio customizado (ex: `links.seusite.com`):

1. Crie um arquivo chamado `CNAME` no seu repositório:
   ```bash
   echo "links.seusite.com" > CNAME
   git add CNAME
   git commit -m "Adicionar domínio customizado"
   git push
   ```

2. Configure seu DNS:
   - Adicione um registro CNAME apontando para `<username>.github.io`

### Otimização SEO

Adicione estas meta tags ao `<head>` em `index.html`:

```html
<!-- Open Graph para redes sociais -->
<meta property="og:title" content="Seu Nome - Soluções Digitais">
<meta property="og:description" content="Explore meus projetos inovadores">
<meta property="og:image" content="https://seudominio.com/preview.png">
<meta property="og:url" content="https://seudominio.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Seu Nome - Soluções Digitais">
<meta name="twitter:description" content="Explore meus projetos inovadores">
<meta name="twitter:image" content="https://seudominio.com/preview.png">
```

### Adicionar Google Analytics

1. Obtenha seu ID de rastreamento do Google Analytics
2. Adicione ao `<head>` em `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Testar Localmente Primeiro

Antes de enviar para o GitHub, teste localmente:

```bash
# Usando Python 3
python3 -m http.server 8000

# Ou usando Node.js
npx http-server

# Depois abra: http://localhost:8000
```

## 🐛 Solução de Problemas

### Página não está carregando?
- Verifique se o GitHub Pages está ativado nas Configurações
- Verifique se o branch e a pasta estão corretos
- Aguarde 5 minutos e tente novamente (o deploy inicial leva tempo)

### Erro 404?
- Certifique-se de que `index.html` está no diretório raiz
- Verifique se o nome do repositório está correto
- Limpe o cache do navegador

### O estilo está errado?
- Verifique o console do navegador para erros
- Verifique se `styles.css` e `script.js` estão no mesmo diretório que `index.html`
- Tente um hard refresh (Ctrl+Shift+R ou Cmd+Shift+R)

## 📱 Compartilhe Seu Link

Uma vez que o deploy esteja feito, compartilhe seu linktree em:
- README do perfil do GitHub
- Bio do Twitter/X
- Perfil do LinkedIn
- Bio do Instagram
- Assinatura de email
- Cartões de visita (QR code)

## 🎉 Você Terminou!

Sua página linktree profissional está agora no ar!

Precisa de ajuda? Abra uma issue no repositório ou entre em contato comigo.

---

**Próximos Passos:**
1. Faça o deploy e teste sua página
2. Compartilhe com sua rede
3. Atualize os links dos projetos conforme você constrói mais
4. Acompanhe as analytics para ver quais projetos geram mais interesse
