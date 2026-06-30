<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La estrategia de entorno hogar saludable integra saberes conceptuales, operativos y metodológicos que permiten comprender la salud de las familias desde su contexto cotidiano. A lo largo de los contenidos se analizaron los fundamentos de la estrategia, el marco conceptual y operativo, el enfoque territorial e intersectorial, los determinantes sociales, las intervenciones en el entorno hogar y la promoción de la salud como elementos articulados que orientan la planeación de acciones con las familias colombianas.
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El mapa conceptual titulado “Fundamentos y planeación de la estrategia entorno hogar saludable” organiza el tema central en seis ejes: fundamentos de la estrategia, marco conceptual y operativo, enfoque territorial e intersectorial, determinantes sociales, intervenciones en el entorno hogar, y promoción de la salud y plan de acción. Cada eje presenta sus subtemas clave y se conecta con el nodo central mediante un conector relacional que expresa la función que cumple dentro de la estrategia. El conjunto se orienta hacia el resultado de aprendizaje: reconocer y planear intervenciones con enfoque territorial en el entorno hogar colombiano.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
