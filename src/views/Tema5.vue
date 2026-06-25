<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Intervenciones en el entorno hogar
    p Las intervenciones convierten la información del territorio y de las familias en acciones concretas de promoción, prevención y gestión del riesgo. Su pertinencia depende de una planeación participativa y del seguimiento a los resultados.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Planeación territorial
    p La planeación territorial organiza decisiones a partir de las características demográficas, sociales, culturales, económicas y ambientales. Integra información disponible, capacidades institucionales, recursos comunitarios y prioridades concertadas.
    ol.lista-ol--cuadro
      li
        .lista-ol--cuadro__vineta
          span 1
        | Delimitar el territorio y reconocer sus actores.
      li
        .lista-ol--cuadro__vineta
          span 2
        | Analizar necesidades, riesgos, capacidades y recursos.
      li
        .lista-ol--cuadro__vineta
          span 3
        | Priorizar, programar y articular las acciones.
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Identificación de necesidades
    p Las necesidades se reconocen mediante caracterización, observación, diálogo con las familias, análisis de información y recorridos territoriales. Deben priorizarse según magnitud, gravedad, vulnerabilidad, viabilidad e impacto esperado.
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Intervenciones poblacionales y colectivas
    p Las intervenciones poblacionales buscan modificar condiciones que afectan a grupos amplios, mientras las colectivas se desarrollan con comunidades específicas para fortalecer capacidades y transformar prácticas. Ambas complementan el acompañamiento individual y familiar.
    .tarjeta.color-secundario.p-4.mb-4
      p.mb-0 Algunos ejemplos son campañas de agua segura, jornadas comunitarias, educación para el autocuidado, fortalecimiento de redes de apoyo y gestión intersectorial de condiciones ambientales.
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4 Procesos de salud pública
    p La estrategia se articula con promoción de la salud, prevención de la enfermedad, vigilancia, gestión del riesgo, participación social y gestión de la salud pública. Esta articulación evita acciones aisladas y facilita respuestas continuas y sostenibles.
</template>

<script>
export default {
  name: 'Tema5',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
