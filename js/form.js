function toggleOrder(orderType) {
    const dineInBtn = document.getElementById('dineIn');
    const takeAwayBtn = document.getElementById('takeAway');
    const tableContainer = document.getElementById('tableContainer');

    if (orderType === 'dineIn') {
        dineInBtn.classList.add('active');
        takeAwayBtn.classList.remove('active');
        tableContainer.classList.remove('hidden'); // Tampilkan input Nomor Meja
    } else if (orderType === 'takeAway') {
        takeAwayBtn.classList.add('active');
        dineInBtn.classList.remove('active');
        tableContainer.classList.add('hidden'); // Sembunyikan input Nomor Meja
    }
}