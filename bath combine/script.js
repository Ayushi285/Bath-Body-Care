const searchInput = document.getElementById('search-input');
const productGrid = document.querySelector('.product-grid');

searchInput.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const products = productGrid.querySelectorAll('.product');

  products.forEach(product => {
    const productInfo = product.querySelector('.product-info h3').textContent.toLowerCase();
    if (searchTerm === '') {
      product.style.display = 'block';
    } else if (productInfo.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
