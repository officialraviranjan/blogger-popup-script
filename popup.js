
(function () {
  "use strict";

  const REFERRAL_URL = "https://jeton.com/register?ref=V9BSXQB8";

  const IMAGE_URL =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLrlUNm8X7tIqbgcG5SPtQxTs8v_yGs303zCEgcEkK0g4Ib4ZcB8E9sqpLJVKkLso62-zZOipV5CgE9LNeFX9HtwOfLb0ymYhvdPDzJ_AJtS7EavXcMaFaO1_8-LiJvXeZT9YlUampm1u_LmMI1OC9h4Dyd4op4iLjmu-56244qxXbaI2Uhcw_TYzEtxlq/s1600/images.jpg";

  const STORAGE_KEY = "jetonPopupShown";
  const POPUP_ID = "popupModal";
  const POPUP_DELAY = 3000;

  // Avoid duplicate script execution.
  if (window.__jetonPopupInitialized) return;
  window.__jetonPopupInitialized = true;

  function initJetonPopup() {
    if (!document.body || document.getElementById(POPUP_ID)) return;

    // Check session before creating the popup.
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "true") {
        console.info("Jeton popup already shown in this session.");
        return;
      }
    } catch (error) {
      console.warn("Session storage unavailable.", error);
    }

    const style = document.createElement("style");

    style.textContent = `
      #popupModal.popup-overlay {
        position: fixed !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        display: none !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 15px !important;
        box-sizing: border-box !important;
        overflow-y: auto !important;
        background: rgba(0, 0, 0, .76) !important;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        z-index: 2147483647 !important;
      }

      #popupModal.popup-overlay.is-visible {
        display: flex !important;
        animation: jetonFadeIn .25s ease-out;
      }

      #popupModal .popup-content {
        position: relative;
        width: 100%;
        max-width: 440px;
        max-height: 90vh;
        overflow-y: auto;
        padding: 24px 20px 20px;
        box-sizing: border-box;
        border-radius: 18px;
        background: #fff;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: 0 20px 40px rgba(0, 0, 0, .3);
        animation: jetonScaleUp .3s ease-out;
      }

      #popupModal .popup-close-btn {
        position: absolute;
        top: 7px;
        right: 10px;
        z-index: 3;
        width: 40px;
        height: 40px;
        padding: 0;
        border: 0;
        background: transparent;
        color: #777;
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }

      #popupModal .popup-close-btn:hover {
        color: #f04432;
      }

      #popupModal .popup-badge {
        display: inline-block;
        margin: 7px 0 14px;
        padding: 5px 12px;
        border-radius: 20px;
        background: #ffe0d7;
        color: #d93628;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1px;
      }

      #popupModal .popup-image-link {
        display: block;
        margin: 0 auto 16px;
        overflow: hidden;
        border-radius: 12px;
        text-decoration: none;
      }

      #popupModal .popup-image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        aspect-ratio: 1200 / 627;
        overflow: hidden;
        border-radius: 12px;
        background: #f5f5f5;
      }

      #popupModal .popup-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      #popupModal .popup-title {
        margin: 0 0 9px;
        color: #1a1a1a;
        font-size: 21px;
        line-height: 1.4;
      }

      #popupModal .popup-description {
        margin: 0 0 19px;
        color: #555;
        font-size: 14px;
        line-height: 1.65;
      }

      #popupModal .popup-btn {
        display: block;
        width: 100%;
        padding: 15px 12px;
        box-sizing: border-box;
        border-radius: 10px;
        background: linear-gradient(100deg, #f04432, #ff7043);
        box-shadow: 0 6px 16px rgba(240, 68, 50, .25);
        color: #fff !important;
        font-size: 15px;
        font-weight: 800;
        text-align: center;
        text-decoration: none !important;
        transition: transform .2s, box-shadow .2s;
      }

      #popupModal .popup-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 9px 20px rgba(240, 68, 50, .35);
      }

      @keyframes jetonFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes jetonScaleUp {
        from { transform: scale(.94); }
        to { transform: scale(1); }
      }

      @media (max-width: 480px) {
        #popupModal.popup-overlay {
          padding: 12px !important;
        }

        #popupModal .popup-content {
          max-height: 88vh;
          padding: 22px 16px 18px;
          border-radius: 15px;
        }

        #popupModal .popup-title {
          font-size: 19px;
        }

        #popupModal .popup-description {
          font-size: 13px;
        }

        #popupModal .popup-btn {
          font-size: 14px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #popupModal.popup-overlay,
        #popupModal .popup-content,
        #popupModal .popup-btn {
          animation: none !important;
          transition: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    const modal = document.createElement("div");
    modal.id = POPUP_ID;
    modal.className = "popup-overlay";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Jeton special offer");

    modal.innerHTML = `
      <div class="popup-content">
        <button type="button"
          class="popup-close-btn"
          aria-label="Close popup">&times;</button>

        <div class="popup-badge">SPECIAL OFFER</div>

        <a class="popup-image-link"
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label="Visit Jeton">
          <div class="popup-image-wrapper">
            <img class="popup-image"
              alt="Jeton promotional offer"
              loading="eager" />
          </div>
        </a>

        <h3 class="popup-title">A Special Offer for You!</h3>

        <p class="popup-description">
          Discover Jeton and check the available virtual card
          options. Visit through my referral link to get started.
        </p>

        <a class="popup-btn"
          target="_blank"
          rel="nofollow sponsored noopener">
          CLAIM YOUR OFFER &rarr;
        </a>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelectorAll("a").forEach(function (link) {
      link.href = REFERRAL_URL;
    });

    const img = modal.querySelector(".popup-image");
    const imageWrapper = modal.querySelector(".popup-image-wrapper");
    const closeBtn = modal.querySelector(".popup-close-btn");

    img.addEventListener("load", function () {
      console.info("Jeton popup image loaded successfully.");
    });

    img.addEventListener("error", function () {
      imageWrapper.style.display = "none";
      console.error("Jeton popup image failed to load:", IMAGE_URL);
    });

    img.src = IMAGE_URL;

    let popupOpened = false;
    let previousFocus = null;

    function openPopup() {
      if (popupOpened) return;

      // Recheck immediately before opening.
      try {
        if (sessionStorage.getItem(STORAGE_KEY) === "true") return;
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch (error) {
        console.warn("Could not save popup session state.", error);
      }

      popupOpened = true;
      previousFocus = document.activeElement;

      modal.classList.add("is-visible");
      document.body.style.overflow = "hidden";
      closeBtn.focus();

      console.info("Jeton popup displayed.");
    }

    function closePopup() {
      modal.classList.remove("is-visible");
      document.body.style.overflow = "";

      if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus();
      }
    }

    closeBtn.addEventListener("click", closePopup);

    modal.addEventListener("click", function (event) {
      if (event.target === modal) closePopup();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && popupOpened) {
        closePopup();
      }
    });

    window.setTimeout(openPopup, POPUP_DELAY);

    console.info("Jeton popup script initialized.");
  }

  function start() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initJetonPopup, {
        once: true
      });
    } else {
      initJetonPopup();
    }
  }

  start();
})();
