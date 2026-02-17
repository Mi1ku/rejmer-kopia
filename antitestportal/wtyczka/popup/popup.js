document.addEventListener('DOMContentLoaded', () => {
    const UI_CONFIG_URL = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/ui_config.json";

    // Initial state / Fallback
    const updateUI = (data) => {
        if (data.title) document.getElementById('uiTitle').innerHTML = data.title;
        if (data.status) {
            const sb = document.getElementById('statusBadge');
            sb.innerText = data.status;
            sb.style.color = data.statusColor || "#22c55e";
        }
        if (data.version) document.getElementById('verText').innerText = data.version;
    };

    fetch(UI_CONFIG_URL)
        .then(r => r.json())
        .then(data => updateUI(data))
        .catch(err => console.log("Offline or Config Error:", err));

    document.getElementById('clearBtn').addEventListener('click', () => {
        const btn = document.getElementById('clearBtn');
        chrome.browsingData.remove({
            "origins": ["https://www.testportal.pl", "https://www.testportal.net"]
        }, {
            "cache": true, "cookies": true, "localStorage": true
        }, () => {
            const originalText = btn.innerText;
            const originalBg = btn.style.background;
            btn.innerText = "SESJA WYCZYSZCZONA!";
            btn.style.background = "#22c55e";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = originalBg;
            }, 2000);
        });
    });

    document.getElementById('updateBtn').addEventListener('click', () => {
        const btn = document.getElementById('updateBtn');
        const originalText = btn.innerText;
        btn.innerText = "AKTUALIZOWANIE...";

        chrome.tabs.query({ url: ["https://*.testportal.pl/*", "https://*.testportal.net/*"] }, (tabs) => {
            tabs.forEach(tab => chrome.tabs.reload(tab.id));
            btn.innerText = "SILNIK ZAKTUALIZOWANY!";
            setTimeout(() => btn.innerText = originalText, 2000);
        });
    });
});