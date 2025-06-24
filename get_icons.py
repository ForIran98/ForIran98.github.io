import os
import json
import requests
from urllib.parse import urlparse

BUSINESSES_PATH = r'json/businesses.json'
DATA_PATH = r'json/data.json'
ICONS_DIR = 'icons'
OUTPUT_JSON = 'icons.json'

os.makedirs(ICONS_DIR, exist_ok=True)
icon_map = {}
urls = set()

def extract_domain(url):
    if not url:
        return None
    if not url.startswith('http'):
        url = 'http://' + url
    try:
        parsed = urlparse(url)
        return parsed.netloc
    except Exception:
        return None

# 1. Read businesses.json
with open(BUSINESSES_PATH, encoding='utf-8') as f:
    businesses = json.load(f)
    for b in businesses.get('businesses', []):
        link = b.get('link')
        if link:
            domain = extract_domain(link)
            if domain:
                urls.add(domain)

# 2. Read data.json
with open(DATA_PATH, encoding='utf-8') as f:
    data = json.load(f)
    for cat in data.get('categories', []):
        for site in cat.get('sites', []):
            url = site.get('url')
            if url:
                domain = extract_domain(url)
                if domain:
                    urls.add(domain)

# 3. Download favicons
for domain in urls:
    favicon_url = f'https://www.google.com/s2/favicons?domain={domain}'
    icon_path = os.path.join(ICONS_DIR, f'{domain.replace(":", "_").replace("/", "_")}.ico')
    try:
        resp = requests.get(favicon_url, timeout=10)
        if resp.status_code == 200:
            with open(icon_path, 'wb') as f:
                f.write(resp.content)
            icon_map[domain] = icon_path
            print(f'Downloaded: {domain}')
        else:
            print(f'No icon for: {domain}')
    except Exception as e:
        print(f'Error for {domain}: {e}')

# 4. Save mapping
with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(icon_map, f, ensure_ascii=False, indent=2)

print('Done.')
