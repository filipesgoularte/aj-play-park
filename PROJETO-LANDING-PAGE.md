# PROJETO LANDING PAGE — AJ PLAY PARK

**Documento de orientação e especificação completa da página**
**Cliente:** AJ Play Park
**Responsável pelo projeto:** Golts Consultoria
**Data:** 29 de agosto de 2026 — *atualizado após a separação de HTML, CSS e JavaScript*
**Arquivos do projeto:** `index.html` + `assets/` (ver item 10.1)

---

## 1. O QUE É ESTE DOCUMENTO

Este arquivo é o "manual" completo da página de vendas da **AJ Play Park**. Ele foi escrito para que **qualquer pessoa**, mesmo sem nenhum conhecimento técnico, consiga entender:

- O que é a página e para que ela serve
- Qual é a ideia e a proposta por trás dela
- Como ela foi pensada e construída
- O que aparece em cada parte
- Quais cores, fontes, tamanhos e espaçamentos foram usados
- Por que ela foi feita para celular primeiro (mobile first)
- Como ela se adapta para tablet e computador
- Como ela se conecta aos anúncios do Google e do Meta (Facebook/Instagram)
- Como ela respeita a LGPD e o uso de cookies

Este documento também serve como **manual técnico de manutenção**: o item 10 explica a organização dos arquivos, onde mexer em cada coisa e como publicar.

---

## 2. IDENTIFICAÇÃO DO NEGÓCIO

**Cliente:** AJ Play Park
**Instagram:** https://www.instagram.com/ajplaypark/
**Serviço:** Carretinha Playground completa de 2 andares (estrutura móvel que inclui pula-pula, piscina de bolinhas, tobogã e obstáculos)
**Atendimento:** Jundiaí e Itupeva - SP
**Público-alvo:** Pais e responsáveis que buscam brinquedos para aniversários, chácaras, residências, escolas e eventos em geral
**Diferencial:** Estrutura segura e certificada, com higienização completa
**WhatsApp:** (11) 92488-2904

---

## 3. OBJETIVO DA PÁGINA

A página tem **um objetivo principal**: transformar visitantes em **clientes que pedem orçamento pelo WhatsApp**.

Ela foi pensada para funcionar como **página de destino (landing page)** de campanhas de **Google Ads** e **Meta Ads** (Facebook e Instagram). Isso significa que:

- O visitante chega na página vindo de um anúncio
- A página apresenta o serviço de forma clara e atraente
- O visitante é incentivado a clicar em um botão de WhatsApp para fazer o orçamento
- O contato é direto, rápido e sem burocracia

**O que a página NÃO é:** um site institucional completo com várias páginas. Ela é uma página única, focada em conversão (venda/contato).

---

## 4. PROPOSTA E MENSAGEM PRINCIPAL

A mensagem central da página é:

> **"Transforme sua festa em um momento inesquecível."**

A ideia por trás dessa mensagem é emocional: a página fala com pais que querem dar uma festa inesquecível para os filhos. Em vez de vender apenas "aluguel de brinquedos", ela vende **experiência, alegria e praticidade**.

O grande argumento de venda é a **Carretinha Playground de 2 andares**: em vez de alugar vários brinquedos separados, o cliente aluga uma única estrutura que já vem com **pula-pula, piscina de bolinhas, tobogã e obstáculos** juntos.

Outro argumento forte é a **praticidade**: a empresa leva, monta e retira tudo. O cliente só aproveita a festa, sem trabalho nenhum.

---

## 5. ESTRUTURA DA PÁGINA (O QUE APARECE EM CADA PARTE)

A página é dividida em seções, na seguinte ordem:

### 5.1. Barra de título do navegador (favicon)
- O ícone que aparece na aba do navegador é a **logo da AJ Play Park sem fundo**.
- Isso reforça a marca em todos os detalhes.

### 5.2. Topo (Hero)
- **Logo da AJ Play Park** em destaque (sem fundo). No celular e tablet ela fica centralizada; no computador, alinhada à esquerda.
- **Título principal:** "Transforme sua festa em um momento inesquecível"
- **Subtítulo:** explica o serviço e a região de atendimento (Jundiaí e Itupeva)
- **Botão de WhatsApp:** "Fazer orçamento agora" (verde, chamativo)
- **Frase de apoio:** "Resposta rápida • Sem compromisso"
- **Foto da carretinha** montada em uma festa (imagem real fornecida pelo cliente)

