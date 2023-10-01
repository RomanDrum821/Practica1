//
const express = require("express"); //Crear servidores HTTP - Apache, etc
const app = express();
const puerto = process.env.PORT || 3000;
//Habilitamos que el servidor acepte las solicitudes
app.use(express.json());

//Arreglo de objetos proyectos
let proyectos = [
  {
    ID: 101,
    NombreProyecto: "Sistema de Gestión de Ventas",
    Descripcion: "Desarrollo de un sistema de gestión de ventas en línea",
    FechaInicio: "2023-09-01",
    FechaFinalizacion: "2023-12-31",
  },
  {
    ID: 102,
    NombreProyecto: "Aplicación de Red Social",
    Descripcion: "Creación de una red social para compartir contenido",
    FechaInicio: "2023-08-15",
    FechaFinalizacion: "2024-02-29",
  },
  {
    ID: 103,
    NombreProyecto: "Plataforma de Aprendizaje en Línea",
    Descripcion: "Desarrollo de una plataforma educativa en línea",
    FechaInicio: "2023-09-10",
    FechaFinalizacion: "2023-12-15",
  },
  {
    ID: 104,
    NombreProyecto: "Sistema de Gestión de Inventarios",
    Descripcion: "Implementación de un sistema de gestión de inventarios",
    FechaInicio: "2023-07-20",
    FechaFinalizacion: "2023-11-30",
  },
  {
    ID: 105,
    NombreProyecto: "Aplicación de Reservas de Hoteles",
    Descripcion:
      "Desarrollo de una aplicación para reservar habitaciones de hotel",
    FechaInicio: "2023-08-05",
    FechaFinalizacion: "2024-01-15",
  },
  {
    ID: 106,
    NombreProyecto: "Plataforma de Comercio Electrónico",
    Descripcion: "Creación de una plataforma de comercio electrónico",
    FechaInicio: "2023-09-25",
    FechaFinalizacion: "2024-03-31",
  },
  {
    ID: 107,
    NombreProyecto: "Sistema de Gestión de Recursos Humanos",
    Descripcion: "Implementación de un sistema de gestión de recursos humanos",
    FechaInicio: "2023-07-15",
    FechaFinalizacion: "2023-12-31",
  },
  {
    ID: 108,
    NombreProyecto: "Aplicación de Control de Gastos",
    Descripcion:
      "Desarrollo de una aplicación para el control de gastos personales",
    FechaInicio: "2023-08-10",
    FechaFinalizacion: "2024-02-28",
  },
  {
    ID: 109,
    NombreProyecto: "Plataforma de Videoconferencia",
    Descripcion: "Creación de una plataforma de videoconferencia en línea",
    FechaInicio: "2023-09-05",
    FechaFinalizacion: "2024-04-30",
  },
  {
    ID: 110,
    NombreProyecto: "Sistema de Reservas de Vuelos",
    Descripcion: "Implementación de un sistema de reservas de vuelos",
    FechaInicio: "2023-07-01",
    FechaFinalizacion: "2023-12-15",
  },
];

