/* var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
    interval: 2000 // Cambiar cada 2 segundos
  }); */

  const items = document.querySelector(".flex-container");

for (let i = 1; i <= 8; i++) {
  const square = document.createElement("div");
  square.appendChild(document.createTextNode(i));
  square.classList.add("square");
  items.appendChild(square);
}

