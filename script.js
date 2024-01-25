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
        showTrustedPopup(reseller);
    } else {
        showNotInDatabasePopup();
    }
}

function showTrustedPopup(reseller) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    popupContent.innerHTML = `
        <div>
            <p style="font-weight: bold; font-size: 18px; color: green;">SELLER - TRUSTED</p>
            <p>NAMA: ${reseller.name}</p>
            <p>NOMBOR TELEFON: ${reseller.number}✅</p>
            <p>RESELLER KOD: ${reseller.code}</p>
            <p>PEMILIK KOD: 60139431357 [ MID KIMI ]</p>
            <p style="font-weight: bold;">NEW ERA RESELLER V1 & V2</p>
            <p>Nombor Telefon Diatas Menunjukkan Penjual Yang Sah & Dipercayai</p>
            <p>SKY LEGACY RESOURCES [SLRMYSHOP]</p>
            <p style="font-weight: bold; color: #777;">© SLRMYBOT-SERVER</p>
        </div>
    `;

    popup.style.display = 'block';
}

function showNotInDatabasePopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    popupContent.innerHTML = `
        <div>
            <p style="font-weight: bold; font-size: 18px; color: red;">NOMBOR TERSEBUT TIADA DIDALAM PANGKALAN DATA SLRMYBOT-SERVER</p>
            <p>JIKA TIADA SILA BERHATI-HATI SEMASA JUAL BELI YA</p>
            <p>Pesanan Dari ADMIN SLRMYSHOP</p>
        </div>
    `;

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