### 5.3. Selos de confiança
Quatro destaques que geram confiança. Cada um traz uma informação **nova**, que ainda não apareceu no topo:
- Estrutura Segura e Certificada — fabricação certificada e vistoria antes de cada festa
- Higienização Completa — limpeza entre um evento e outro
- Dois Andares de Diversão — mais espaço de brincadeira no mesmo canto do quintal
- Atendimento de Família — o cliente trata direto com os donos

> Os selos "Levamos, Montamos e Retiramos" e "Diversão Garantida" foram **removidos**: o primeiro repetia palavra por palavra o subtítulo do topo, e o segundo não entregava informação nenhuma.

### 5.4. A Carretinha (brinquedos)
- Título: "AJ Play Park proporciona tudo que a criançada ama, em um só lugar"
- Seis cards com os brinquedos, cada um com um ícone:
  - Diversão Completa (rosto sorrindo)
  - Pula Pula (trampolim)
  - Piscina de Bolinhas (piscina de bolinhas)
  - Tobogã (tobogã)
  - Obstáculos (obstáculo)
  - Festa Completa (balões)
- Um bloco de destaque azul com chamada para pedir orçamento

### 5.5. Galeria de Fotos (slides)
Faixa de fotos reais dos brinquedos, logo depois da seção que os apresenta em ilustração: primeiro a página **diz** o que a carretinha tem, aqui ela **prova**.

- Os slides passam sozinhos, devagar e sem parar (cerca de 21 pixels por segundo), num laço contínuo e sem emenda.
- **Param quando o mouse fica em cima** e voltam a andar quando ele sai.
- Podem ser **arrastados para os dois lados**, com o dedo ou com o mouse. Ao soltar, o passeio recomeça sozinho.
- No celular aparece 1 slide e meio (o pedaço do próximo é o que avisa que dá para arrastar); no tablet, cerca de 2; no computador, cerca de 3.
- Quem tem "reduzir movimento" ligado no aparelho não vê a animação: a faixa vira uma barra que se rola à mão.
- Sem JavaScript a seção continua funcionando como faixa rolável — nada some.

**Para trocar as fotos:** basta substituir os arquivos dentro de `assets/images/galeria/` mantendo os mesmos nomes. Nenhum código precisa ser editado.

### 5.6. Onde a Carretinha Chega (tipos de evento)
Quatro cards com ícone **e uma linha de conteúdo cada** — antes eram apenas rótulos soltos:
- Aniversários (bolo com velas)
- Chácaras (fazenda/celeiro)
- Escolas (prédio escolar)
- Eventos em Geral (chapéu de festa)

O título desta seção deixou de listar de novo "Aniversários, Chácaras, Escolas e Eventos" (o que repetia o topo e os próprios cards logo abaixo) e passou a ser **"Do quintal de casa ao pátio da escola"**.

### 5.7. Como Funciona
Três passos simples:
1. Você escolhe a data
2. Nós levamos e montamos
3. Você só aproveita

### 5.8. Quem Somos
- Foto do casal fundador (Adriano e Jaqueline)
- Texto contando a história da família e o propósito do negócio
- Botão de WhatsApp

### 5.9. Perguntas Frequentes (FAQ)
Seis dúvidas, respondendo os **medos reais dos pais**:
- Onde a carretinha atende
- A estrutura é segura
- Os brinquedos são higienizados
- Preciso de quanto espaço
- E se chover no dia da festa
- Com quanto tempo de antecedência reservar (inclui como reservar)

> Passou de 8 para 6 perguntas. **"Quem monta e desmonta"** foi removida porque repetia inteiros os passos 2 e 3 da seção "Como Funciona". **"Como reservar uma data"** foi fundida com a de antecedência, que já respondia a mesma coisa no fim.

**Detalhe importante:** o primeiro item do FAQ já vem aberto, para o visitante já ver conteúdo assim que chega na seção.

### 5.10. Chamada final (CTA Final)
- Título: "Garanta a alegria da criançada"
- Botão de WhatsApp: "Fazer orçamento agora"
- Frase: "Leva menos de um minuto para saber se a sua data está livre."

> O texto anterior repetia quase palavra por palavra o título principal do topo ("Transforme a próxima festa em um momento inesquecível") e citava Jundiaí e Itupeva pela sexta vez na página.

