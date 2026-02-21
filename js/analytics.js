// Google Analytics 4 (GA4) Global Site Tag (gtag.js)
// ----------------------------------------------------------------------------
// This script automatically injects the Google Analytics tracking code into the page.
// The tracking ID (Measurement ID) is defined here for centralized management.
// ----------------------------------------------------------------------------

(function() {
  var gaMeasurementId = 'G-B64MYP2PLR'; // Pairmoni GA4 Measurement ID

  // Create the script tag for gtag.js
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaMeasurementId;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', gaMeasurementId);
})();
