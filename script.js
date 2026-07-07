// Dữ liệu sản phẩm (Bạn chỉ cần thêm vào đây là web tự cập nhật)
const products = [
    {
        id: 1,
        name: "Nồi nấu cháo chậm Beer",
        image: "https://via.placeholder.com/300", // Thay link ảnh thật của bạn vào đây
        link: "#",
        category: "Đồ Gia Dụng"
    },
    {
        id: 2,
        name: "Bếp Từ Đơn Engler EGL336",
        image: "https://via.placeholder.com/300",
        link: "#",
        category: "Đồ Gia Dụng"
    },
    {
        id: 3,
        name: "Máy Vắt Cam Sunery SR-CJ12",
        image: "https://via.placeholder.com/300",
        link: "#",
        category: "Đồ Gia Dụng"
    }
];

// Hàm hiển thị sản phẩm
function displayProducts(productList) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = ''; // Xóa sản phẩm cũ

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <a href="${product.link}" target="_blank" class="btn-buy">Mua ngay (Shopee)</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Chạy hàm hiển thị khi web tải xong
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
