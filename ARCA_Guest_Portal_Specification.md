# Arca Hotel — Guest Experience Portal
## Project Specification Document
**Version 1.0 | May 2026**

---

## 1. Project Overview

### What We Are Building
A mobile-first guest experience portal accessible via QR code in every hotel room at Arca, Roatan, Honduras. The portal lives at `guests.arcaroatan.com` and serves as a digital companion for guests during their stay — replacing the physical welcome book with a living, editable, always-current experience.

### What It Is Not
This is not a booking engine, not a replacement for the main Arca website, and not a guest messaging system. It is a curated, read-and-act resource that guests access passively during their stay.

### Core Principle
Every design and content decision must echo the brand language of arcaroatan.com: barefoot luxury, warm and intimate, spacious and uncluttered. It must feel like an extension of the hotel — not a separate product.

---

## 2. Access & URL

| Property | Value |
|---|---|
| URL | `guests.arcaroatan.com` |
| Access Method | QR code printed and placed in every room |
| Domain Registrar | GoDaddy |
| Domain | arcaroatan.com |
| Setup Required | Add subdomain CNAME record in GoDaddy DNS settings |

**Subdomain rationale:** Hosting under `arcaroatan.com` ensures every guest visit contributes to the main domain's traffic and authority. The portal is part of the Arca ecosystem, not a standalone site.

---

## 3. Target Audience

- Hotel guests, in-room, on personal mobile devices
- Primarily English-speaking international travelers
- Mix of iOS (iPhone) and Android devices
- Range of ages — design must be accessible and intuitive for all

---

## 4. Device & Platform Requirements

- **Mobile-first design** — optimized for screens 375px–430px wide (iPhone SE through iPhone Pro Max, and equivalent Android)
- **Cross-platform compatibility** — fully functional on iOS Safari and Android Chrome
- **No app download required** — runs entirely in the browser
- **Offline consideration** — graceful fallback messaging if a guest loses Wi-Fi briefly
- **Fast load time** — under 3 seconds on a standard hotel Wi-Fi connection
- **Touch-optimized** — all tap targets minimum 44px, no hover-dependent interactions

---

## 5. Visual Design System

### Brand Alignment
The portal must visually echo arcaroatan.com without being a copy. Shared DNA:

