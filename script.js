// script.js

// Fungsi untuk memuat data reseller dari reseller.json
async function loadResellerData() {
    try {
        const response = await fetch('./reseller.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Sistem Error:', error);
        return [];
    }
}

let resellerData = [];

// Memuat data reseller saat halaman dimuat
document.addEventListener('DOMContentLoaded', async () => {
    resellerData = await loadResellerData();
});

function checkReseller() {
    const inputNumber = document.getElementById('inputNumber').value.trim();
    const reseller = resellerData.find(entry => entry.number === inputNumber);

    if (reseller) {
        showTrustedPopup(reseller.name, reseller.number, reseller.code);
    } else {
        showNotInDatabasePopup();
    }

    // Menambahkan efek animasi pada tombol
    const button = document.querySelector('button');
    button.classList.add('button-animation');
    
    // Menghapus efek animasi setelah selesai
    setTimeout(() => {
        button.classList.remove('button-animation');
    }, 500);
}

function showTrustedPopup(name, number, code) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    
    popupContent.innerHTML = `
        <div class="glitch" data-glitch="slrmybot">
            <p>NAMA : ${name}</p>
            <p>NOMBOR: ${number} <i style="font-size:20px; color: #ffbf00" class="fa">&#xf058;</i></p>
            <p>INFO KOD : ${code}</p>
            <p><strong>NOMBOR TELEFON YANG ANDA CARI CARI ADALAH SAH & DIPERCAYAI</strong></p>
            <p>SKY LEGACY RESOURCES [SLRMYSHOP]</p>
         </div>
            <button><a href="https://chat.whatsapp.com/FHpeFtSKrqnEvf1F8F9eIZ" style="color: #ffbf00; text-decoration:none">JOIN GRUP SLRMYBOT</button>
        </div>
    `;

    popup.style.display = 'block';
}

function showNotInDatabasePopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    
    popupContent.innerHTML = `
        <div>
            <p>NOMBOR TERSEBUT TIADA DIDALAM PANGKALAN DATA <strong>SLRMYBOT-SERVER</strong></p>
            <p>JIKA TIADA SILA BERHATI-HATI SEMASA JUAL BELI YA</p>
            <button><a href="https://chat.whatsapp.com/FHpeFtSKrqnEvf1F8F9eIZ" style="color: #ffbf00"; text-decoration:none">JOIN GRUP SLRMYBOT</a></button>
        
    `;

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
