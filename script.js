// Daftar nama rekomendasi
const namaRekomendasi = [
    "Rafli",
    "Fauzan",
    "Aldo",
    "Surip",
    "Valen",
    "Bihan",
    "Darmo",
];

const namaInput = document.getElementById("nama");
const namaSuggestion = document.getElementById("namaSuggestion");

// Event listener untuk memantau input nama
namaInput.addEventListener("input", function () {
    const inputText = namaInput.value.toLowerCase();
    const suggestions = namaRekomendasi.filter(nama => nama.toLowerCase().includes(inputText));
    displaySuggestions(suggestions);
});

// Fungsi untuk menampilkan rekomendasi nama
function displaySuggestions(suggestions) {
    if (suggestions.length === 0) {
        namaSuggestion.innerHTML = "";
        return;
    }

    const suggestionList = suggestions.map(nama => `<div>${nama}</div>`).join("");
    namaSuggestion.innerHTML = suggestionList;
}

// Event listener untuk meng-handle pengiriman form
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Menghentikan pengiriman form bawaan browser

    // Validasi form sebelum pengiriman
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const matkul = document.getElementById("matkul").value;
    const dosen = document.getElementById("dosen").value;

    if (!nama || !nim || !matkul || !dosen) {
        // Jika salah satu field belum diisi, tampilkan alert
        alert("Harap isi semua label pada form registrasi.");
    } else {
        // Jika semua field telah diisi, lanjutkan pengiriman atau aksi lainnya
        alert("Data berhasil disubmit!");
        // Di sini, Anda dapat menambahkan logika untuk mengirim data ke server jika diperlukan
    }
});
