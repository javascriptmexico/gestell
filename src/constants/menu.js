const data = [
  {
    id: "gogo",
    icon: "lni-target",
    label: "Analisis exploratorio",
    to: "/app/gogo",
    subs: [
      {
        icon: "lni-layers",
        label: "Reporte 1 Missings",
        to: "/app/gogo/start"
      },
      {
        icon: "lni-grid",
        label: "Outliers",
        to: "/app/gogo/start"
      },
      {
        icon: "lni-signal",
        label: "Análisis de frecuencias",
        to: "/app/gogo/start"
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
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-database",
        label: "Análisis Estadístico/ Descriptivo",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-files",
        label: "Gráfico de Correlación entre dos variables",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-dashboard",
        label: "Gráfico Paralelo de Correlación entre más de dos variables",
        to: "/app/second-menu/second"
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
    id: "blankpage",
    icon: "lni-investment",
    label: "Análisis de variables categóricas",
    to: "/app/blank-page",
    subs: [
      {
        icon: "lni-layers",
        label: "Homologación",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-magnet",
        label: "Errores más Comunes",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-target-audience",
        label: "Top 10 de usuarios con mayor número de errores",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "blankpage",
    icon: "lni-layout",
    label: "Mapeo de Metadatos",
    to: "/app/blank-page",
    subs: [
      {
        icon: "lni-layers",
        label: "REPORTE 1",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "Comparativo Histórico del Perfilado",
    to: "/app/blank-page",
    subs: [
      {
        icon: "lni-layers",
        label: "REPORTE 1",
        to: "/app/second-menu/second"
      },
      {
        icon: "lni-layers",
        label: "REPORTE 2",
        to: "/app/second-menu/second"
      }
    ]
  }
];
export default data;
