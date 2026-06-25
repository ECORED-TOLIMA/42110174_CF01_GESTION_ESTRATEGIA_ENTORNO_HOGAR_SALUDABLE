<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Promoción de la salud y plan de acción
    p La promoción de la salud fortalece las capacidades de las personas y familias para tomar decisiones informadas, organizar prácticas de cuidado y participar en la transformación de las condiciones que afectan su bienestar.
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Promoción de la salud
    p Promover la salud implica actuar sobre los determinantes, facilitar el acceso a información y servicios, fortalecer la participación y crear condiciones favorables. No se limita a transmitir recomendaciones: busca desarrollar autonomía y capacidad de acción.
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Herramientas de caracterización
    p Las fichas familiares, entrevistas, observación directa, mapas sociales, genogramas y registros territoriales permiten conocer composición familiar, condiciones de vivienda, riesgos, capacidades, redes de apoyo y acceso a servicios.
    .bloque-texto-c.color-primario.p-4.mb-4
      i.fas.fa-quote-right
      p.mb-0 La información debe recolectarse con respeto, confidencialidad, consentimiento y participación de la familia.
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Herramientas educativas
    p El diálogo de saberes, demostraciones, talleres, material gráfico, visitas educativas y actividades comunitarias ayudan a comprender riesgos y adoptar prácticas saludables. La herramienta se selecciona según edad, cultura, alfabetización, recursos y necesidades de los participantes.
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Formulación del plan de acción
    p El plan de acción organiza las actividades que se desarrollarán con las familias, teniendo en cuenta las necesidades identificadas, las condiciones del territorio y los recursos disponibles.
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Elemento
            th Pregunta orientadora
        tbody
          tr
            td Objetivo
            td ¿Qué cambio se espera alcanzar?
          tr
            td Actividades
            td ¿Qué se hará para lograrlo?
          tr
            td Responsables y recursos
            td ¿Quién participa y con qué medios?
          tr
            td Tiempo e indicadores
            td ¿Cuándo se realizará y cómo se verificará el avance?
    p El seguimiento permite revisar compromisos, reconocer avances y ajustar las acciones según los cambios observados en cada hogar.
</template>

<script>
export default {
  name: 'Tema6',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