### 5.11. Rodapé
- Logo (com fundo branco circular) + nome "AJ Play Park"
- Breve descrição do serviço
- Bloco "Atendimento" com WhatsApp, Instagram e localização
- Direitos autorais e link para a Política de Privacidade

### 5.12. Botão flutuante de WhatsApp
- Um botão redondo verde fixo no canto inferior direito
- Fica **piscando** (animação de pulso) para chamar atenção
- Sem texto, apenas o ícone do WhatsApp

---

## 5.13. REGRA DE CASCATA (não repetir informação)

A página é lida de cima para baixo. Uma informação já dita **não pode reaparecer** mais abaixo: repetição cansa o leitor e faz um trabalho profissional parecer amador.

Cada ideia tem um "dono" — a seção onde ela pode aparecer:

| Ideia | Onde pode aparecer |
|---|---|
| "Jundiaí e Itupeva" | Topo (promessa) e FAQ "onde atende". No rodapé só como endereço |
| "Levamos, montamos e retiramos" | Topo (promessa) e "Como Funciona" (o passo a passo) |
| "Você só aproveita" | Topo e passo 3 de "Como Funciona" |
| "Inesquecível" | Título principal e "Quem Somos" |
| "Sem compromisso" | Topo |
| Lista de públicos | Topo. Os cards de eventos são a lista, não precisam repeti-la |
| Higienização | Selo (a promessa) e FAQ (o detalhe) |
| Preço / valores | Bloco azul de destaque |
| Escassez de datas | FAQ "antecedência" |
| Facilidade de contato | Chamada final |

**Exceção proposital:** o botão "Fazer orçamento agora" aparece igual nas 4 vezes. Isso não é repetição por descuido — é consistência de chamada para ação, que aumenta a conversão. Trocar o texto do botão a cada seção confunde o visitante.

**Ao escrever qualquer texto novo:** leia a página inteira de cima até o ponto onde vai escrever. Se a ideia já foi dita, mude o ângulo ou corte a frase.

---

## 6. DESIGN APLICADO

### 6.1. Mobile First (celular primeiro)
A página foi construída pensando **primeiro no celular**, porque a maioria dos visitantes de anúncios acessa pelo smartphone.

Isso significa que:
- O estilo base (CSS) é escrito para a tela pequena
- No celular, tudo fica centralizado, em coluna única, fácil de ler e tocar
- Depois, com regras de adaptação (media queries), a página se ajusta para tablet e computador

**Como funciona na prática:**
- **Celular:** uma coluna, tudo empilhado e centralizado
- **Tablet (a partir de 600px):** os cards passam a ficar lado a lado
- **Computador (a partir de 900px):** o topo vira duas colunas (texto à esquerda, foto à direita) e os cards se organizam em 3 colunas

### 6.2. Paleta de Cores
As cores foram escolhidas para transmitir **alegria, diversão e confiança**, típicas do universo infantil:

| Nome | Código | Uso |
|------|--------|-----|
| Azul principal | `#2E6FB8` | Botões de destaque, títulos de seção |
| Azul escuro | `#1D4E85` | Rodapé, blocos de destaque |
| Azul claro | `#7EC8E3` | Detalhes e balões |
| Azul céu | `#D6F0FA` | Fundo do topo e da seção "Como Funciona" |
| Amarelo | `#F5B301` | Etiquetas, detalhes alegres |
| Rosa | `#E86A92` | Destaques de palavras no título |
| Laranja | `#F07C1F` | Detalhes dos balões |
| Verde | `#2FA86A` | Detalhes de confirmação |
| Creme | `#FBF6EF` | Fundo geral da página |
| Branco | `#FFFFFF` | Cards e fundos de seção |
| Verde WhatsApp | `#1FAF54` | Todos os botões de WhatsApp |

### 6.3. Fontes (Tipografia)
A página usa **as fontes já instaladas no aparelho do visitante** (chamadas "fontes de sistema"). Nenhum arquivo de fonte é baixado.

- **Títulos:** `ui-rounded` → no iPhone e no Mac entrega a SF Pro Rounded, que é arredondada e combina com o universo infantil. No Android e no Windows, cai para a fonte padrão do sistema (Roboto / Segoe UI).
- **Textos:** `system-ui` → a fonte padrão de leitura de cada sistema, sempre limpa e legível.

