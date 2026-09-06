# Publicação e verificação de SEO — AJ Play Park

## Endereço oficial

Domínio confirmado: `https://ajplaypark.com.br/` (sem www). Os arquivos locais já foram gerados. Para regenerá-los após atualizar as fotos ou o endereço:

```sh
python3 scripts/configurar_seo.py --url https://ajplaypark.com.br/
```

O comando atualiza o HTML e gera `sitemap.xml` e `robots.txt`. O sitemap contém a única página existente e as dez fotografias presentes nela. As seções com `#` não são páginas independentes. Não são incluídas páginas inventadas, prioridades artificiais nem datas de atualização automáticas.

Os dados estruturados descrevem a organização, o site, a página e o serviço. A faixa de preço `$$` foi removida porque não está informada no conteúdo. As cidades atendidas são áreas de serviço; não são apresentadas como endereço físico. Não foram adicionadas avaliações, horários, preços, coordenadas ou certificações aos dados estruturados.

## Depois de publicar

1. Confirmar HTTPS e resposta HTTP 200 para a página, sitemap e robots. Conferir também que a hospedagem não bloqueia robôs de pesquisa ou solicita login/desafios para acessar o conteúdo.
2. Escolher um único domínio oficial; redirecionar as variantes de domínio e `/index.html` para a URL canônica usando as configurações da hospedagem. Não implementar regras para um domínio presumido.
3. Verificar a propriedade no Google Search Console e enviar a URL do sitemap. Usar a inspeção de URL para testar a página publicada e solicitar indexação. Isso requer acesso à propriedade ou ao DNS; não foi executado nesta sessão.
4. Validar os dados estruturados no Schema Markup Validator. `Organization`, `WebPage` e `Service` não implicam um resultado especial garantido no Google. Não foi inventado um endereço para forçar elegibilidade como estabelecimento físico.
5. Executar PageSpeed Insights no modo celular e verificar LCP, INP e CLS. Ainda não há medição da página publicada. Conferir navegação em 320, 375, 390, 768 e 1440 px, ampliação de texto, menu fixo, balão e galeria.
6. Manter o Perfil da Empresa no Google e o Bing Places corretos, se disponíveis, com serviço, telefone e cidades consistentes. Não publicar endereço residencial como loja física se não houver atendimento ali. Obter avaliações reais; nunca fabricar avaliações ou números.
7. Opcionalmente verificar a propriedade no Bing Webmaster Tools e enviar o mesmo sitemap. Acompanhar consultas e indexação nos painéis reais, sem prometer posição ou recomendação por IA.

## Hospedagem

O projeto tem configurações de Apache/Hostinger e workflows de GitHub Pages. `.htaccess` só é aplicado em servidores compatíveis; o GitHub Pages o ignora. Em hospedagem sob uma subpasta, `robots.txt` deve ficar na raiz do domínio para ser reconhecido. Não foram alterados os workflows nem a publicação nesta tarefa.

## Conteúdo e celular

O conteúdo principal já está no HTML, inclusive as três cenas do balão e as perguntas frequentes. O mesmo conteúdo é servido no celular e no computador. O menu agora tem estilos base para celular e ampliações por `min-width`, preservando a aparência existente. Imagens fora do topo continuam com carregamento tardio e receberam decodificação assíncrona; a imagem principal mantém prioridade alta. As respostas ficam visíveis quando JavaScript não está disponível.

## Fontes

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
- https://developers.google.com/search/docs/appearance/ai-features

O Google informa que as boas práticas de SEO também se aplicam aos seus recursos de IA; não exige arquivos especiais de IA nem oferece garantia de rastreamento, indexação ou exibição. Nenhum arquivo `llms.txt` foi adicionado como suposto atalho de posicionamento.
