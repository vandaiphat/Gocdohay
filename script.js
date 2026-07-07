let allProducts = [];
let allCategories = [];

// Hàm tự động tải dữ liệu từ file products.json
async function loadData() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        
        allProducts = data.products || [];
        allCategories = data.categories || [];
        
        renderCategories();
        renderProducts(allProducts);
    } catch (error) {
        console.error("Lỗi không tải được dữ liệu sản phẩm:", error);
    }
}

// Hàm hiển thị các nút danh mục
function renderCategories() {
    const container = document.getElementById('category-tags');
    if (!container) return;
    
    container.innerHTML = '';
    allCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${cat.id === 'all' ? 'active' : ''}`;
        btn.innerText = cat.name;
        btn.onclick = () => filterCategory(cat.id, btn);
        container.appendChild(btn);
    });
}

// Hàm lọc sản phẩm theo danh mục khi click nút
function filterCategory(catId, clickedBtn) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    
    if (catId === 'all') {
        renderProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category === catId);
        renderProducts(filtered);
    }
}

// Hàm hiển thị danh sách sản phẩm lên màn hình
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.innerHTML = '<p style="text-align:center; width:100%; color:#888;">Không tìm thấy sản phẩm nào.</p>';
        return;
    }
    
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="product-img">
            <div class="product-info">
                <h4 class="product-name">${p.name}</h4>
                <div class="product-price">${p.price}</div>
                <a href="${p.link}" target="_blank" class="buy-btn">Mua ngay (Shopee)</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Xử lý sự kiện tìm kiếm sản phẩm bằng ô nhập chữ
document.getElementById('search-input')?.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    const filtered = allProducts.filter(p => p.name.toLowerCase().includes(keyword));
    renderProducts(filtered);
});

// Chạy ứng dụng khi trang web tải xong
window.onload = loadData;
