<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Protocolos de laboratorio
    
    .d-flex.flex-wrap
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 480px")
      .col-lg-7.col-xl-8.ps-lg-4
        p.mb-4 Estandarizar los procesos que se realizan en el laboratorio es de vital importancia para tener exactitud, precisión y reproducibilidad en los resultados.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #E0F4FE")
          p.mb-0 Los resultados son confiables cuando van de la mano con manuales y formatos de los procedimientos, así como del control en la calidad del muestreo y estudios de los riesgos que se pueden presentar dentro del laboratorio.
    Separador

    .titulo-segundo.color-secundario
      h2#t_2_1 2.1 Manuales de procedimiento de laboratorio
    
    p.mb-5 Las muestras recolectadas en las actividades de supervisión de sistemas de tratamiento y saneamiento pueden tener como fin el control o la vigilancia de los procesos desarrollados. Es necesario que los laboratorios encargados de la recepción y posterior procesamiento de las muestras cumplan no solo a cabalidad los procedimientos establecidos, también se debe procurar la identificación de errores que se presentaron durante el alistamiento de materiales, recolección, conservación, almacenamiento o transporte de la muestra. 

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 480px")
      .col-lg-7.col-xl-8.ps-lg-4
        p.mb-4 Para ello, un punto de partida es la verificación de la muestra al momento de su entrega al laboratorio, en la que el recepcionista debe verificar inicialmente que el tiempo máximo de entrega definido para el tipo de muestra no se haya superado; posteriormente, se debe verificar la condición de la muestra y del sello. Una vez realizada, se procede con la comparación de la información de la etiqueta y sello, con la información registrada en los formatos de toma de muestra y cadena de custodia (Instituto de Hidrología Meteorología y Estudios Ambientales [Ideam], s.f.).

        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1(style="color: #FCC02D")  INSTRUCTIVO DE TOMA Y PRESERVACIÓN DE MUESTRAS
                  p.text-white Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (s.f.). Toma y preservación de muestras.
                .col-sm-auto
                  a.boton.color-primario(href="http://sgi.ideam.gov.co/documents/412030/35488871/M-S-LC-I004+INSTRUCTIVO+DE+TOMA+Y+PRESERVACI%C3%93N+DE+MUESTRAS+SEDIMENTOS+Y+AGUA+SUPERFICIAL+PARA+LA+RED+DE+MONITOREO+DE+CALIDAD+DEL+IDEAM+v3.pdf/477bbe4a-5825-49c8-9961-10805a3c2288?version=1.0" target="_blank")
                    span Ir a página
                    i.fas.fa-link
    p.mb-5 En caso de que se presente cualquier novedad durante la verificación, es necesario dejar el registro en el formato definido por el laboratorio para la actividad.

    .container-100.d-flex.flex-wrap.align-items-center.py-2(style="background-color: #F0FBFF")
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 88px")
      p.mb-0.ps-md-4.col-md Luego, se procede con la asignación del código de identificación para el ingreso al laboratorio y se registró en el formato de control. La recepción finaliza con el traslado de la muestra al área de almacenamiento mientras se asigna a un analista para que sea procesada. En este punto, es importante tener en cuenta que el almacenamiento en el laboratorio también debe cumplir con condiciones que garanticen la integridad de la muestra como control de temperatura, ingreso restringido, tiempo máximo de almacenamiento, entre otras. 
    Separador 

    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
