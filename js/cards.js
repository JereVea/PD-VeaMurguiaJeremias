class Libro {
  constructor(titulo, saga, rating, precio) {
    this.titulo = titulo;
    this.saga = saga;
    this.rating = rating;
    this.precio = precio;
  }
}

let libros = [];

armarHTML = async () => {
  
  const respons = await fetch("../json/json.json");
  const array = await respons.json();

  libros = array;
  
  const contenedor = document.getElementById("contenedor");
  let i = 0;

  libros.forEach((libro) => {

    const divcont = document.createElement("div");
    divcont.className = "col mb-5";

      const divcard = document.createElement("div");
      divcard.className = "card h-100";

        const divstock = document.createElement("div");
        divstock.className = "badge bg-dark text-white position-absolute";
        divstock.style = "top: 0.5rem; right: 0.5rem";
        divstock.innerText = "Sale";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = libro.portada;

        const cardbody = document.createElement("div");
        cardbody.className = "card-body p-4";

          const card = document.createElement("div");
          card.className = "text-center";

            const h5 = document.createElement("h5");
            h5.className = "fw-bolder";
            h5.innerText = libro.titulo;

            const rating = document.createElement("div");
            rating.className = "d-flex justify-content-center small text-warning mb-2";
            for(i = 0; i < 5; i++) {
              const estrella = document.createElement("div");
              i < libro.rating 
              ? (estrella.className = "bi-star-fill")
              : (estrella.className = "bi-star")
              rating.append(estrella);
            };

            card.append(h5, rating, '$ '+ libro.precio);

        cardbody.append(card);

        const cardfooter = document.createElement("div");
        cardfooter.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";

          const footer = document.createElement("div");
          footer.className = "text-center";

            const a = document.createElement("a");
            a.className = "btn btn-outline-dark mt-auto";
            a.href = "#";
            a.innerText = "Agregar al carrito";

          footer.append(a);
        cardfooter.append(footer);
      divcard.append(divstock, img, cardbody, cardfooter);
    divcont.append(divcard);
    contenedor.append(divcont);
  });
};

armarHTML();