//Arreglo de tareas
let tareas = [
  {
    ID: 1,
    IDProyecto: 101,
    NombreTarea: "Diseñar la interfaz de usuario",
    Descripcion: "Crear los diseños de las pantallas principales",
    FechaAsignacion: "2023-09-27",
    Estado: "En progreso",
  },
  {
    ID: 2,
    IDProyecto: 102,
    NombreTarea: "Desarrollar la función de inicio de sesión",
    Descripcion: "Crear la funcionalidad de inicio de sesión en la aplicación",
    FechaAsignacion: "2023-09-28",
    Estado: "Pendiente",
  },
  {
    ID: 3,
    IDProyecto: 101,
    NombreTarea: "Optimizar el rendimiento",
    Descripcion: "Mejorar el rendimiento de la aplicación",
    FechaAsignacion: "2023-09-29",
    Estado: "En progreso",
  },
  {
    ID: 4,
    IDProyecto: 103,
    NombreTarea: "Realizar pruebas de integración",
    Descripcion: "Ejecutar pruebas de integración en el sistema",
    FechaAsignacion: "2023-09-30",
    Estado: "Pendiente",
  },
  {
    ID: 5,
    IDProyecto: 102,
    NombreTarea: "Diseñar la base de datos",
    Descripcion: "Crear el esquema de la base de datos",
    FechaAsignacion: "2023-10-01",
    Estado: "Completado",
  },
  {
    ID: 6,
    IDProyecto: 103,
    NombreTarea: "Desarrollar la función de registro",
    Descripcion: "Crear la funcionalidad de registro de usuarios",
    FechaAsignacion: "2023-10-02",
    Estado: "Pendiente",
  },
  {
    ID: 7,
    IDProyecto: 101,
    NombreTarea: "Realizar pruebas de usabilidad",
    Descripcion: "Conducir pruebas de usabilidad con usuarios",
    FechaAsignacion: "2023-09-29",
    Estado: "Pendiente",
  },
  {
    ID: 8,
    IDProyecto: 102,
    NombreTarea: "Documentar el código",
    Descripcion: "Crear documentación técnica para el código fuente",
    FechaAsignacion: "2023-10-04",
    Estado: "En progreso",
  },
  {
    ID: 9,
    IDProyecto: 103,
    NombreTarea: "Configurar el servidor",
    Descripcion: "Configurar el servidor de la aplicación",
    FechaAsignacion: "2023-10-05",
    Estado: "Completado",
  },
  {
    ID: 10,
    IDProyecto: 110,
    NombreTarea: "Preparar presentación",
    Descripcion: "Preparar la presentación del proyecto para el cliente",
    FechaAsignacion: "2023-10-06",
    Estado: "Pendiente",
  },
];

//----------------------------------Proyectos-----------------------------------------------
//Obtener todos los proyectos-----------------------------------------------------------------
app.get("/socios/v1/proyectos", (req, res) => {
  //1. Verificarsi existen categorias
  if (proyectos) {
    res.status(200).json({
      estado: 1,
      mensaje: "Existen proyectos",
      proyectos: proyectos,
    });
  } else {
    res.status(404).json({
      estado: 0,
      mensaje: "No existen proyectos",
      proyectos: proyectos,
    });
  }
});
//-----------------------------------------------------------------
//Obtener proyecto por su id----------------------------------------------------------------
app.get("/socios/v1/proyectos/:ID", (req, res) => {
  const ID = req.params.ID;
  //Obtenemos el proyecto basado en el id
  const proyecto = proyectos.find((proyecto) => proyecto.ID == ID);

  if (proyecto) {
    res.status(200).json({
      estado: 1,
      mensaje: "Existe el proyecto",
      proyecto: proyecto,
    });
  } else {
    res.status(404).json({
      estado: 0,
      mensaje: "No se encontro el proyecto",
      proyecto: proyecto,
    });
  }
});
//-----------------------------------------------------------------
//Crear un proyecto-----------------------------------------------------------------
app.post("/socios/v1/proyectos", (req, res) => {
  //Crear un recurso - crear un proyecto
  //Requerimos
  //id = generar un numero aleatorio
  const { NombreProyecto, Descripcion, FechaInicio, FechaFinalizacion } =
    req.body;
  const ID = Math.round(Math.random() * 2000);
  //Comprobar que el cliente = usuario = programador si envie
  if (!NombreProyecto || !Descripcion || !FechaInicio || !FechaFinalizacion) {
    res.status(400).json({
      estado: 0,
      mensaje: "Bad request - Faltan parametros en la solicitud",
    });
  } else {
    const proyecto = {
      ID: ID,
      NombreProyecto: NombreProyecto,
      Descripcion: Descripcion,
      FechaInicio: FechaInicio,
      FechaFinalizacion: FechaFinalizacion,
    };
    const longitudInicial = proyectos.length;
    proyectos.push(proyecto);
    if (proyectos.length > longitudInicial) {
      //Todo ok de parte del cliente y servidor
      res.status(201).json({
        estado: 1,
        mensaje: "Proyecto creado",
        proyecto: proyecto,
      });
    } else {
      //Error del servidor
      res.status(500).json({
        estado: 0,
        mensaje: "El proyecto no se pudo crear",
      });
    }
  }
});
//-----------------------------------------------------------------
//Actualizar un proyecto-----------------------------------------------------------------
app.put("/socios/v1/proyectos/:ID", (req, res) => {
  //id viene ?= params
  const { ID } = req.params;
  const { NombreProyecto, Descripcion, FechaInicio, FechaFinalizacion } =
    req.body;
  if (!NombreProyecto || !Descripcion || !FechaInicio || !FechaFinalizacion) {
    res.status(400).json({
      estado: 0,
      mensaje: "Faltan parametros en la solicitud",
    });
  } else {
    const posActualizar = proyectos.findIndex((proyecto) => proyecto.ID == ID);
    if (posActualizar != -1) {
      //si encontro la categoria
      //Actualizar la categoria
      proyectos[posActualizar].NombreProyecto = NombreProyecto;
      proyectos[posActualizar].Descripcion = Descripcion;
      proyectos[posActualizar].FechaInicio = FechaInicio;
      proyectos[posActualizar].FechaFinalizacion = FechaFinalizacion;
      res.status(200).json({
        estado: 1,
        mensaje: "Proyecto actualizado correctamente",
        proyecto: proyectos[posActualizar],
      });
    } else {
      res.status(404).json({
        estado: 0,
        mensaje: "Proyecto no encontrado",
      });
    }
  }
});
//-----------------------------------------------------------------
//Eliminar un proyecto-----------------------------------------------------------------
app.delete("/socios/v1/proyectos/:ID", (req, res) => {
  //Eliminar un recurso del servidor - Eliminar un proyecto
  const { ID } = req.params;
  const indiceEliminar = proyectos.findIndex((proyecto) => proyecto.ID == ID);
  if (indiceEliminar != -1) {
    //Borrar el proyecto
    proyectos.splice(indiceEliminar, 1);
    res.status(201).json({
      estado: 1,
      mensaje: "Proyecto Eliminado",
    });
  } else {
    //Proyecto no encontrado
    res.status(404).json({
      estado: 0,
      mensaje: "Proyecto no encontrado",
    });
  }
});
//-----------------------------------------------------------------
//-----------------------------------------------------------------

