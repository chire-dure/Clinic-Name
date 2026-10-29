# Dental Clinic Website Template — Customization & Developer Guide

Welcome to the **Dental Clinic Website Template**. This template is built with clean HTML5, Tailwind CSS, and Vanilla JavaScript for maximum performance, zero layout shift, seamless mobile usability, and strict WCAG AA accessibility compliance.

---

## 1. Quick Start: Single-File Business Configuration

All business-specific variables (clinic name, addresses, phone numbers, clinic hours, social handles, and form submission keys) are centralized in:

📂 `/clinic-config.js`

### Configuration Keys:
```javascript
window.CLINIC_CONFIG = {
  // Brand & Identity
  clinicName: "Your Clinic Name",
  tagline: "Modern, Gentle Dental Care for Your Entire Family",
  foundedYear: "2018",

  // Physical Location
  shortAddress: "Downtown Branch",
  fullAddress: "Unit 204, Medical Arts Tower, Main Street",
  city: "Metro Manila",
  country: "Philippines",
  googleMapsUrl: "https://maps.google.com/...",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",

  // Contact Information
  mobilePhone: "0917 123 4567",
  telephone: "(02) 888-SMILE",
  displayPhone: "0917-123-4567 / (02) 888-SMILE",
  callPhoneHref: "tel:+639171234567",
  email: "hello@yourclinic.com",
  viberNumber: "+639171234567",
  whatsAppNumber: "639171234567",

  // Hours of Operation
  weekdayHours: "Mon–Sat: 9:00 AM – 6:00 PM",
  sundayHours: "Sun: By Appointment Only",

  // Appointment Form Key (Web3Forms)
  web3FormsKey: "YOUR-WEB3FORMS-ACCESS-KEY-HERE",

  // Social Channels
  socials: {
    facebook: "https://facebook.com/yourclinic",
    instagram: "https://instagram.com/yourclinic",
    tiktok: "https://tiktok.com/@yourclinic"
  },

  // Canonical Domain
  websiteUrl: "https://www.yourclinic.com"
};
```

---

## 2. Using Template Hydration in HTML

Any element in any page can automatically render values from `clinic-config.js` using data attributes:

- **Text Content**: `<span data-clinic="clinicName"></span>`
- **Links & Hrefs**: `<a data-clinic-href="callPhoneHref">Call Us</a>`

When `DOMContentLoaded` fires, the script automatically populates these values across your pages.

---

## 3. Setting Up Online Appointment Bookings

The appointment request forms on the homepage and about page submit seamlessly via [Web3Forms](https://web3forms.com) (no server or backend coding needed):

1. Go to [https://web3forms.com](https://web3forms.com).
2. Enter the clinic's email address to generate a free Access Key.
3. Replace the `web3FormsKey` in `/clinic-config.js`.
4. Appointments booked by patients will instantly arrive in the clinic's email inbox with patient details, requested date, time, and specific dental concerns.

---

## 4. Brand Palette & WCAG AA Contrast Standards

This template follows strict Web Content Accessibility Guidelines (WCAG AA):

| Element / Button | Background | Text Color | Contrast Ratio | Rating |
| :--- | :--- | :--- | :--- | :--- |
| **BOOK AN APPOINTMENT** (Primary) | `#0F766E` (Deep Teal) | `#FFFFFF` (White) | **5.5:1** | Pass AA (Normal text) |
| **VIEW OUR SERVICES / PROMOS** | `#FF6B35` (Warm Coral) | `#0B2523` (Dark Navy/Slate) | **5.9:1** | Pass AA (Avoid white on coral) |
| **EXPLORE TREATMENTS / PILLS** | `#14B8A6` (Mint/Teal) | `#0B2523` (Dark Navy/Slate) | **6.7:1** | Pass AA |
| **BODY TEXT & BACKGROUND** | `#F4FAF8` (Soft Seafoam) | `#0B2523` (Deep Navy) | **15:1** | Pass AAA |

> ⚠️ **Design Warning**: Never place white (`#FFFFFF`) text over `#FF6B35` (coral), as its contrast ratio is only 2.8:1, failing WCAG accessibility standards. Always use `#0B2523` on coral backgrounds.

---

## 5. Site Directory & File Structure

```text
├── index.html                           # Homepage (Hero, Why Choose Us, 8 Services, Form, Map)
├── clinic-config.js                     # Global configuration & hydration engine
├── TEMPLATE_CUSTOMIZATION_GUIDE.md      # This guide
├── about/
│   └── index.html                       # About Us page (Philosophy, Partner Dentists, Location)
├── services/
│   ├── index.html                       # Comprehensive Service Directory & Promos
│   ├── teeth-whitening/index.html       # Service detail page
│   ├── dental-braces/index.html         # Service detail + interactive braces visualizer
│   ├── tooth-extraction/index.html      # Service detail page
│   ├── root-canal/index.html            # Service detail page
│   ├── dental-implants/index.html       # Service detail page
│   ├── veneers/index.html               # Service detail page
│   ├── pedia-dentistry/index.html       # Service detail page
│   └── oral-prophylaxis/index.html      # Service detail page
└── public/
    └── assets/                          # Team photos, dental SVGs, and graphics
```

---

## 6. Mobile & Speed Optimizations

- **44px Tap Targets**: All buttons, links, and form inputs meet touch target accessibility requirements.
- **Responsive Drawer**: Mobile navigation slide-out menu with high-visibility CTA.
- **Floating Contact Bar**: Mobile floating quick-action button with direct Viber and WhatsApp links.
- **Zero Heavy Frameworks**: Pure HTML + CDN Tailwind CSS ensures near-instant First Contentful Paint (< 0.8s).
