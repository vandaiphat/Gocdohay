fetch("products.json")
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("categories");
    container.innerHTML = "";

    data.categories.forEach(category => {

      container.innerHTML += `
        <a class="category-card" href="products.html?id=${category.id}">

          <div class="left">

            <div class="icon">
              ${category.title.split(" ")[0]}
            </div>

            <div>

              <h3>${category.title.replace(category.title.split(" ")[0], "").trim()}</h3>

              <p>${category.description}</p>

            </div>

          </div>

          <div class="arrow">›</div>

        </a>
      `;

    });

  });