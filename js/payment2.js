document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector('.next-btn');
    nextBtn.addEventListener('click', function () {
        const paymentOptions = document.getElementsByName('payment');
        let selectedPayment = null;

        // Cek metode pembayaran yang dipilih
        for (let i = 0; i < paymentOptions.length; i++) {
            if (paymentOptions[i].checked) {
                selectedPayment = paymentOptions[i].value;
                break;
            }
        }

        // Arahkan sesuai metode pembayaran yang dipilih
        if (selectedPayment === 'Gopay') {
            window.location.href = 'gopay.html';
        } else if (selectedPayment === 'BCA') {
            window.location.href = 'payment2.html';
        } else {
            alert('Pilih metode pembayaran atau konfirmasi sebelum melanjutkan!');
        }
    });
});