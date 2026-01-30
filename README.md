# Enes Özer — Portfolio

Senior Full Stack Engineer portfolyo sitesi. React (Vite), Tailwind CSS, Framer Motion ile geliştirilmiş; GitHub Pages için uyumlu.

## Tasarım Dili ve Renk Paleti

- **Stil:** Minimalist, premium; Apple / Stripe dokümantasyonu hissi. Bol beyaz alan, tipografi odaklı.
- **Renkler:**
  - **Light:** Arka plan `#f8fafc` (paper), metin `#0f172a` (ink), vurgu `#0ea5e9` (brand).
  - **Dark:** Arka plan `#0f172a`, metin `#f8fafc`, vurgu `#0ea5e9`.
- **Tipografi:** Inter (Google Fonts).
- **Etkileşimler:** Framer Motion ile scroll/hover animasyonları; WCAG uyumlu odak halkaları.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` açılır.

## Build

```bash
npm run build
```

Çıktı `dist/` klasöründe. GitHub Pages için base path otomatik ayarlanır (repo adı: `Portfolio` → base: `/Portfolio/`).

## GitHub Pages’e Yükleme

### Seçenek 1: GitHub Actions (önerilen)

1. Repoyu GitHub’a push edin.
2. **Zorunlu:** **Settings → Pages → Build and deployment → Source:** **“GitHub Actions”** seçin.  
   Bu adım yapılmazsa workflow’da `Get Pages site failed` / `HttpError: Not Found` alırsınız.
3. `main` branch’e her push’ta workflow build alır ve Pages’e deploy eder.
4. Site: `https://<kullanici>.github.io/Portfolio/`

### Seçenek 2: Manuel (gh-pages)

```bash
npm run build
npx gh-pages -d dist
```

Repo adı farklıysa `vite.config.js` içinde `repoName` değişkenini güncelleyin.

**CI/CD hatası:** `Get Pages site failed` veya `HttpError: Not Found` görüyorsanız, repoda **Settings → Pages** bölümünde **Source** mutlaka **“GitHub Actions”** olmalı. “Deploy from a branch” seçiliyse bu hata oluşur.

### Base path’i değiştirmek

- **Vite:** `vite.config.js` → `repoName` veya build sırasında `GITHUB_REPOSITORY` ortam değişkeni.
- Repo adı `Portfolio` değilse (örn. `my-cv`), `repoName`’i `'my-cv'` yapın; base `/my-cv/` olur.

## Veri Güncelleme

Tüm içerik `src/data.js` dosyasındadır. CV’nizi güncelledikçe bu dosyadaki `data` objesini düzenleyin:

- `person`: Ad, unvan, value proposition, iletişim, CTA metinleri.
- `summary`: Profesyonel özet.
- `skills`: Core / Tools / Soft yetenekler (level: expert, advanced, intermediate).
- `experience`: Şirket, rol, tarih, maddeler.
- `education`: Derece ve okul.
- `projects`: Başlık, açıklama, etiketler, GitHub/Demo linkleri.

## Proje Yapısı

- `src/App.jsx` — Root layout, theme/locale wiring
- `src/components/` — Nav, Home, About, Work, Contact, Footer (tek sorumluluk)
- `src/hooks/` — useTheme, useLocale (localStorage + document.lang)
- `src/CoreSkillsSection.jsx` — Core skills grid + skill detail panel
- `src/data.js` — Locale’e göre içerik (getData), `src/translations.js` — UI metinleri
- `src/constants.js` — STORAGE_KEYS, LOCALES, DEFAULT_LOCALE

## Tech Stack

- React 18, Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React (Nav tema ikonları)

## Lisans

Proje kişisel kullanım içindir.
