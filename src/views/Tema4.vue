<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Determinantes sociales en el entorno hogar
    p Los determinantes sociales son las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen. En el hogar se expresan mediante recursos materiales, prácticas cotidianas, relaciones familiares y oportunidades de acceso a bienes y servicios.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Clasificación de determinantes
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Tipo
            th Ejemplos
            th Incidencia
        tbody
          tr
            td Estructurales
            td Ingresos, educación, ocupación y posición social.
            td Definen oportunidades y distribución de recursos.
          tr
            td Materiales
            td Vivienda, agua, saneamiento y alimentación.
            td Condicionan la exposición directa a riesgos.
          tr
            td Conductuales
            td Higiene, actividad física, alimentación y consumo.
            td Pueden favorecer o afectar el bienestar.
          tr
            td Psicosociales
            td Apoyo, estrés, convivencia y redes sociales.
            td Influyen en la salud mental y en la capacidad de cuidado.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Condiciones del entorno hogar
    p La valoración considera calidad y seguridad de la vivienda, disponibilidad de agua segura, saneamiento básico, ventilación, manejo de residuos, alimentación, convivencia, distribución del cuidado y acceso efectivo a servicios. Estas condiciones deben analizarse de manera integrada y contextual.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Factores de riesgo y protección
    .row
      .col-md-6.mb-4
        .tarjeta.color-acento-contenido.p-4.h-100
          h3 Factores de riesgo
          p.mb-0 Hacinamiento, humedad, agua no segura, violencia, aislamiento, inseguridad alimentaria y barreras de acceso a servicios.
      .col-md-6.mb-4
        .tarjeta.color-primario.p-4.h-100
          h3 Factores protectores
          p.mb-0 Redes de apoyo, comunicación familiar, prácticas de higiene, participación comunitaria, acceso oportuno a servicios y capacidad de autocuidado.
    p Identificar ambos tipos de factores permite reducir amenazas y fortalecer capacidades ya presentes en las familias y comunidades.
</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
