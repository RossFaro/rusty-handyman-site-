# Trusty Rusty — Landing Page Brief & Prompt

---

## 🎯 ОБЩЕЕ ОПИСАНИЕ ПРОЕКТА

Создать одностраничный landing page для **Trusty Rusty** — handyman сервиса в Sacramento, CA. Сайт должен вызывать доверие, быть тёплым и дружелюбным. Основная аудитория — женщины 40+, домовладелицы, которые ищут надёжного мастера на все руки.

**Стек:** Next.js + Tailwind CSS
**Деплой:** Vercel (рекомендация)
**Домен:** RustyHandymanServices.com (или аналогичный)

---

## 👤 БРЕНД И ПОЗИЦИОНИРОВАНИЕ

**Название:** Trusty Rusty
**Слоган (варианты на выбор):**
- "Your Friendly Neighborhood Handyman"
- "One Call Fixes It All"
- "Sacramento's Most Trusted Handyman"
- "The Handyman You Can Trust"

**Тон бренда:** Дружелюбный, надёжный, профессиональный, но без корпоративного холода. Как сосед который всегда поможет — но с профессиональным подходом.

**Ключевые ценности для сайта:**
- Fast response (отвечаю за минуты, не дни)
- Fair pricing (честные цены, без скрытых платежей)
- Clean work (работаю аккуратно, убираю за собой)
- Trusted by 20+ families (Top Pro на Thumbtack, 5.0 рейтинг)

---

## 🎨 ДИЗАЙН

### Палитра (пастельные тона, тёплые)
- **Primary:** Мягкий тёплый синий — #6B9AC4 
- **Secondary:** Тёплый кремовый/бежевый — #F5F0EB
- **Accent:** Мягкий коралловый или терракотовый — #D4856B
- **Text:** Тёмно-серый (не чёрный) — #2D3436
- **Background:** Off-white — #FAFAF8 или очень светлый бежевый

### Типографика
- Заголовки: Округлый, дружелюбный шрифт (Nunito, Quicksand, или Poppins)
- Тело текста: Чистый, читаемый (DM Sans, Source Sans 3)
- Акценты: Можно использовать рукописный шрифт для "Rusty" в логотипе (Caveat, Pacifico)

### Стиль
- Мягкие скруглённые углы на карточках и кнопках (rounded-2xl или rounded-3xl)
- Лёгкие тени (shadow-sm, shadow-md) — без агрессивных drop-shadow
- Много воздуха (generous whitespace)
- Иконки: Lucide React или Heroicons — линейный стиль, не заполненные
- Фотографии: тёплый фильтр, можно с лёгким виньетированием
- НЕ использовать: агрессивные цвета, жёсткие тени, тёмные фоны, сложные градиенты

---

## 📐 СТРУКТУРА СТРАНИЦЫ (секции сверху вниз)

### 1. HEADER / NAV
- Логотип "Trusty Rusty" слева (текстовый или с простой иконкой 🔧)
- Навигация: Services · Pricing · Reviews · Contact
- CTA кнопка справа: "Get a Free Quote" или "Call Rusty" с номером
- Sticky при скролле
- Мобильный: hamburger menu

### 2. HERO SECTION
- Большой заголовок: "Your Trusted Sacramento Handyman"
- Подзаголовок: "From furniture assembly to minor electrical and plumbing — I handle the small stuff so you don't have to. Fast response, fair pricing, and I always clean up after the job."
- CTA кнопка: "Get a Free Estimate" (ведёт к форме или номеру телефона)
- Вторая кнопка (outline): "See My Work" (скролл к отзывам)
- Фото Rusty (дружелюбное, в рабочей одежде, с инструментом) или фото красиво выполненной работы
- Trust badges под кнопками: "⭐ 5.0 on Thumbtack" · "✅ Background Checked" · "🏆 Top Pro"

### 3. SERVICES SECTION
- Заголовок: "What I Can Help With"
- Карточки услуг (grid 2x3 на desktop, 1 колонка на mobile):

**Карточка 1 — General Repairs**
Иконка: 🔧
"Door fixes, window repairs, shelving, molding, drywall patching, and all those little things around the house that need attention."

**Карточка 2 — Furniture & Equipment Assembly**
Иконка: 🛋️
"IKEA, Amazon, Wayfair — you name it. Beds, desks, dressers, bookshelves, fitness equipment. I bring the tools and patience."

