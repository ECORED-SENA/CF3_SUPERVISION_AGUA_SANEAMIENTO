<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Protocolos de laboratorio
    
    .d-flex.flex-wrap
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 480px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.col-xl-8.ps-lg-4(data-aos="fade-left")
        p.mb-4 Estandarizar los procesos que se realizan en el laboratorio es de vital importancia para tener exactitud, precisión y reproducibilidad en los resultados.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #E0F4FE")
          p.mb-0 Los resultados son confiables cuando van de la mano con manuales y formatos de los procedimientos, así como del control en la calidad del muestreo y estudios de los riesgos que se pueden presentar dentro del laboratorio.
    Separador

    .titulo-segundo.color-secundario
      h2#t_2_1 2.1 Manuales de procedimiento de laboratorio
    
    p.mb-5(data-aos="fade-right") Las muestras recolectadas en las actividades de supervisión de sistemas de tratamiento y saneamiento pueden tener como fin el control o la vigilancia de los procesos desarrollados. Es necesario que los laboratorios encargados de la recepción y posterior procesamiento de las muestras cumplan no solo a cabalidad los procedimientos establecidos, también se debe procurar la identificación de errores que se presentaron durante el alistamiento de materiales, recolección, conservación, almacenamiento o transporte de la muestra. 

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 480px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.col-xl-8.ps-lg-4(data-aos="fade-left")
        p.mb-4 Para ello, un punto de partida es la verificación de la muestra al momento de su entrega al laboratorio, en la que el recepcionista debe verificar inicialmente que el tiempo máximo de entrega definido para el tipo de muestra no se haya superado; posteriormente, se debe verificar la condición de la muestra y del sello. Una vez realizada, se procede con la comparación de la información de la etiqueta y sello, con la información registrada en los formatos de toma de muestra y cadena de custodia (Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM], s.f.).

        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1(style="color: #FCC02D")  Instructivo de toma y preservación de muestras
                  p.text-white Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (s.f.). Toma y preservación de muestras.
                .col-sm-auto
                  a.boton.color-primario(href="http://sgi.ideam.gov.co/documents/412030/35488871/M-S-LC-I004+INSTRUCTIVO+DE+TOMA+Y+PRESERVACI%C3%93N+DE+MUESTRAS+SEDIMENTOS+Y+AGUA+SUPERFICIAL+PARA+LA+RED+DE+MONITOREO+DE+CALIDAD+DEL+IDEAM+v3.pdf/477bbe4a-5825-49c8-9961-10805a3c2288?version=1.0" target="_blank")
                    span Ir a página
                    i.fas.fa-link
    p.mb-5(data-aos="fade-right") En caso de que se presente cualquier novedad durante la verificación, es necesario dejar el registro en el formato definido por el laboratorio para la actividad.

    .container-100.d-flex.flex-wrap.align-items-center.py-2(style="background-color: #F0FBFF")
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 88px" data-aos="fade-right")
      p.mb-0.ps-md-4.col-md(data-aos="fade-left") Luego, se procede con la asignación del código de identificación para el ingreso al laboratorio y se registró en el formato de control. La recepción finaliza con el traslado de la muestra al área de almacenamiento mientras se asigna a un analista para que sea procesada. En este punto, es importante tener en cuenta que el almacenamiento en el laboratorio también debe cumplir con condiciones que garanticen la integridad de la muestra como control de temperatura, ingreso restringido, tiempo máximo de almacenamiento, entre otras. 
    Separador 

    .titulo-segundo.color-secundario
      h2#t_2_2 2.2 Formatos y registros de laboratorios
    
    .img-texto-offset.mb-5
      img.mb-3.mb-lg-0.d-none.d-md-flex(src="@/assets/curso/temas/tema2/img-4.jpg" alt="Imagen decorativa")
      .container-offset.col-lg-10.mx-auto(data-aos="fade-up")
        p En términos generales, cada laboratorio debe formular los procedimientos y respectivos formatos que permitan establecer los lineamientos y registros necesarios para cada proceso desarrollado. Propendiendo así por una reducción en la desviación de los estándares y trazabilidad. 

    .titulo-edit.mb-5
      h3 Formatos
    
    .d-flex.flex-wrap.mb-5
      .col-lg-7.col-xl-8.pe-lg-5(data-aos="fade-right")
        p.mb-4 Los formatos son documentos que, mediante tablas o espacios debidamente delimitados, solicitan el diligenciamiento de información específica sobre una actividad determinada. Los formatos generalmente están asociados a un protocolo de laboratorio, porque son documentos necesarios para registrar la ejecución de las actividades descritas en los protocolos. Así, por ejemplo, existen formatos para evidenciar y consignar la información relacionada con el alistamiento del material, otros asociados a la toma de muestras especiales, al transporte y recepción de las muestras, como se ha expuesto en temas anteriores.  
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #F7F8FB")
          p.mb-0 Es recomendable que los formatos, a su vez, puedan tener asociados unas guías o instructivos para aclarar su diligenciamiento.
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 480px" data-aos="fade-left" alt="Imagen decorativa")

    .container-100.d-flex.flex-wrap.align-items-center.py-2(style="background-color: #F0FBFF")
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema2/img-6.svg" style="max-width: 88px")
      p.mb-0.ps-md-4.col-md.fw-bold Un ejemplo de la información que debe registrarse es la requerida para las muestras de agua de consumo humano durante el procedimiento de entrada y registro al laboratorio (INS, 2011, p. 55), que se muestra a continuación:
    .container-100.d-flex.flex-wrap.py-5(style="background: linear-gradient(0deg, transparent 0%, #F6F6F6 100%);")
      .d-flex.flex-wrap.mb-5
        ol.col-lg-7.lista-ol--cuadro.lista-ol--separador.pe-lg-4.order-2.order-lg-1
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Número de código de la muestra.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Nombre de la persona prestadora, para el caso de los laboratorios de vigilancia o los laboratorios particulares que atienden varios clientes.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Nombre del (o los) tomadores de muestras.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Número del método de muestreo.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Localización de almacenamiento de la muestra.
        img.col-lg-5.mb-4.mb-lg-auto.order-1.order-lg-2(src='@/assets/curso/temas/tema2/img-7.png' data-aos="fade-left" alt="Imagen decorativa")

      .tarjeta.color-acento-contenido.p-3.col-lg-10.mx-auto.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img-24.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.text-white.mb-1(style="color: #FCC02D")  Manual toma de muestras de agua
                p.text-white Después de ingresar, en la búsqueda, ubicar “Manual toma de muestras de agua”. Al abrir este documento se obtiene el <b>“Manual de instrucciones para la toma, preservación, transporte de muestras de agua para consumo humano para análisis de laboratorio”</b>. ISBN 978-958-13-0147-8.
              .col-sm-auto
                a.boton.color-primario(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf" target="_blank")
                  span Ir a página
                  i.fas.fa-link

      .w-100.titulo-edit
        h3 Registros
    
    .col-lg-10.mx-auto.bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(style="background-color: #F6F6F6")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/tema2/img-13.svg" style="max-width: 252px" alt="Imagen decorativa")
        .col-lg-8
          .bloque-texto-a__texto.p-4(data-aos="fade-left")
            p Una vez diligenciados los formatos, se convierten en los registros de las actividades de muestreo, documentos que son muy importantes, ya que permitirán la trazabilidad de cualquier hecho asociado al muestreo y al análisis final de los resultados. Los registros son parte fundamental de la cadena de custodia de las muestras, son los documentos donde reposará toda la información asociada al muestreo y se convierten en una herramienta importante para la toma de decisiones basadas en hechos.

    Separador 

    .titulo-segundo.color-secundario
      h2#t_2_3 2.3 Control de la calidad en el muestreo
    
    p.mb-5(data-aos="fade-right") Como se ha mencionado, las actividades en las diferentes etapas de muestreo son susceptibles de presentar errores por diferentes motivos, entre las fuentes identificadas en la Norma Técnica Colombiana NTC-ISO 5667-14, se incluyen (Icontec, 1999):

    .d-flex.flex-wrap.mb-5
      img.col-xl-5.mb-4.mb-xl-auto(src='@/assets/curso/temas/tema2/img-24.png' data-aos="fade-right" alt="Imagen decorativa")
      TabsA.col-xl-7.ps-xl-4.color-acento-contenido.mb-5.tabs-edit(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Contaminación")
          p Causada por recipientes, equipos, manipulación o contaminación cruzada por inapropiado almacenamiento y transporte.
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Inestabilidad de <br class='d-none d-xl-flex d-xxl-none'> la muestra")
          p Debido a la inestabilidad propia del analito, recipientes y contenedores empleados, preservantes o condiciones de almacenamiento y transporte.
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Muestreo incorrecto")
          p Asociado a desviaciones del procedimiento, o el procedimiento aplicado en sí. Como muestreo en cuerpos de agua no homogeneizados.

    .tarjeta.color-acento-contenido.p-3.col-lg-10.mx-auto.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D")  Norma NTC 5667-14 
              p.text-white Para ampliar la información acerca del control de la calidad en el muestreo y el manejo ambiental del agua, lo invitamos a consultar ICONTEC (1999), NTC 5667-14 que se encuentra en la Biblioteca digital del SENA, en la base de datos de la ICONTEC.
                br
                br
                |Debe ingresar a Biblioteca SENA, ir a ICONTEC, buscar norma NTC 5667-14 y escoger NTC-ISO 5667-14:1999
            .col-sm-auto
              a.boton.color-primario(href="http://biblioteca.SENA.edu.co/paginas/bases.html" target="_blank")
                span Ir a página
                i.fas.fa-link
    
    .w-100.titulo-edit.mb-5
      h3 Técnicas de control

    p.mb-5(data-aos="fade-right") A continuación, se relacionan las técnicas indicadas por la NTC-ISO 5667-14:

    .container-100.d-flex.flex-wrap.py-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(232,243,253,1) 50%, rgba(255,255,255,1) 100%);")
      .d-flex.flex-wrap
        img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-9.svg" data-aos="fade-right" alt="Imagen decorativa")
        LineaTiempoD.col-lg-7.ps-lg-4.color-acento-contenido(data-aos="fade-left")
          .p-4(numero="1" titulo="Muestras de calidad repetidas")
            p.mb-4 Se utiliza para cubrir una gran variedad de enfoques de calidad que buscan el error aleatorio asociado a diferentes niveles del proceso de muestreo. Estas incluyen el análisis de las siguientes varianzas:
            .list-number
              span(style="background-color: #3076B6") 01
              p Varianza analítica
            .list-number
              span(style="background-color: #3076B6") 02
              p Varianza analítica + varianza en submuestreo/transporte
            .list-number
              span(style="background-color: #3076B6") 03
              p Varianza analítica + varianza en el muestreo total
          p(numero="2" titulo="Muestras en blanco de campo") Puede ser usada para identificar los errores relacionados con la contaminación de los recipientes de muestreo y el proceso de muestreo.
          p(numero="3" titulo="Limpieza de equipos y recipientes") Se emplea para identificar errores relacionados con la contaminación por limpieza incompleta de los recipientes de muestreo.
          p(numero="4" titulo="Recuperación de la filtración") Aplicable en el caso de que la muestra requiera de filtración en campo. Permite identificar la contaminación relacionada con los recipientes de muestreo y proceso en sí.
          p(numero="5" titulo="Muestras con adición conocida") Empleada para identificar errores relacionados con recipientes y procesos de muestreo. Particularmente, permite la identificación de errores por la inestabilidad de la muestra (incluida la pérdida del analito por volatilización, adsorción y factores biológicos).
    Seprador 

    .titulo-segundo.color-secundario
      h2#t_2_4 2.4 Riesgos en el laboratorio y pictogramas

    .img-texto-offset.mb-5
      img.mb-3.mb-lg-0.d-none.d-md-flex(src="@/assets/curso/temas/tema2/img-10.jpg" alt="Imagen decorativa")
      .container-offset.col-lg-10.mx-auto(data-aos="fade-up")
        p En este apartado se desarrollan temas de riesgos asociados a la salud y seguridad de las personas, clasificación de peligros a los cuales se encuentra expuesto el personal y conocerán los pictogramas o símbolos gráficos más utilizados.

    .w-100.titulo-edit.pt-md-4
      h3 Riesgos
    
    p.mb-5(data-aos="fade-right") Toda actividad humana implica un riesgo y, sin duda, el muestreo tiene asociados algunos riesgos para la salud y seguridad de las personas que lo realizan. Para poder entender e identificar estos riesgos es importante aclarar los siguientes términos (ISO, 2008):

    .d-flex.flex-wrap.mb-5
      img.mb-4.mb-lg-auto.col-lg-5(src="@/assets/curso/temas/tema2/img-11.png" style="max-width: 477px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4
        .container-card-folder
          span.container-number(data-aos="fade-right") 01
          .container-folder
            .sup-folder
            h3(data-aos="fade-right") Peligro
            .container-text-folder
              p.mb-0 Es una fuente con un potencial para causar lesiones y deterioro de la salud.
        .container-card-folder
          span.container-number(data-aos="fade-right") 02
          .container-folder
            .sup-folder
            h3(data-aos="fade-right") Riesgo
            .container-text-folder
              p.mb-0 Con frecuencia el riesgo se expresa en términos de una combinación de las consecuencias de un evento.
        .container-card-folder
          span.container-number(data-aos="fade-right") 03
          .container-folder
            .sup-folder
            h3(data-aos="fade-right") Riesgo para la seguridad y salud en el trabajo
            .container-text-folder
              p La probabilidad que ocurran eventos o exposiciones peligrosas relacionadas con el trabajo y la severidad de la lesión y deterioro de la salud.
                br
                br
                |El planteamiento básico en la evaluación de riesgos se describe con la fórmula: 
              .d-flex
                p.px-3.py-1.mb-0.mr-auto.fw-bold(style="background-color: #FFA031; border-radius: 8px;") Peligro x exposición = riesgo 
    p.mb-5(data-aos="fade-right") Es decir que, para conocer y controlar el riesgo, es fundamental identificar y estudiar los peligros asociados a una actividad.

    h4 Clasificación de los peligros

    p.mb-5(data-aos="fade-right") De acuerdo con la Guía Técnica Colombiana [GTC] 45, los riesgos se pueden clasificar en biológicos, físicos, químicos, psicosociales, biomecánicos, condiciones de seguridad y fenómenos naturales (Icontec, 2012, p. 19).

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/img-14.png' data-aos="fade-right" alt="Imagen decorativa")
      ol.col-lg-8.lista-ol--cuadro.lista-ol--separador.ps-lg-4
        li 
          .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
            img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
          | <b>Biológicos:</b> exposición a virus y bacterias.
        li 
          .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
            img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
          | <b>Químicos:</b> exposición a líquidos, gases y vapores.
        li 
          .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
            img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
          | <b>Condiciones de seguridad:</b> locativo (superficies de trabajo irregularidades, deslizantes o con diferencia del nivel), condiciones de orden y aseo y por último temas públicos (robos, atracos, asaltos).

    .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #D5F6FF" data-aos="fade-right")
      p.mb-0 A continuación se relacionan los peligros biológicos, peligros químicos y así como condiciones de seguridad importantes para prevenir accidentes y lesiones. Los peligros biológicos son agentes infecciosos y los químicos son sustancias tóxicas. Es necesario tomar medidas preventivas, con el fin evitar lesiones por manejo de sustancias químicas.

    .tarjeta.slydera-edit.p-4.mb-5(style="background-color: #F6F6F6;" data-aos="fade-left")
      SlyderA(tipo="b")
        .row.col-lg-10.mx-auto.align-items-center
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1
            h4 Peligros biológicos
            p.mb-0 Los peligros biológicos están básicamente asociados a la posible exposición con bacterias patógenas presentes en los cuerpos de agua muestreados o en las muestras tomadas. 
              br
              br
              |La exposición a este peligro puede aumentar durante el muestreo de aguas residuales. Por ello, durante estos muestreos es indispensable contar con máscaras faciales y guantes; así mismo, debe hacer desinfección de los recipientes y elementos que hayan entrado en contacto con estas aguas.
          img.mb-4.mb-md-0.col-md-4.order-1.order-md-2(src='@/assets/curso/temas/tema2/sla-1.svg' alt="Imagen decorativa")
        
        .row.col-lg-10.mx-auto.align-items-center
          img.col-md-4.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/sla-2.svg' alt="Imagen decorativa")
          .col-md-8.mb-4.mb-md-0
            h4 Peligros químicos
            p.mb-0 Los peligros químicos básicamente se originan por la utilización de sustancias químicas durante el alistamiento, toma de muestras, realización de ensayos <em>in situ</em>, transporte de muestras y reactivos para su análisis y preservación. El grado de peligrosidad de estas sustancias químicas dependerá de sus propiedades intrínsecas, es decir, de su capacidad para interferir en procesos biológicos normales, y de su capacidad para arder, explotar, corroer, entre otras.
        
        .row.col-lg-10.mx-auto.align-items-center
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1
            h4 Condiciones de seguridad
            p.mb-0 En las condiciones de seguridad el control principal para evitar lesiones a causa del uso de sustancias químicas es el conocimiento acerca de las propiedades de dichos reactivos. Para ello, las fichas de seguridad de los reactivos, así como el etiquetado, son fundamentales para el control de los riesgos químicos. Actualmente, se utiliza un sistema a nivel internacional para ayudar en ese control de los peligros químicos, denominado el sistema globalmente armonizado.
          img.col-md-4.mb-4.mb-md-0.order-1.order-md-2(src='@/assets/curso/temas/tema2/sla-3.svg' alt="Imagen decorativa")

    .w-100.titulo-edit.pt-md-4.mb-5
      h3 Pictogramas
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.lg-md-0(src='@/assets/curso/temas/tema2/img-15.svg' data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.ps-lg-5(data-aos="fade-left")
        p Un pictograma es una composición gráfica que sirve para comunicar una información específica. Consta de un símbolo y de otros elementos gráficos, tales como un borde, un dibujo o color de fondo (<em>Global Harmonized System</em> [GHS], 2020). Los pictogramas usualmente hacen parte de las etiquetas de las sustancias químicas.
        img(src='@/assets/curso/temas/tema2/img-16.svg' alt="Muestra los pictogramas de líquidos inflamables, corrosión/irritación cutánea y toxicidad")
    
    .cajon.color-acento-contenido.p-4.mb-5(style="background-color: #D5F6FF" data-aos="fade-right")
      p.mb-0 Con el objetivo de facilitar el intercambio de información en los laboratorios, se creó el Sistema Globalmente Armonizado [SGA], también conocido como GHS, por sus siglas en inglés (<em>Global Harmonized System</em>).
    
    SlyderB.mb-5(:datos="datosSlyder" data-aos="fade-left")
 
    .tarjeta.color-acento-contenido.p-3.col-lg-10.mx-auto(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D") Sistema Globalmente Armonizado de Clasificación y Etiquetado de productos químicos
              p.text-white Para ampliar la información del Sistema Globalmente Armonizado de Clasificación y Etiquetado de productos químicos puede ingresar a la siguiente página y explorar su contenido:
            .col-sm-auto
              a.boton.color-primario(href="http://ghs-sga.com/" target="_blank")
                span Ir a página
                i.fas.fa-link
    Separador
    
    .titulo-segundo.color-secundario
      h2#t_2_5 2.5 Métodos estándar para análisis de aguas en laboratorio
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/img-20.jpg' data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.ps-lg-5(data-aos="fade-left")
        p Una vez se realiza la recepción de las muestras en el laboratorio se procede con la asignación a un analista para su procesamiento. Esto implica someter la muestra objeto de estudio a una serie de procesos que buscan determinar las características de la fuente de origen. Para esto, es necesario cumplir con los métodos definidos y previamente validados para su análisis en el laboratorio.
        .cajon.color-acento-contenido.p-4.mb-5(style="background-color: #D5F6FF")
          p.mb-0 Dentro de los métodos estándar más reconocidos para el análisis muestreo y análisis de aguas se encuentran el <em>Standard Methods</em> y las Normas ISO.

    .w-100.titulo-edit.pt-md-4.mb-5
      h3 <em>Standard Methods</em>
    p.mb-5(data-aos="fade-right") Realizada la recepción de las muestras en el labortorio se procede con la asignación a un analista para su procesamiento.
    .img-texto-offset.mb-5
      img.mb-3.mb-lg-0.d-none.d-md-flex(src="@/assets/curso/temas/tema2/img-21.jpg" alt="Imagen decorativa")
      .container-offset.col-lg-10.mx-auto(data-aos="fade-up")
        p El <em>Standard Methods</em> es un referente que, de manera integral, compila todos los aspectos relacionados con las técnicas de análisis de agua incluyendo las aguas residuales.

    .d-flex.flex-wrap.mb-5.pt-md-5
      .col-lg-8.pe-lg-5.order-2.order-lg-1(data-aos="fade-right")
        p Este referente ha sido publicado desde 1905 y desde entonces se actualiza constantemente, hoy en día va en su edición número 23. 
        .cajon.color-acento-contenido.p-4.mb-5(style="background-color: #D5F6FF")
          p.mb-0 Esta es una publicación producida con recursos y conocimiento conjunto de las 3 asociaciones de salud pública y agua, reconocidas a nivel mundial: La Asociación Americana de la Salud Pública (APHA), Asociación Americana de trabajos del Agua (AWWA) y La Federación del ambiente agua (WEF). 
      img.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src='@/assets/curso/temas/tema2/img-22.jpg' data-aos="fade-left" alt="Imagen decorativa")

    .d-flex.flex-wrap.mb-5
      img.col-lg-3.mb-4.mb-lg-auto.mx-auto(src='@/assets/curso/temas/tema2/img-23.png' style="max-width: 261px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-9.ps-lg-5
        p.mb-4(data-aos="fade-right") El <em>Standard Methods</em> contiene más de 400 métodos para el análisis de agua, debidamente revisados y aprobados por expertos. Estos métodos están divididos en 10 apartados que van desde el apartado 1000 al 10000.
        .d-flex.flex-wrap 
          ol.col-md-6.lista-ol--cuadro.lista-ol--separador.pe-lg-4.order-2.order-lg-1
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>1000:</b> introducción.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>2000:</b> propiedades físicas y agregadas.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>3000:</b> metales.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>4000:</b> componentes inorgánicos no metálicos.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>5000:</b> constituyentes orgánicos agregados no metálicos.
          ol.col-md-6.lista-ol--cuadro.lista-ol--separador.pe-lg-4.order-2.order-lg-1
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>6000:</b> componentes orgánicos individuales.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>7000:</b> radioactividad.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>8000:</b> toxicidad.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>9000:</b> análisis microbiológico.
            li 
              .lista-ol--cuadro__vineta(style="background-color: transparent" data-aos="fade-right")
                img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
              | <b>10000:</b> análisis biológico.
    
    p.mb-5(data-aos="fade-right") En cada uno de los apartados citados anteriormente se encuentra información sobre las técnicas de muestreo, incluyendo la preservación y el almacenamiento de aguas para cada uno de los parámetros analizados dentro de estos 10 tipos de ensayo.

    .tarjeta.color-acento-contenido.p-3.col-lg-10.mx-auto.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D") <em>Standard Methods for the examination of water and wastewater</em>
              p.text-white Para consultar las normas internacionales por las cuales también son regidos los ensayos de laboratorio que se realizan en el país, puede consultar los <em>Standard Methods for the examination of water and wastewater</em>. Ingrese al siguiente link y explore la página. 
            .col-sm-auto
              a.boton.color-primario(href="https://www.standardmethods.org/" target="_blank")
                span Ir a página
                i.fas.fa-link

    .w-100.titulo-edit.pt-md-4.mb-5
      h3 Normas ISO
    
    p.mb-5(data-aos="fade-right") Las normas ISO son otro referente importante para el muestreo y análisis microbiológico y fisicoquímico del agua, elaborados por la organización internacional de normalización ISO con sede en Ginebra suiza y conformada por más de 160 países miembros.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vmKsvgJSMkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.color-acento-contenido.p-3.col-lg-10.mx-auto(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D") Norma NTC 5667 
              p.text-white Recuerde que estas normas y guías del Icontec pueden ser consultadas a través de las bases de datos disponibles en la Biblioteca SENA, en el siguiente enlace:
            .col-sm-auto
              a.boton.color-primario(href="http://biblioteca.SENA.edu.co/paginas/bases.html" target="_blank")
                span Ir a página
                i.fas.fa-link
</template>

<script>
import TabsA from '@/components/TabsA.vue'
import SlyderB from '@/components/SlyderB.vue'
export default {
  name: 'Tema2',
  components: { TabsA, SlyderB },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Sistema Globalmente Armonizado [SGA o GHS]',
        texto:
          'El Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos es una iniciativa para la protección del medio ambiente y la salud, a través de un sistema de comunicación de peligros armonizado y comprensible para usuarios, fabricantes, trabajadores y consumidores. <br><br>En la elaboración del SGA participaron expertos de distintos países, organizaciones internacionales y otras entidades interesadas, con experiencia en diferentes áreas desde la toxicología hasta la lucha contra incendios.',
        imagen: require('@/assets/curso/temas/tema2/img-17.svg'),
        altImg: 'Muestra Sistema Globalmente Armonizado [SGA o GHS]',
      },
      {
        titulo: 'SGA comprende los siguientes elementos',
        texto:
          '<b>a)</b>	Criterios armonizados para clasificar sustancias y mezclas con arreglo a sus peligros ambientales, físicos y para la salud. <br><br><b>b)</b>	Elementos armonizados de comunicación de peligros con requisitos sobre etiquetas y fichas de datos de seguridad.',
        imagen: require('@/assets/curso/temas/tema2/img-17.svg'),
        altImg: 'Muestra SGA comprende los siguientes elementos',
      },
      {
        titulo: 'Herramientas básicas del SGA',
        texto:
          'Para asegurar la comunicación armonizada de los peligros de las sustancias químicas, el SGA cuenta con 3 herramientas básicas: <br><br>● Etiquetas.<br>● Pictogramas.<br>● Fichas de seguridad.',
        imagen: require('@/assets/curso/temas/tema2/img-19.svg'),
        altImg: 'Muestra Herramientas básicas del SGA',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.container-card-folder
  display: flex
  margin-bottom: 2rem
  .container-number
    width: 105px
    min-width: 105px
    height: 105px
    display: flex
    justify-content: center
    align-items: center
    background-color: #0078BB
    color: white
    font-weight: bold
    font-size: 60px
    margin-top: 1.5rem
    position: relative
    border-top-left-radius: 8px
    border-bottom-left-radius: 8px
  .container-folder
    border-radius: 8px
    background: linear-gradient(0deg, #DEDEDE 0%, white 50%, #DEDEDE 100%)
    flex: 1 0 0%
    box-shadow: 0 0 5px 2px #00000010
    .sup-folder
      height: 1.5rem
    h3
      padding: .4rem 1.5rem
      background-color: #0078BB
      min-height: 40px
      display: flex
      align-items: center
      color: white
      margin-bottom: 0
    .container-text-folder
      padding: 1rem 1.5rem
      min-height: 89px
  @media (max-width: 768px)
    .container-number
      min-width: 60px
      width: 60px
      height: 60px
      font-size: 30px
</style>
