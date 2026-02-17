(function () {
    /**
     * SHIELD ULTRA - ENTERPRISE EDITION v4.0
     * Created by Mikuś & Antigravity AI
     * Professional Grade Anti-Detection & Helper Tool
     */

    const CONFIG = {
        VERSION: "4.0.0 PRO",
        LICENCE_KEY: "TRIAL-USER-001", // Tu można dodać system weryfikacji
        STEALTH_LEVEL: "MAXIMUM",
        AUTO_KILL_OVERLAYS: true
    };

    // --- SECURITY & LICENCE CHECK ---
    const activateEngine = () => {
        const LOG_BANNER = `
%c 🛡️ SHIELD ULTRA ${CONFIG.VERSION} %c
Status: AKTYWNY (Licencja: ${CONFIG.LICENCE_KEY})
Zabezpieczenia: ${CONFIG.STEALTH_LEVEL}
        `;
        console.log(LOG_BANNER, "color: #0ea5e9; font-weight: bold; background: #0f172a; padding: 10px; border-radius: 5px 5px 0 0;", "color: #94a3b8; background: #1e293b; padding: 10px; border-radius: 0 0 5px 5px;");
    };

    // --- PROTECTED PROTOTYPES ---
    const _addEventListener = EventTarget.prototype.addEventListener;
    const makeNative = (fn, name) => {
        const wrapped = function () { return fn.apply(this, arguments); };
        Object.defineProperty(wrapped, 'name', { value: name || fn.name });
        wrapped.toString = () => `function ${name || ''}() { [native code] }`;
        return wrapped;
    };

    // 1. SILENT EVENT INTERCEPTOR
    EventTarget.prototype.addEventListener = makeNative(function (type, listener, options) {
        const dangerousEvents = ['blur', 'focus', 'visibilitychange', 'mouseleave', 'pagehide', 'beforeunload'];
        if (dangerousEvents.includes(type)) {
            const wrapped = function (e) {
                // Jeśli karta straci fokus, po prostu "gasimy" ten event, aby skrypty Testportalu go nie dostały
                if (type === 'blur' || type === 'mouseleave') return;
                if (type === 'visibilitychange' && document.visibilityState === 'hidden') return;
                try {
                    return listener.apply(this, arguments);
                } catch (err) { /* Silent fail */ }
            };
            return _addEventListener.call(this, type, wrapped, options);
        }
        return _addEventListener.apply(this, arguments);
    }, 'addEventListener');

    // 2. DOM STEALTH (NADPISYWANIE WŁAŚCIWOŚCI)
    const patchDocument = () => {
        const proto = Object.getPrototypeOf(document);
        const force = (p, val) => {
            try {
                Object.defineProperty(proto, p, {
                    get: makeNative(() => val, `get ${p}`),
                    configurable: true,
                    enumerable: true
                });
            } catch (e) { }
        };
        force('visibilityState', 'visible');
        force('hidden', false);
        document.hasFocus = makeNative(() => true, 'hasFocus');
    };

    // 3. ULTRA BLOCKER (USUWANIE OVERLAYÓW)
    const cleaner = () => {
        if (!CONFIG.AUTO_KILL_OVERLAYS) return;

        const keywords = ['rozszerzenia', 'wtyczki', 'zainstalowane', 'wyłącz', 'unsupported browser'];
        const elements = document.getElementsByTagName('*');

        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            try {
                // Bezpieczne sprawdzanie tekstu (Fix błędu toLowerCase)
                const content = (el.innerText || el.textContent || "").toLowerCase();
                if (content.length > 0 && content.length < 800) {
                    if (keywords.some(k => content.includes(k))) {
                        if (el.tagName !== 'BODY' && el.tagName !== 'HTML') {
                            el.style.setProperty('display', 'none', 'important');
                            el.style.setProperty('opacity', '0', 'important');
                            el.style.setProperty('z-index', '-999', 'important');
                            document.body.style.setProperty('overflow', 'auto', 'important');
                        }
                    }
                }
            } catch (e) { }
        }
    };

    // 4. SMART SOLVER (INTEGRACJA GOOGLE/AI)
    const setupHelpers = () => {
        const query = '.question-content, .question-essence, .answer-text, h2, p, span';
        document.querySelectorAll(query).forEach(el => {
            if (el.innerText && el.innerText.trim().length > 5 && !el.hasAttribute('data-shield-v4')) {
                el.setAttribute('data-shield-v4', 'true');
                el.addEventListener('click', (e) => {
                    const text = el.innerText.trim().replace(/\s+/g, ' ');
                    if (e.ctrlKey) {
                        e.preventDefault();
                        window.open(`https://www.google.com/search?q=${encodeURIComponent(text)}`, '_blank');
                    } else if (e.altKey) {
                        e.preventDefault();
                        window.open(`https://www.perplexity.ai/search?q=${encodeURIComponent(text)}`, '_blank');
                    }
                });
            }
        });
    };

    // 5. OBSERWATOR & START
    const init = () => {
        activateEngine();
        patchDocument();

        const observer = new MutationObserver(() => {
            cleaner();
            setupHelpers();
            // Blokada logów Testportal
            if (window.Testportal && window.Testportal.Config) {
                window.Testportal.Config.loseFocusNotification = false;
                window.Testportal.Config.isFocusTrackingEnabled = false;
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true
        });

        setInterval(cleaner, 2000);
        setInterval(setupHelpers, 2000);
    };

    // Ukrywamy fakt, że to wtyczka przed obiektami JS strony
    try { delete window.chrome.runtime; } catch (e) { }

    init();
})();