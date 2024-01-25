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
        alert('Nomor tersebut bukan reseller.');
    }
}

function showPopup(name, number, code) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const popupName = document.getElementById('popupName');
    const popupNumber = document.getElementById('popupNumber');
    const popupCode = document.getElementById('popupCode');
    const popupOwnerCode = document.getElementById('popupOwnerCode');
    const popupMessage = document.getElementById('popupMessage');

    popupName.textContent = `NAMA: ${name}`;
    popupNumber.textContent = `NOMBOR TELEFON: ${number} ✅`;
    popupCode.textContent = `RESELLER KOD: ${code}`;
    popupOwnerCode.textContent = 'PEMILIK KOD: 60139431357 [ MID KIMI ]';
    popupMessage.innerHTML = `
        *SELLER - TRUSTED*
        │  ⊹ *NAMA :* ${name}
        │  ⊹ *NOMBOR TELEFON :* ${number} ✅
        │  ⊹ *RESELLER KOD :* ${code}
        │  ⊹ *PEMILIK KOD :* 60139431357 [ MID KIMI ]
        │  ⊹ *NEW ERA RESELLER V1 & V2*
        └──────●◎●──────
        *Nombor Telefon Diatas Menunjukkan Penjual Yang Sah & Dipercayai*
        SKY LEGACY RESOURCES 
        [SLRMYSHOP]

        *© SLRMYBOT-SERVER*
    `;

    popupContent.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Memuat data reseller saat halaman dimuat
document.addEventListener('DOMContentLoaded', async () => {
    resellerData = await loadResellerData();
});
