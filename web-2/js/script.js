document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.inquiry-form');
    const nameInput = document.getElementById('name');
    const birthdateInput = document.getElementById('tanggal-lahir');
    const genderInputs = document.querySelectorAll('input[name="jenis-kelamin"]');
    const messageInput = document.getElementById('pesan');
    const genderLabel = document.querySelector('.gender-label');
    const outputSection = document.querySelector('.output');

    // Sembunyikan elemen output pada awalnya
    outputSection.style.display = 'none';

    form.addEventListener('submit', function (event) {
        let isValid = true;

        if (!validateName(nameInput.value)) {
            addErrorMessage(nameInput, 'Nama harus diisi.');
            isValid = false;
        } else {
            removeErrorMessage(nameInput);
        }

        if (!validateBirthdate(birthdateInput.value)) {
            addErrorMessage(birthdateInput, 'Tanggal Lahir harus diisi.');
            isValid = false;
        } else {
            removeErrorMessage(birthdateInput);
        }

        if (!validateGender()) {
            addErrorMessage(genderLabel, 'Jenis Kelamin harus dipilih.');
            isValid = false;
        } else {
            removeErrorMessage(genderLabel);
        }

        if (!validateMessage(messageInput.value)) {
            addErrorMessage(messageInput, 'Pesan harus diisi.');
            isValid = false;
        } else {
            removeErrorMessage(messageInput);
        }

        if (isValid) {
            // Menampilkan hasil input ke dalam elemen output
            displayOutput();
            // Menghentikan pengiriman formulir
            event.preventDefault();
        }
    });

    function validateName(name) {
        return name.trim() !== '';
    }

    function validateBirthdate(birthdate) {
        return birthdate.trim() !== '';
    }

    function validateGender() {
        return Array.from(genderInputs).some(input => input.checked);
    }

    function validateMessage(message) {
        return message.trim() !== '';
    }

    function addErrorMessage(element, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        element.parentNode.insertBefore(errorElement, element.nextSibling);

        // Hapus pesan kesalahan setelah 3 detik
        setTimeout(function () {
            removeErrorMessage(element);
        }, 3000);
    }

    function removeErrorMessage(element) {
        const errorElement = element.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    function displayOutput() {
        // Menampilkan elemen output setelah formulir diisi dengan benar
        outputSection.style.display = 'block';
        outputSection.innerHTML = `
            <h2>Current time: ${getCurrentTime()}</h2>
            <h2>Nama: ${nameInput.value}</h2>
            <h2>Tanggal Lahir: ${birthdateInput.value}</h2>
            <h2>Jenis Kelamin: ${getSelectedGender()}</h2>
            <h2>Pesan: ${messageInput.value}</h2>
        `;
    }

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function getSelectedGender() {
        const selectedGender = Array.from(genderInputs).find(input => input.checked);
        return selectedGender ? selectedGender.value : '';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Daftar gambar
    var images = [
      "img/vegetable-1.jpg",
      "img/vegetable-2.jpg",
      "img/vegetable-3.jpg"
    ];

    var currentIndex = 0;
    var headerImage = document.querySelector("#home img");

    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      headerImage.src = images[currentIndex];
    }

    // Panggil fungsi showNextImage setiap 3 detik
    setInterval(showNextImage, 5000);
  });