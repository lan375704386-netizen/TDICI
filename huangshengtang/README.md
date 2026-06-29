# TDICI Herbal - Huangshengtang® Kugan Plant Drink — 27-Language Multilingual Static Website

## Project Description
A pure-static product showcase website for **TDICI Herbal** (Huangshengtang® Kugan Plant Drink), built for international traffic from TikTok, Facebook, Instagram, and YouTube.

**Brand:** TDICI Herbal  
**Product:** Huangshengtang® Kugan Plant Drink  
**Default language:** English  
**27 languages** | **4 RTL languages** (العربية, اردو, فارسی, עברית)

## File Structure
`
huangshengtang/
├── index.html              # Page structure with data-i18n attributes
├── assets/
│   ├── styles.css          # All styles (CSS variables, logical props, RTL)
│   ├── script.js           # i18n engine, language switching, WhatsApp/Email/Social
│   ├── i18n.js             # 27-language translation dictionary (208KB)
│   ├── logo.png            # TDICI HERBAL logo
│   ├── favicon.png         # Favicon
│   ├── hero.png            # Hero product image
│   ├── ingredients.png     # Ingredient decorative icon
│   └── usage.png           # Usage decorative icon
└── README.md               # This file
`

## Local Preview
Open index.html in any modern browser. No build tools or server needed.

## 5 Main Sections
1. Product Introduction (Hero + Core Message)
2. Customer Treatment Cases (6 image placeholder cards)
3. Ingredients & Specifications (13 herbs + Package & Price + Who Can Use)
4. Use · Logistics · After-sales
5. Purchase Contact

## Modifying Configuration
Edit ssets/script.js:
- SITE_CONFIG.whatsappNumber — WhatsApp number
- SITE_CONFIG.email — Contact email
- SITE_CONFIG.socialLinks — Social media URLs (tiktok, facebook, instagram, youtube)

## Modifying Languages
Edit ssets/i18n.js. Each language has its own key-value mapping under I18N.

## Adding a New Language
1. Add new entry to I18N in ssets/i18n.js with all English keys
2. Add <option> to language select in index.html
3. Add WhatsApp message for the new language

## RTL Support
Arabic (ar), Urdu (ur), Farsi (fa), Hebrew (he) automatically use dir="rtl". All layout uses CSS logical properties.

## Deploy to Cloudflare Pages
1. Push to GitHub repo
2. Cloudflare Pages → Connect to Git → Select repo
3. Default build settings (no build command, root directory)
4. Deploy

Via CLI: wrangler pages deploy . --project-name=tdici-herbal

## Technical Notes
- Pure static: HTML + CSS + JS. No frameworks, no backend, no database.
- i18n via client-side JS. No third-party translation APIs.
- Language preference saved to localStorage.
- Missing translations fall back to English.
- WhatsApp text changes with language (27 languages).
- 4 RTL languages fully supported.
- No tracking, no SDKs, no shopping cart, no payment system.
