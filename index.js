const Coche = {
    marca: "",
    modelo: "",
    matricula: "",
  };
  
  const Casa = {
    codPostal: "",
    calle: " ",
    portal: "",
    piso: "",
  };
  
  const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
  };
  
  const Perro = {
    nombre: "",
    raza: "",
    color: "",
    edad: "",
    ladrar: function () {
      console.log("ladrar");
    },
    popo: function () {
      return Math.random() * 3;
    },
  };
  
  let marcaPortatil = Portatil.marca;
  
  let marcaPortatil2 = Portatil["marca"];
  
  let grupos = Concierto.grupos;
  
  let RGB = [Led.rojo, Led.verde, Led.azul];
  
  Portatil.modelo = "P345";
  
  Concierto.cartelera.push("Guns N' Roses");
  
  Concierto.fecha = new Date();
  
  Impresora.imprimiendo = {
    nombreArchivo: "",
    copias: "",
    numPaginas: "",
  };
  
  const Noticia = {
    titular: "",
    cuerpo: "",
  };
  
  const Persona = {
    nombre: "",
    apellidos: "",
    edad: "",
  };
  
  const Avion = {
    numPasajeros: "",
    despegar: function () {
      console.log("despegando");
    },
    volar: function () {
      console.log("llegando al destino");
    },
    aterrizar: function () {
      console.log("aterrizando");
    },
  };
  
  const Paquete = {
    contenido: [{}, {}],
  };
  
  const Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: "",
  };
  
  const codError = O_Error.codigo;
  
  const integrantes = Grupo.integrantes;
  
  const nivelesTinta = Impresora.tinta;
  
  const pixeles = Pantalla.pixeles;
  
  const especificaciones = Movil["especificaciones"];
  
  Grupo.numIntegrantes = 5;
  
  Pantalla.dimensiones = "1920x1080";
  
  let funcSwitch = function () {
    if (true) {
      return false;
    } else {
      return true;
    }
  };
  
  Led.encendido = funcSwitch();
  
  Movil.temperatura = "20º";
  