/* AJ PLAY PARK — comportamento da página
   Ano do rodapé, acordeão do FAQ, galeria de fotos e entrada das seções.

   Sem innerHTML, sem eval e sem biblioteca externa: não há como injetar
   código por aqui. Tudo roda dentro de try/catch para que um erro nunca
   deixe a página sem conteúdo. */

(function () {
  'use strict';

  /* Libera o CSS que esconde as seções antes da animação de entrada.
     Se este arquivo não carregar, nada é escondido. */
  document.documentElement.classList.add('js-pronto');

  function menosMovimento() {
    return window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function revelarTudo() {
    var itens = document.querySelectorAll('.revelar');
    for (var i = 0; i < itens.length; i++) itens[i].classList.add('revelado');
  }

  function ativarFaq() {
    var perguntas = document.querySelectorAll('.faq-pergunta');
    for (var i = 0; i < perguntas.length; i++) {
      perguntas[i].addEventListener('click', function () {
        var aberto = this.closest('.faq-item').classList.toggle('aberto');
        this.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      });
    }
  }

  function ativarGaleria() {
    var dialog = document.querySelector('.foto-dialog');
    if (!dialog || !dialog.showModal) return;
    var fotos = [];
    var indice = 0;
    var imagem = dialog.querySelector('img');
    var anterior = dialog.querySelector('.foto-anterior');
    var proxima = dialog.querySelector('.foto-proxima');
    var toque = null;

    function mostrarFoto(novoIndice) {
      indice = (novoIndice + fotos.length) % fotos.length;
      var link = fotos[indice];
      var descricao = link.querySelector('img').alt;
      imagem.src = link.href;
      imagem.alt = descricao;
      dialog.querySelector('p').textContent = descricao;
      dialog.querySelector('.foto-contador').textContent = (indice + 1) + ' de ' + fotos.length;
      anterior.disabled = proxima.disabled = fotos.length < 2;
    }

    document.querySelectorAll('.album-foto').forEach(function (link) {
      link.addEventListener('click', function (evento) {
        evento.preventDefault();
        fotos = Array.prototype.slice.call(link.closest('section').querySelectorAll('.album-foto'));
        mostrarFoto(fotos.indexOf(link));
        dialog.showModal();
      });
    });
    anterior.addEventListener('click', function () { mostrarFoto(indice - 1); });
    proxima.addEventListener('click', function () { mostrarFoto(indice + 1); });
    dialog.addEventListener('keydown', function (evento) {
      if (evento.altKey || evento.ctrlKey || evento.metaKey) return;
      if (evento.key === 'ArrowLeft' || evento.key === 'ArrowRight') {
        evento.preventDefault();
        mostrarFoto(indice + (evento.key === 'ArrowLeft' ? -1 : 1));
      }
    });
    imagem.addEventListener('touchstart', function (evento) {
      toque = evento.touches.length === 1 ? { x: evento.touches[0].clientX, y: evento.touches[0].clientY } : null;
    }, { passive: true });
    imagem.addEventListener('touchend', function (evento) {
      if (!toque) return;
      var dx = evento.changedTouches[0].clientX - toque.x;
      var dy = evento.changedTouches[0].clientY - toque.y;
      toque = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) mostrarFoto(indice + (dx < 0 ? 1 : -1));
    }, { passive: true });
    imagem.addEventListener('touchcancel', function () { toque = null; });
    dialog.addEventListener('close', function () { toque = null; });
    dialog.querySelector('.foto-fechar').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (evento) { if (evento.target === dialog) dialog.close(); });
  }

  function ativarRevelacao() {
    // Animamos o conteúdo, mantendo os fundos das seções estáveis.
    var antigos = document.querySelectorAll('.revelar');
    for (var i = 0; i < antigos.length; i++) antigos[i].classList.remove('revelar');
    if (!('IntersectionObserver' in window) || menosMovimento()) return;

    var alvos = document.querySelectorAll('.album-foto, .quem-retratos, .quem-assinatura, .cabecalho-secao, .selo-item, .card-brinquedo, .evento-item, .passo, .destaque-carretinha, .quem-foto, .quem-texto, .faq-item, .cta-final .container--acima');
    for (var j = 0; j < alvos.length; j++) {
      alvos[j].classList.add('revelar');
      if (alvos[j].matches('.card-brinquedo, .evento-item, .passo, .selo-item')) {
        var indice = Array.prototype.indexOf.call(alvos[j].parentNode.children, alvos[j]);
        alvos[j].style.setProperty('--atraso', (indice % 3) * 90 + 'ms');
      }
    }
    var observador = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('revelado');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    for (var k = 0; k < alvos.length; k++) observador.observe(alvos[k]);
    // A navegação por teclado nunca espera uma animação para exibir o foco.
    document.addEventListener('focusin', function (evento) {
      var alvo = evento.target.closest('.revelar');
      if (alvo) alvo.classList.add('revelado');
    });
  }

  function ativarParalaxe() {
    var preferencia = window.matchMedia('(prefers-reduced-motion: reduce)');
    var cenas = Array.prototype.map.call(document.querySelectorAll('.hero, .carretinha, .como, .cta-final'), function (secao) {
      return { secao: secao, ceu: secao.querySelector('.ceu') };
    });
    var foto = document.querySelector('.hero-img');
    var quadroPendente = false;
    function atualizar() {
      quadroPendente = false;
      var altura = window.innerHeight;
      var amplitude = window.innerWidth < 600 ? 22 : 55;
      cenas.forEach(function (cena) {
        var rect = cena.secao.getBoundingClientRect();
        if (!cena.ceu) return;
        var progresso = Math.max(-1, Math.min(1, -rect.top / altura));
        cena.ceu.style.transform = preferencia.matches ? '' : 'translateY(' + progresso * amplitude + 'px)';
      });
      if (foto) {
        var topo = cenas[0].secao.getBoundingClientRect().top;
        var progresso = Math.max(0, Math.min(1, -topo / altura));
        foto.style.transform = preferencia.matches ? '' : 'translateY(' + progresso * amplitude + 'px) scale(' + (1 - progresso * 0.045) + ')';
      }
    }
    function agendar() {
      if (!quadroPendente) {
        quadroPendente = true;
        requestAnimationFrame(atualizar);
      }
    }
    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar);
    preferencia.addEventListener('change', function () { revelarTudo(); agendar(); });
    atualizar();
  }

  function ativarJornada() {
    var secao = document.querySelector('.jornada');
    if (!secao) return;
    var palco = secao.querySelector('.jornada-palco');
    var balao = secao.querySelector('.jornada-balao');
    var cenas = secao.querySelectorAll('.jornada-cena');
    var barra = secao.querySelector('.jornada-progresso i');
    var preferencia = window.matchMedia('(prefers-reduced-motion: reduce)');
    var pendente = false;
    function limitar(n) { return Math.max(0, Math.min(1, n)); }
    function suave(n) { n = limitar(n); return n * n * (3 - 2 * n); }
    function renderizar() {
      pendente = false;
      secao.classList.toggle('jornada--ativa', !preferencia.matches);
      if (preferencia.matches) return;
      var rect = secao.getBoundingClientRect();
      var largura = palco.clientWidth, altura = palco.clientHeight;
      var topoMenu = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--altura-menu')) || 0;
      var p = limitar((topoMenu - rect.top) / Math.max(1, secao.offsetHeight - altura));
      var mobile = largura <= 700;
      // Posições-chave: direita, esquerda, direita. A rolagem reversa rebobina a cena.
      var pontos = mobile ? [[.64,.52,.88,-16],[.12,.57,1.08,18],[.64,.53,.92,-12]] : [[.73,.12,1,-15],[.05,.12,1.14,18],[.74,.08,.95,-10]];
      var etapa = p < .5 ? 0 : 1;
      var t = suave(((p - etapa * .5) * 2 - .2) / .6);
      var a = pontos[etapa], b = pontos[etapa + 1];
      function mix(i) { return a[i] + (b[i] - a[i]) * t; }
      var x = Math.min(largura - balao.clientWidth, mix(0) * largura);
      var y = mix(1) * altura - Math.sin(p * Math.PI * 2) * (mobile ? 12 : 45);
      balao.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) rotate(' + mix(3) + 'deg) scale(' + mix(2) + ')';
      for (var i = 0; i < cenas.length; i++) {
        var centro = i * .5;
        var visibilidade = 1 - suave((Math.abs(p - centro) - .10) / .12);
        cenas[i].style.opacity = String(visibilidade);
        cenas[i].style.transform = 'translateY(' + ((mobile ? 0 : -50) + (p - centro) * -35) + '%)';
      }
      barra.style.transform = 'scaleX(' + p + ')';
      palco.style.backgroundColor = 'rgb(' + Math.round(249 - Math.sin(p * Math.PI) * 28) + ',' + Math.round(237 + Math.sin(p * Math.PI) * 3) + ',' + Math.round(218 + Math.sin(p * Math.PI) * 25) + ')';
    }
    function agendar() { if (!pendente) { pendente = true; requestAnimationFrame(renderizar); } }
    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar);
    preferencia.addEventListener('change', agendar);
    if ('ResizeObserver' in window) new ResizeObserver(agendar).observe(palco);
    renderizar();
  }

  function ativarMenu() {
    var menu = document.querySelector('.site-header');
    if (!menu) return;
    var secoes = document.querySelectorAll('main > header, main > section, .rodape');
    var pendente = false;
    function medir() {
      document.documentElement.style.setProperty('--altura-menu', menu.getBoundingClientRect().height + 'px');
      agendar();
    }
    function atualizar() {
      pendente = false;
      var limite = menu.getBoundingClientRect().bottom + 1;
      var fundo = document.querySelector('.hero');
      secoes.forEach(function (secao) {
        var rect = secao.getBoundingClientRect();
        if (rect.top <= limite && rect.bottom > limite) fundo = secao;
      });
      if (!fundo) return;
      var palco = fundo.querySelector('.jornada-palco');
      var cor = getComputedStyle(palco || fundo).backgroundColor;
      menu.style.backgroundColor = cor;
      var canais = cor.match(/[\d.]+/g);
      var escuro = canais && (Number(canais[0]) * .2126 + Number(canais[1]) * .7152 + Number(canais[2]) * .0722) < 140;
      menu.classList.toggle('site-header--escuro', Boolean(escuro));
    }
    function agendar() {
      if (!pendente) { pendente = true; requestAnimationFrame(atualizar); }
    }
    medir();
    if ('ResizeObserver' in window) new ResizeObserver(medir).observe(menu);
    window.addEventListener('resize', medir);
    window.addEventListener('scroll', agendar, { passive: true });
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', agendar);
    atualizar();
  }

  function iniciar() {
    var ano = document.getElementById('ano');
    if (ano) ano.textContent = String(new Date().getFullYear());
    ativarFaq();
    ativarGaleria();
    ativarRevelacao();
    ativarParalaxe();
    ativarJornada();
    ativarMenu();
  }

  function comDom() {
    try { iniciar(); } catch (e) { revelarTudo(); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', comDom);
  } else {
    comDom();
  }

  /* Falhas de inicialização são tratadas em comDom, sem antecipar as entradas. */
})();
