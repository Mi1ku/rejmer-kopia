(function () {
    /**
     * SHIELD ULTRA ENTERPRISE v4.0.1 - FIXED CORE
     * Ultra-Defensive Edition
     */

    const makeNative = (fn, name) => {
        const wrapped = function () { return fn.apply(this, arguments); };
        Object.defineProperty(wrapped, 'name', { value: name || fn.name });
        wrapped.toString = () => `function ${name || ''}() { [native code] }`;
        return wrapped;
    };

    // 1. ZBIERACZ ŚMIECI I BLOKAD (Wzmocniony)
    const nuclearClean = () => {
        try {
            // Jeśli Testportal wywalił nas na stronę błędu - wracamy!
            if (window.location.href.includes('DspUnsupportedBrowserPlugins.html')) {
                console.warn("[Shield] Wykryto stronę blokady. Próba powrotu...");
                window.history.back();
                // Jeśli nie wróci, spróbuj zamienić URL na poprzedni lub główny egzaminu
                setTimeout(() => {
                    const lastExamUrl = localStorage.getItem('shield_last_exam_url');
                    if (lastExamUrl) window.location.href = lastExamUrl;
                }, 500);
                return;
            }

            // Zapamiętujemy URL egzaminu, aby móc wrócić przy blokadzie
            if (window.location.href.includes('/exam/')) {
                localStorage.setItem('shield_last_exam_url', window.location.href);
            }

            const keywords = ['rozszerzenia', 'wtyczki', 'zmień przeglądarkę', 'unsupported browser', 'zainstalowane wtyczki'];
            const all = document.getElementsByTagName('*');

            for (let i = 0; i < all.length; i++) {
                const el = all[i];
                if (!el) continue;

                // PARANOICZNE POBIERANIE TEKSTU (Błąd fix)
                let text = "";
                try {
                    text = (el.innerText || el.textContent || "").toLowerCase();
                } catch (e) { text = ""; }

                if (text && text.length < 1000 && keywords.some(k => text.includes(k))) {
                    if (el.tagName !== 'BODY' && el.tagName !== 'HTML' && el.tagName !== 'SCRIPT') {
                        el.style.setProperty('display', 'none', 'important');
                        el.style.setProperty('visibility', 'hidden', 'important');
                        el.style.setProperty('opacity', '0', 'important');
                        el.style.setProperty('z-index', '-1', 'important');
                        el.style.setProperty('pointer-events', 'none', 'important');
                    }
                }
            }

            // Odblokuj przewijanie (Force)
            document.body.style.setProperty('overflow', 'auto', 'important');
            document.documentElement.style.setProperty('overflow', 'auto', 'important');
        } catch (err) { }
    };

    // 2. MASKOWANIE WTYCZKI (Wzmocnione)
    try {
        // Usuwamy ślady chronio-podobne
        if (window.chrome && window.chrome.runtime) {
            const _runtime = window.chrome.runtime;
            // Zamiast kasować, nadpisujemy kluczowe funkcje
            _runtime.sendMessage = makeNative(() => { }, 'sendMessage');
            _runtime.connect = makeNative(() => ({ onMessage: { addListener: () => { } }, onDisconnect: { addListener: () => { } } }), 'connect');
        }
    } catch (e) { }

    // 3. PROTOTYPE PATCHING (Eventy)
    const _addEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = makeNative(function (type, listener, options) {
        if (['blur', 'focus', 'visibilitychange', 'mouseleave', 'pagehide'].includes(type)) {
            const wrapped = function (e) {
                if (type === 'blur' || type === 'mouseleave') return;
                if (type === 'visibilitychange' && document.visibilityState === 'hidden') return;
                try { return listener.apply(this, arguments); } catch (err) { }
            };
            return _addEventListener.call(this, type, wrapped, options);
        }
        return _addEventListener.apply(this, arguments);
    }, 'addEventListener');

    // 4. FALSYFIKACJA STANU
    const docProto = Object.getPrototypeOf(document);
    const forceProp = (proto, prop, value) => {
        try {
            Object.defineProperty(proto, prop, {
                get: makeNative(() => value, `get ${prop}`),
                configurable: true,
                enumerable: true
            });
        } catch (e) { }
    };

    forceProp(docProto, 'visibilityState', 'visible');
    forceProp(docProto, 'hidden', false);
    document.hasFocus = makeNative(() => true, 'hasFocus');

    // 5. HELPERY MIKUSIA (Bezpieczne wersja)
    const setupHelpers = () => {
        try {
            document.querySelectorAll('.question-content, .question-essence, .answer-text, h2, p, span').forEach(el => {
                if (el && el.innerText && el.innerText.trim().length > 5 && !el.hasAttribute('data-shield-v4')) {
                    el.setAttribute('data-shield-v4', 'true');
                    el.style.cursor = 'help'; // Mały ślad, że działa
                    el.addEventListener('click', (e) => {
                        if (e.ctrlKey || e.altKey) {
                            e.preventDefault();
                            const text = el.innerText.trim().replace(/\s+/g, ' ');
                            const url = e.ctrlKey
                                ? `https://www.google.com/search?q=${encodeURIComponent(text)}`
                                : `https://www.perplexity.ai/search?q=${encodeURIComponent(text)}`;
                            window.open(url, '_blank');
                        }
                    });
                }
            });
        } catch (e) { }
    };

    // 6. START
    console.clear();
    console.log("%c 💎 SHIELD ULTRA v4.0.1 ENTERPRISE LOADED 💎 ", "color: #fbbf24; font-weight: bold; background: #000; padding: 10px; border: 2px solid #fbbf24; border-radius: 5px;");

    const runner = () => {
        nuclearClean();
        setupHelpers();
    };

    setInterval(runner, 1000);
    const obs = new MutationObserver(runner);
    obs.observe(document.documentElement, { childList: true, subtree: true });

    // Testportal Hack
    setInterval(() => {
        try {
            if (window.Testportal && window.Testportal.Config) {
                window.Testportal.Config.loseFocusNotification = false;
                window.Testportal.Config.isFocusTrackingEnabled = false;
            }
        } catch (e) { }
    }, 500);

})();