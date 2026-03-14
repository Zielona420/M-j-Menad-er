// FUNKCJA SKANOWANIA Z GENEROWANIEM TABELI
document.getElementById('btn-skanuj').onclick = function() {
    // 1. Zbieranie danych
    let ataki = document.querySelectorAll('tr.command-row');
    let raportDanych = [];

    ataki.forEach(row => {
        let nazwa = row.querySelector('.quickedit-label').innerText;
        let cel = row.querySelector('.village_anchor').innerText;
        let czas = row.querySelectorAll('td')[2].innerText;
        
        // Sprawdzamy czy to fejk (możesz dopisać własne słowa klucze)
        if (nazwa.toLowerCase().includes('fejk') || nazwa.toLowerCase().includes('f ')) {
            raportDanych.push({ nazwa, cel, czas });
        }
    });

    // 2. Tworzenie okna z tabelą
    let tabelaHtml = `
        <div id="moj-raport-okno" style="position:fixed; top:50px; left:50px; background:#fff; border:2px solid #000; padding:10px; z-index:99999; max-height:80vh; overflow-y:scroll;">
            <h3>Twoje Fejki (${raportDanych.length}) - Skopiuj to!</h3>
            <table border="1">
                <tr><th>Nazwa</th><th>Cel</th><th>Czas</th></tr>
                ${raportDanych.map(r => `<tr><td>${r.nazwa}</td><td>${r.cel}</td><td>${r.czas}</td></tr>`).join('')}
            </table>
            <br>
            <button onclick="document.getElementById('moj-raport-okno').remove()">Zamknij</button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', tabelaHtml);
    UI.SuccessMessage("Tabela wygenerowana!", 2000);
};
