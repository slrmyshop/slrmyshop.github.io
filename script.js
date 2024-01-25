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
        showPopup(reseller.name, reseller.number, reseller.code);
    } else {
        showPopupNotFound();
    }
}

function showPopup(name, number, code) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    popupContent.innerHTML = `
        <div>
            <strong>SELLER - TRUSTED</strong>
            <p>⊹ <strong>NAMA :</strong> ${name}</p>
            <p>⊹ <strong>NOMBOR TELEFON :</strong> ${number}✅</p>
            <p>⊹ <strong>RESELLER KOD :</strong> ${code}</p>
            <p>⊹ <strong>PEMILIK KOD :</strong> 60139431357 [ MID KIMI ]</p>
            <p>⊹ <strong>NEW ERA RESELLER V1 & V2</strong></p>
            <p>└──────●◎●──────</p>
            <p><strong>Nombor Telefon Diatas Menunjukkan Penjual Yang Sah & Dipercayai</strong></p>
            <p>SKY LEGACY RESOURCES</p>
            <p>[SLRMYSHOP]</p>
            <p><strong>© SLRMYBOT-SERVER</strong></p>
        </div>
    `;

    popup.style.display = 'block';
}

function showPopupNotFound() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    popupContent.innerHTML = `
        <div>
            <p><strong>NOMBOR TERSEBUT TIADA DIDALAM PANGKALAN DATA SLRMYBOT-SERVER</strong></p>
            <p><strong>JIKA TIADA SILA BERHATI-HATI SEMASA JUAL BELI YA</strong></p>
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
