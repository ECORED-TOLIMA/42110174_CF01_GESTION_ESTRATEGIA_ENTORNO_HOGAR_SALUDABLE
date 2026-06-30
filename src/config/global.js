export default {
  global: {
    Name: 'Fundamentos y planeación de la estrategia entorno hogar saludable',
    Description:
      'Este componente aborda los fundamentos y la planeación de la estrategia de entorno hogar saludable, incluyendo conceptos clave, análisis del territorio, determinantes sociales, enfoque territorial e intersectorial, y formulación de intervenciones. Permite al aprendiz comprender y estructurar acciones orientadas a la promoción de la salud en el entorno familiar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la estrategia',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Conceptos básicos', hash: 't_1_1' },
          {
            numero: '1.2',
            titulo: 'Objetivos de la estrategia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características de la estrategia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Población sujeto y escenarios',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco conceptual y operativo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Marco conceptual', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Marco operativo', hash: 't_2_2' },
          {
            numero: '2.3',
            titulo: 'Metodología de implementación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas de intervención',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Enfoque territorial e intersectorial',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Principios', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Actores del territorio', hash: 't_3_2' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Determinantes sociales en el entorno hogar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de determinantes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Condiciones del entorno hogar',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Factores de riesgo y protección',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Intervenciones en el entorno hogar',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Planeación territorial', hash: 't_5_1' },
          {
            numero: '5.2',
            titulo: 'Identificación de necesidades',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Intervenciones poblacionales y colectivas',
            hash: 't_5_3',
          },
          { numero: '5.4', titulo: 'Procesos de salud pública', hash: 't_5_4' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Promoción de la salud y plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Promoción de la salud', hash: 't_6_1' },
          {
            numero: '6.2',
            titulo: 'Herramientas de caracterización',
            hash: 't_6_2',
          },
          { numero: '6.3', titulo: 'Herramientas educativas', hash: 't_6_3' },
          {
            numero: '6.4',
            titulo: 'Formulación del plan de acción',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Atención primaria en salud (APS)',
      significado:
        'enfoque de salud pública orientado a la promoción de la salud, la prevención de la enfermedad y la atención integral de las personas, familias y comunidades.',
    },
    {
      termino: 'Articulación intersectorial',
      significado:
        'Coordinación de acciones entre diferentes sectores e instituciones para intervenir de manera integral los determinantes sociales de la salud.',
    },
    {
      termino: 'Caracterización',
      significado:
        'Proceso de recolección y análisis de información sobre las condiciones de vida de la población, orientado a identificar necesidades y riesgos en el entorno hogar.',
    },
    {
      termino: 'Cohesión social',
      significado:
        'Grado de integración, confianza y apoyo entre los integrantes de una familia o comunidad.',
    },
    {
      termino: 'Determinantes sociales de la salud',
      significado:
        'Condiciones sociales, económicas, ambientales y culturales que influyen en el estado de salud de las personas.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'Condiciones o situaciones que aumentan la probabilidad de que ocurra una enfermedad o un daño en la salud.',
    },
    {
      termino: 'Gestión del riesgo en salud',
      significado:
        'Proceso orientado a identificar, analizar y controlar las condiciones que afectan la salud de la población.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'Instrumento que organiza las actividades, recursos, responsables y tiempos para la intervención en salud.',
    },
    {
      termino: 'Planeación territorial',
      significado:
        'Proceso de organización de acciones en salud que considera las características sociales, económicas y ambientales del territorio.',
    },
    {
      termino: 'Población sujeto',
      significado:
        'Grupo de personas o familias hacia quienes se orientan las intervenciones en salud.',
    },
    {
      termino: 'Promoción de la salud',
      significado:
        'Proceso que permite a las personas mejorar el control sobre su salud y sus determinantes.',
    },
    {
      termino: 'Redes de apoyo',
      significado:
        'Conjunto de relaciones sociales e institucionales que brindan soporte a las personas y familias en el territorio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012). Lineamientos de la estrategia de entornos saludables. Bogotá, Colombia: MSPS.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Política de Atención Integral en Salud (PAIS). Bogotá, Colombia: MSPS.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200429%20de%202016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Modelo de Acción Integral Territorial (MAITE). Bogotá, Colombia: MSPS.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2008). Subsanar las desigualdades en una generación: alcanzar la equidad sanitaria actuando sobre los determinantes sociales de la salud. Ginebra: OMS.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2017). Salud en todas las políticas: marco para la acción. Washington, D.C.: OPS.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2012). Entornos saludables: una estrategia para la promoción de la salud. Washington, D.C.: OPS.',
      link: '',
    },
    {
      referencia:
        'Ley 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos ',
          cargo: 'Experta temática ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
