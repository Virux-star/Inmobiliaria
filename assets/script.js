// =============================
// ARREGLOS DE PROPIEDADES
// =============================

const propiedades_venta = [
  {
    nombre: "Casa moderna",
    src: "assets/img/casa_moderna.jpg",
    descripcion: "Hermosa casa moderna con jardín",
    ubicacion: "Las Condes",
    habitaciones: 3,
    costo: 250000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento céntrico",
    src: "assets/img/depto_centrico.webp",
    descripcion: "Ubicado en el centro de la ciudad",
    ubicacion: "Santiago Centro",
    habitaciones: 2,
    costo: 120000000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Casa familiar",
    src: "assets/img/casa_familiar.jpeg",
    descripcion: "Amplios espacios y patio trasero",
    ubicacion: "Maipú",
    habitaciones: 4,
    costo: 180000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Penthouse de lujo",
    src: "assets/img/Penthouse_de_lujo.jpg",
    descripcion: "Vista panorámica increíble",
    ubicacion: "Vitacura",
    habitaciones: 3,
    costo: 350000000,
    smoke: true,
    pets: true
  }
];

const propiedades_alquiler = [
  {
    nombre: "Depto pequeño",
    src: "assets/img/depto_pequeño.jpg",
    descripcion: "Ideal para estudiantes",
    ubicacion: "Ñuñoa",
    habitaciones: 1,
    costo: 450000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Casa amplia",
    src: "assets/img/casa_amplia.webp",
    descripcion: "Perfecta para familia grande",
    ubicacion: "La Florida",
    habitaciones: 5,
    costo: 800000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Loft moderno",
    src: "assets/img/loft.jpg",
    descripcion: "Estilo industrial",
    ubicacion: "Providencia",
    habitaciones: 2,
    costo: 600000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Depto ejecutivo",
    src: "assets/img/Depto ejecutivo.webp",
    descripcion: "Cercano al metro",
    ubicacion: "Estación Central",
    habitaciones: 2,
    costo: 500000,
    smoke: true,
    pets: false
  }
];


// =============================
// FUNCIÓN PARA RENDERIZAR
// =============================

function renderPropiedades(arreglo, contenedorId, limite = null) {
  const contenedor = document.getElementById(contenedorId);

  if (!contenedor) return;

  let propiedades = arreglo;

  // Si hay límite (para index)
  if (limite) {
    propiedades = arreglo.slice(0, limite);
  }

  let template = "";

  for (let propiedad of propiedades) {

    // Condicional fumar
    const smokeTexto = propiedad.smoke
      ? "🚬 Se permite fumar"
      : "🚭 No se permite fumar";

    // Condicional mascotas
    const petsTexto = propiedad.pets
      ? "🐶 Se permiten mascotas"
      : "🚫 No se permiten mascotas";

    template += `
      <div class="card">
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <h3>${propiedad.nombre}</h3>
        <p>${propiedad.descripcion}</p>
        <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
        <p><strong>Precio:</strong> $${propiedad.costo}</p>
        <p>${smokeTexto}</p>
        <p>${petsTexto}</p>
      </div>
    `;
  }

  contenedor.innerHTML = template;
}


// =============================
// DETECTAR EN QUÉ PÁGINA ESTOY
// =============================

document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname.toLowerCase();
  const filename = path.split("/").pop();

  // INDEX
  if (filename === "index.html" || filename === "" || path.endsWith("/")) {
    renderPropiedades(propiedades_venta, "venta-container", 3);
    renderPropiedades(propiedades_alquiler, "alquiler-container", 3);
  }

  // VENTA
  if (filename === "propiedades_venta.html") {
    renderPropiedades(propiedades_venta, "venta-container");
  }

  // ALQUILER
  if (filename === "propiedades_alquiler.html") {
    renderPropiedades(propiedades_alquiler, "alquiler-container");
  }

});