**Por que não usamos Google Fonts:** três motivos práticos.
1. **Licença.** Toda fonte tem uma licença. Baixar e servir arquivos de fonte pelo nosso servidor cria uma obrigação legal (manter o aviso de copyright junto). Usando as fontes do próprio aparelho, não distribuímos nada e não existe obrigação nenhuma.
2. **Velocidade.** Some o download de 140 KB de fontes e o "piscar" do texto no carregamento. A página aparece pronta de primeira.
3. **LGPD.** A CDN do Google recebia o IP de cada visitante antes mesmo do aviso de cookies. Agora nenhum dado sai para terceiros.

**Efeito visual:** o desenho geral (tamanhos, pesos, cores, espaçamentos) é idêntico. O que muda é o desenho das letras, que passa a acompanhar o sistema do visitante.

### 6.4. Tamanhos e Espaçamentos
- **Título principal (h1):** tamanho fluido, entre 1.9rem e 3.6rem, com espaçamento entre linhas compacto (line-height 0.95) para ficar profissional sem encavalcar.
- **Títulos de seção (h2):** entre 1.6rem e 2.6rem.
- **Textos:** entre 0.9rem e 1.05rem.
- **Espaçamento entre o botão de WhatsApp e a frase "Resposta rápida • Sem compromisso":** 20px de espaço acima da frase.
- **Cards:** cantos arredondados (20px), com sombra suave para dar profundidade.
- **Botões de WhatsApp:** formato de pílula (bem arredondado), verde, com sombra para parecerem clicáveis.

### 6.5. Elementos Visuais e Animações
- **Nuvens animadas** que flutuam pelo fundo
- **Balões coloridos** que sobem lentamente (animação)
- **Círculos decorativos** girando no topo
- **Efeito de surgimento** das seções ao rolar a página (aparecem suavemente)
- **Botão flutuante piscando** para chamar atenção

Esses elementos deixam a página viva e divertida, sem atrapalhar a leitura.

---

## 7. IMAGENS UTILIZADAS

Todas as imagens ficam em `assets/images/` e estão em **WebP**, o formato de imagem mais leve com boa qualidade.

### 7.1. Ícones dos brinquedos (gerados por IA, estilo flat)
Foram criados 10 ícones originais no estilo "flat" (desenho chapado, colorido), seguindo a paleta do site:

**Brinquedos (6):**
- `diversao-completa.webp` → rosto sorrindo
- `pula-pula.webp` → trampolim
- `piscina-de-bolinhas.webp` → piscina de bolinhas
- `toboga.webp` → tobogã
- `obstaculos.webp` → obstáculo
- `festa-completa.webp` → balões

**Eventos (4):**
- `aniversarios.webp` → bolo com velas
- `chacaras.webp` → fazenda/celeiro
- `escolas.webp` → prédio escolar
- `eventos-gerais.webp` → chapéu de festa

**Otimização aplicada:** os arquivos originais tinham 1024×1024 pixels e somavam 2,7 MB, para aparecer na tela com 60 a 72 pixels. Além disso, 9 dos 10 estavam salvos como JPEG com a extensão trocada para `.png`, e tinham um fundo branco quadrado que aparecia sobre os cards creme. Foram redimensionados, convertidos para WebP e tiveram o fundo recortado: **2,7 MB → 97 KB**, sem perda visível.

Os arquivos em alta resolução ficam guardados em `assets/images/originais/` (bloqueados no servidor, servem apenas de arquivo morto).

### 7.4. Fotos da galeria
Ficam em `assets/images/galeria/`, uma para cada slide: `pula-pula.webp`, `piscina-de-bolinhas.webp`, `toboga.webp`, `obstaculos.webp` e `vista-geral.webp`.

Hoje são **espaços reservados** com o ícone da marca e o aviso "Foto em breve". Ao receber as fotos reais, basta gravar cada uma por cima, com o mesmo nome, em WebP e proporção 4:3 (sugerido 800×600, até 150 KB cada). A página se ajusta sozinha.

**Nota sobre direitos autorais:** os ícones foram **recriados em versões originais** dos conceitos, e não cópias exatas de ícones de bancos de imagens, para não haver risco de violação de direitos autorais na página do cliente.

