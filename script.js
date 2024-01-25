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
        <div>
            <p><strong>SELLER - TRUSTED</strong></p>
            <p>NAMA : ${name}</p>
            <p>NOMBOR TELEFON : ${number} ✅</p>
            <p>RESELLER KOD : ${code}</p>
            <p>PEMILIK KOD : 60139431357 [ MID KIMI ]</p>
            <p><strong>NEW ERA RESELLER V1 & V2</strong></p>
            <p><strong>Nombor Telefon Diatas Menunjukkan Penjual Yang Sah & Dipercayai</strong></p>
            <p>SKY LEGACY RESOURCES [SLRMYSHOP]</p>
            <p><strong>© SLRMYBOT-SERVER</strong></p>
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
            <p>Pesanan Dari ADMIN SLRMYSHOP</p>
        </div>
    `;

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
