# 💖 Love Counting

Site romântico feito como um projeto pessoal para comemorar o relacionamento, aproveitando a oportunidade para colocar em prática os conhecimentos adquiridos.

## 📌 Visão Geral

**Love Counting** é um site estático criado com **Ruby on Rails** e **JavaScript** para exibir:

- Contador regressivo e contador de dias desde o início do relacionamento.
- Carrossel infinito com fotos.
- Botão flutuante para WhatsApp.
- Música incorporada via Spotify.
- Layout responsivo com estilo clean, moderno e mobile-first.

## 🚀 Tecnologias

- **Ruby on Rails** — back‑end simples, apenas para servir views estáticas.
- **StimulusJS** — lógica de interatividade (carrossel, contador).
- **Tailwind CSS** — estilo utilitário, responsivo e leve.
- **Font Awesome** — ícones (WhatsApp).
- **Heroku** — deployment contínuo.

## ⚙️ Funcionalidades

- **Contador de dias:** calcula automaticamente o número de dias desde `24/08/2024`.
- **Carrossel infinito:**
  - Duas imagens clonadas para efeito de looping.
  - Swipe por mouse/touch com threshold de 50px.
  - Botões indicadores clicáveis.
- **WhatsApp flutuante:** botão fixo que redireciona para o chat.
- **Spotify embed:** player responsivo com música específica.
- **Estilo responsivo:** layout amigável tanto em mobile quanto desktop.

## 🧠 Aprendizados e Desafios

- **Loop infinito em carrossel:** entendi como criar clones, detectar quando estou no slide “fake” e “pular” discretamente.
- **Swipe fluido:** converti pixel de arrasto em porcentagem para manter a responsividade com `w-full`.
- **Integração com Tailwind:** configurei `scroll-snap`, transições e responsividade usando utilitários.
- **Deploy contínuo:** integração Rails + Tailwind + Stimulus com Heroku. Deploy via push → build → aplicação online.

## 🛠️ Como executar localmente

```bash
git clone https://github.com/MatEstevam/count_love.git
cd count_love
bundle install
yarn install
rails db:migrate   # (não há DB ativo, mas o passo está incluído)
rails s