//----------------------------------Tareas-----------------------------------------------
//Obtener todas las tareas-----------------------------------------------------------------
app.get("/socios/v1/tareas", (req, res) => {
  //1. Verificarsi existen categorias
  if (tareas) {
    res.status(200).json({
      estado: 1,
      mensaje: "Existen tareas",
      tareas: tareas,
    });
  } else {
    res.status(404).json({
      estado: 0,
      mensaje: "No existen tareas",
      tareas: tareas,
    });
  }
});
//-----------------------------------------------------------------
//Obtener tarea por su ID-----------------------------------------------------------------
app.get("/socios/v1/tareas/:ID", (req, res) => {
  const ID = req.params.ID;
  //Obtenemos la tarea basado en el id
  const tarea = tareas.find((tarea) => tarea.ID == ID);

  if (tarea) {
    res.status(200).json({
      estado: 1,
      mensaje: "Existe la tarea",
      tarea: tarea,
    });
  } else {
    res.status(404).json({
      estado: 0,
      mensaje: "No se encontro la tarea",
      tarea: tarea,
    });
  }
});
//-----------------------------------------------------------------
//Crear una nueva tarea-----------------------------------------------------------------
app.post("/socios/v1/tareas", (req, res) => {
  //Crear un recurso - crear una tarea
  //Requerimos
  //id = generar un numero aleatorio
  const { IDProyecto, NombreTarea, Descripcion, FechaAsignacion, Estado } =
    req.body;
  const ID = Math.round(Math.random() * 1000);
  //Comprobar que el cliente = usuario = programador si envie
  if (
    !IDProyecto ||
    !NombreTarea ||
    !Descripcion ||
    !FechaAsignacion ||
    !Estado
  ) {
    res.status(400).json({
      estado: 0,
      mensaje: "Bad request - Faltan parametros en la solicitud",
    });
  } else {
    const tarea = {
      ID: ID,
      IDProyecto: IDProyecto,
      NombreTarea: NombreTarea,
      Descripcion: Descripcion,
      FechaAsignacion: FechaAsignacion,
      Estado: Estado,
    };
    const longitudInicial = tareas.length;
    tareas.push(tarea);
    if (tareas.length > longitudInicial) {
      //Todo ok de parte del cliente y servidor
      res.status(201).json({
        estado: 1,
        mensaje: "Tarea creado",
        tarea: tarea,
      });
    } else {
      //Error del servidor
      res.status(500).json({
        estado: 0,
        mensaje: "La tarea no se pudo crear",
      });
    }
  }
});
//-----------------------------------------------------------------
//Actualizar una tarea-----------------------------------------------------------------
app.put("/socios/v1/tareas/:ID", (req, res) => {
  //id viene ?= params
  const { ID } = req.params;
  const { IDProyecto, NombreTarea, Descripcion, FechaAsignacion, Estado } =
    req.body;
  if (
    !IDProyecto ||
    !NombreTarea ||
    !Descripcion ||
    !FechaAsignacion ||
    !Estado
  ) {
    res.status(400).json({
      estado: 0,
      mensaje: "Faltan parametros en la solicitud",
    });
  } else {
    const posActualizar = tareas.findIndex((tarea) => tarea.ID == ID);
    if (posActualizar != -1) {
      //si encontro la categoria
      //Actualizar la categoria
      tareas[posActualizar].IDProyecto = IDProyecto;
      tareas[posActualizar].NombreTarea = NombreTarea;
      tareas[posActualizar].Descripcion = Descripcion;
      tareas[posActualizar].FechaAsignacion = FechaAsignacion;
      tareas[posActualizar].Estado = Estado;
      res.status(200).json({
        estado: 1,
        mensaje: "Tarea actualizada correctamente",
        tarea: tareas[posActualizar],
      });
    } else {
      res.status(404).json({
        estado: 0,
        mensaje: "Tarea no encontrada",
      });
    }
  }
});
//-----------------------------------------------------------------
//Eliminar una tarea por su id-----------------------------------------------------------------
app.delete("/socios/v1/tareas/:ID", (req, res) => {
  //Eliminar un recurso del servidor - Eliminar una tarea
  const { ID } = req.params;
  const indiceEliminar = tareas.findIndex((tarea) => tarea.ID == ID);
  if (indiceEliminar != -1) {
    //Borrar la tarea
    tareas.splice(indiceEliminar, 1);
    res.status(201).json({
      estado: 1,
      mensaje: "Tarea Eliminada",
    });
  } else {
    //Tarea no encontrado
    res.status(404).json({
      estado: 0,
      mensaje: "Tarea no encontrada",
    });
  }
});
//-----------------------------------------------------------------
//-----------------------------------------------------------------

