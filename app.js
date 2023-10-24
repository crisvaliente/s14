/* var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
    interval: 2000 // Cambiar cada 2 segundos
  }); */

  const items = document.querySelector(".flex-container");

  for (let i = 1; i <= 7; i++) {
    const square = document.createElement("div");
    square.appendChild(document.createTextNode("m mauris, in accumslorem tur, spendisse justo ex, condimentum molestie lectus id, tempus ultrices est. Morbi aliquam metus at ex ullamcorper vehicula. Nullam nec ultricies massa, a dapibus augue. Nulla auctor dolor vitae lorem sollicitudin blandit"));
    square.classList.add("square");
    items.appendChild(square);
  }
  

