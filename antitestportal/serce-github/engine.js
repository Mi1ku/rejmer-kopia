(function () {
    /**
     * SHIELD ULTRA ENTERPRISE v4.0.6 - NETWORK GHOST EDITION
     * Ultra-Stealth Network & Focus Persistence
     */

    const makeNative = (fn, name) => {
        const wrapped = function () { return fn.apply(this, arguments); };
        Object.defineProperty(wrapped, 'name', { value: name || fn.name });
        wrapped.toString = () => `function ${name || ''}() { [native code] }`;
        return wrapped;
    };

    // 1. CAŁKOWITA BLOKADA RAPORTOWANIA SIECIOWEGO (Ghost Mode)
    // Blokujemy wysyłanie logów o oszustwach na poziomie sieciowym
    const forbiddenPatterns = ['cheat', 'focus', 'blur', 'trace', 'logger', 'detection', 'logCheat'];

    const isForbidden = (url) => {
        if (typeof url !== 'string') return false;
        return forbiddenPatterns.some(p => url.toLowerCase().includes(p));
    };

    // A) Blokada navigator.sendBeacon (Ulubione narzędzie Testportalu)
    navigator.sendBeacon = makeNative(function (url, data) {
        if (isForbidden(url)) {
            console.log("%c [Shield] Zablokowano próbę raportowania cheatów (Beacon) ", "color: #fbbf24");
            return true; // Udajemy sukces
        }
        return false;
    }, 'sendBeacon');

    // B) Blokada Fetch API
    const _fetch = window.fetch;
    window.fetch = makeNative(function (resource, init) {
        const url = (typeof resource === 'string') ? resource : (resource ? resource.url : "");
        if (isForbidden(url)) {
            console.log("%c [Shield] Zablokowano próbę raportowania cheatów (Fetch) ", "color: #fbbf24");
            return Promise.resolve(new Response(JSON.stringify({ success: true, status: "ok" })));
        }
        return _fetch.apply(this, arguments);
    }, 'fetch');

    // C) Blokada XMLHttpRequest
    const _open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = makeNative(function (method, url) {
        if (isForbidden(url)) {
            this.isCheatLog = true;
        }
        return _open.apply(this, arguments);
    }, 'open');

    const _send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = makeNative(function () {
        if (this.isCheatLog) {
            console.log("%c [Shield] Zablokowano próbę raportowania cheatów (XHR) ", "color: #fbbf24");
            Object.defineProperty(this, 'readyState', { value: 4 });
            Object.defineProperty(this, 'status', { value: 200 });
            return;
        }
        return _send.apply(this, arguments);
    }, 'send');

    // 2. AGRESYWNE MASKOWANIE FOKUSU
    const blockEvents = ['blur', 'focus', 'visibilitychange', 'mouseleave', 'pagehide', 'beforeunload'];
    const _addEventListener = EventTarget.prototype.addEventListener;

    EventTarget.prototype.addEventListener = makeNative(function (type, listener, options) {
        if (blockEvents.includes(type)) {
            const wrapped = function (e) {
                if (type === 'blur' || type === 'mouseleave') return;
                if (type === 'visibilitychange' && document.visibilityState === 'hidden') return;
                try { return listener.apply(this, arguments); } catch (err) { }
            };
            return _addEventListener.call(this, type, wrapped, options);
        }
        return _addEventListener.apply(this, arguments);
    }, 'addEventListener');

    // Nadpisujemy stany dokumentu (Nuclear Option)
    const docProto = Object.getPrototypeOf(document);
    const forceProp = (proto, prop, value) => {
        Object.defineProperty(proto, prop, {
            get: makeNative(() => value, `get ${prop}`),
            configurable: true, enumerable: true
        });
    };
    forceProp(docProto, 'visibilityState', 'visible');
    forceProp(docProto, 'hidden', false);
    document.hasFocus = makeNative(() => true, 'hasFocus');
    window.onblur = null;

    // 3. AUTO-USUWANIE MODALI (Wykrywanie w locie)
    const cleaner = () => {
        try {
            // Zabijamy Testportal.Log jeśli istnieje
            if (window.Testportal && window.Testportal.Log) {
                window.Testportal.Log.send = makeNative(() => true, 'send');
                window.Testportal.Log.enqueue = makeNative(() => true, 'enqueue');
            }

            // Szukamy i usuwamy popupy o oszustwie
            document.querySelectorAll('*').forEach(el => {
                const text = (el.innerText || "").toLowerCase();
                if (text.includes('opuszczeniu') || text.includes('poinformowany') || text.includes('rozumiem')) {
                    if (el.tagName === 'BUTTON') el.click();
                    if (el.tagName !== 'BODY') el.style.setProperty('display', 'none', 'important');
                }
            });

            // Odblokuj przewijanie
            document.body.style.setProperty('overflow', 'auto', 'important');
            document.documentElement.style.setProperty('overflow', 'auto', 'important');
        } catch (e) { }
    };

    // 4. SZYBKIE SKANOWANIE UI
    const setupUI = () => {
        document.querySelectorAll('.question-content, .answer-text, p, span, h2').forEach(el => {
            if (el.innerText && el.innerText.trim().length > 5 && !el.hasAttribute('data-v4')) {
                el.setAttribute('data-v4', 'true');
                el.addEventListener('click', (e) => {
                    const text = el.innerText.trim().replace(/\s+/g, ' ');
                    if (e.ctrlKey) window.open(`https://www.google.com/search?q=${encodeURIComponent(text)}`, '_blank');
                    if (e.altKey) window.open(`https://www.perplexity.ai/search?q=${encodeURIComponent(text)}`, '_blank');
                });
            }
        });
        cleaner();
    };

    console.clear();
    console.log("%c 💎 SHIELD ULTRA v4.0.6 - GHOST NETWORK ENGINE 💎 ", "color: #10b981; font-weight: bold; background: #000; padding: 10px; border: 2px solid #10b981;");

    setInterval(setupUI, 1000);
    new MutationObserver(setupUI).observe(document.documentElement, { childList: true, subtree: true });

    // Patch Testportal Config
    setInterval(() => {
        try {
            if (window.Testportal && window.Testportal.Config) {
                window.Testportal.Config.loseFocusNotification = false;
                window.Testportal.Config.isFocusTrackingEnabled = false;
                window.Testportal.Config.focusTrackingInterval = 999999;
            }
        } catch (e) { }
    }, 500);

})();