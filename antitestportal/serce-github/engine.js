(function () {
    /**
     * SHIELD ULTRA ENTERPRISE v4.0.7 - DEEP STATE EDITION
     * Unstoppable Focus Persistence
     */

    const makeNative = (fn, name) => {
        const wrapped = function () { return fn.apply(this, arguments); };
        Object.defineProperty(wrapped, 'name', { value: name || fn.name });
        wrapped.toString = () => `function ${name || ''}() { [native code] }`;
        return wrapped;
    };

    // 1. ZABÓJCA FOCUS LOSS (NUCLEAR OPTION)
    // Czyścimy wszystko co może wykryć wyjście z karty
    const killFocusDetection = () => {
        try {
            window.onblur = null;
            window.onfocus = null;
            document.onvisibilitychange = null;

            // Nadpisujemy stany dokumentu na stałe (freeze)
            if (!Object.isFrozen(document.visibilityState)) {
                Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
                Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
            }

            // Hard mock dla hasFocus
            document.hasFocus = makeNative(() => true, 'hasFocus');
        } catch (e) { }
    };

    // 2. PRZECHWYTYWANIE ADD_EVENT_LISTENER (SILENT MODE)
    const _addEventListener = EventTarget.prototype.addEventListener;
    const blockedEvents = ['blur', 'focus', 'visibilitychange', 'mouseleave', 'pagehide', 'beforeunload', 'focusout'];

    EventTarget.prototype.addEventListener = makeNative(function (type, listener, options) {
        if (blockedEvents.includes(type)) {
            // Blokujemy dodawanie tych eventów przez stronę
            return;
        }
        return _addEventListener.apply(this, arguments);
    }, 'addEventListener');

    // 3. BLOKADA SIECIOWA (GHOST MODE)
    const forbidden = ['cheat', 'focus', 'blur', 'trace', 'logger'];
    const isBad = (u) => typeof u === 'string' && forbidden.some(p => u.toLowerCase().includes(p));

    const _sendBeacon = navigator.sendBeacon;
    navigator.sendBeacon = makeNative(function (url, data) {
        if (isBad(url)) return true;
        return _sendBeacon.apply(this, arguments);
    }, 'sendBeacon');

    // 4. AUTO-USUWANIE MODALA "INFORMACJA"
    const modalDestroyer = () => {
        try {
            // Szukamy modali Testportalu
            const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => {
                if (btn.innerText.includes('Rozumiem')) {
                    btn.click(); // Automatyczne potwierdzenie
                }
            });

            const overlays = document.querySelectorAll('.modal-backdrop, .modal, [class*="modal"]');
            overlays.forEach(ov => {
                const text = (ov.innerText || "").toLowerCase();
                if (text.includes('opuszczeniu') || text.includes('poinformowany')) {
                    ov.style.setProperty('display', 'none', 'important');
                    ov.remove(); // Całkowite usunięcie z DOM
                }
            });

            // Przywracanie scrolla
            document.body.style.setProperty('overflow', 'auto', 'important');
            document.documentElement.style.setProperty('overflow', 'auto', 'important');
        } catch (e) { }
    };

    // 5. HELPERY MIKUSIA (UI)
    const setupUI = () => {
        document.querySelectorAll('.question-content, .answer-text, p, span, h2, h3').forEach(el => {
            if (el.innerText && el.innerText.trim().length > 5 && !el.hasAttribute('data-v4')) {
                el.setAttribute('data-v4', 'true');
                el.addEventListener('click', (e) => {
                    const text = el.innerText.trim().replace(/\s+/g, ' ');
                    if (e.ctrlKey) window.open(`https://www.google.com/search?q=${encodeURIComponent(text)}`, '_blank');
                    if (e.altKey) window.open(`https://www.perplexity.ai/search?q=${encodeURIComponent(text)}`, '_blank');
                });
            }
        });
        killFocusDetection();
        modalDestroyer();
    };

    // 6. START I LOGOWANIE
    console.clear();
    console.log("%c � SHIELD ULTRA v4.0.7 - DEEP STATE LOADED � ", "color: #ef4444; font-weight: bold; background: #000; padding: 10px; border: 2px solid #ef4444;");

    setInterval(setupUI, 500); // Szybszy skan
    new MutationObserver(setupUI).observe(document.documentElement, { childList: true, subtree: true });

    // Wyłączenie Configu Testportalu
    setInterval(() => {
        try {
            if (window.Testportal && window.Testportal.Config) {
                window.Testportal.Config.loseFocusNotification = false;
                window.Testportal.Config.isFocusTrackingEnabled = false;
                if (window.Testportal.Log) window.Testportal.Log.send = () => true;
            }
        } catch (e) { }
    }, 200);

})();