### 7.2. Logo
- A logo da AJ Play Park foi fornecida pelo cliente em WebP, **sem fundo**.
- Fica hospedada no próprio site (`assets/images/logo-aj-play-park.webp`), não em um endereço externo: assim a página não quebra se o outro servidor sair do ar.
- Aparece em três lugares:
  1. **Favicon** (ícone da aba) — `favicon.webp`
  2. **Topo (hero)** — sem fundo, centralizada no celular/tablet
  3. **Rodapé** — com fundo branco circular, pois a logo tem fundo transparente e ficaria ilegível sobre o azul escuro

### 7.3. Fotos reais
- **Foto da carretinha** no topo — `carretinha-playground-hero.webp` (fornecida pelo cliente)
- **Foto do casal fundador** na seção "Quem Somos" — **pendente**. Enquanto não chega, a página exibe um espaço reservado no estilo da marca (`casal-fundadores-placeholder.svg`), nunca uma imagem quebrada. Como substituir: ver item 12.

---

## 8. CONFORMIDADE COM A LGPD E COOKIES

A página é uma **landing page voltada para anúncios**, e por isso precisa estar em conformidade com a **Lei Geral de Proteção de Dados (LGPD)** do Brasil.

### 8.1. Aviso de Cookies (Obrigatório)
A página **deve** ter um **aviso de cookies** (banner) que aparece quando o visitante entra no site. Esse aviso deve:
- Informar que o site usa cookies
- Explicar para que servem (ex.: melhorar a experiência, medir anúncios)
- Dar a opção de **aceitar** ou **recusar**
- Linkar para a **Política de Privacidade e Cookies** completa

### 8.2. Política de Privacidade
O rodapé já contém o link para a Política de Privacidade e Cookies:
`https://agencia.golts.com.br/politica/`

### 8.3. Boas práticas de conformidade
- Coletar apenas os dados necessários (no caso, o contato via WhatsApp)
- Não usar dados de terceiros sem consentimento
- Deixar claro como o visitante pode solicitar a exclusão de seus dados
- Garantir que o rastreamento de anúncios (Google/Meta) respeite o consentimento do usuário

### 8.4. O que já está implementado
O aviso de cookies **está pronto e funcionando** (`assets/js/consentimento.js`):

- Aparece na primeira visita, com os botões **Aceitar** e **Recusar** e link para a Política de Privacidade.
- **Nenhum rastreador é carregado antes do clique em "Aceitar".** Recusando ou ignorando, nenhum script de terceiro é baixado — não há "consentimento implícito" nem contagem por rolagem, práticas que a ANPD considera irregulares.
- A escolha fica guardada no navegador do visitante e pode ser trocada a qualquer momento pelo link **"Gerenciar cookies"** no rodapé, atendendo ao direito de revogar o consentimento (art. 8º, §5º da LGPD).
- Ao recusar depois de ter aceitado, a página recarrega para que a revogação valha na hora.

---

## 9. INTEGRAÇÃO COM GOOGLE ADS E META ADS

### 9.1. Objetivo da integração
A página recebe visitantes vindos de anúncios do **Google** (busca) e do **Meta** (Facebook/Instagram). O objetivo é **converter** esses visitantes em contatos pelo WhatsApp.

### 9.2. Link de destino dos anúncios
Os anúncios devem apontar para o WhatsApp com uma mensagem pronta:
`https://wa.me/5511924882904?text=Olá! Vi o anúncio da Carretinha Playground e gostaria de um orçamento para o dia [data].`

### 9.3. Palavras-chave (Google Ads)
A campanha de busca usa palavras como:
- "aluguel piscina de bolinhas"
- "aluguel pula pula"
- "aluguel tobogã inflável"
- "aluguel carretinha playground"
- "aluguel brinquedos jundiaí"
- "aluguel brinquedos itupeva"

A estratégia é capturar quem busca brinquedos individuais e apresentar a **Carretinha Playground** como a solução completa e superior.

### 9.4. Títulos e descrições dos anúncios
Foram criados vários títulos (máx. 30 caracteres) e descrições (máx. 90 caracteres) para os anúncios responsivos, sempre destacando a carretinha e a chamada para orçamento.

### 9.5. Rastreamento (Pixel e Tag)
A estrutura já está pronta e condicionada ao consentimento. Para ligar, são **dois passos, nesta ordem**:

**Passo 1 — preencher os identificadores** em `assets/js/consentimento.js`, no início do arquivo:

```js
googleTagId: 'AW-000000000',      // Google Ads
metaPixelId: '000000000000000'    // Pixel da Meta
```

