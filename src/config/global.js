export default {
  global: {
    componenteFormativo: 'Transporte de muestras',
    descripcionCurso:
      'Esta es la última fase de la recolección de muestras la cual también requiere supervisión y control constante. Su importancia radica en organizar las actividades de transporte, preservación, almacenamiento y recepción de las muestras de tal forma que estas no sean alteradas, modificadas o que generen un riesgo que se materialice en resultados no verídicos al procesarlas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
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
        titulo: 'Cadena de custodia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fase toma de muestras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fase de almacenamiento y transporte de muestras de agua',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fase de entrega de muestras al laboratorio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Guías técnicas para control de calidad en el muestreo de aguas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Protocolos de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Manuales de procedimiento de laboratorio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Formatos de registros de laboratorios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control de la calidad en el muestreo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Riesgos en laboratorio y pictogramas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Métodos estándar para análisis de aguas en laboratorio',
            hash: 't_2_5',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Cadena de Custodia',
      referencia:
        'Instituto Nacional de Salud. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano.',
      tipo: 'Manual',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      tema: 'Protocolos de laboratorio',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2004). NTC-ISO 5667-3-<em>Calidad del Agua. Muestreo. Parte 3: Directrices para la Preservación y Manejo de Muestras</em>',
      tipo: 'NTC 5667-3',
      link: 'http://biblioteca.SENA.edu.co/paginas/bases.html',
    },
    {
      tema: 'Control de calidad en el muestreo',
      referencia:
        'Sandoval, L. (2004). Capítulo III Aseguramiento de la calidad, muestreo y análisis en sistema de aireación extendida.',
      tipo: 'Capítulo de un Libro',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/018834/MEMORIAS2004/CapituloIII/1TecnicasdeMuestreoLucianoSandoval2.pdf',
    },
    {
      tema: 'Fase de muestras',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (1995). NTC-ISO 5667-14 - <em>Gestión ambiental. Calidad del agua. Muestreo. Guía para el control de la calidad en el muestreo y manejo ambiental del agua.</em>',
      tipo: 'NTC-ISO 5667-14',
      link: 'http://biblioteca.SENA.edu.co/paginas/bases.html',
    },
    {
      tema: 'Riesgos en laboratorio',
      referencia:
        'Sistema Globalmente Armonizado de Clasificación y Etiquetado de productos Químicos.',
      tipo: 'Página WEB',
      link: 'http://ghs-sga.com/',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