**Карточка 3 — TV & Picture Mounting**
Иконка: 📺
"TV mounting on any wall type (drywall, brick, concrete). Picture hanging and art installation. Flat rate available for standard TV mounts."

**Карточка 4 — Minor Electrical**
Иконка: 💡
"Outlets, switches, light fixtures, ceiling fans. Safe, professional troubleshooting when things stop working."

**Карточка 5 — Minor Plumbing**
Иконка: 🔧 (или 🚿)
"Faucets, toilets, clogs, shutoff valves. Quick fixes to keep your home running smoothly."

**Карточка 6 — Painting & Finishing**
Иконка: 🎨
"Interior painting, touch-ups, drywall finishing. I work neatly and protect your furniture and floors."

- Под карточками: небольшой текст "Don't see your project? Just ask — I probably can help!" + CTA

### 4. HOW IT WORKS
- Заголовок: "Getting Help Is Easy"
- 3 шага (горизонтально на desktop, вертикально на mobile):

**Step 1 — Describe Your Project**
"Send me a message or call. Tell me what needs fixing — photos help!"

**Step 2 — Get an Estimate**
"I'll review the details and give you a clear price range. No hidden fees, no surprises."

**Step 3 — I Show Up & Get It Done**
"I arrive on time, do the work, clean up, and make sure you're happy before I leave."

### 5. PRICING SECTION
- Заголовок: "Transparent Pricing"
- Подзаголовок: "I believe in clear, upfront pricing. Here's how it works:"

**Таблица или карточки:**

| | Standard Work | Skilled Trade | Flat Rate Specials |
|---|---|---|---|
| **Rate** | $65/hr | $85/hr | Fixed price |
| **Minimum** | $150 | $175 | — |
| **Includes** | Assembly, mounting, painting, minor repairs | Electrical, plumbing, diagnostics | TV mount: $120–150, Assembly: $120–140 |

- Под таблицей пояснение:
  "**Why two rates?** Standard work covers everyday tasks like assembly and mounting. Skilled trade covers electrical and plumbing — these require specialized tools, diagnostic expertise, and extra care to get right. Either way, I'll always confirm the price before starting."

- Мелким шрифтом: "Materials billed at cost (receipts provided). Diagnostic visit: $75 (applied to total if you hire me)."

### 6. REVIEWS / TESTIMONIALS
- Заголовок: "What My Customers Say"
- Подзаголовок: "Exceptional 5.0 ⭐ on Thumbtack · 15+ Reviews"
- Carousel или grid с отзывами
- Каждый отзыв: текст цитаты, имя, тип работы, звёздочки
- Можно использовать SociableKIT или Elfsight для автоматического подтягивания с Thumbtack
- Или захардкодить лучшие отзывы + ссылка "See all reviews on Thumbtack →"

### 7. ABOUT / TRUST SECTION
- Заголовок: "Meet Rusty"
- Фото Rusty (доброжелательное, не постановочное)
- Текст: "Hi, I'm Rustam — but everyone calls me Rusty. I'm a Sacramento-based handyman who handles small to medium home repairs. From furniture assembly to picture mounting, door fixes to minor plumbing — I take care of the things that make your house feel like home. I work neatly, protect your home, and always clean up after the job. When you call Rusty, you get Rusty — not a random contractor you've never met."
- Trust badges: "🏆 Thumbtack Top Pro · ⭐ 5.0 Rating · ✅ Background Checked · 🏠 20+ Homes Served"

### 8. SERVICE AREA
- Заголовок: "Serving Sacramento & Surrounding Areas"
- Список или карта: Sacramento, Elk Grove, Rancho Cordova, Citrus Heights, Folsom, Rocklin, Fair Oaks, Roseville, Wilton
- "Not sure if I cover your area? Just ask!"

### 9. CONTACT / CTA SECTION
- Заголовок: "Ready to Get It Fixed?"
- Подзаголовок: "Call, text, or message me. I respond fast — usually within minutes."
- Номер телефона (большим шрифтом, кликабельный): 📞 (279) 799-6872
- Кнопки: "Call Now" · "Text Me" · "Message on Thumbtack"
- Простая контактная форма (опционально): Name, Phone, What do you need help with?, Preferred date
- Часы работы: "Available 7 days a week, 8AM – 8PM"
- Способы оплаты: "Cash · Zelle · Venmo · Cash App"

