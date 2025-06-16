💖 Love Counting

Site romântico feito como um projeto pessoal para comemorar o relacionamento, aproveitando a oportunidade para colocar em prática os conhecimentos adquiridos.

📌 Visão Geral

Love Counting é um site estático criado com Ruby on Rails e JavaScript para exibir:

Contador regressivo e contador de dias desde o início do relacionamento.

Carrossel infinito com fotos (swipe via mouse e touch).

Botão fixo para WhatsApp.

Embed de música do Spotify.

Layout responsivo com estilo clean, moderno e mobile-first.

🚀 Tecnologias

Ruby on Rails — back‑end simples, apenas para servir views estáticas.

StimulusJS — lógica de interatividade, principalmente para o carrossel e contador.

Tailwind CSS — estilo utilitário, responsivo e leve.

Font Awesome — ícones (WhatsApp).

Heroku — deployment contínuo.

📂 Estrutura do Projeto
bash
Copiar
Editar
.
├── app
│   ├── views/
│   │   └── layouts/application.html.erb  # HEAD com CSS/JS/fontes, meta tags
│   ├── controllers/                      # controllers Rails
│   └── javascript/controllers/           # Stimulus: carousel e contador
├── app/assets/stylesheets/              # Tailwind e ajustes CSS
├── config/
│   └── tailwind.config.js
├── public/                              # assets compilados (heroku deploy)
├── Gemfile·lock                         # dependências Rails
└── README.md                            # este arquivo 😊

⚙️ Funcionalidades

Contador de dias: calcula automaticamente o número de dias desde 24/08/2024.

Carrossel infinito:

Duas imagens clonadas para efeito de looping.

Swipe por mouse/touch com threshold de 50px.

Botões indicadores clicáveis.

WhatsApp flutuante: botão fixo que redireciona para chat.

Spotify embed: player responsivo com música específica.

Estilo responsivo: layout amigável mobile e desktop.

🧠 Aprendizados e Desafios

Loop infinito em carrossel: entendi como criar clones, detectar quando estou no slide “fake” e “pular” discretamente.

Swipe fluido: converti pixel de arrasto em porcentagem para manter a responsividade com w-full.

Integração com Tailwind: configurei scroll-snap, transições e responsividade com utilitários.

Deploy contínuo: integração Rails + Tailwind + Stimulus com Heroku. Flow deploy simples via push → build → aplicação online.

🛠️ Como executar localmente

bash
Copiar
Editar
git clone https://github.com/MatEstevam/count_love.git
cd count_love
bundle install
yarn install
rails db:migrate # (não há DB ativo, mas passo incluído)
rails s
Abra http://localhost:3000 no navegador.

🎯 Por que vale a pena ver?

Código organizado, simples e funcional.

Uso prático de Rails + Stimulus + Tailwind para criar um projeto real.

Demonstração de aplicação com interatividade moderna e deployment funcional.

Design limpo, responsivo e focado no objetivo — sem excessos.

📫 Contato

GitHub: MatEstevam
LinkedIn: https://www.linkedin.com/in/matheus-estevam-1814b4220/
E-mail: matheus.estevam.br@gmail.com