**Passo 2 — liberar os domínios na política de segurança.** No `index.html`, dentro da tag `<meta http-equiv="Content-Security-Policy">`, substitua estas três linhas (o texto exato está no comentário logo acima da tag):

```
script-src 'self' https://www.googletagmanager.com https://connect.facebook.net;
img-src 'self' data: https://www.google-analytics.com https://www.facebook.com;
connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com;
```

**Sem o passo 2 as tags são bloqueadas.** A página nasce fechada a qualquer script de terceiro, de propósito — é o que impede que um código estranho rode na página do cliente.

**Como conferir:** abra a página, clique em "Aceitar" e verifique o disparo no Google Ads / Gerenciador de Anúncios. Antes do clique, nada pode ser carregado — esse é o comportamento exigido pela LGPD.

---

## 10. ESTRUTURA TÉCNICA E MANUTENÇÃO

### 10.1. Organização dos arquivos

```
aj-play-park/
├── index.html                      Somente a ESTRUTURA da página
├── .htaccess                       HTTPS, segurança e cache (Hostinger/Apache)
├── PROJETO-LANDING-PAGE.md         Este documento
└── assets/
    ├── css/style.css               TODO o visual
    ├── js/main.js                  FAQ, animações de entrada, ano do rodapé
    ├── js/consentimento.js         Aviso de cookies e tags de anúncio
    └── images/                     Imagens da página (todas em WebP)
        ├── galeria/                Fotos dos slides (ver item 7.4)
        └── originais/              Alta resolução, arquivo morto (fora do ar)
```

Cada linguagem em seu arquivo: HTML é estrutura, CSS é visual, JavaScript é comportamento. Isso deixa a manutenção simples e permite que o navegador guarde CSS e JS em cache entre visitas.

**Regra de ouro:** nunca escreva CSS dentro de `style="..."` nem JavaScript dentro de `<script>` no `index.html`. A política de segurança da página bloqueia código embutido — é exatamente isso que a protege. Estilo vai para `style.css`; comportamento vai para os arquivos `.js`.

### 10.2. Regras de funcionamento (mantidas da especificação)

1. **Mobile first**: o CSS base é para celular; tablet (600px) e desktop (900px) vêm nas media queries do final do arquivo.
2. **Todos os botões de WhatsApp** abrem a conversa com a mensagem pré-preenchida (5 lugares no `index.html`; procure por `api.whatsapp.com`).
3. **O botão flutuante** fica fixo no canto inferior direito, piscando, sem texto. Ele some enquanto o aviso de cookies está aberto, para não cobrir os botões.
4. **O primeiro item do FAQ** começa aberto.
5. **O aviso de cookies** e a conformidade com a LGPD estão implementados (item 8.4).

### 10.3. Segurança aplicada

**Na página (`index.html`)** — a Content-Security-Policy é uma lista fechada do que a página pode carregar. Tudo vem do próprio domínio. Testado no navegador:
- um `<script>` injetado na página **não executa**;
- um `style="..."` injetado **não é aplicado**;
- uma imagem ou rastreador de domínio externo **não é carregado**.

**No servidor (`.htaccess`)** — HTTPS forçado; `frame-ancestors` e `X-Frame-Options` impedem que a página seja embutida em outro site (clickjacking); `nosniff` impede o navegador de adivinhar tipos de arquivo; `Referrer-Policy` não revela o endereço da página a terceiros; listagem de pastas desativada; `.md` e arquivos ocultos bloqueados.

**No código** — nenhuma biblioteca de terceiros (sem jQuery, sem CDN, sem banner de cookies pronto): não há código de fora rodando na página. Nenhum uso de `innerHTML` ou `eval`. Todo link que abre em nova aba leva `rel="noopener noreferrer"`.

### 10.4. Onde mudar cada coisa

| O que mudar | Onde |
|---|---|
| Textos e perguntas do FAQ | `index.html` |
| Cores | `assets/css/style.css`, bloco `:root` no início |
| Tamanhos, espaçamentos, layout | `assets/css/style.css` |
| Mensagem pronta do WhatsApp | `index.html`, procure `api.whatsapp.com` |
| Texto do aviso de cookies | `index.html`, bloco `aviso-cookies` |

### 10.5. Publicação na Hostinger

