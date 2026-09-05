/* AJ PLAY PARK — aviso de cookies (LGPD) e tags de anúncio.

   Nada de rastreamento é carregado antes do clique em "Aceitar". Recusando
   ou ignorando, nenhum script de terceiro é baixado.

   PARA ATIVAR as tags: item 9.5 do PROJETO-LANDING-PAGE.md. São dois passos —
   preencher os IDs abaixo E liberar os domínios na política do index.html.
   Sem o segundo passo, as tags são bloqueadas. */

(function () {
  'use strict';

  var CONFIG = {
    googleTagId: '',   // 'AW-000000000' (Google Ads) ou 'G-XXXXXXXXXX'
    metaPixelId: ''    // '000000000000000' (somente números)
  };

  // Formatos aceitos: um valor fora do padrão é ignorado e nada é carregado.
  var PADRAO_GOOGLE = /^(AW|G|GT|GTM)-[A-Z0-9_-]{4,24}$/i;
  var PADRAO_META = /^[0-9]{8,20}$/;

  var CHAVE = 'ajpp:consentimento';
  var aviso = document.getElementById('aviso-cookies');
  if (!aviso) return;

  // Em janela anônima o localStorage pode falhar; aí a escolha vale só nesta sessão.
  var memoria = null;
  function lerEscolha() {
    try {
      var v = localStorage.getItem(CHAVE);
      if (v === 'aceito' || v === 'recusado') return v;
    } catch (e) {}
    return memoria;
  }
  function gravarEscolha(v) {
    memoria = v;
    try { localStorage.setItem(CHAVE, v); } catch (e) {}
  }

  function mostrarAviso() {
    aviso.hidden = false;
    document.body.classList.add('aviso-cookies-visivel');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { aviso.classList.add('visivel'); });
    });
  }
  function esconderAviso() {
    aviso.classList.remove('visivel');
    document.body.classList.remove('aviso-cookies-visivel');
    setTimeout(function () { aviso.hidden = true; }, 350);
  }

  var carregado = false;

  function carregarScript(src) {
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }

  function carregarGoogle(id) {
    if (!PADRAO_GOOGLE.test(id)) return;
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
    gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });
    carregarScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id));
    gtag('js', new Date());
    gtag('config', id);
  }

  function carregarMeta(id) {
    if (!PADRAO_META.test(id)) return;
    if (!window.fbq) {
      var fbq = function () {
        fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
      };
      fbq.push = fbq; fbq.loaded = true; fbq.version = '2.0'; fbq.queue = [];
      window.fbq = fbq; window._fbq = fbq;
    }
    carregarScript('https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', id);
    window.fbq('track', 'PageView');
  }

  function ativarRastreamento() {
    if (carregado) return;
    carregado = true;
    try {
      if (CONFIG.googleTagId) carregarGoogle(CONFIG.googleTagId);
      if (CONFIG.metaPixelId) carregarMeta(CONFIG.metaPixelId);
    } catch (e) {}
  }

  document.getElementById('cookies-aceitar').addEventListener('click', function () {
    gravarEscolha('aceito');
    esconderAviso();
    ativarRastreamento();
  });

  document.getElementById('cookies-recusar').addEventListener('click', function () {
    gravarEscolha('recusado');
    esconderAviso();
    // Se as tags já haviam carregado nesta sessão, recarrega para a revogação valer na hora.
    if (carregado) location.reload();
  });

  document.getElementById('gerenciar-cookies').addEventListener('click', mostrarAviso);

  var escolha = lerEscolha();
  if (escolha === 'aceito') ativarRastreamento();
  else if (escolha !== 'recusado') mostrarAviso();
})();
