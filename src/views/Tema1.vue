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
        p.mb-4 De acuerdo con el Instituto Colombiano de Normas Técnicas y Certificación (Icontec, 2004), en la Guía Técnica Colombiana (GTC  100) para procedimientos de cadena de custodia de muestras, se define la cadena de custodia como el procedimiento que se da cuando una muestra está bajo posesión o control físico de alguien, de modo que se debe evitar la manipulación indebida o alteración de sus características desde la toma de la muestra hasta que se desecha (p.3).
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

    .titulo-edit.mb-5
      h3 Título de tercer n
    
    p.mb-5 Se deben diseñar los formatos que se requieran para la actividad de campo de recolección de muestras, pueden ser diseñados por muestra o para múltiples muestras, como se muestra a continuación:
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema1',
  components: { TabsA },
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
</style>
