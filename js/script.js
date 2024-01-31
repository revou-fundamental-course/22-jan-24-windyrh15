document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah pengiriman formulir langsung

            // Validasi nama
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                alert('Mohon isi nama Anda.');
                nameInput.focus();
                return;
            }

            // Validasi email
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                alert('Mohon masukkan alamat email yang valid.');
                emailInput.focus();
                return;
            }

            // Validasi pilihan
            const selectInput = document.getElementById('select');
            if (selectInput.value === 'Select option') {
                alert('Mohon pilih opsi yang valid.');
                selectInput.focus();
                return;
            }

            // Jika formulir lolos validasi, lanjutkan dengan pengiriman data
            alert('Formulir berhasil dikirim!');

            // Reset formulir jika diperlukan
            form.reset();
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    // Daftar gambar
    var images = [
      "image/vegetable-1.jpg",
      "image/vegetable-3.jpg"
    ];

    var currentIndex = 0;
    var headerImage = document.querySelector("#home .content-left img");

    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      headerImage.src = images[currentIndex];
    }

    // Panggil fungsi showNextImage setiap 3 detik
    setInterval(showNextImage, 5000);
  });