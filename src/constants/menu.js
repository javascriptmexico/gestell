const data = [
  {
    id: "gogo",
    icon: "lni-cog",
    label: "Analisis exploratorio",
    to: "/app/gogo",
    subs: [
      {
        icon: "lni-layers",
        label: "Missings",
        to: "/app/gogo/start"
      },
      {
        icon: "lni-grid",
        label: "Outliers",
        to: "/app/gogo/rud"
      },
      {
        icon: "lni-signal",
        label: "Análisis de frecuencias",
        to: "/app/gogo/rut"
      }     
    ]
  },
  {
    id: "secondmenu",
    icon: "lni-check-mark-circle",
    label: "Análisis Estadístico / Descriptivo",
    to: "/app/second-menu",
    subs: [
      {
        icon: "lni-control-panel",
        label: "Media y diagrama de dispersión",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-layers",
        label: "Top 10 de Columnas con Mayor Correlación (con cada columna)",
        to: "/app/second-menu/seconduno"
      },
      {
        icon: "lni-database",
        label: "Análisis Estadístico/Descriptivo",
        to: "/app/second-menu/seconddos"
      },
      {
        icon: "lni-files",
        label: "Gráfico de Correlación entre dos variables",
        to: "/app/second-menu/secondtres"
      },
      {
        icon: "lni-dashboard",
        label: "Gráfico Paralelo de Correlación entre más de dos variables",
        to: "/app/second-menu/secondcuatro"
      },
      {
        icon: "lni-control-panel",
        label: "Gráfico Estrella",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-display-alt",
        label: "Gráfico Q-Q Comparación de Muestra Poblacional y Muestra Aleatoria",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-frame-expand",
        label: "Cantidad de Columnas perfiladas y utilizadas en el perfilamiento",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "third",
    icon: "lni-target",
    label: "Análisis de variables categóricas",
    to: "/app/third-menu",
    subs: [
      {
        icon: "lni-layers",
        label: "Reporte 1: Homologación",
        to: "/app/third-menu/third"
      },
      {
        icon: "lni-control-panel",
        label: "Reporte 2: Errores más Comunes",
        to: "/app/third-menu/thirduno"
      },
      {
        icon: "lni-files",
        label: "Reporte 3:  Mes con Mayor Índice de Errores",
        to: "/app/third-menu/thirddos"
      }
    ]
  },
  {
    id: "fourth",
    icon: "lni-cloudnetwork",
    label: "Mapeo de Metadatos",
    to: "/app/fourth-menu",
    subs: [
      {
        icon: "lni-layers",
        label: "Reporte 1: Mapeo de Metadatos",
        to: "/app/fourth-menu/fourth"
      }
    ]
  }
];
export default data;
