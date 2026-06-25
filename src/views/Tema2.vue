<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Marco conceptual y operativo
    p El marco conceptual explica los fundamentos que relacionan salud, territorio, familia y determinantes sociales. El marco operativo traduce esos fundamentos en procesos, responsabilidades y acciones concretas para intervenir el entorno hogar.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Marco conceptual
    p La salud se comprende como resultado de la interacción entre condiciones biológicas, sociales, económicas, culturales y ambientales. La Atención Primaria en Salud, la promoción de la salud, la participación social y la gestión del riesgo orientan una lectura integral de las necesidades familiares.
    .bloque-texto-b.color-secundario.p-4.mb-4
      .bloque-texto-b__texto
        i.fas.fa-quote-left
        p.mb-0 El hogar no se analiza de forma aislada: está conectado con las dinámicas comunitarias, los recursos institucionales y las condiciones del territorio.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Marco operativo
    p La operación de la estrategia organiza la caracterización, el análisis, la priorización, la planeación, la ejecución y el seguimiento. Cada fase requiere participación familiar, registro de información y coordinación con las rutas y servicios disponibles.
    ol.lista-ol--cuadro
      li
        .lista-ol--cuadro__vineta
          span 1
        | Reconocimiento y caracterización del territorio y los hogares.
      li
        .lista-ol--cuadro__vineta
          span 2
        | Análisis y priorización de necesidades y riesgos.
      li
        .lista-ol--cuadro__vineta
          span 3
        | Formulación, ejecución, seguimiento y ajuste de acciones.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Metodología de implementación
    p La metodología parte del reconocimiento del contexto, continúa con la concertación de acciones y culmina con el seguimiento de resultados. Debe ser flexible, participativa y ajustada a los recursos, capacidades y particularidades culturales de cada comunidad.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Herramientas de intervención
    p Las visitas domiciliarias, entrevistas, observación, fichas de caracterización, mapas del territorio, actividades educativas y planes familiares permiten recolectar información, orientar decisiones y acompañar cambios sostenibles en las prácticas de cuidado.
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