| Element | Direction |
|---|---|
| Color Palette | Warm linen/sand (#E8E3DC range), warm whites, deep charcoal for text, ocean blue as accent |
| Typography | Clean geometric sans-serif for headings (spaced caps), humanist serif or readable sans for body |
| Spacing | Generous. No crowding. Quiet luxury breathes. |
| Photography | Pull directly from arcaroatan.com — beachfront, natural light, ocean vistas |
| Tone of Voice | Warm, poetic, personal — the hotel speaks, not a brand manual |
| Decorative Elements | Garifuna-inspired geometric border patterns (as seen in Ahari menu) used sparingly |
| Logo | Ahari by Arca wordmark where appropriate |

### Style Archetype
**Quiet luxury meets Caribbean soul.** Think: Aesop meets a boutique Caribbean resort. Clean, intentional, never flashy.

### What to Avoid
- Bright primary colors
- Cluttered layouts
- Generic hotel website templates
- Stock photography
- Overly formal or corporate language

---

## 6. Portal Structure & Navigation

The portal is a single-page scrollable experience with a sticky navigation bar. Five sections in order:

```
1. Welcome
2. In-Room Dining
3. This Week at Arca
4. The Island
5. Tours & Excursions
```

Navigation: fixed top bar with section anchors. Minimal — icon + label or label only. Disappears on scroll down, reappears on scroll up (standard mobile pattern).

---

## 7. Section Specifications

---

### 7.1 Welcome

**Purpose:** First impression. Sets the emotional tone before a guest does anything else.

**Format:** Full-screen hero section. Background: high-quality photo of West Bay Beach / hotel property. Overlaid with welcome message in Arca's voice.

**Welcome Message (Draft — to be refined by team):**

> *Welcome to Arca.*
>
> *You made it. The island is outside your window, the water is warm, and everything you need is right here.*
>
> *This is your guide to making the most of your time with us — from what's on the menu tonight to what's happening on the reef tomorrow. Flip through at your own pace. We're here whenever you need us.*

**Editable:** Yes — via admin panel.

**Static elements (not editable):** Arca logo, overall layout.

---

### 7.2 In-Room Dining — Ahari by Arca

**Purpose:** Allow guests to browse the full Ahari menu and initiate an order via WhatsApp.

**Hours Notice:**
- Breakfast: 7:00 AM – 10:00 AM
- Lunch & Dinner: 11:00 AM – 9:00 PM

**Menu Sections (in order):**
1. Breakfast
   - Coffee
   - Cold Press Juice
   - Fresh Essentials (agua frescas)
   - Tea
   - Vacation Mode (breakfast cocktails)
   - Signature Dishes
   - Build Your Own Breakfast
2. Lunch & Dinner
   - Casual Corner
   - From the Land
   - Signature From the Sea
   - Sides
   - Dessert
3. Drinks
   - House Cocktails
   - Classic Cocktails
   - Non-Alcoholic
   - Craft Beer
   - Beer
   - House Wines
   - Ahari Select Wines

**Pricing Note:** All prices in USD. Footer note: *"Taxes and gratuity not included."*

**Order CTA:** Prominent "Order via WhatsApp" button pinned at the bottom of the dining section (and/or floating button). Tapping opens WhatsApp with:
- Number: **+1-202-972-2722**
- Pre-filled message: *"Hi, I'd like to place a room service order from Ahari."*

**Fallback for non-WhatsApp users:** Same number for SMS text message.

**Design approach:** Menu items displayed as clean cards — item name, description, price. Section headers in spaced caps. No table/grid layout — single column for readability on mobile.

**Editability requirements (critical):**
- Add or remove individual menu items
- Edit item names, descriptions, and prices
- Add or remove entire menu sections
- Toggle items as "temporarily unavailable" without deleting them
- Update hours of service
- All editable via admin panel from any device, anywhere in the world

---

### 7.3 This Week at Arca

**Purpose:** Dynamic weekly calendar of hotel events and specials. The most frequently updated section.

**Content types:**
- Live music nights (3x per week) — with date, time, artist name if available
- Yoga sessions
- Happy hour / 2x1 cocktail specials — with specific hours
- Italian night or themed dining events
- Any other programmed activity

**Format:** Card-based weekly schedule. Each event card contains:
- Event name
- Day + specific date (e.g., "Tuesday, May 20")
- Time (e.g., "7:00 PM")
- Short description (1–2 lines)
- Optional: location on property (e.g., "Ahari Beach Bar")

**Editability requirements (critical — highest priority):**
- Team must be able to update this section in under 5 minutes
- Add, edit, or delete individual events
- Drag-and-drop reordering (or date-sorted automatically)
- Admin panel accessible on mobile phone
- No events = friendly placeholder message (e.g., *"Check back soon — something is always happening at Arca."*)

---

### 7.4 The Island

**Purpose:** Practical, evergreen information about Roatan to help guests navigate and enjoy the island. Content sourced from the Arca Welcome Book.

**Sub-sections:**

#### Getting Around
- Water taxis: West End ↔ West Bay, ~$5 per person
- Colectivo (shared) taxis: available from the main road
- Private driver: available through the front desk
- Car rental: $55–$85/day
- Airport/ferry transfer: $60/reservation (arrange through Arca)

#### Money & Payments
- USD and Honduran Lempiras (HNL) both accepted
- Exchange rate: ~24.5 HNL per $1 USD
- Not all places accept credit cards — carry cash
- USD bills must be in pristine condition (no rips, tears, stains)
- Government taxes: 15% sales tax, 18% alcohol tax, 4% tourism tax

#### Staying Connected
- Wi-Fi: complimentary throughout property (password at front desk)
- WhatsApp is the primary communication method on the island
- Local SIM cards available at pulperías (small local stores)

#### Water & Sustainability
- No individual plastic water bottles sold at Arca
- Free purified water refill stations available to all guests
- Bring a reusable water bottle
- Protect the reef: do not touch, stand on, or take anything from the reef

#### Health & Comfort
- Strong UV rays — reef-safe sunscreen recommended
- No-see-ums (tiny biting insects) — natural, oil-based bug repellent recommended
- Purchase both before arriving on the island

#### Hotel Essentials
- Check-in: 3:00 PM | Check-out: 11:00 AM
- Early check-in / late check-out: subject to availability — leave luggage at reception
- Lost room key fee: $40
- Lost beach towel fee: $30
- Snorkel gear rental: $15/day | $70/week (at front desk)

#### House Rules (displayed clearly but warmly)
1. Smoking permitted in the open-air bar only — not in rooms or on terraces
2. Outside massages, hair braiding, and beach vendors are not permitted on property — Arca can arrange private services
3. Pool and facilities for registered guests only
4. Respectful behavior expected at all times
5. Please use the trash bins provided in the bathroom (local plumbing)

**Editability:** Low frequency. Team can update individual facts via admin panel as policies change.

---

### 7.5 Tours & Excursions

**Purpose:** Curated directory of Arca-approved partner operators covering the full island experience.

**Format:** Partner cards, each containing:
- Partner name
- Category (e.g., Diving, Wildlife, Wellness)
- Short description
- Key details (pricing where available, reservation requirements)
- Contact/booking note
- Optional: Arca's personal recommendation note

**Approved Partner Directory:**

| Partner | Category | Details |
|---|---|---|
| **West Bay Divers** | Scuba Diving | Next-door neighbors. Discover diving, certification, or fun dives. Boutique service. Book in advance via their website. |
| **Anthony's Key Resort** | Dolphin Experience | 30-min meet & greet, 1-hr snorkel & swim, or trainer for a day. Reservations required. |
| **Wahoo Slayer** | Deep Sea Fishing | Local, traditional experience with local fishermen. |
| **Ruthless Charters** | Deep Sea Fishing | Premium, upscale fishing excursion. |
| **Mangrove Tours (Jonesville)** | Nature / Eco | "Venice of Roatan." Departs from Jonesville via water taxi. Arca can arrange transport. |
| **Gumbalimba Park** | Eco-Park / Wildlife | Monkeys, parrots, botanical gardens. Guided tours available. |
| **Chocolate Factory** | Cultural Experience | 2-hour chocolate-making class using Honduran-grown cacao. |
| **Kao Kamasa Spa** | Wellness / Spa | Full spa treatments nearby. Book in advance. |
| **Spa Baan Suerte** | Wellness / Spa | Rustic spa experience. Book in advance. In-room massage also available through Arca. |
| **Sundowners (West End)** | Yoga | Daily classes at 9:00 AM on the top floor. Private sessions available — contact Arca. |
| **Roatan Island Brewing Co.** | Food & Drink | Jungle brewery. Craft beers, kombucha, artisanal food. Open Wed–Sun. Family friendly. |

**Snorkeling note:** Gear rental available at Arca front desk ($15/day, $70/week). Guided snorkel tours also available. Arca sits along the world's second largest barrier reef.

**Editability:** Add, edit, or remove partner cards via admin panel. Team can update details if partner info changes.

---

## 8. Admin Panel Specification

### Access
- URL: `guests.arcaroatan.com/admin`
- Password-protected login (username + password)
- Accessible from any device — phone, tablet, or laptop
- No app download required

### Permissions
- Single login for the whole team (can be expanded to role-based later)
- No technical knowledge required to operate

### Editable Elements by Section

| Section | What Can Be Edited |
|---|---|
| Welcome | Message text, background photo |
| In-Room Dining | Item names, descriptions, prices; add/remove items; mark items unavailable; update hours |
| This Week at Arca | Add/edit/delete events; set date, time, description per event |
| The Island | All text content, individual facts |
| Tours & Excursions | Add/edit/delete partner cards |

### Design Requirements for Admin Panel
- Large tap targets — usable on a phone screen
- Auto-save or clear save button
- Preview mode — see how changes look before publishing
- Changes go live immediately upon saving
- Simple rich text editor for descriptions (bold, line breaks — nothing more complex)

---

## 9. Contact & Ordering Integration

| Function | Method | Number/Address |
|---|---|---|
| In-room dining orders | WhatsApp + SMS | +1-202-972-2722 |
| General inquiries | WhatsApp + SMS | +1-202-972-2722 |
| Email | Email link | hello@arcaroatan.com |
| Website | Link | www.arcaroatan.com |

**WhatsApp deep link format:**
`https://wa.me/12029722722?text=Hi%2C%20I%27d%20like%20to%20place%20a%20room%20service%20order%20from%20Ahari.`

---

## 10. Technical Architecture

### Recommended Stack
- **Frontend:** HTML/CSS/JavaScript — lightweight, fast, no framework overhead
- **Backend/CMS:** Simple Node.js or Python backend with a JSON or SQLite data store for editable content
- **Hosting:** Cloudflare Pages or Netlify (free tier sufficient, global CDN, HTTPS included)
- **DNS:** GoDaddy — add CNAME record for `guests` subdomain pointing to hosting provider
- **Authentication:** Simple session-based login for admin panel

### Why This Stack
- No monthly CMS subscription fees
- Editable content stored in simple structured files — easy to back up
- Fast global delivery via CDN
- HTTPS automatic — required for WhatsApp deep links to work on iOS

### Future-Proofing
- Content structure designed so individual menu items can be toggled off without deletion
- Partner directory built as a data array — easy to add/remove entries
- Architecture supports Spanish language toggle as a future addition

---

## 11. Content Inventory

All content for initial build is confirmed available:

| Content | Source | Status |
|---|---|---|
| Full Ahari menu | PDF provided (Nov 2025 version) | Ready |
| Island information | Arca Welcome Book PDF | Ready |
| Partner vendor details | Arca Welcome Book PDF | Ready |
| Hotel photography | arcaroatan.com | Ready to pull |
| Welcome message | To be drafted | Draft provided in §7.1 |
| This Week at Arca | Team provides weekly | Requires ongoing input |
| Brand assets / logos | arcaroatan.com | Ready to pull |

---

## 12. Launch Checklist

- [ ] Subdomain `guests.arcaroatan.com` configured in GoDaddy
- [ ] HTTPS certificate active
- [ ] Full menu entered into admin panel
- [ ] Welcome message finalized and approved
- [ ] Island information and partner cards populated
- [ ] WhatsApp order button tested on iOS and Android
- [ ] Admin panel tested by non-technical team member
- [ ] QR code generated pointing to `guests.arcaroatan.com`
- [ ] QR code printed and placed in all rooms
- [ ] Cross-browser test: iOS Safari, Android Chrome
- [ ] Load time verified under 3 seconds on hotel Wi-Fi
- [ ] First "This Week at Arca" content entered by team

---

## 13. Out of Scope (Version 1)

The following are explicitly excluded from this build and may be considered for future versions:

- Online ordering / payment processing
- Guest account creation or login
- Room number personalization
- Push notifications
- Spanish language version
- Loyalty program integration
- Guest feedback / rating system
- Booking engine integration
- Social media feed integration
- Obsidian / second brain integration *(to be scoped separately)*

---

## 14. Open Items

| Item | Owner | Notes |
|---|---|---|
| Welcome message final approval | Arca team | Draft provided in §7.1 |
| Partner contact details / websites | Arca team | To be added to vendor cards |
| Admin panel login credentials | Developer | To be set at build time |
| GoDaddy DNS access | Arca (charmi) | Step-by-step instructions will be provided |
| QR code printing | Arca team | After URL is live |
| Menu pricing | ~~Resolved~~ | AHARI MENU 1125 EDIT.pdf is the current, correct menu. Welcome book menu is outdated — disregard entirely. |

---

*Document prepared following discovery session — May 2026*
*All content based on information provided by Arca hotel ownership.*
