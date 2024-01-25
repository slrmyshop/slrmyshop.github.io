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
        showNotFoundPopup();
    }
}

function showPopup(name, number, code) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    // Hapus konten popup sebelumnya
    while (popupContent.firstChild) {
        popupContent.removeChild(popupContent.firstChild);
    }

    const popupTitle = document.createElement('p');
    popupTitle.textContent = 'SELLER - TRUSTED';
    popupTitle.style.fontWeight = 'bold';

    const popupName = document.createElement('p');
    popupName.textContent = `│  ⊹ NAMA : ${name}`;

    const popupNumber = document.createElement('p');
    popupNumber.textContent = `│  ⊹ NOMBOR TELEFON : ${number}✅`;

    const popupCode = document.createElement('p');
    popupCode.textContent = `│  ⊹ RESELLER KOD : ${code}`;

    const popupOwner = document.createElement('p');
    popupOwner.textContent = '│  ⊹ PEMILIK KOD : 60139431357 [ MID KIMI ]';

    const popupDescription = document.createElement('p');
    popupDescription.textContent = '│  ⊹ NEW ERA RESELLER V1 & V2';

    const separator = document.createElement('p');
    separator.textContent = '└──────●◎●──────';

    const note = document.createElement('p');
    note.innerHTML = `
        *Nombor Telefon Diatas Menunjukkan Penjual Yang Sah & Dipercayai*
        SKY LEGACY RESOURCES 
        [SLRMYSHOP]

        *© SLRMYBOT-SERVER*
    `;

    // Tambahkan elemen-elemen ke popup
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(popupName);
    popupContent.appendChild(popupNumber);
    popupContent.appendChild(popupCode);
    popupContent.appendChild(popupOwner);
    popupContent.appendChild(popupDescription);
    popupContent.appendChild(separator);
    popupContent.appendChild(note);

    popup.style.display = 'block';
}

function showNotFoundPopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    // Hapus konten popup sebelumnya
    while (popupContent.firstChild) {
        popupContent.removeChild(popupContent.firstChild);
    }

    const notFoundMessage = document.createElement('p');
    notFoundMessage.textContent = 'NOMBOR TERSEBUT TIADA DIDALAM PANGKALAN DATA *SLRMYBOT-SERVER*';

    const cautionMessage = document.createElement('p');
    cautionMessage.textContent = 'JIKA TIADA SILA BERHATI-HATI SEMASA JUAL BELI YA';

    const adminMessage = document.createElement('p');
    adminMessage.textContent = 'Pesanan Dari ADMIN SLRMYSHOP';

    // Tambahkan elemen-elemen ke popup
    popupContent.appendChild(notFoundMessage);
    popupContent.appendChild(cautionMessage);
    popupContent.appendChild(adminMessage);

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
