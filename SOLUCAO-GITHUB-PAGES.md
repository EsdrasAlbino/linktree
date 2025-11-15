# 🔧 Como Corrigir o GitHub Pages

## ❌ Problema Identificado

O GitHub Pages está mostrando o README.md ao invés da sua página HTML porque os arquivos estão em uma subpasta (`linktree-github-page/`) e não na raiz do repositório.

## ✅ Solução: 2 Opções

### 🎯 Opção 1: Mover para a Raiz (RECOMENDADO)

Os arquivos HTML precisam estar na raiz do repositório, não em uma pasta.

**Como fazer:**

```bash
# 1. Entre na pasta do repositório Git
cd /Users/esdrasalbino/Documents

# 2. Se já tem um repositório Git aqui, faça backup do README atual (se houver)
mv README.md README-old.md 2>/dev/null || true

# 3. Copie os arquivos do linktree para a raiz
cp linktree-github-page/index.html .
cp linktree-github-page/styles.css .
cp linktree-github-page/script.js .
cp linktree-github-page/.gitignore .

# 4. Opcional: Renomear o README do linktree para não conflitar
mv linktree-github-page/README.md README-LINKTREE.md

# 5. Adicionar e fazer commit
git add index.html styles.css script.js .gitignore
git commit -m "feat: Adicionar landing page na raiz do repositório"
git push
```

Depois disso, o GitHub Pages vai encontrar o `index.html` e mostrar sua página!

---

### 🎯 Opção 2: Criar um Repositório Separado (MAIS LIMPO)

Se você quer manter seus projetos organizados, crie um repositório separado só para o linktree:

```bash
# 1. Crie um novo repositório no GitHub chamado:
#    - esdrasalbino.github.io (página principal) OU
#    - linktree (subdomínio)

# 2. Entre na pasta do linktree
cd /Users/esdrasalbino/Documents/linktree-github-page

# 3. Inicialize o Git
git init

# 4. Adicione todos os arquivos
git add .

# 5. Faça o commit
git commit -m "feat: Landing page estilo linktree em português"

# 6. Adicione o remote (substitua <USERNAME> pelo seu username)
git remote add origin https://github.com/<USERNAME>/esdrasalbino.github.io.git
# OU
git remote add origin https://github.com/<USERNAME>/linktree.git

# 7. Envie para o GitHub
git branch -M main
git push -u origin main
```

---

## 🎨 Configuração do GitHub Pages

Depois de fazer o push:

1. Vá no repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)` ← IMPORTANTE!
5. Clique em **Save**
6. Aguarde 1-2 minutos

### URLs Resultantes:

**Se usar `esdrasalbino.github.io`:**
- URL: `https://esdrasalbino.github.io`

**Se usar `linktree`:**
- URL: `https://esdrasalbino.github.io/linktree`

---

## 🔍 Como Verificar se Está Correto

No GitHub, a estrutura do repositório deve estar assim:

```
seu-repositorio/
├── index.html       ← PRECISA estar na raiz!
├── styles.css       ← PRECISA estar na raiz!
├── script.js        ← PRECISA estar na raiz!
├── .gitignore
└── README.md (opcional)
```

❌ **ERRADO:**
```
seu-repositorio/
├── README.md
└── linktree-github-page/
    ├── index.html
    ├── styles.css
    └── script.js
```

---

## 💡 Recomendação

**Use a Opção 2** (repositório separado) porque:
- ✅ Mantém seus projetos organizados
- ✅ URL mais limpa (`esdrasalbino.github.io`)
- ✅ Facilita updates futuros
- ✅ Não mistura com outros projetos

---

## 🆘 Ainda com Problemas?

### Problema: "404 - There isn't a GitHub Pages site here"
**Solução:** Verifique se o `index.html` está na raiz e se o GitHub Pages está ativado.

### Problema: "Still showing README"
**Solução:** 
1. Limpe o cache do navegador (Cmd+Shift+R)
2. Aguarde 5 minutos (o GitHub Pages pode demorar)
3. Verifique se selecionou a pasta `/ (root)` nas configurações

### Problema: "CSS não está carregando"
**Solução:** Verifique se `styles.css` e `script.js` estão na **mesma pasta** que `index.html`

---

## 🎉 Teste Local Antes

Antes de fazer o push, teste localmente:

```bash
cd /Users/esdrasalbino/Documents/linktree-github-page
python3 -m http.server 8000
```

Abra `http://localhost:8000` - se funcionar localmente, vai funcionar no GitHub Pages!

---

**Precisa de ajuda para executar?** Me avise qual opção você prefere que eu te ajudo com os comandos exatos! 🚀
