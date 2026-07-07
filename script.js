const products = [
    { name: "Nồi nấu cháo chậm Beer", link: "#" },
    { name: "Bếp Từ Đơn Engler EGL336", link: "#" },
    { name: "Máy Vắt Cam Sunery SR-CJ12", link: "#" }
];

function displayProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = ''; 

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-placeholder">📦</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <a href="${product.link}" class="btn-buy">Mua ngay (Shopee)</a>
            </div>
        `;
        grid.appendChild(card);
    });
}
displayProducts();
