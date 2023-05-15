<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cadena de custodia
    
    .container-100.d-flex.flex-wrap.align-items-center.py-2.mb-5(style="background-color: #F0FBFF")
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 88px")
      p.mb-0.ps-md-4.col-md A continuación, se relacionan los <b>principales procesos que se realizan en el proceso de análisis, transporte y recolección de muestras de agua</b> durante el desarrollo de la cadena de custodia para garantizar el control durante el ciclo de vida completo.

    .d-flex.flex-wrap.mb-5
      img.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema1/img-2.jpg" style="max-width: 400px")
      TabsA.ps-md-4.col-lg-8.color-acento-contenido.mb-5.tabs-edit
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Análisis de una muestra de agua")
          h4 Análisis de una muestra de agua
          p Realizar análisis de una muestra de agua no solo implica la toma y procesamiento, también se deben establecer parámetros definidos que permitan, no solo analizar la muestra, sino las condiciones en las cuales fue tomada y transportada.
          img(src="@/assets/curso/temas/tema1/img-3.png")
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Proceso de transporte")
          h4 Proceso de transporte
          p El proceso de transporte, preservación, almacenamiento y recepción de la muestra, pueden darse diferentes acciones que si no son reglamentadas alteran de manera definitiva el contenido de la misma; por ejemplo, si el recipiente es translúcido se deja en el vehículo sin preservación de frío al rayo del sol por un tiempo considerable, es probable que la muestra sufra cambios en su composición fisicoquímica y microbiológica  unos resultados que no reflejarán la condición real del recurso en el cual se tomó la muestra.
        .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Supervisión y control constante")
          h4 Supervisión y control constante
          p Por ello, en esta última fase de la recolección de muestras, se requiere supervisión y control constante, que debe quedar soportado bajo registros físicos de seguimiento que aseguren la integridad de la muestra.
          img(src="@/assets/curso/temas/tema1/img-4.png")

    .d-flex.flex-wrap.mb-5
      .col-lg-7.order-2.order-lg-1
        p.mb-4 De acuerdo con <b>el Instituto Colombiano de Normas Técnicas y Certificación (Icontec, 2004),</b> en la Guía Técnica Colombiana (GTC  100) para procedimientos de cadena de custodia de muestras, se define la cadena de custodia como el procedimiento que se da cuando una muestra está bajo posesión o control físico de alguien, de modo que se debe evitar la manipulación indebida o alteración de sus características desde la toma de la muestra hasta que se desecha (p.3).
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #E0F4FE")
          p Como se puede evidenciar en la figura 1, la cadena de custodia es un proceso de control y seguimiento que se inicia antes de la toma de la muestra, ya que debe ser la base para su programación desde el plan de muestreo.
      img.col-lg-5.mb-4.mb-lg-auto.order-1.order-lg-2.ps-lg-5.mx-auto(src="@/assets/curso/temas/tema1/img-5.png" style="max-width: 480px")
    
    .container-100.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(232,243,253,1) 50%, rgba(255,255,255,1) 100%);")
      .col-12.col-lg-10.mx-auto
        .titulo-sexto.color-secundario
          h5 Figura 1.
          p.mb-0.text-small Diagrama de elementos de un plan de muestreo.
        figure
          img.mb-3(src="@/assets/curso/temas/tema1/img-6.svg")
          figcaption(style="background-color: #F6F6F6") Fuente: Instituto nacional de salud [INS]. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio. 
    
    p.mb-5 De manera general y de acuerdo con el Instituto Nacional de Salud [INS] en su manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano, para análisis de laboratorio, se podría determinar que la cadena de custodia involucra la definición de criterios para las siguientes actividades:  

    .col-lg-10.mx-auto.d-flex.flex-wrap.mb-5
      img.col-lg-7.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-7.jpg" style="max-width: 610px")
      .col-lg-5.ps-lg-4
        .list-number
          span 01
          p La toma de la muestra
        .list-number
          span 02
          p El uso del recipiente para la misma
        .list-number
          span 03
          p El almacenamiento temporal
        .list-number
          span 04
          p El transporte al laboratorio
        .list-number
          span 05
          p Almacenamiento en el laboratorio
        .list-number
          span 06
          p El desarrollo de los análisis
        .list-number
          span 07
          p Desechar la muestra (INS,2011)

    .col-lg-10.mx-auto.bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(style="background-color: #F6F6F6")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/tema1/img-8.svg" style="max-width: 252px")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Luego, la importancia de la cadena de custodia es garantizar el soporte de los datos y conclusiones a los que se llegue con el estudio o ensayo de muestreo de forma adecuada en una situación legal o reglamentaria, busca mantener registros (Tabla 1) que certifiquen que los procedimientos fueron desarrollados según condiciones técnicas y que los resultados son verídicos y fiables (Icontec, 2004). 

    .col-12.col-lg-10.mx-auto
      .titulo-sexto.color-secundario
        h5 Figura 1.
        p.mb-0.text-small Diagrama de elementos de un plan de muestreo.
      figure
        img.mb-3(src="@/assets/curso/temas/tema1/img-9.svg")
        figcaption(style="background-color: #F6F6F6") Formato ilustrativo de cómo registrar la información requerida en el proceso de muestreo de acuerdo con la cadena de custodia (Icontec, 2004). 
    Separador

    .titulo-segundo.color-secundario
      h2#t_1_1 1.1 Fase de toma de muestras 
    
    .img-texto-offset.mb-5
      img.mb-3.mb-lg-0.d-none.d-md-flex(src="@/assets/curso/temas/tema1/img-10.jpg")
      .container-offset.col-lg-10.mx-auto
        p Para la toma y recolección de muestras en campo, Icontec (2004) en su Guía Técnica Colombiana (GTC) 109, Recomienda que se asigne a una sola persona la custodia de la muestra, con el fin de que sea manipulada por la menor cantidad posible de personas. Al encargado, se le reconocerá como el muestreador de campo, quien se responsabilizará de la toma hasta la transferencia adecuada al lugar de análisis (p.4).

    .titulo-edit.mb-5
      h3 Documentación de custodia en campo
    
    p.mb-5 Se deben diseñar los formatos que se requieran para la actividad de campo de recolección de muestras, pueden ser diseñados por muestra o para múltiples muestras, como se muestra a continuación:

    .container-100.mb-5.d-flex.flex-wrap(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(232,243,253,1) 50%, rgba(255,255,255,1) 100%);")
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-11.svg")
      LineaTiempoD.col-lg-7.ps-lg-4.color-acento-contenido
        p.text-small(numero="1" titulo="Rotulado") El rotulado de identificación de las muestras que especifique el punto exacto donde se tomó, junto con la fecha y la hora. 
        p.text-small(numero="2" titulo="Registro") El registro de campo, contiene campos, con la siguiente información: nombre e identificación de la muestra, ubicación del muestreo, fecha e intervalo de tiempo, firmas de quien realizó la actividad, preservación (cantidad y tipo), número de recipientes, número de réplicas (si aplica), notas de campo, análisis deseado, tipo de muestra.  
        p.text-small(numero="3" titulo="Sellado") El sellado de la muestra, se pueden emplear sellos de custodia de la muestra de papel adhesivo a prueba de agua, con el fin de que al momento de manipular la muestra se requiera romperlos, así se garantizará la no manipulación de la misma antes de su entrega a laboratorios.  
        p.text-small(numero="4" titulo="Entrega") Las muestras deben ser entregadas lo más pronto posible al laboratorio. El registro de campo o acta de toma de muestras debe mantenerse intacto durante todo el procedimiento.
    
    Separador

    .titulo-segundo.color-secundario
      h2#t_1_2 1.2 Fase de almacenamiento y transporte de muestras de agua
    
    .d-flex.flex-wrap.mb-5
      .col-lg-7.col-xl-8.order-2.order-lg-1
        p.mb-4 El proceso del almacenamiento y transporte es fundamental en el análisis de muestras, si no se realiza según las medidas técnicas reglamentarias, la muestra podría sufrir alteraciones y no reflejar resultados verídicos.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #E0F4FE")
          p.mb-0 De acuerdo con el Instituto Nacional de Salud [INS] (2011), en su manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorios, se determinan las siguientes consideraciones teniendo en cuenta el tipo de almacenamiento de las muestras:
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto.order-1.order-lg-2.ps-lg-5.mx-auto(src="@/assets/curso/temas/tema1/img-12.png" style="max-width: 480px")

    .titulo-edit.mb-5
      h3 Muestras no refrigeradas

    p.mb-5 Las muestras no refrigeradas se refieren a las que se conservan a temperatura ambiente, se recomienda tener en cuenta los siguientes aspectos para el transporte de las mismas.

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color: #0074A7")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              p.text-white Entregar lo más pronto posible las muestras con sus actas al laboratorio, recordando que para muestras de agua potable no deben transcurrir más de seis (6) horas entre el momento de la recolección y su llegada al laboratorio.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-13.png')})`}" style="background-position: bottom")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color: #EE7900")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-14.png')})`}" style="background-position: bottom")
            .tarjeta-slide__contenido.p-4
              p.text-white El acta de toma de muestra de datos no debe estar con los recipientes, sino en la parte exterior del embalaje para evitar que se deteriore.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color: #0074A7")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-15.png')})`}" style="background-position: bottom")
            .tarjeta-slide__contenido.p-4
              p.text-white Los recipientes que contengan las muestras se deben proteger y sellar de tal forma que no se deterioren, ni su contenido sufra ninguna pérdida durante el transporte. El empaque debe proteger los recipientes de una posible contaminación externa y no debe ser fuente de contaminación.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color: #EE7900")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-16.png')})`}" style="background-position: bottom")
            .tarjeta-slide__contenido.p-4
              p.text-white “Para el caso de muestras enviadas por correo, se deberá asegurar su conservación e integridad, hasta su llegada al laboratorio” (p.53).

    .titulo-edit.mb-5
      h3 Muestras refrigeradas
    
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.col-lg-10.mx-auto.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-17.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es uno de los casos más comunes cuando su almacenamiento se realiza a través de elementos que guarden el frío, para que no se vean afectada las condiciones de la muestra antes de procesarla; usualmente, se utilizan neveras de icopor que son destinadas exclusivamente para este almacenamiento y transporte.
 
    p.mb-5 A continuación, se describen algunas características o condiciones para tener en cuenta según el INS (2011):
    
    .container-100.d-flex.flex-wrap.align-items-center.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(232,243,253,1) 50%, rgba(255,255,255,1) 100%);")
      .col-lg-7.order-2.order-lg-1.pe-lg-4.mb-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Para muestras de agua potable no deben transcurrir más de 24 horas entre la recolección y la llegada al laboratorio. 
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Empacar los frascos o recipientes con las muestras en neveras de icopor portátiles refrigeradas con bolsas con hielo o ice packs.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Durante el transporte se recomienda refrigerar a 4° C y proteger la muestra de la luz (siempre tapada), contabilizar tiempos de traslado para eliminar la posibilidad de contaminar la muestra con hielo derretido.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | En el caso de análisis microbiológico es indispensable que la muestra se mantenga refrigerada hasta su arribo al laboratorio; ya que, tanto las temperaturas mayores a 6º C como la luz, provocan la multiplicación de los microorganismos e invalidan la muestra, dado que los resultados no reflejarán la realidad.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Se recomienda que todas las muestras de un mismo sitio de muestreo se empaquen en un mismo recipiente de almacenamiento (nevera).
      img.col-lg-5.order-1.order-lg-2.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-18.svg" style="max-width: 448px")
      img.col-lg-5.mb-5.order-3.mx-auto(src="@/assets/curso/temas/tema1/img-19.svg" style="max-width: 448px")
      .col-lg-7.order-4.order-4
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Transportar y almacenar los recipientes siempre en posición vertical, verificando que no pierdan el rótulo, ni se puedan caer.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Se aconseja ponerle rótulo a la nevera con la firma de quien hizo el muestreo con fecha y hora.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Se deben entregar al laboratorio, preferiblemente por algún encargado de la fase de muestreo.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Las muestras deberán ser radicadas y colocadas en el cuarto frío donde se podrán conservar para su posterior análisis.
          li 
            .lista-ol--cuadro__vineta(style="background-color: transparent")
              img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
            | Se recomienda que una vez se reciban estas muestras en el laboratorio, no supere las dos (2) horas de su llegada para inicio de análisis.
    
    p.mb-5 En casos exclusivos donde se requiera ceder o transferir la posesión de la muestra a otros, bien sea por desplazamientos largos u otras dificultades, Icontec (2004) especifica dentro de su GTC 100, que:

    .col-lg-10.mx-auto.container-text-img-2.mb-5
      img.offser-lg-2.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-20.png" style="max-width: 296px")
      p.col-lg.mb-0 Al transferir la posesión de las muestras, los individuos que ceden y los que reciben deben firmar y anotar la fecha y hora en el registro de la custodia; se deberá documentar, además, cualquier apertura o cierre de los recipientes y estos formarán parte del registro de cadena de custodia (p.6).

    .titulo-edit.mb-5
      h3 Muestras con preservantes 
    
    p.mb-5 Algunas muestras, dependiendo de su objetivo de análisis, van a requerir preservación con productos químicos; de acuerdo con Sandoval (2004) estos se adicionan con el objeto de detener o retardar las reacciones bioquímicas que se llevan a cabo en las muestras hasta el momento de efectuar su análisis. Entre los preservadores químicos más utilizados están <b>el ácido clorhídrico (HCl), el sulfúrico (H2SO4), nítrico (HNO3) y el tiosulfato de sodio (Na2S2O3)</b> (p.6).

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-21.png" style="max-width: 480px")
      .col-lg-7.col-xl-8.ps-lg-4
        p.mb-4 Es esencial que los preservantes utilizados no alteren la muestra de agua para los ensayos requeridos y de igual manera, se recomienda revisar la literatura y norma referente al uso de algunos compuestos químicos que podrían generar reacciones, como por ejemplo el uso de hidróxido de sodio (NaOH), ya que puede generar calentamiento local.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #E0F4FE")
          p.mb-0 De acuerdo con Icontec (2004), en su Norma técnica colombiana [NTC] 5667-3, indica que, para alguna determinación, en especial las de elementos traza, es esencial efectuar un ensayo en blanco, considerando la posibilidad de que los preservantes introduzcan una cantidad adicional de elementos que van a determinar (por ejemplo, que usar ácidos pueden introducir una cantidad de arsénico, plomo y mercurio).

    .titulo-edit.mb-5
      h3 Reactivos
    
    .container-100.d-flex.flex-wrap.align-items-center.py-2.mb-5(style="background-color: #F0FBFF")
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema1/img-22.svg" style="max-width: 88px")
      p.mb-0.ps-md-4.col-md En este apartado se enlistan algunos de los reactivos que se usan para preservar las muestras; sin embargo, es importante que cada una de esas sustancias también sean rotuladas con la vida media (fecha de caducidad), la cual no debe ser excedida y se debe marcar la muestra a la cual se le adicionó el preservante. Teniendo en cuenta Icontec en la norma técnica colombiana (NTC) 5667-3 del 2004, los reactivos serían:

    .row.align-items-stretch
      .col-lg-6.d-flex
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-23.svg')
          .tarjeta
            .p-4
              h2 Sólidos
              p Hidróxido de sodio NaOH, dicromato de potasio K2Cr2O7, tiosulfato de sodio (Na2S2O3), entre otros.

      .col-lg-6.d-flex
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-23.svg')
          .tarjeta
            .p-4
              h2 Soluciones
              p Solución de acetato de cinc (p =1,7 g/ml) C4H6O4Zn, ácido clorhídrico (p= 1.16 g/ml) HCL, Ácido sulfúrico (8 mol/l) H2SO4, entre otros (p.9).

    .tarjeta.color-acento-contenido.p-3.mb-5.col-lg-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D") Norma NTC 5667-3:2004
              p.text-white Para ampliar información acerca de directrices para la preservación y manejo de muestras, lo invitamos a consultar Icontec (2004), NTC 5667-3, que se encuentra en la Biblioteca digital del SENA, en la base de datos de Icontec. Ir a Icontec, buscar norma NTC 5667 y escoger NTC 5667-3:2004.
            .col-sm-auto
              a.boton.color-primario(href="http://biblioteca.SENA.edu.co/paginas/bases.html" target="_blank")
                span Ir a página
                i.fas.fa-link

    h4.mb-5 Aclaraciones pertinentes

    .col-lg-11.mx-auto.d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-25.png")
      ol.col-lg-6.ps-lg-4.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta(style="background-color: #ED8E1E")
            span 1
          | Lo primero que se debe aclarar, en este caso, es que al momento de la toma de muestras para agua que requieran el uso de preservantes, los recipientes no deben ser purgados si se han adicionado, ya que los preservantes y la toma debe ser directa en cada uno de los frascos. Aunque, también, se les puede adicionar estas sustancias después de la toma de agua, pero no es recomendable.
        li 
          .lista-ol--cuadro__vineta(style="background-color: #ED8E1E")
            span 2
          | En segunda medida debe reconocerse que existen algunos preservantes específicos dependiendo del parámetro a medir, esta información se puede ampliar con la normatividad aplicable o en sesiones con su instructor.

    .tarjeta.color-acento-contenido.p-3.mb-5.col-lg-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D")  Manual de instrucciones 
              p.text-white Se presenta un cuadro resumen en el capítulo 7° del Instituto Nacional de Salud [INS] (2011), en su Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorios, que lo invitamos a consultar.
            .col-sm-auto
              a.boton.color-primario(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf" target="_blank")
                span Ir a página
                i.fas.fa-link
    Separador

    .titulo-segundo.color-secundario
      h2#t_1_3 1.3 Fase de entrega de muestras al laboratorio
    
    p.mb-5 El último paso es la entrega de las muestras al laboratorio, debe tener en cuenta que usualmente los registros de cadena de custodia se mantienen en papel físico por las firmas; sin embargo, existen maneras de llevar este registro por medio de medios ofimáticos o tecnológicos con firmas digitales.

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-26.png" style="max-width: 480px")
      .col-lg-7.ps-lg-4
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #F7F8FB")
          p.mb-0 En esta última fase se puede realizar la entrega de las muestras de agua al laboratorio o bien procesar su ingreso para que las mismas personas que tomaron el muestreo realicen los análisis fisicoquímico y microbiológico, en ambos casos se debe garantizar la cadena de custodia realizando las siguientes acciones, de acuerdo con INS (2011):

    .container-100.d-flex.flex-wrap.py-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(232,243,253,1) 50%, rgba(255,255,255,1) 100%);")
      PasosA.col-xl-10.mx-auto.color-acento-botones.mb-5.pasos-edit(tipo="n")
        .d-flex.flex-wrap
          img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/pasos-1.svg" style="max-width: 57px")
          p.col-md.ps-md-4.mb-0 Las muestras deben registrarse en cuanto lleguen al laboratorio. El procedimiento de entrada y registro de la muestra es importante para los propósitos de la cadena de custodia. La siguiente información debe requerirse: número de código de la muestra, nombre de la persona que recibe, nombre de los tomadores de la muestra, número del método de muestreo y localización de almacenamiento.
        .d-flex.flex-wrap
          p.order-2.order-md-1.col-md.pe-md-4.mb-0 Se debe inspeccionar el etiquetado y rotulado, y compararlo con el registro de campo, si es conforme (si concuerdan y es acorde con los procedimientos técnicos) el que recibe firmará la recepción incluyendo fecha y hora.
          img.ms-auto.mb-4.mb-md-auto.order-1.order-md-2(src="@/assets/curso/temas/tema1/pasos-2.svg" style="max-width: 86px")
        .d-flex.flex-wrap
          img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/pasos-3.svg" style="max-width: 80px")
          p.col-md.ps-md-4.mb-0 Cuando exista no conformidad, el que recolectó la muestra deberá anotar las observaciones, las inconformidades encontradas en la parte de atrás del registro, con fecha y hora.
        .d-flex.flex-wrap
          p.order-2.order-md-1.col-md.pe-md-4.mb-0 Para los dos casos mencionados se debe registrar la llegada en los registros de laboratorio y se guardan las muestras en el cuarto frío, se define si se procesan o no las no conformes, pero, una vez se inicie el análisis de laboratorio, la cadena de custodia para el cuidado y vigilancia del analista.
          img.ms-auto.mb-4.mb-md-auto.order-1.order-md-2(src="@/assets/curso/temas/tema1/pasos-4.svg" style="max-width: 61px")
        .d-flex.flex-wrap
          img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/pasos-5.svg" style="max-width: 84px")
          p.col-md.ps-md-4.mb-0 Es importante tener claro que el tiempo aconsejado como máximo para transporte y entrega a laboratorio, es de seis (6) horas, si no se puede cumplir se debe realizar acciones de preservación para asegurar su entrega.
    Separador 

    .titulo-segundo.color-secundario
      h2#t_1_4 1.4 Guías técnicas para control de calidad en el muestreo de aguas
    
    p.mb-5 En las guías de control de calidad permite la técnica de selección de la muestra y validar los diferentes métodos o instrumentos de monitoreo para reducir errores; a continuación, relacionamos recomendaciones para su ejercicio.

    .tarjeta.slydera-edit.p-4.mb-5(style="background-color: #F6F6F6;")
      SlyderA(tipo="b")
        .row.col-lg-10.mx-auto.align-items-center
          img.col-md-4(src='@/assets/curso/temas/tema1/sla-1.svg')
          .col-md-8.mb-4.mb-md-0
            p.mb-0 Toda actividad de toma y análisis de muestras implica una responsabilidad sobre garantizar que los resultados que arroje sí sean evidencia sobre el estado del recurso o vertimiento analizado.
        .row.col-lg-10.mx-auto.align-items-center
          .col-md-8.mb-4.mb-md-0
            p.mb-0 Dentro del aseguramiento de la calidad de esos resultados, se encuentra la oportunidad de réplica, esto indica que, si otra organización toma otra muestra en el mismo sitio de muestreo, bajo los mismos parámetros y condiciones de la inicial, los resultados no deben presentar variaciones estadísticamente significativas.
          img.col-md-4(src='@/assets/curso/temas/tema1/sla-2.svg')
        .row.col-lg-10.mx-auto.align-items-center
          img.col-md-4(src='@/assets/curso/temas/tema1/sla-3.svg')
          .col-md-8.mb-4.mb-md-0
            p.mb-0 Para garantizar que esto suceda, se crean las guías técnicas que brindan la información mínima para tener en cuenta en el desarrollo de cualquiera de las fases de la toma de muestras. Como su nombre lo indica es una guía, pero no implica que se deroguen o se encuentren en contravía de la normatividad nacional; por el contrario, siempre deben ser un complemento a la norma nacional vigente al momento de tomar las muestras.

    p.mb-5 Dentro de las guías técnicas, se pueden encontrar: 


    .d-flex.flex-wrap.mb-5
      img.col-lg-5.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-27.png')
      ol.col-lg-7.lista-ol--cuadro.lista-ol--separador.ps-lg-4
        li 
          .lista-ol--cuadro__vineta(style="background-color: transparent")
            img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
          | Guía técnica colombiana [GTC] 82 de Icontec, Guía de buenas prácticas para laboratorios que realizan muestreo y análisis de agua del 2002, la cual brinda criterios mínimos que todos los laboratorios deberían considerar al establecer sus prácticas.
        li 
          .lista-ol--cuadro__vineta(style="background-color: transparent")
            img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 20px")
          | Guía técnica colombiana [GTC] 109, Guía para la planificación de la calidad e implementación de un programa de medición en campo de la calidad del agua del 2004, la cual brinda orientaciones desde la definición de objetivos de calidad hasta la evaluación de la calidad de los datos.

    
    .tarjeta.color-acento-contenido.p-3.mb-5.col-lg-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D")  NTC GTC 100:2004 / GTC 109: 2004.
              p.text-white Para la consulta de estas guías puede dirigirse a la base de datos del Icontec, que se encuentre en la página de la Biblioteca SENA. Debe ingresar a Biblioteca SENA,  ir a Icontec, buscar norma GTC 100 y escoger NTC GTC 100:2004 / GTC 109: 2004.
            .col-sm-auto
              a.boton.color-primario(href="http://biblioteca.SENA.edu.co/paginas/bases.html" target="_blank")
                span Ir a página
                i.fas.fa-link
    
    h3.mb-4 Diagramas de resumen

    .img-texto-offset.mb-5
      img.mb-3.mb-lg-0.d-none.d-md-flex(src="@/assets/curso/temas/tema1/img-28.jpg")
      .container-offset.col-lg-10.mx-auto
        p Por último, lo invitamos a consultar y analizar los diagramas que presenta el Instituto de Hidrología, Meteorología y Estudios Ambientales [Ideam], en el documento “<b>Toma y preservación de muestras</b>”, en las páginas 17 a la 20, que encontrará en el material de apoyo de esta componente.


    .tarjeta.color-acento-contenido.p-3.col-lg-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1(style="color: #FCC02D")  Toma y preservación de muestras
              p.text-white Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (s.f.). Toma y preservación de muestras. Después de ingresar, en la búsqueda, ubicar el documento “Toma y preservación de muestras”, dirigirse a la página 17 a la 20 y analizar.
            .col-sm-auto
              a.boton.color-primario(href="http://sgi.ideam.gov.co/documents/412030/35488871/M-S-LC-I004+INSTRUCTIVO+DE+TOMA+Y+PRESERVACI%C3%93N+DE+MUESTRAS+SEDIMENTOS+Y+AGUA+SUPERFICIAL+PARA+LA+RED+DE+MONITOREO+DE+CALIDAD+DEL+IDEAM+v3.pdf/477bbe4a-5825-49c8-9961-10805a3c2288?version=1.0" target="_blank")
                span Ir a página
                i.fas.fa-link
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema1',
  components: { TabsA },
  data: () => ({
    indicadorTarjetaSlide: true,
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
.list-number
  background-color: #F6F6F6
  border-radius: 5px
  box-shadow: 0 1px 3px 1px #00000010
  display: flex
  align-items: center
  margin-bottom: 1rem
  width: 100%
  span
    height: 50px
    width: 50px
    display: flex
    justify-content: center
    align-items: center
    background-color: #12263F
    color: white
    border-radius: 5px
    font-weight: bold
    font-size: 24px
  p
    padding-left: .7rem
    margin-bottom: 0
.img-texto-offset
  position: relative
  .container-offset
    position: relative
    margin-top: -7rem
    background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%)
    padding: .8rem 2rem
    border-radius: 20px
  @media (max-width: 991px)
    .container-offset
      margin-top: 0
.linea-tiempo-d__item
  .linea-tiempo-d__item__number
    background-color: #E8E8E8
  .linea-tiempo-d__item__content
    background-color: #E8E8E8
.container-text-img-2
  display: flex
  flex-wrap: wrap
  img
    margin-right: -10rem
    position: relative
  p
    padding: 2rem
    background-color: #F6F6F6
    border-bottom-right-radius: 50px
    border-top-left-radius: 50px
    display: flex
    align-items: center
    padding-left: 11rem
    margin-top: 2rem
  @media (max-width: 991px)
    img
      margin-left: auto
      margin-right: auto
    p
      margin-top: 0
      padding-left: 2rem
.tarjeta-avatar-b
  .tarjeta
    box-shadow: 0 0 4px 3px #00000010
    background-color: #F6F6F6
.pasos-edit
  .pasos-a__item
    .pasos-a__numero
      &::after
        border-color: black !important
      .pasos-a__circle
        background-color: white
        border: 6px solid #FFA031
        .h2
          color: black
    .pasos-a__linea
      .pasos-a__linea__esquina
        .pasos-a__linea__esquina__linea
          border-radius: 0 !important
          border-color: black
      .hor-line
        border-color: black
.slydera-edit
  .slyder-a
    .slyder-a__tipo-b
      .hide
        opacity: 0 !important
      .slyder-a__btn--atrs
        background-color: #FFA031
        opacity: 1
      .slyder-a__bullets
        .slyder-a__bullets__item
          border: none
        .slyder-a__bullets__item--active
          background-color: #0098E8
      .slyder-a__btn--sigt
        background-color: #FFA031
        opacity: 1
</style>
