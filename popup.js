<script>
(function () {
  const REFERRAL_URL = "https://jeton.com/register?ref=V9BSXQB8";

  // Your Blogger-hosted images (GIF as main, JPG as original/fallback reference)
  const IMAGE_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOlktDba-jwRrNfQP_Ni7AtCGtHfKR4Nw_5Gc5GEkyNr7TmXDs1J0qa0_1nfQ_zoOtw3cqw0SQzlu40TGOG1lTJwuX5NFpNzwMB-8Uhzi2Rs5MpbAerIuYzERB6c-7VZ4dYX3t3few_3jJ/s640/arlinadesign.gif";
  const FALLBACK_IMAGE_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLrlUNm8X7tIqbgcG5SPtQxTs8v_yGs303zCEgcEkK0g4Ib4ZcB8E9sqpLJVKkLso62-zZOipV5CgE9LNeFX9HtwOfLb0ymYhvdPDzJ_AJtS7EavXcMaFaO1_8-LiJvXeZT9YlUampm1u_LmMI1OC9h4Dyd4op4iLjmu-56244qxXbaI2Uhcw_TYzEtxlq/s1600-rw/images.jpg";

  function initJetonPopup() {
    if (document.getElementById("popupModal")) return;

    const style = document.createElement("style");
    style.textContent = `
      .popup-overlay {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        z-index: 999999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 15px;
        box-sizing: border-box;
        animation: jetonFadeIn 0.3s ease-out;
      }

      .popup-content {
        position: relative;
        background: #ffffff;
        width: 100%;
        max-width: 440px;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 18px;
        padding: 24px 20px 20px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        animation: jetonScaleUp 0.3s ease-out;
      }

      .popup-close-btn {
        position: absolute;
        top: 9px;
        right: 12px;
        background: transparent;
        border: none;
        font-size: 29px;
        font-weight: normal;
        color: #777777;
        cursor: pointer;
        line-height: 1;
        z-index: 3;
        padding: 4px 7px;
      }

      .popup-close-btn:hover {
        color: #f04432;
      }

      .popup-badge {
        display: inline-block;
        background: #ffe0d7;
        color: #f04432;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1px;
        padding: 5px 12px;
        border-radius: 20px;
        margin: 7px 0 14px;
      }

      .popup-image-link {
        display: block;
        text-decoration: none;
        border-radius: 12px;
        overflow: hidden;
        margin: 0 auto 16px;
        background: #f5f5f5;
      }

      .popup-image {
        width: 100%;
        height: auto;
        max-height: 240px;
        object-fit: contain;
        display: block;
        border-radius: 12px;
      }

      .popup-title {
        margin: 0 0 8px;
        font-size: 21px;
        color: #1a1a1a;
        line-height: 1.3;
      }

      .popup-description {
        margin: 0 0 18px;
        font-size: 14px;
        color: #555555;
        line-height: 1.6;
      }

      .popup-btn {
        display: block;
        width: 100%;
        padding: 14px 10px;
        background: linear-gradient(100deg, #f04432, #ff7043);
        color: #ffffff !important;
        text-decoration: none !important;
        font-weight: 800;
        font-size: 15px;
        border-radius: 10px;
        box-shadow: 0 6px 16px rgba(240,68,50,0.25);
        box-sizing: border-box;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .popup-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 9px 20px rgba(240,68,50,0.35);
      }

      @keyframes jetonFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes jetonScaleUp {
        from { transform: scale(0.92); }
        to { transform: scale(1); }
      }

      @media (max-width: 480px) {
        .popup-content {
          max-width: 100%;
          padding: 22px 16px 17px;
          border-radius: 15px;
        }
        .popup-title {
          font-size: 19px;
        }
        .popup-description {
          font-size: 13px;
        }
        .popup-btn {
          font-size: 14px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .popup-overlay,
        .popup-content {
          animation: none;
        }
        .popup-btn {
          transition: none;
        }
      }
    `;

    document.head.appendChild(style);

    const modal = document.createElement("div");
    modal.id = "popupModal";
    modal.className = "popup-overlay";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Jeton special offer");

    modal.innerHTML = `
      <div class="popup-content">
        <button id="popupCloseBtn" class="popup-close-btn" aria-label="Close Pop-up">&times;</button>
        <div class="popup-badge">SPECIAL OFFER</div>
        <a class="popup-image-link" target="_blank" rel="nofollow sponsored noopener">
          <img class="popup-image" alt="Special Promotion Card" original="${FALLBACK_IMAGE_URL}">
        </a>
        <h3 class="popup-title">Exclusive Offer Available Now!</h3>
        <p class="popup-description">Get instant access to your virtual payment card with zero hassle. Claim your offer today before it expires!</p>
        <a class="popup-btn" target="_blank" rel="nofollow sponsored noopener">
          🚀 CLAIM YOUR FREE CARD NOW &rarr;
        </a>
      </div>
    `;

    document.body.appendChild(modal);

    // Set referral links on all anchor tags
    modal.querySelectorAll("a").forEach(function (link) {
      link.href = REFERRAL_URL;
    });

    // Image load & error handling
    const img = modal.querySelector(".popup-image");
    const imageLink = modal.querySelector(".popup-image-link");

    img.onerror = function () {
      // If the GIF fails, try loading the fallback JPG from the original attribute
      if (img.src !== img.getAttribute("original")) {
        img.src = img.getAttribute("original");
      } else {
        // If the fallback also fails, hide the image container entirely
        imageLink.style.display = "none";
        console.warn("Popup images failed to load.");
      }
    };

    img.src = IMAGE_URL;

    // Close functionality
    const closeBtn = document.getElementById("popupCloseBtn");

    function closePopup() {
      modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closePopup);

    // Close when clicking the dark overlay
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closePopup();
      }
    });

    // Close with Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.style.display === "flex") {
        closePopup();
      }
    });

    // Helper to show modal and set focus
    function showPopup() {
      modal.style.display = "flex";
      closeBtn.focus();
    }

    // Show after 3 seconds, once per browser tab session
    setTimeout(function () {
      try {
        if (!sessionStorage.getItem("jetonPopupShown")) {
          showPopup();
          sessionStorage.setItem("jetonPopupShown", "true");
        }
      } catch (error) {
        showPopup();
      }
    }, 3000);
  }

  // Works whether the page has loaded or not
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initJetonPopup);
  } else {
    initJetonPopup();
  }
})();
</script>
