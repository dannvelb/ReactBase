export class RouteInfoClass {
  title: string;
  pathName: string;
  breadcrumbs: Array<{ name: string; link?: string }>;
  constructor() {
    this.title = "Home";
    this.pathName = "";
    this.breadcrumbs = [];
  }
}
export const Routes: Array<RouteInfoClass> = [
  {
    ...new RouteInfoClass(),
    title: "Materias",
    pathName: "/dashboard/courses",
    breadcrumbs: [
      {
        name: "Planeacion",
      },
      {
        name: "Materias",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Administradores",
    pathName: "/dashboard/admin",
    breadcrumbs: [
      {
        name: "Usuarios",
      },
      {
        name: "administradores",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Coordinadores",
    pathName: "/dashboard/coord",
    breadcrumbs: [
      {
        name: "Usuarios",
      },
      {
        name: "coordinadores",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Docentes",
    pathName: "/dashboard/teacher",
    breadcrumbs: [
      {
        name: "Usuarios",
      },
      {
        name: "docentes",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Estudiantes",
    pathName: "/dashboard/student",
    breadcrumbs: [
      {
        name: "Usuarios",
      },
      {
        name: "estudiantes",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Detalle plan de estudio",
    pathName: "/dashboard/curriculum/",
    breadcrumbs: [
      {
        name: "Planeacion",
      },
      {
        name: "plan de estudios",
        link: "/dashboard/curriculum",
      },
      {
        name: "detalle",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Planes de estudio",
    pathName: "/dashboard/curriculum",
    breadcrumbs: [
      {
        name: "Planeacion",
      },
      {
        name: "planes de estudios",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Detalle seccion",
    pathName: "/dashboard/section/",
    breadcrumbs: [
      {
        name: "Planeacion",
      },
      {
        name: "secciones",
        link: "/dashboard/section",
      },
      {
        name: "detalle",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Secciones",
    pathName: "/dashboard/section",
    breadcrumbs: [
      {
        name: "Planeacion",
      },
      {
        name: "secciones",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Detalle subseccion",
    pathName: "/dashboard/subsection/",
    breadcrumbs: [
      {
        name: "Planeacion",
      },
      {
        link: "/dashboard/subsection",
        name: "subsecciones",
      },
      {
        name: "detalle",
      },
    ],
  },
  {
    ...new RouteInfoClass(),
    title: "Subsecciones",
    pathName: "/dashboard/subsection",
    breadcrumbs: [
      {
        name: "Planeacion",
      },
      {
        name: "subsecciones",
      },
    ],
  },
];
