// ===== KHỞI TẠO DỮ LIỆU =====
function khoiTaoDuLieu() {
    console.log('Initializing data... from - data.js:3');
    
    // Khởi tạo users nếu chưa có
    if (!localStorage.getItem('tutien_nguoidungs')) {
        const nguoiDungMau = [
            {
                id: 1,
                tenDangNhap: 'Cửu U Chân Nhân',
                email: 'cuuu@example.com',
                matKhau: 'password123',
                ngayThamGia: '2023-01-15',
                capDo: 'Kim Đan Kỳ',
                soTruyen: 3,
                diem: 1250,
                nguoiTheoDoi: 45
            },
            {
                id: 2,
                tenDangNhap: 'Thần Võ Tôn Giả',
                email: 'thanvo@example.com',
                matKhau: 'password123',
                ngayThamGia: '2023-03-22',
                capDo: 'Nguyên Anh Kỳ',
                soTruyen: 5,
                diem: 2100,
                nguoiTheoDoi: 78
            }
        ];
        localStorage.setItem('tutien_nguoidungs', JSON.stringify(nguoiDungMau));
    }
}
// Gọi luôn hàm này để đảm bảo dữ liệu có sẵn
khoiTaoDuLieu();