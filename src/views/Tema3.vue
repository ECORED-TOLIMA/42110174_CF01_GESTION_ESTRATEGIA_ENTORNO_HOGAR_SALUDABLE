<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Enfoque territorial e intersectorial
    p Este enfoque reconoce que las condiciones de salud varían entre territorios y que sus determinantes exceden la capacidad de respuesta del sector salud. Por ello, las intervenciones deben adaptarse al contexto y coordinar recursos de diferentes sectores.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Principios
    .row
      .col-md-6.mb-4
        .tarjeta.color-primario.p-4.h-100
          h3 Participación y equidad
          p.mb-0 Las familias intervienen en las decisiones y las acciones priorizan a quienes enfrentan mayores barreras y riesgos.
      .col-md-6.mb-4
        .tarjeta.color-secundario.p-4.h-100
          h3 Integralidad y pertinencia
          p.mb-0 Las respuestas articulan dimensiones físicas, sociales y ambientales y respetan las particularidades culturales del territorio.
    p Otros principios centrales son la corresponsabilidad, la sostenibilidad, el enfoque diferencial y la coordinación intersectorial.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Actores del territorio
    p Participan las familias, líderes comunitarios, organizaciones sociales, instituciones de salud, educación, vivienda, ambiente, servicios públicos y autoridades locales. Cada actor aporta conocimientos, recursos y competencias para responder de manera integral.
    ul.lista-ul
      li
        i.fas.fa-angle-right
        | Las familias identifican necesidades, capacidades y compromisos.
      li
        i.fas.fa-angle-right
        | Los equipos de salud orientan la caracterización, educación y seguimiento.
      li
        i.fas.fa-angle-right
        | Los demás sectores gestionan condiciones estructurales del entorno.
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
