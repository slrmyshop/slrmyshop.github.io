// script.js

// Fungsi untuk memuat data reseller dari reseller.json
async function loadResellerData() {
    try {
        const response = await fetch('/reseller.json'); // Menggunakan path absolut untuk merujuk ke root proyek
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Gagal memuat data reseller:', error);
        return [];
    }
}

let resellerData = [];

function checkReseller() {
    const inputNumber = document.getElementById('inputNumber').value.trim();
    const reseller = resellerData.find(entry => entry.number === inputNumber);

    if (reseller) {
        showTrustedPopup(reseller.name, reseller.number, reseller.code);
    } else {
        showNotInDatabasePopup();
    }
}

function showTrustedPopup(name, number, code) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    const trustedPopup = `
        <p>*SELLER - TRUSTED*</p>
        <p>NAMA : ${name}</p>
        <p>NOMBOR TELEFON : ${number}✅</p>
        <p>RESELLER KOD :* ${code}</p>
        <p>PEMILIK KOD : 60139431357 [ MID KIMI ]</p>
        <p>*NEW ERA RESELLER V1 & V2*</p>
        <p>*Nombor Telefon Diatas Menunjukkan Penjual Yang Sah & Dipercayai*</p>
        <p>SKY LEGACY RESOURCES [SLRMYSHOP]</p>
        <p>*© SLRMYBOT-SERVER*</p>
    `;

    popupContent.innerHTML = trustedPopup;
    popup.style.display = 'block';
}

function showNotInDatabasePopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    const notInDatabasePopup = `
        <p>NOMBOR TERSEBUT TIADA DIDALAM PANGKALAN DATA *SLRMYBOT-SERVER*</p>
        <p>JIKA TIADA SILA BERHATI-HATI SEMASA JUAL BELI YA</p>
        <p>Pesanan Dari ADMIN SLRMYSHOP</p>
    `;

    popupContent.innerHTML = notInDatabasePopup;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Memuat data reseller saat halaman dimuat
document.addEventListener('DOMContentLoaded', async () => {
    resellerData = await loadResellerData();
});
