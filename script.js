// script.js

// Fungsi untuk memuat data reseller dari reseller.json
async function loadResellerData() {
    try {
        const response = await fetch('./reseller.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Gagal memuat data reseller:', error);
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
        showPopup(reseller.name, reseller.number, reseller.code);
    } else {
        alert('Nomor tersebut bukan reseller.');
    }
}

function showPopup(name, number, code) {
    const popup = document.getElementById('popup');
    const popupName = document.getElementById('popupName');
    const popupNumber = document.getElementById('popupNumber');
    const popupCode = document.getElementById('popupCode');

    popupName.textContent = `Nama: ${name}`;
    popupNumber.textContent = `Nomor: ${number}`;
    popupCode.textContent = `Kode: ${code}`;

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
