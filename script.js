const imagensGaleria = document.querySelectorAll(".imagens img");

imagensGaleria.forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span id="fechar">X</span>`;
    document.body.appendChild(modal);

    document.getElementById("fechar").addEventListener("click", () => {
      modal.remove();
    });
  });
});
