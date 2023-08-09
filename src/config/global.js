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
            titulo: 'Formatos y registros de laboratorios',
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
        download: 'downloads/921200_CF03_DU.pdf',
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
      termino: 'Acidez',
      significado:
        'capacidad de un medio acuoso para reaccionar cuantitativamente con iones hidroxilos (Icontec, 2010).',
    },
    {
      termino: 'Agua potable o agua para consumo humano',
      significado:
        'es aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el presente decreto y demás normas que la reglamenten, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal (Decreto 1575, 2007, p.1).',
    },
    {
      termino: 'Aguas residuales',
      significado:
        'aguas que contienen residuos líquidos o materias sólidas evacuadas como desechos. (WMO, 2012). Las aguas residuales son cualquier tipo de agua cuya calidad está afectada negativamente por la influencia antropogénica. Las aguas residuales incluyen las aguas usadas, domésticas, urbanas y los residuos líquidos industriales o mineros eliminados, o las aguas que se mezclaron con las anteriores (aguas pluviales o naturales) (IDEAM, s.f.).',
    },
    {
      termino: 'Alcalinidad',
      significado:
        'capacidad de un medio acuoso para reaccionar cuantitativamente con iones hidrógeno (Icontec, 2010).',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas (Resolución 2115, 2007, p.1).',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia (Decreto 1575, 2007, p.1).',
    },
    {
      termino: 'Característica',
      significado:
        'término usado para identificar elementos, compuestos, sustancias y microorganismos presentes en el agua para consumo humano (Resolución 2115, 2007, p.1).',
    },
    {
      termino: 'Cuerpos o cursos de agua',
      significado:
        'corresponden a aquellos cauces o almacenamientos de agua como arroyos, quebradas, ríos, lagos, lagunas, pantanos, humedales y acuíferos que conforman el sistema hidrográfico de una cuenca geográfica. Son las aguas corrientes superficiales y subterráneas, lagos, lagunas, ciénagas, manantiales, humedales, embalses de formación natural o artificial, chucuas o madre vieja o antiguos cauces con flujos estacionales, esteros, bahías, lagunas costeras, golfos y las aguas marinas (IDEAM, s.f.).',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso de muestreo del sistema de suministro de agua para consumo humano, que cubre espacio, tiempo y frecuencia en los puntos concertados según norma (IDEAM, s.f.).',
    },
    {
      termino: 'Muestra',
      significado:
        'toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento, para el proceso de vigilancia de la Autoridad Sanitaria (INS, 2011, p.9).',
    },
    {
      termino: 'Muestreo',
      significado:
        'proceso de toma de muestras que son analizadas en laboratorios para obtener información sobre la calidad del agua del sitio concertado en que fueron tomadas (INS, 2011, p.9).',
    },
    {
      termino: 'Objetivos de calidad de los datos (OCD)',
      significado:
        'declaraciones sobre el nivel de incertidumbre que el encargado de la toma de decisiones está dispuesto a aceptar en los resultados obtenidos de datos ambientales (Icontec, 2004).',
    },
    {
      termino: 'Puntos de muestreo en red de distribución',
      significado:
        'son aquellos sitios concertados y materializados con dispositivos de toma, donde se realiza la recolección de la muestra de agua para la vigilancia y el control (Resolución 0811, 2008).',
    },
    {
      termino: 'Sustancia química peligrosa',
      significado:
        'cualquier químico que represente un peligro bajo uso normal o en una emergencia (Ministerio de Educación Nacional, 2015, p.11).',
    },
    {
      termino: 'Traza',
      significado:
        'es una cantidad mínima de una característica química encontrada en el agua analizada de la muestra o contramuestra tomada (INS, 2011, p.9).',
    },
  ],
  referencias: [
    {
      referencia:
        'American Public Health Association, American Water Works Association y Water Environment Federation. (2018). </em>Standard Methods For the Examination of Water and Wastewater. standardmethods.org.</em>',
      link: 'https://www.standardmethods.org/#',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2014). <em>Guía para el monitoreo de vertimientos de aguas superficiales y subterráneas.</em>',
      link:
        'http://www.corponor.gov.co/control_calidad/2014/Guia_monitoreo_IDEAM.pdf',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (s.f.). <em>Glosario - Atención y participación ciudadana.</em>',
      link:
        'http://www.ideam.gov.co/web/atencion-y-participacion-ciudadana/glosario',
    },
    {
      referencia:
        'Instituto de Investigaciones Marinas y Costeras [INVERNAR]. (2003). <em>Manual de técnicas analíticas para la determinación de parámetros fisicoquímicos y contaminantes marinos. Aguas sedimentos y organismos. Cargraphics- Impresión digital.</em>',
      link:
        'http://www.invemar.org.co/redcostera1/invemar/docs/7010manualTecnicasanaliticas..pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud [INS]. (2011). <em>Manual de instrucciones para la toma, preservación, transporte de muestras de agua para consumo humano para análisis de laboratorio.</em> ISBN 978-958-13-0147-8.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2004). NTC-ISO 5667-3-<em>Calidad del Agua. Muestreo. Parte 3: Directrices para la Preservación y Manejo de Muestras.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2015). NTC-ISO 6151 -<em>Calidad del Agua. Muestreo para análisis microbiológico.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (1995). NTC-ISO 5667-1 - <em>Calidad del Agua. Muestreo. Directrices para el diseño de programas de muestreo.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (1995). NTC-ISO 5667-2 - <em>Gestión ambiental. Calidad del agua. Muestreo. Técnicas generales de muestreo.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2004). GTC 100 - <em>Calidad del agua. Guía para procedimientos de cadena de custodia.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2004). GTC 109 - <em>Guía para la implementación de un programa de medición en campo, de la calidad del agua.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2010). NTC 3650-1. <em>Calidad del agua. Vocabulario. Parte 1.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2012). GTC 45 - <em>Calidad del agua. Guía para la identificación de los peligros y la valoración de riesgos en seguridad y salud ocupacional.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (1995). NTC-ISO 5667-14 - <em>Gestión ambiental. Calidad del agua. Muestreo. Guía para el control de la calidad en el muestreo y manejo ambiental del agua.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2015). NTC- ISO 45001. <em>Sistemas de gestión de la seguridad y salud en el trabajo.</em>',
      link: '',
    },
    {
      referencia:
        'Químicos LATU. (2020). Sistema Globalmente Armonizado. Centro Coordinador del Convenio de Basilea. <em>Centro Regional del Convenio de Estocolmo para América Latina y el Caribe.</em>',
      link: 'http://ghs-sga.com/',
    },
    {
      referencia:
        'Químicos LATU. (2020). Sistema Globalmente Armonizado de Clasificación y Etiquetado de productos Químicos. <em>Centro Coordinador del Convenio de Basilea. Centro Regional del Convenio de Estocolmo para América Latina y el Caribe.</em>',
      link:
        'http://ghs-sga.com/etiquetado-de-productos-quimicos-y-fds/etiquetas-y-pictogramas/',
    },
    {
      referencia:
        'Resolución 0811. <em>Ministerio de Protección Social [MPS] y Ministerio de Ambiente Vivienda y Desarrollo Territorial</em> [MAVDT]. Bogotá. Colombia. 18 de marzo 2020.',
      link:
        'https://normas.cra.gov.co/gestor/docs/resolucion_minproteccion_0811_2008.htm',
    },
    {
      referencia:
        'Sandoval, L. (2004). <em>Capítulo III Aseguramiento de la calidad, muestreo y análisis en sistema de aireación extendida.</em>',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/018834/MEMORIAS2004/CapituloIII/1TecnicasdeMuestreoLucianoSandoval2.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable de equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseñador web-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador Fullstack-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
