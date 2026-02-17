document.addEventListener('DOMContentLoaded', () => {
    // PODMIEŃ NA SWÓJ LINK RAW DO CONFIGA
    const UI_CONFIG_URL = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/ui_config.json";

    fetch(UI_CONFIG_URL)
        .then(r => r.json())
        .then(data => {
            document.getElementById('uiTitle').innerText = data.title;
            document.getElementById('statusBadge').innerText = data.status;
            document.getElementById('statusBadge').style.color = data.statusColor;
            document.getElementById('verText').innerText = data.version;
            document.body.style.backgroundColor = data.bgColor;
        });
document.getElementById('clearBtn').addEventListener('click', () => {
    const btn = document.getElementById('clearBtn');
    // Czyścimy wszystko, co Testportal mógł zapisać o Tobie
    chrome.browsingData.remove({
        "origins": ["https://www.testportal.pl", "https://www.testportal.net"]
    }, {
        "cache": true, "cookies": true, "localStorage": true
    }, () => {
        btn.innerText = "SESJA WYCZYSZCZONA!";
        btn.style.background = "#22c55e";
        setTimeout(() => { btn.innerText = "WYCZYŚĆ SESJĘ (ANTI-DETECT)"; btn.style.background = "#ef4444"; }, 2000);
    });
});

document.getElementById('updateBtn').addEventListener('click', () => {
    const btn = document.getElementById('updateBtn');
    btn.innerText = "AKTUALIZOWANIE...";
    
    // Wymuszamy przeładowanie kart Testportalu z nowym kodem
    chrome.tabs.query({url: ["https://*.testportal.pl/*", "https://*.testportal.net/*"]}, (tabs) => {
        tabs.forEach(tab => chrome.tabs.reload(tab.id));
        btn.innerText = "SILNIK ZAKTUALIZOWANY!";
        setTimeout(() => btn.innerText = "POBIERZ UPDATE Z GITHUB", 2000);
    });
});        

});