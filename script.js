document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordVisible = document.getElementById('togglePasswordVisible');
    const togglePasswordHidden = document.getElementById('togglePasswordHidden');
    const passwordInput = document.getElementById('password');

    if (togglePasswordVisible && togglePasswordHidden && passwordInput) {
        // เริ่มต้นการตั้งค่าให้ปุ่มเริ่มที่การแสดงรหัส
        togglePasswordVisible.addEventListener('click', function () {
            passwordInput.type = 'text'; // แสดงรหัส
            togglePasswordVisible.classList.add('toggle-icon-hidden'); // ซ่อนไอคอนแสดง
            togglePasswordHidden.classList.remove('toggle-icon-hidden'); // แสดงไอคอนซ่อน
        });

        togglePasswordHidden.addEventListener('click', function () {
            passwordInput.type = 'password'; // ซ่อนรหัส
            togglePasswordVisible.classList.remove('toggle-icon-hidden'); // แสดงไอคอนแสดง
            togglePasswordHidden.classList.add('toggle-icon-hidden'); // ซ่อนไอคอนซ่อน
        });
    }
});