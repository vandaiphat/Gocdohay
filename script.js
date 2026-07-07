// Dữ liệu đầy đủ của bạn
const products = [
    { name: "Nồi nấu cháo chậm Beer", category: "Đồ Gia Dụng", link: "#", image: "" },
    { name: "Bếp Từ Đơn Engler EGL336", category: "Đồ Gia Dụng", link: "#", image: "" },
    { name: "Máy Vắt Cam Sunery SR-CJ12", category: "Đồ Gia Dụng", link: "#", image: "" }
];

const categories = ["Tất Cả", "Đồ Gia Dụng", "Mẹ và Bé", "Điện Dân Dụng", "Thiết Bị Quay Chụp"];

// Hàm hiển thị
function renderPage(filter = "Tất Cả") {
    const grid = document.getElementById('products-grid');
    const categoryTags = document.getElementById('category-tags');
    grid.innerHTML = '';

    // 1. Render danh mục
    categoryTags.innerHTML = categories.map(cat => 
        `<button class="cat-btn ${cat === filter ? 'active' : ''}" onclick="renderPage('${cat}')">${cat}</button>`
    ).join('');

    // 2. Render sản phẩm
    const filtered = filter === "Tất Cả" ? products : products.filter(p => p.category === filter);
    
    filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div class="img-box">📦</div>
            <div class="info">
                <h3>${p.name}</h3>
                <a href="${p.link}" class="btn">Mua ngay (Shopee)</a>
            </div>
        `;
        grid.appendChild(div);
    });
}

// Chạy khi tải trang
renderPage();
