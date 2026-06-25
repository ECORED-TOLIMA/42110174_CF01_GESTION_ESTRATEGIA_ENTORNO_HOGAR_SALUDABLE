<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la estrategia
    p El estudio de los fundamentos proporciona el lenguaje común para interpretar las situaciones de salud presentes en los hogares. Esta base orienta el análisis del territorio, los determinantes sociales y las intervenciones con las familias.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-4
          p.mb-0 La estrategia reconoce la interacción entre las condiciones de la vivienda, las dinámicas familiares y los hábitos cotidianos como factores que configuran entornos protectores o de riesgo.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Conceptos básicos
    p El hogar es un espacio social de convivencia; la vivienda es el entorno físico que debe garantizar habitabilidad; la familia constituye el núcleo de cuidado; y el entorno hogar saludable integra condiciones físicas, sociales y comportamentales que favorecen el bienestar.
    p El análisis debe adaptarse a las particularidades de zonas rurales, urbanas y ribereñas, y reconocer situaciones como manejo inadecuado de residuos, falta de ventilación, dificultades de acceso al agua segura, sobrecarga del cuidado y ausencia de redes de apoyo.
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Concepto
            th Elementos clave
            th Relación con la salud
        tbody
          tr
            td Hogar
            td Relaciones, prácticas y convivencia.
            td Influye en hábitos y prácticas de cuidado.
          tr
            td Vivienda
            td Infraestructura, servicios y saneamiento.
            td Determina la exposición a riesgos ambientales y sanitarios.
          tr
            td Familia
            td Roles, relaciones y apoyo.
            td Puede actuar como factor protector o de riesgo.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Objetivos de la estrategia
    p Los objetivos orientan acciones para analizar las condiciones del hogar, fortalecer capacidades familiares de autocuidado, reducir factores de riesgo, potenciar factores protectores y articular actores sociales e institucionales.
    ul.lista-ul
      li
        i.fas.fa-check
        | Reconocer condiciones de habitabilidad y dinámicas familiares.
      li
        i.fas.fa-check
        | Promover la participación de las familias y comunidades.
      li
        i.fas.fa-check
        | Coordinar respuestas pertinentes con los actores del territorio.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Características de la estrategia
    p La estrategia es integral, participativa, territorial, intersectorial y diferencial. Integra promoción, prevención y gestión del riesgo, se adapta a las características de cada territorio y reconoce a las familias como participantes activas en el cuidado de su salud.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Población sujeto y escenarios
    p La población sujeto comprende personas, familias y comunidades en sus diferentes etapas de vida. La intervención ocurre principalmente en el hogar, pero se articula con escenarios comunitarios, educativos, laborales e institucionales que influyen en las condiciones de salud.
</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