//----------------------------------Tareas por proyecto--------------------------------------------
//Obtener todas las tareas de un proyecto----------------------------------------------------------
app.get("/socios/v1/proyectos/:IDProyecto/tareas", (req, res) => {
  const IDProyecto = req.params.IDProyecto;
  //Obtenemos la tarea basado en el id
  const proyecto = proyectos.find(
    (proyectos) => proyectos.IDProyecto == IDProyecto
  );
  const tarea = tareas.filter((tareas) => tareas.IDProyecto == IDProyecto);
  if (!proyecto) {
    res.status(404).json({
      estado: 0,
      mensaje: "No existe el proyecto",
      tareas: tarea,
    });
  } else {
    console.log(IDProyecto);
    if (tareas) {
      res.status(200).json({
        estado: 1,
        mensaje: "Existen Tareas",
        tareas: tarea,
      });
    } else {
      res.status(404).json({
        estado: 0,
        mensaje: "No existen proyectos",
        tareas: tarea,
      });
    }
  }
});
//Obtener una tarea de un proyecto-----------------------------------------------------------------
app.get("/socios/v1/proyectos/:IDProyecto/tareas/:ID", (req, res) => {
  const IDProyecto = req.params.IDProyecto;
  const IDTarea = req.params.ID;
  //Obtenemos la tarea basado en el id
  console.log(IDProyecto);
  const proyecto = proyectos.find((proyecto) => proyecto.ID == IDProyecto);
  if (!proyecto) {
    console.log(proyecto);
    res.status(404).json({
      estado: 0,
      mensaje: "No existe el proyecto",
      tareas: [],
    });
  } else {
    const tarea = tareas.find(
      (tareas) => (tareas.ID == IDTarea) & (tareas.IDProyecto == IDProyecto)
    );
    console.log(tarea);
    if (tarea) {
      res.status(200).json({
        estado: 1,
        mensaje: "Existen Tareas",
        tarea: tarea,
      });
    } else {
      res.status(404).json({
        estado: 0,
        mensaje: "No existen Tareas",
        tarea: tarea,
      });
    }
  }
});
//Obteneer todas las tareas de un proyecto por su estado-------------------------------------------
app.get("/socios/v1/proyectos/:IDProyecto/tarea", (req, res) => {
  const IDProyecto = req.params.IDProyecto;
  const Estado = req.query.Estado; // Usamos req.query para obtener el estado desde la Query String
  // Obtenemos el proyecto basado en el ID
  const proyecto = proyectos.find((proyecto) => proyecto.ID == IDProyecto);

  if (!proyecto) {
    res.status(404).json({
      estado: 0,
      mensaje: "No existe el proyecto",
      tareas: [],
    });
  } else {
    const tareasFiltradas = tareas.filter(
      (tareas) => tareas.IDProyecto == IDProyecto && tareas.Estado == Estado
    );
    if (tareasFiltradas.length > 0) {
      res.status(200).json({
        estado: 1,
        mensaje: "Existen Tareas",
        tareas: tareasFiltradas,
      });
    } else {
      res.status(404).json({
        estado: 0,
        mensaje: "No existen Tareas",
        tareas: [],
      });
    }
  }
});
//Mostrar las tareas de un proyecto paginadas -----------------------------------------------------
app.get("/socios/v1/proyectos/:IDProyecto/tareasPag", (req, res) => {
  const IDProyecto = req.params.IDProyecto;
  const pag = req.query.pagina; // Obtener el número de página
  const cant = req.query.cantidad; // Obtener la cantidad de registros por página

  // Calcula índice inicial y final para la paginación
  const inicio = (pag - 1) * cant;
  const fin = pag * cant;

  const tareasProy = tareas.filter((tarea) => tarea.IDProyecto == IDProyecto);

  if (tareasProy.length > 0) {
    const tareasPag = tareasProy.slice(inicio, fin);
    console.log(tareasPag);
    res.status(200).json({
      estado: 1,
      mensaje: "Tareas del proyecto paginadas",
      tareas: tareasPag,
    });
  } else {
    res.status(404).json({
      estado: 0,
      mensaje: "No se encontraron tareas",
    });
  }
});
//Mostrar tareas de un proyecto por fecha de inicio------------------------------------------------
app.get("/socios/v1/proyectos/fecha/:fechaInicio/tareasFecha", (req, res) => {
  const fechaInicio = req.params.fechaInicio;
  // Filtrar las tareas por fecha de inicio
  const proyecto = proyectos.find(
    (proyecto) => proyecto.FechaInicio == fechaInicio
  );
  if (!proyecto) {
    res.status(404).json({
      estado: 0,
      mensaje: "No existe un proyecto con esa fecha",
    });
  } else {
    const IDProyecto = proyecto.ID;
    const tareasProy = tareas.filter((tarea) => tarea.IDProyecto == IDProyecto);
    if (tareasProy.length > 0) {
      res.status(200).json({
        estado: 1,
        mensaje: "Se encontraron tareas",
        tareas: tareasProy,
      });
    } else {
      res.status(404).json({
        estado: 0,
        mensaje: "No se encontraron tareas",
      });
    }
  }
});
//---------------------------------------------------------------------------------------------------
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto: ", puerto);
});
