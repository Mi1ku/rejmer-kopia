(function() {
    console.log("%c ⚡ SHIELD PRO v9.0 ACTIVATED ⚡ ", "color: #38bdf8; font-weight: bold; background: #000; padding: 10px;");

    // 1. ZABÓJCA EVENTÓW BLUR (FAZA CAPTURING)
    const kill = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
    };

    ['blur', 'visibilitychange', 'mouseleave', 'focusout', 'contextmenu'].forEach(ev => {
        window.addEventListener(ev, kill, true);
    });

    // 2. NADPISYWANIE GLOBALNEGO STANU
    Object.defineProperties(document, {
        'visibilityState': { get: () => 'visible', configurable: true },
        'hidden': { get: () => false, configurable: true },
        'hasFocus': { value: () => true, configurable: true }
    });

    // 3. BLOKADA RAPORTOWANIA DO NAUCZYCIELA
    window.logToServer = () => true;
    if(window.Testportal) window.Testportal.Log = { send: () => true };

    // 4. MIKUŚ CLICK-TO-SEARCH (NOWOCZESNE UI)
    const scan = () => {
        document.querySelectorAll('.question-content, .question-essence, h2, p').forEach(el => {
            if (el.innerText.length > 8 && !el.dataset.shield) {
                el.style.borderLeft = "4px solid #38bdf8";
                el.style.paddingLeft = "10px";
                el.style.cursor = "pointer";
                el.onclick = (e) => {
                    e.preventDefault();
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(el.innerText)}`, '_blank');
                };
                el.dataset.shield = "true";
            }
        });
    };
    setInterval(scan, 1500);
})();