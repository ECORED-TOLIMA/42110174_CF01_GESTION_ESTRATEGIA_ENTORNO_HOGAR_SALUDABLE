<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 La estrategia de entorno hogar saludable orienta la promoción de la salud y la prevención de la enfermedad en el marco de la Atención Primaria en Salud (APS). Este enfoque reconoce el hogar como un escenario estratégico de intervención, en el cual convergen condiciones sociales, económicas, culturales y ambientales que inciden directamente en la situación de salud de las familias y comunidades.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Este componente formativo desarrolla los fundamentos conceptuales y operativos necesarios para comprender las dinámicas del entorno familiar, los determinantes sociales de la salud y los procesos de articulación intersectorial en el territorio. A partir de estos elementos, se orienta la implementación de acciones en salud pública con un enfoque integral, que responde a las necesidades identificadas en los contextos locales.
        .row.justify-content-center.align-items-center.tarjeta.bg1.p-4
          .col-lg-2.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/intro/img1.svg", style="width: 110px", alt="alt")
          .col-lg-10
            p.mb-0 En coherencia con los lineamientos del Ministerio de Salud y Protección Social (MSPS, 2012), la estrategia de entornos saludables se orienta al fortalecimiento de las capacidades de las familias y los territorios, mediante intervenciones que promueven prácticas saludables y favorecen entornos protectores. Estas acciones se desarrollan considerando las particularidades del contexto, lo que permite una respuesta pertinente frente a los factores que afectan la salud en el entorno hogar.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/intro/img2.png", alt="alt")
    p.mb-4 A lo largo de este proceso formativo, el aprendiz desarrolla capacidades para el análisis del territorio, la identificación de necesidades en salud y la formulación de planes de acción, en articulación con los procesos de la salud pública. De esta manera, se contribuye a la planeación de intervenciones pertinentes, basadas en evidencia y alineadas con las políticas públicas, favoreciendo un enfoque territorial, diferencial e intersectorial.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
