#!/usr/bin/env python3
"""Gera metadados e sitemap a partir do endereço oficial e do HTML existente."""
import argparse
import json
import re
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, urljoin
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class Images(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'img' and attrs.get('src', '').startswith('assets/images/fotos/'):
            self.paths.append(attrs['src'])

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--url', required=True, help='URL HTTPS oficial, incluindo subpasta se houver')
    args = parser.parse_args()
    parts = urlsplit(args.url)
    if parts.scheme != 'https' or not parts.hostname or parts.query or parts.fragment or parts.username or parts.password:
        parser.error('Informe uma URL HTTPS pública, sem parâmetros, fragmento ou credenciais.')
    base = args.url.rstrip('/') + '/'
    html_path = ROOT / 'index.html'
    html = html_path.read_text()
    photo = urljoin(base, 'assets/images/fotos/carretinha-toboga-completa.webp')
    metadata = '\n'.join([
        '<!-- SEO: endereço oficial -->',
        f'<link rel="canonical" href="{escape(base, quote=True)}">',
        f'<link rel="sitemap" type="application/xml" href="{escape(urljoin(base, "sitemap.xml"), quote=True)}">',
        f'<meta property="og:url" content="{escape(base, quote=True)}">',
        f'<meta property="og:image" content="{escape(photo, quote=True)}">',
        '<meta property="og:image:width" content="1079">',
        '<meta property="og:image:height" content="1244">',
        '<meta property="og:image:alt" content="Carretinha AJ Play Park com tobogã azul e rosa montada no gramado">',
        f'<meta name="twitter:image" content="{escape(photo, quote=True)}">',
        '<meta name="twitter:image:alt" content="Carretinha AJ Play Park com tobogã azul e rosa montada no gramado">',
        '<!-- /SEO: endereço oficial -->'
    ])
    html, count = re.subn(r'<!-- (?:AO PUBLICAR:.*?-->|SEO: endereço oficial -->.*?<!-- /SEO: endereço oficial -->)', lambda _: metadata, html, count=1, flags=re.S)
    if count != 1:
        raise SystemExit('Bloco de metadados não encontrado; nenhum arquivo foi alterado.')
    areas = [{'@type': 'City', 'name': city} for city in ('Jundiaí', 'Itupeva')]
    data = {'@context': 'https://schema.org', '@graph': [
        {'@type': 'Organization', '@id': base + '#empresa', 'name': 'AJ Play Park', 'url': base,
         'logo': urljoin(base, 'assets/images/logo-aj-play-park.webp'), 'image': photo,
         'description': 'Aluguel de carretinha playground de dois andares para festas e eventos em Jundiaí e Itupeva.',
         'telephone': '+55-11-92488-2904', 'areaServed': areas,
         'sameAs': ['https://www.instagram.com/ajplaypark/']},
        {'@type': 'WebSite', '@id': base + '#site', 'name': 'AJ Play Park', 'url': base,
         'inLanguage': 'pt-BR', 'publisher': {'@id': base + '#empresa'}},
        {'@type': 'WebPage', '@id': base + '#pagina', 'url': base,
         'name': 'Aluguel de Carretinha Playground em Jundiaí e Itupeva | AJ Play Park',
         'inLanguage': 'pt-BR', 'isPartOf': {'@id': base + '#site'},
         'about': {'@id': base + '#servico'}, 'primaryImageOfPage': {'@type': 'ImageObject', 'url': photo}},
        {'@type': 'Service', '@id': base + '#servico', 'name': 'Aluguel de carretinha playground',
         'serviceType': 'Aluguel de carretinha playground para festas e eventos infantis',
         'url': base + '#brinquedos', 'provider': {'@id': base + '#empresa'}, 'areaServed': areas,
         'description': 'Carretinha de dois andares com pula-pula, piscina de bolinhas, tobogã e obstáculos. A AJ Play Park leva, monta e retira a estrutura para aniversários, chácaras, escolas e eventos em Jundiaí e Itupeva.'}
    ]}
    html, count = re.subn(r'(<script type="application/ld\+json">).*?(</script>)', lambda m: m[1]+'\n'+json.dumps(data, ensure_ascii=False, indent=2)+'\n'+m[2], html, count=1, flags=re.S)
    if count != 1:
        raise SystemExit('Dados estruturados não encontrados; nenhum arquivo foi alterado.')
    images = Images(); images.feed(html)
    ns = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    ins = 'http://www.google.com/schemas/sitemap-image/1.1'
    ET.register_namespace('', ns); ET.register_namespace('image', ins)
    sitemap = ET.Element('{'+ns+'}urlset')
    url = ET.SubElement(sitemap, '{'+ns+'}url')
    ET.SubElement(url, '{'+ns+'}loc').text = base
    for path in dict.fromkeys(images.paths):
        image = ET.SubElement(url, '{'+ins+'}image')
        ET.SubElement(image, '{'+ins+'}loc').text = urljoin(base, path)
    ET.indent(sitemap)
    prefix = urlsplit(base).path
    robots = ('User-agent: *\nAllow: /\n'
              f'Disallow: {prefix}assets/images/originais/\n'
              f'Disallow: {prefix}scripts/\n'
              f'\nSitemap: {urljoin(base, "sitemap.xml")}\n')
    html_path.write_text(html)
    ET.ElementTree(sitemap).write(ROOT / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
    (ROOT / 'robots.txt').write_text(robots)
    print(f'SEO configurado para {base}; sitemap com 1 página e {len(set(images.paths))} fotos.')
    if prefix != '/':
        print('Atenção: robots.txt precisa ser servido na raiz do domínio; envie o sitemap diretamente ao Search Console se não controlar a raiz.')

if __name__ == '__main__':
    main()
