// public/banner-cookies.js

// Fonction pour récupérer GA_ID depuis une balise meta
function getGAID() {
  const metaTag = document.querySelector('meta[name="ga-id"]');
  return metaTag ? metaTag.getAttribute("content") : null;
}

// Fonction pour charger Google Analytics
function loadGoogleAnalytics(GA_ID) {
  if (!GA_ID) {
    console.error("GA_ID n'est pas défini.");
    return;
  }

  if (document.querySelector('[src*="googletagmanager.com"]')) return;

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

// Fonctions utilitaires
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  const GA_ID = getGAID();
  if (!GA_ID) {
    console.error("GA_ID n'est pas défini dans la balise meta.");
    return;
  }

  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-modal");
  const analyticsCheckbox = document.getElementById("analytics");
  const servicesCheckbox = document.getElementById("services");

  // Vérifie le consentement existant
  const consent = getCookie("cookie-consent");
  if (consent) {
    banner.classList.add("hidden");
    modal.classList.add("hidden");
    const preferences = JSON.parse(consent);
    if (preferences.analytics) {
      loadGoogleAnalytics(GA_ID);
    }
  }

  // Bouton "Tout accepter"
  document.getElementById("accept-all")?.addEventListener("click", () => {
    setCookie(
      "cookie-consent",
      JSON.stringify({ analytics: true, services: true })
    );
    banner.style.display = "none";
    loadGoogleAnalytics(GA_ID);
  });

  // Bouton "Tout refuser"
  document.getElementById("decline-all")?.addEventListener("click", () => {
    setCookie(
      "cookie-consent",
      JSON.stringify({ analytics: false, services: false })
    );
    banner.style.display = "none";
  });

  // Bouton "Personnaliser"
  document.getElementById("customize")?.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Bouton "Enregistrer"
  document.getElementById("save-preferences")?.addEventListener("click", () => {
    console.log("Bouton 'Enregistrer' cliqué");
    const preferences = {
      analytics: analyticsCheckbox.checked,
      services: servicesCheckbox.checked,
    };
    setCookie("cookie-consent", JSON.stringify(preferences));

    if (preferences.analytics) {
      loadGoogleAnalytics(GA_ID);
    }

    banner.style.display = "none";
    modal.classList.add("hidden");
  });

  // Bouton "Fermer"
  document.getElementById("close-modal")?.addEventListener("click", () => {
    console.log("Bouton 'close' cliqué");
    modal.classList.add("hidden");
  });

  // Fermer la modale en cliquant sur l'overlay
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Bouton "Gérer mes cookies" dans le footer
  document.getElementById("manage-cookies")?.addEventListener("click", () => {
    const consent = getCookie("cookie-consent");
    if (consent) {
      const preferences = JSON.parse(consent);
      analyticsCheckbox.checked = preferences.analytics || false;
      servicesCheckbox.checked = preferences.services || false;
    }
    banner.style.display = "block";
    modal.hidden = false;
  });
});
