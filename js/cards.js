/*
class Libro {
  constructor(titulo, saga, rating, precio) {
    this.titulo = titulo;
    this.saga = saga;
    this.rating = rating;
    this.precio = precio;
  }
}
*/

let libros = [
  {
    "titulo": "El Camino de los Reyes",
    "saga": "El Archivo de las Tormentas",
    "portada": "assets/img/books/1.png",
    "rating": 5,
    "precio": 8499
},
{
    "titulo": "Palabras Radiantes",
    "saga": "El Archivo de las Tormentas",
    "portada": "assets/img/books/2.png",
    "rating": 4,
    "precio": 8499
},
{
    "titulo": "Juramentada",
    "saga": "El Archivo de las Tormentas",
    "portada": "assets/img/books/3.png",
    "rating": 5,
    "precio": 8499
},
{
    "titulo": "Ritmos de Guerra",
    "saga": "El Archivo de las Tormentas",
    "portada": "assets/img/books/4.png",
    "rating": 5,
    "precio": 8499
},
{
    "titulo": "Esquirlas del Amanecer",
    "saga": "El Archivo de las Tormentas",
    "portada": "assets/img/books/5.png",
    "rating": 4,
    "precio": 3649
},
{
    "titulo": "El Imperio Final",
    "saga": "Nacidos de la Bruma",
    "portada": "assets/img/books/6.png",
    "rating": 5,
    "precio": 6599
},
{
    "titulo": "El Pozo de la Ascencion",
    "saga": "Nacidos de la Bruma",
    "portada": "assets/img/books/7.png",
    "rating": 4,
    "precio": 6599
},
{
    "titulo": "El Heroe de las Eras",
    "saga": "Nacidos de la Bruma",
    "portada": "assets/img/books/8.png",
    "rating": 5,
    "precio": 6599
},
{
    "titulo": "Aleacion de Ley",
    "saga": "Nacidos de la Bruma",
    "portada": "assets/img/books/9.png",
    "rating": 3,
    "precio": 3649
},
{
    "titulo": "Sombras de Identidad",
    "saga": "Nacidos de la Bruma",
    "portada": "assets/img/books/10.png",
    "rating": 4,
    "precio": 4749
},
{
    "titulo": "Brazales de duelo",
    "saga": "Nacidos de la Bruma",
    "portada": "assets/img/books/11.png",
    "rating": 5,
    "precio": 4999
},
{
    "titulo": "EL Metal Perdido",
    "saga": "Nacidos de la Bruma",
    "portada": "assets/img/books/12.png",
    "rating": 5,
    "precio": 7999
},
{
    "titulo": "El Aliento de los Dioses",
    "saga": "El Aliento de los dioses",
    "portada": "assets/img/books/13.png",
    "rating": 4,
    "precio": 6599
},
{
    "titulo": "Elantris",
    "saga": "Elantris",
    "portada": "assets/img/books/14.png",
    "rating": 3,
    "precio": 5939
},
{
    "titulo": "Arena Blanca",
    "saga": "Arena Blanca",
    "portada": "assets/img/books/15.png",
    "rating": 2,
    "precio": 2999
},
{
    "titulo": "Arcanum Ilimitado",
    "saga": "Cosmere",
    "portada": "assets/img/books/16.png",
    "rating": 4,
    "precio": 6599
}
];

let i = 1;

armarHTML = async () => {

  /*
  const respons = await fetch("../json/json.json");
  const array = await respons.json();

  libros = array;
  */

  const contenedor = document.getElementById("contenedor");

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
        img.src =  libro.portada;
        //img.src = 'assets/img/books/'+i+'.png';
        //i++;

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