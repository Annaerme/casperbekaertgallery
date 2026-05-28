# Casper Bekaert Gallery — Website

Professionele galerie-website. Geen frameworks nodig — pure HTML, CSS en JavaScript.

---

## Projectstructuur

```
casper-site/
├── index.html          ← Hoofdpagina (alles zit hier in)
├── css/
│   └── style.css       ← Alle stijlen
├── js/
│   └── main.js         ← Cursor, animaties, formulier
├── images/             ← Lokale foto's (optioneel)
│   ├── hero.jpg
│   ├── distillery.jpg
│   ├── bakery.jpg
│   └── artists/
│       ├── alex-brassart.jpg
│       └── ...
└── README.md
```

---

## Foto's toevoegen — 2 manieren

### Manier 1 — Lokale bestanden (eenvoudigst)

1. Zet je foto's in de map `images/`
2. In `index.html`, zoek naar de commentaren `<!-- FOTO TOEVOEGEN —`
3. Vervang de placeholder door een `<img>`-tag:

```html
<!-- VOOR: -->
<div class="img-placeholder">Foto plaatsen...</div>

<!-- NA: -->
<img src="images/hero.jpg" alt="Gallery in the Distillery" />
```

Voor de tentoonstellingskaarten, verwijder de `style="background: linear-gradient(...)"` en voeg een `<img>` toe:

```html
<!-- VOOR: -->
<div class="exh-card-img" style="background: linear-gradient(...)">
  <span class="exh-placeholder-art">⟡</span>
</div>

<!-- NA: -->
<div class="exh-card-img">
  <img src="images/distillery.jpg" alt="Gallery in the Distillery" />
</div>
```

---

### Manier 2 — Supabase Storage (aanbevolen voor echte websites)

#### Stap 1: Supabase bucket aanmaken

1. Ga naar [supabase.com](https://supabase.com) → jouw project
2. Klik op **Storage** in het linkermenu
3. Klik **New bucket**
4. Naam: `gallery`
5. Zet **Public bucket** aan ✓
6. Klik **Create bucket**

#### Stap 2: Foto's uploaden

1. Open de `gallery` bucket
2. Maak mappen aan: `hero/`, `exhibitions/`, `artists/`
3. Sleep je foto's naar de juiste map
4. Klik op een foto → kopieer de **Public URL**

De URL ziet er zo uit:
```
https://JOUW-PROJECT.supabase.co/storage/v1/object/public/gallery/hero/distillery.jpg
```

#### Stap 3: URLs invullen in index.html

```html
<!-- Hero foto -->
<img src="https://JOUW-PROJECT.supabase.co/storage/v1/object/public/gallery/hero/hero-main.jpg"
     alt="Casper Bekaert Gallery" />

<!-- Tentoonstelling foto -->
<img src="https://JOUW-PROJECT.supabase.co/storage/v1/object/public/gallery/exhibitions/distillery.jpg"
     alt="Gallery in the Distillery" />

<!-- Artiest foto -->
<img src="https://JOUW-PROJECT.supabase.co/storage/v1/object/public/gallery/artists/alex-brassart.jpg"
     alt="Alex Brassart" />
```

#### Aanbevolen mappenstructuur in Supabase:

```
gallery/
├── hero/
│   └── distillery-main.jpg
├── exhibitions/
│   ├── distillery.jpg
│   └── bakery.jpg
└── artists/
    ├── alex-brassart.jpg
    ├── arno-camps.jpg
    ├── jan-de-laure.jpg
    └── ...
```

---

## Aanbevolen fotoformaten

| Locatie          | Formaat | Afmeting      |
|------------------|---------|---------------|
| Hero             | JPG     | 1200 × 1600px |
| Tentoonstellingen| JPG     | 1400 × 1100px |
| Artiesten        | JPG/PNG | 400 × 400px   |

Gebruik **WebP** voor snellere laadtijd wanneer mogelijk.

---

## Website online zetten

Eenvoudigste opties (gratis):

- **Netlify** — sleep de map `casper-site/` naar [netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages** — push naar GitHub, activeer Pages in instellingen
- **Vercel** — verbind je GitHub-repo

---

## Newsletter koppelen

In `js/main.js` staat de kommentaarlijn waar je een echte service koppelt:

```javascript
// Koppel hier je dienst:
// Supabase:  await supabase.from('subscribers').insert({ email })
// Mailchimp: fetch('https://...mailchimp.com/...', { method: 'POST', body: ... })
// Brevo:     fetch('https://api.brevo.com/v3/contacts', { ... })
```

---

## Kleuren (geen zwart)

| Naam        | Hex       | Gebruik                    |
|-------------|-----------|----------------------------|
| paper       | `#F7F3ED` | Hoofdachtergrond           |
| cream       | `#EDE8DE` | Kaarten, artiestensectie   |
| ink         | `#2C2416` | Diepste tekst (umber)      |
| ink-mid     | `#4A3D2C` | Hoofdtekst                 |
| muted       | `#7A6E5F` | Subtekst                   |
| gold        | `#A6783A` | Primair accent             |
| gold-light  | `#C49A5C` | Hover-states               |
