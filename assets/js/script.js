// Fungsi dasar sistem CBT
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistem CBT siap digunakan');
});

// Contoh fungsi penghitung waktu
function mulaiWaktu(detik) {
    let sisa = detik;
    const timer = setInterval(() => {
        console.log('Waktu tersisa:', sisa, 'detik');
        sisa--;
        if (sisa < 0) {
            clearInterval(timer);
            alert('Waktu habis!');
        }
    }, 1000);
}
