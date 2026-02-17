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

    document.getElementById('updateBtn').addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            if (tabs[0]) chrome.tabs.reload(tabs[0].id);
        });
        location.reload();
    });
});