(function() {
  // 1. Inject CSS Styles into <head>
  const style = document.createElement('style');
  style.innerHTML = `
    .popup-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);
      z-index: 999999; display: flex; align-items: center; justify-content: center;
      padding: 15px; animation: popupFadeIn 0.3s ease-out forwards;
    }
    .popup-content {
      position: relative; background: #ffffff; width: 100%; max-width: 480px;
      border-radius: 18px; padding: 24px 20px 20px 20px; text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); font-family: Arial, sans-serif;
      animation: popupScaleUp 0.3s ease-out forwards;
    }
    .popup-close-btn {
      position: absolute; top: 10px; right: 14px; background: transparent;
      border: none; font-size: 28px; font-weight: bold; color: #888;
      cursor: pointer; line-height: 1; z-index: 2;
    }
    .popup-close-btn:hover { color: #f04432; }
    .popup-badge {
      display: inline-block; background: #ffe0d7; color: #f04432;
      font-size: 11px; font-weight: 800; letter-spacing: 1px;
      padding: 4px 12px; border-radius: 20px; margin-bottom: 12px;
    }
    .popup-image {
      width: 100%; height: auto; max-height: 250px; object-fit: cover;
      border-radius: 12px; display: block; margin: 0 auto 16px auto;
    }
    .popup-title { margin: 0 0 8px 0; font-size: 22px; color: #1a1a1a; line-height: 1.25; }
    .popup-description { margin: 0 0 18px 0; font-size: 14px; color: #555; line-height: 1.5; }
    .popup-btn {
      display: block; width: 100%; padding: 14px 10px;
      background: linear-gradient(100deg, #f04432, #ff7043);
      color: #ffffff !important; text-decoration: none !important;
      font-weight: 800; font-size: 16px; border-radius: 10px;
      box-shadow: 0 6px 16px rgba(240, 68, 50, 0.3);
    }
    @keyframes popupFadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popupScaleUp { from { transform: scale(0.85); } to { transform: scale(1); } }
  `;
  document.head.appendChild(style);

  // 2. Inject HTML Modal into Body
  const popupHTML = `
    <div id="popupModal" class="popup-overlay" style="display: none;">
      <div class="popup-content">
        <button id="popupCloseBtn" class="popup-close-btn" aria-label="Close Pop-up">&times;</button>
        <div class="popup-badge">SPECIAL OFFER</div>
        <a href="https://jeton.com/register?ref=V9BSXQB8" target="_blank" rel="nofollow sponsored noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLrlUNm8X7tIqbgcG5SPtQxTs8v_yGs303zCEgcEkK0g4Ib4ZcB8E9sqpLJVKkLso62-zZOipV5CgE9LNeFX9HtwOfLb0ymYhvdPDzJ_AJtS7EavXcMaFaO1_8-LiJvXeZT9YlUampm1u_LmMI1OC9h4Dyd4op4iLjmu-56244qxXbaI2Uhcw_TYzEtxlq/s1600-rw/images.jpg" alt="Special Promotion Card" class="popup-image" />
        </a>
        <h3 class="popup-title">Exclusive Offer Available Now!</h3>
        <p class="popup-description">Get instant access to your virtual payment card with zero hassle. Claim your offer today before it expires!</p>
        <a href="https://jeton.com/register?ref=V9BSXQB8" target="_blank" rel="nofollow sponsored noopener" class="popup-btn">
          🚀 CLAIM YOUR FREE CARD NOW →
        </a>
      </div>
    </div>
  `;

  document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const modal = document.getElementById('popupModal');
    const closeBtn = document.getElementById('popupCloseBtn');

    if (closeBtn) {
      closeBtn.onclick = function() { modal.style.display = 'none'; };
    }

    window.onclick = function(e) {
      if (e.target === modal) { modal.style.display = 'none'; }
    };

    // Delay trigger (3 seconds)
    setTimeout(function() {
      if (!sessionStorage.getItem('popupShown')) {
        modal.style.display = 'flex';
        sessionStorage.setItem('popupShown', 'true');
      }
    }, 3000);
  });
})();
