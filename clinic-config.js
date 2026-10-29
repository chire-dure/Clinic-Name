/**
 * DENTAL CLINIC TEMPLATE CONFIGURATION
 * 
 * Edit this file to customize clinic information across the entire website.
 * Changes made here will be reflected across pages automatically.
 */
window.CLINIC_CONFIG = {
  // Brand & Identity
  clinicName: "[CLINIC NAME]",
  tagline: "Modern, Gentle Dental Care for Your Entire Family",
  foundedYear: "2015",

  // Physical Address & Location
  shortAddress: "[Your Address]",
  fullAddress: "[PLACEHOLDER: Unit 204, Sample Medical Plaza, Downtown]",
  city: "[Your City]",
  country: "Philippines",
  googleMapsUrl: "https://maps.google.com",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.341101968877!2d121.0475!3d14.5768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM0JzM2LjUiTiAxMjHCsDAyJzUxLjAiRQ!5e0!3m2!1sen!2sph!4v1625000000000!5m2!1sen!2sph",

  // Contact Numbers & Communication
  mobilePhone: "0917 123 4567",
  telephone: "(02) 888-SMILE",
  displayPhone: "[PLACEHOLDER: 0917-123-4567 / (02) 888-SMILE]",
  callPhoneHref: "tel:+639171234567",
  email: "contact@yourdentalclinicdomain.com",
  viberNumber: "+639171234567",
  whatsAppNumber: "639171234567",

  // Operating Schedule
  weekdayHours: "Mon–Sat: 9:00 AM – 6:00 PM",
  sundayHours: "Sun: By Appointment Only",

  // Web3Forms Key for appointment notifications
  // Get your free access key at https://web3forms.com
  web3FormsKey: "e44fd7c5-5ac5-4a79-8327-fbfea3968ef7",

  // Social Media Profiles
  socials: {
    facebook: "https://facebook.com/[PLACEHOLDER: clinic-facebook]",
    instagram: "https://instagram.com/[PLACEHOLDER: clinic-instagram]",
    tiktok: "https://tiktok.com/@[PLACEHOLDER: clinic-tiktok]"
  },

  // Website Domain
  websiteUrl: "https://www.yourdentalclinicdomain.com"
};

// Automatic DOM Hydration for elements with data-clinic attributes
document.addEventListener("DOMContentLoaded", function () {
  const cfg = window.CLINIC_CONFIG;
  if (!cfg) return;

  // Hydrate data-clinic text elements
  document.querySelectorAll("[data-clinic]").forEach(function (el) {
    const key = el.getAttribute("data-clinic");
    if (cfg[key]) {
      el.textContent = cfg[key];
    }
  });

  // Hydrate data-clinic-href elements
  document.querySelectorAll("[data-clinic-href]").forEach(function (el) {
    const key = el.getAttribute("data-clinic-href");
    if (cfg[key]) {
      el.setAttribute("href", cfg[key]);
    }
  });
});
