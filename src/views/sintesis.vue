<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La correcta recogida de muestras de agua para su posterior análisis en laboratorio es un proceso complejo con multitud de aspectos a tener en cuenta antes, durante y después de la recogida de esa porción de agua que nos proporcionará una determinada información. 
      br
      br
      |Es importante que la muestra de agua tomada sea homogénea y representativa, y que el proceso de recogida, transporte y conservación no modifique las propiedades a analizar. Esto es esencial para evitar resultados de análisis cuya fiabilidad pueda cuestionarse.
      br
      br
      |Existen diferentes tipos de muestreo, basados esencialmente en la forma en que se obtiene la porción de agua que se va a analizar.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
