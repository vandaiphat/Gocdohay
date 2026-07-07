const products = [
    { name: "Nồi nấu cháo chậm Beer", category: "Đồ Gia Dụng", link: "#" },
    { name: "Bếp Từ Đơn Engler EGL336", category: "Đồ Gia Dụng", link: "#" },
    { name: "Máy Vắt Cam Sunery SR-CJ12", category: "Đồ Gia Dụng", link: "#" }
];

const categories = ["Tất Cả", "Đồ Gia Dụng", "Mẹ và Bé", "Điện Dân Dụng", "Thiết Bị Quay Chụp"];

function renderPage(filter = "Tất Cả") {
    const grid = document.getElementById('products-grid');
    const catContainer = document.getElementById('category-tags');
    
    // Tạo nút danh mục
    catContainer.innerHTML = categories.map(cat => 
        `<button class="cat-btn ${cat === filter ? 'active' : ''}" onclick="renderPage('${cat}')">${cat}</button>`
    ).join('');

    // Tạo danh sách sản phẩm
    const filtered = filter === "Tất Cả" ? products : products.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="img-box">📦</div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <a href="${p.link}" class="btn-buy">Mua ngay (Shopee)</a>
            </div>
        </div>
    `).join('');
}

renderPage();