### 10. FOOTER
- Логотип "Trusty Rusty"
- Ссылки: Services · Pricing · Reviews · Contact
- Ссылка на Thumbtack профиль
- © 2026 Trusty Rusty. Sacramento, CA.
- "Licensed handyman services for jobs under $500 per California law."

---

## 📱 МОБИЛЬНАЯ ВЕРСИЯ

- Mobile-first дизайн
- Sticky кнопка "Call Rusty" внизу экрана (floating action button)
- Все номера телефонов — кликабельные (tel: ссылки)
- Карточки услуг — в одну колонку
- Отзывы — carousel с swipe

---

## 🔧 ТЕХНИЧЕСКИЕ ДЕТАЛИ

### Next.js структура:
```
/app
  /page.tsx          — главная страница (все секции)
  /layout.tsx        — layout с шрифтами и meta
  /components
    /Header.tsx
    /Hero.tsx
    /Services.tsx
    /HowItWorks.tsx
    /Pricing.tsx
    /Reviews.tsx
    /About.tsx
    /ServiceArea.tsx
    /Contact.tsx
    /Footer.tsx
```

### SEO (meta в layout.tsx):
- Title: "Trusty Rusty | Sacramento's Trusted Handyman — Assembly, Repairs, Electrical & More"
- Description: "Need a reliable handyman in Sacramento? Trusty Rusty offers furniture assembly, TV mounting, minor electrical & plumbing, painting, and more. 5.0 rated Top Pro on Thumbtack. Fast response, fair pricing. Call (279) 799-6872"
- Open Graph image: фото работы или логотип

### Отзывы — варианты реализации:
1. **Быстрый:** Захардкодить 5-6 лучших отзывов в компонент Reviews.tsx
2. **Средний:** Использовать SociableKIT (бесплатный виджет, embed code)
3. **Продвинутый:** Использовать Elfsight (больше кастомизации, есть бесплатный план)

### Форма обратной связи — варианты:
1. **Без бэкенда:** Formspree.io или Getform.io (бесплатно, отправляет на email)
2. **Простой:** mailto: ссылка
3. **С бэкендом:** Next.js API route + отправка через SendGrid / Resend

---

## 📋 КОНТЕНТ ДЛЯ КОПИРАЙТИНГА (готовые тексты)

### Hero заголовки (варианты):
- "Your Trusted Sacramento Handyman"
- "The Handyman You'll Actually Want to Call Back"
- "Small Fixes. Big Difference."
- "One Call. Everything Fixed."

### Hero подзаголовки (варианты):
- "Assembly, repairs, electrical, plumbing, painting — I handle the to-do list so you can enjoy your home."
- "Fast response, honest pricing, and I always clean up after the job. That's the Trusty Rusty promise."
- "From a leaky faucet to a new TV mount — I take care of the small stuff that makes your house feel like home."

### CTA тексты:
- "Get a Free Estimate"
- "Call Rusty Now"
- "Text Me Your Project"
- "Book Your Appointment"

---

## 💡 ДОПОЛНИТЕЛЬНЫЕ ИДЕИ

### "Rusty's Specials" — блок со спец-предложениями
- TV Mount (up to 55"): from $120 flat
- Furniture Assembly (1 item): from $120 flat
- "Best value for common jobs — no hourly surprises"

### Before/After галерея
- Если есть фото работ — добавить slider с before/after
- Сильно повышает доверие

### FAQ секция (аккордеон)
- "What's your minimum charge?" → $150 for standard, $175 for electrical/plumbing
- "Do you provide materials?" → I can pick up everything you need. Materials at cost, no markup.
- "How fast can you come?" → Most jobs scheduled within 1-2 days. Same-day available.
- "What areas do you serve?" → Sacramento and surrounding areas within 30 min drive.
- "Do you have a license?" → As a handyman in California, I handle jobs under $500 which don't require a contractor's license. For larger projects, I'm happy to recommend a licensed specialist.
- "What forms of payment do you accept?" → Cash, Zelle, Venmo, Cash App

### Seasonal banner
- Зимой: "Holiday Lighting Installation — Book Now!"
- Весной: "Spring Home Refresh — Painting & Repairs"

---
