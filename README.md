# Toque de Desejo — Boutique Sensual Virtual

> *“Seu prazer, seu segredo, tudo discreto.”*

Vitrine virtual premium, sofisticada e responsiva para a boutique **Toque de Desejo** (`@toque_de_desejo121`). Desenvolvida para ser hospedada no **GitHub** e com deploy automático na **Vercel**.

---

## ✨ Características Principais

- **Design de Alta Luxo & Sensualidade Discreta:**
  - Paleta com preto profundo, vermelho rubi, neon red, vinho/bordô e tons champagne.
  - Tipografia refinada (*Cormorant Garamond*, *Montserrat*, e toques manuscritos).
  - Iluminação suave, reflexos metálicos rubi e glassmorphism elegante.
- **Páginas Individuais de Produtos com URLs Próprias:**
  - Exemplo: `/produto/tantric-apple-oleo-massagem-tantrica-maca-do-amor-130ml`
  - Galeria de fotos reais em alta definição com zoom em tela cheia.
  - Botão **Comprar pelo WhatsApp** com mensagem pré-formatada com o nome e preço do produto.
  - Informações completas: marca, volume, modo de uso, benefícios e produtos relacionados.
- **Sacola de Compras Interativa (Slide-over Drawer):**
  - Adição rápida de itens com controle de quantidade.
  - Cálculo de total com simulação de desconto no Pix.
  - Finalização direta pelo WhatsApp gerando a lista de itens formatada.
- **Painel Administrativo Completo (`/admin`):**
  - Acesso protegido por PIN (padrão: `2026`).
  - Cadastro de novos produtos, alteração de preços, fotos, estoque e ocultação de produtos indisponíveis.
  - Sincronização automática em tempo real com a vitrine e páginas individuais.
  - Exportação e importação de catálogo em JSON para fácil backup.
- **Conformidade Legal & Privacidade:**
  - Modal discreto de confirmação de maioridade legal (+18).
  - Políticas de privacidade, termos de uso e trocas adaptadas para produtos íntimos.
  - Destaques de entrega em embalagem descaracterizada e sigilo na fatura do cartão.
- **SEO & Otimização:**
  - Meta tags OpenGraph e Twitter Cards para compartilhamento no Instagram e WhatsApp.

---

## 🚀 Como Subir para o GitHub e Fazer Deploy na Vercel

### 1. Inicializar o Git e Subir para o GitHub

No terminal, dentro da pasta do projeto, execute:

```bash
# Inicializar o repositório Git
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "feat: site premium Toque de Desejo para Vercel"

# Renomear a branch para main
git branch -M main

# Conectar ao seu repositório no GitHub (substitua pela URL do seu repositório criado no GitHub)
git remote add origin https://github.com/SEU-USUARIO/toque-de-desejo.git

# Enviar os arquivos
git push -u origin main
```

---

### 2. Deploy Instantâneo na Vercel

1. Acesse **[vercel.com](https://vercel.com/)** e faça login com sua conta do GitHub.
2. Clique em **"Add New..."** → **"Project"**.
3. Selecione o repositório **toque-de-desejo**.
4. A Vercel detectará automaticamente o framework **Next.js**. Não é necessário alterar nenhuma configuração.
5. Clique no botão **"Deploy"**.
6. Em menos de 1 minuto seu site estará no ar com certificado SSL (HTTPS) gratuito e URLs ativas!

---

## 🛠️ Personalização Rápida

### Alterar Número do WhatsApp e Dados de Contato
Abra o arquivo [`lib/storeConfig.js`](file:///Users/markssants/Documents/GitHub/Toque%20de%20Desejo/lib/storeConfig.js) e altere:

```javascript
export const STORE_CONFIG = {
  name: "Toque de Desejo",
  handle: "toque_de_desejo121",
  whatsappNumber: "5511999999999", // Coloque seu DDD e número oficial
  whatsappDisplay: "(11) 99999-9999",
  ...
};
```

### Acessar o Painel Administrativo
1. Acesse a rota `/admin` no navegador (ex: `https://seusite.vercel.app/admin`).
2. Digite o PIN de segurança: `2026`.
3. Você poderá cadastrar novos produtos, editar preços e gerenciar o estoque.

---

## 📦 Scripts Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento em `http://localhost:3000`.
- `npm run build`: Cria a versão de produção otimizada para a Vercel.
- `npm run start`: Inicia o servidor de produção localmente.