1. Envie tudo por FTP ou pelo Gerenciador de Arquivos. Não há etapa de compilação: é HTML, CSS e JavaScript puros.
2. Confirme que o **certificado SSL está ativo** antes de tudo — o `.htaccess` força HTTPS.
3. Confira na página publicada: aviso de cookies aparece, FAQ abre e fecha, botões de WhatsApp levam à conversa com a mensagem pronta.

**Ao alterar `style.css` ou `main.js` depois de publicado**, o navegador pode continuar mostrando a versão antiga por uma semana. Para a mudança aparecer na hora, acrescente um número de versão no `index.html`:

```html
<link rel="stylesheet" href="assets/css/style.css?v=2">
```

### 10.6. Desempenho

Peso total da página publicada: **cerca de 340 KB**, sem nenhum download de terceiros.

- Imagens em WebP, no tamanho exato de exibição
- Zero arquivos de fonte (usa as do aparelho do visitante)
- `width` e `height` em todas as imagens: a página não "pula" ao carregar
- Imagens abaixo da primeira tela carregam sob demanda
- Foto principal priorizada com `preload`

### 10.7. Acessibilidade

- Navegação completa por teclado, com indicador de foco visível
- Link "Pular para o conteúdo" no início da página
- FAQ com `aria-expanded`: leitores de tela anunciam o que está aberto ou fechado
- Nuvens e balões marcados como decorativos (`aria-hidden`)
- Quem configurou "reduzir movimento" no aparelho vê a página sem animações

---

## 11. RESUMO PARA O LEIGO (ENTENDENDO O PROJETO EM 1 MINUTO)

Imagine que você é um pai ou uma mãe que quer alugar brinquedos para a festa de aniversário do seu filho em Jundiaí. Você vê um anúncio no Google ou no Instagram e clica nele.

Você chega em uma página bonita e colorida, que mostra:
- Uma **carretinha de brinquedos** que já vem com pula-pula, piscina de bolinhas, tobogã e obstáculos
- Que a empresa **leva, monta e retira** tudo, sem trabalho para você
- Que é **segura e higienizada**
- Que atende **Jundiaí e Itupeva**
- Depoimentos de confiança e respostas para suas dúvidas

No final, você é incentivado a clicar em um botão verde de **WhatsApp** para pedir o orçamento. Pronto: é assim que a página transforma visitantes em clientes.

A página foi feita para ser **fácil de usar no celular** (onde a maioria das pessoas está), bonita de se ver, e **legalmente correta** (com aviso de cookies e respeito à privacidade).

---

## 12. PENDÊNCIAS E PRÓXIMOS PASSOS

- [x] Adicionar o **banner de aviso de cookies** (LGPD) — ver item 8.4
- [x] Preparar a estrutura das **tags de rastreamento** — falta preencher os IDs (item 9.5)

### [ ] Inserir a foto do casal fundador
Quando o cliente enviar a foto:
1. Salve como `assets/images/casal-fundadores.webp` (proporção 4:3, sugerido 800×600, no máximo 150 KB).
2. No `index.html`, na seção "QUEM SOMOS", troque `casal-fundadores-placeholder.svg` por `casal-fundadores.webp`.
3. Ajuste o texto alternativo para algo como `alt="Adriano e Jaqueline, fundadores da AJ Play Park"`.

### [ ] Enviar as fotos da carretinha
A galeria (item 5.5) está no ar com espaços reservados. Envie 5 fotos — pula-pula, piscina de bolinhas, tobogã, obstáculos e uma vista geral — e substitua os arquivos de `assets/images/galeria/` mantendo os nomes. Detalhes no item 7.4.

### [ ] Definir o endereço final do site
No `<head>` do `index.html` há duas linhas comentadas (`canonical` e `og:image`). Assim que o domínio existir, remova os comentários e troque `SEU-DOMINIO.com.br` pelo endereço real. **Sem isso, o link compartilhado no WhatsApp não mostra a imagem de prévia.**

### [ ] Preencher os IDs do Google Ads e do Meta Ads
Dois passos, detalhados no item 9.5. Lembre-se do passo 2 (liberar os domínios na política de segurança), senão as tags são bloqueadas.

### [ ] Confirmar os valores de locação
Para configurar extensões de preço nos anúncios. Não afeta a página.

### [ ] Publicar
Instruções no item 10.5.

---

*Documento elaborado pela Golts Consultoria em 29 de agosto de 2026. Este arquivo serve como especificação completa do projeto e orientação técnica para execução e manutenção da página.*