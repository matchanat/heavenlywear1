function rekomendasiWarna() {
    let undertone = document.getElementById("undertone").value;
    let hasil = document.getElementById("hasilWarna");

    if (undertone === "warm") {
        hasil.innerHTML = "Rekomendasi warna: mustard, olive, peach, coklat hangat.";
    } else if (undertone === "cool") {
        hasil.innerHTML = "Rekomendasi warna: dusty pink, navy, emerald, abu-abu.";
    } else if (undertone === "neutral") {
        hasil.innerHTML = "Rekomendasi warna: beige, mauve, soft grey, pastel.";
    } else {
        hasil.innerHTML = "Silakan pilih undertone terlebih dahulu.";
    }
}

function rekomendasiHijab() {
    let wajah = document.getElementById("bentukWajah").value;
    let hasil = document.getElementById("hasilHijab");

    if (wajah === "oval") {
        hasil.innerHTML = "Semua jenis hijab cocok, terutama Pashmina Viscose.";
    } else if (wajah === "bulat") {
        hasil.innerHTML = "Disarankan Hijab Pashmina Ceruty dengan styling memanjang.";
    } else if (wajah === "kotak") {
        hasil.innerHTML = "Hijab Segi Empat Voal dengan lipatan lembut lebih cocok.";
    } else if (wajah === "hati") {
        hasil.innerHTML = "Hijab Sport atau Pashmina Viscose dengan volume seimbang.";
    } else {
        hasil.innerHTML = "Silakan pilih bentuk wajah terlebih dahulu.";
    }
}
