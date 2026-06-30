<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Enfoque territorial e intersectorial
    p.mb-4 El enfoque territorial e intersectorial constituye un elemento fundamental en la implementación de la estrategia de entorno hogar saludable, al permitir comprender la salud como un proceso influenciado por múltiples factores que trascienden el ámbito individual y requieren una respuesta articulada en el territorio. Este enfoque orienta las intervenciones hacia el reconocimiento de las particularidades sociales, culturales, económicas y ambientales que caracterizan a cada comunidad.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El enfoque intersectorial reconoce que la salud no depende exclusivamente del sector sanitario, sino que está determinada por la interacción de diversos sectores como educación, vivienda, ambiente y desarrollo social. En este sentido, la articulación entre actores institucionales y comunitarios se convierte en un elemento clave para abordar de manera integral los determinantes sociales de la salud.
    .row.justify-content-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
      .col-lg-11
        p.mb-0 En coherencia con los lineamientos del Ministerio de Salud y Protección Social (MSPS, 2016), el enfoque territorial e intersectorial promueve la coordinación de acciones entre diferentes sectores y niveles de gobierno, con el fin de optimizar recursos, evitar duplicidad de esfuerzos y fortalecer la respuesta frente a las problemáticas identificadas en el entorno hogar.
    p.mb-4 En el territorio colombiano, la articulación entre sectores permite dar respuestas concretas a problemáticas que ninguna entidad puede resolver de manera aislada. Los siguientes ejemplos ilustran cómo opera este enfoque en situaciones reales:
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen')
          
        h5.text-center Condiciones inadecuadas de vivienda
        p.mb-5 Cuando las visitas domiciliarias evidencian techos en mal estado, pisos de tierra o paredes húmedas en un barrio de invasión, el equipo de salud articula con la oficina de vivienda municipal o con el programa de mejoramiento habitacional del Ministerio de Vivienda para gestionar la intervención estructural que protege la salud de la familia.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img4.svg', alt='Texto que describa la imagen')
          
        h5.text-center Limitaciones en el acceso a servicios básicos
        p Ante la ausencia de agua potable o alcantarillado en una vereda, la secretaría de salud coordina con la empresa de servicios públicos y la alcaldía para garantizar condiciones mínimas de saneamiento, mientras el equipo desarrolla acciones educativas sobre el tratamiento casero del agua con las familias afectadas.
      .col-md.tarjeta.bg4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img5.svg', alt='Texto que describa la imagen')
          
        h5.text-center Problemáticas de desarrollo social
        p Cuando se identifican familias en situación de pobreza extrema, desplazamiento o violencia intrafamiliar, el equipo activa la ruta de articulación con el ICBF, la Unidad para las Víctimas o los programas sociales de la alcaldía, integrando la respuesta en salud con el apoyo institucional que corresponde a cada situación.
    p.mb-4 Esta integración entre sectores demuestra que las causas estructurales de los problemas de salud en el entorno hogar se abordan de manera más efectiva cuando las instituciones actúan de forma coordinada, evitan duplicar esfuerzos y orientan sus recursos hacia las necesidades reales de cada comunidad colombiana.
    p.mb-4 Los sectores que inciden en la salud del hogar, los principios que orientan la implementación de la estrategia y los actores del territorio se articulan de manera simultánea en cada comunidad colombiana. La siguiente figura presenta de forma integrada estos tres componentes y muestra cómo convergen en el entorno hogar saludable:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Sectores que inciden en la salud del hogar
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img6.svg', alt='La Figura 2, titulada “Sectores que inciden en la salud del hogar”, presenta el entorno hogar saludable en el centro, articulado con cuatro sectores: educación, vivienda, ambiente y desarrollo social. Se complementa con cuatro principios que orientan la implementación: equidad, participación, articulación intersectorial y adaptación al contexto. Los actores del territorio que hacen posible la estrategia son los servicios de salud, las instituciones educativas, las entidades territoriales y las organizaciones comunitarias.')
        .d-block.d-lg-none.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img6_1.svg', alt='La Figura 2, titulada “Sectores que inciden en la salud del hogar”, presenta el entorno hogar saludable en el centro, articulado con cuatro sectores: educación, vivienda, ambiente y desarrollo social. Se complementa con cuatro principios que orientan la implementación: equidad, participación, articulación intersectorial y adaptación al contexto. Los actores del territorio que hacen posible la estrategia son los servicios de salud, las instituciones educativas, las entidades territoriales y las organizaciones comunitarias.')
        .p-4.tarjeta.bg4
          p.mb-0 La figura evidencia que el enfoque territorial e intersectorial no opera de manera fragmentada, cada sector, cada principio y cada actor se relaciona con el entorno hogar saludable como punto de convergencia. Esta articulación es la que hace posible intervenir las causas reales de los problemas de salud de las familias y generar respuestas sostenibles en el territorio.
    p.mb-0 A partir de este enfoque, la estrategia de entorno hogar saludable se orienta hacia la implementación de acciones integrales que reconocen la complejidad del contexto territorial y la necesidad de trabajar de manera articulada con diferentes actores. Este proceso da lugar al análisis de los principios, actores y mecanismos de articulación que hacen posible la implementación de la estrategia en el territorio.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Principios
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema3/img7.png', alt='')
      .col-lg-9
        p.mb-4 El enfoque territorial e intersectorial se fundamenta en un conjunto de principios que orientan la formulación e implementación de acciones en salud pública, garantizando que las intervenciones en el entorno hogar respondan a las condiciones reales de la población y a las dinámicas del territorio. Estos principios permiten estructurar procesos coherentes, integrales y sostenibles, en los cuales se reconoce la interacción entre los diferentes factores que influyen en la salud.
        .p-4.tarjeta.bg2
          p.mb-0 Desde esta perspectiva, los principios orientan la toma de decisiones en el territorio, favoreciendo la implementación de acciones que promuevan la equidad, la participación y la articulación entre actores. En este sentido, los principios del enfoque territorial e intersectorial no solo orientan la planificación de las intervenciones, sino que también facilitan la articulación entre sectores y la adaptación de las acciones a los contextos específicos en los que se desarrollan.
    p.mb-4 En el siguiente esquema se presentan los principios que orientan la implementación de la estrategia en el entorno hogar:
    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
            .col-lg-9.col-8.p-4
              p.mb-0 Equidad.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='')
            .col-lg-9.col-8.p-4
              p.mb-0 Integridad.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img10.svg', alt='')
            .col-lg-9.col-8.p-4
              p.mb-0 Participación social.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img11.svg', alt='')
            .col-lg-9.col-8.p-4
              p.mb-0 Intersectorialidad.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img12.svg', alt='')
            .col-lg-9.col-8.p-4
              p.mb-0 Pertinencia territorial.
      .col-lg-4.col-10
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img13.svg', alt='')
            .col-lg-9.col-8.p-4
              p.mb-0 Continuidad.
    p.mb-4 La articulación de estos principios permite orientar la implementación de la estrategia de entorno hogar saludable desde una perspectiva integral, en la cual se reconoce la diversidad del territorio y la necesidad de trabajar de manera coordinada entre diferentes actores. 
    p.mb-4 Cada principio se traduce en decisiones concretas durante el trabajo con las familias y comunidades colombianas. Los siguientes ejemplos ilustran cómo opera cada uno en situaciones reales del territorio:
    .row.justify-content-center
      .col-lg-9.order-2.order-lg-1
        TabsA.color-acento-botones.mb-5
          .tarjeta.clr-paleYellow.p-4.bg2(titulo="Equidad")
            .row
              .col-lg-auto.d-none.d-lg-block.mb-2
                img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
              .col-lg-12
                p.mb-0 En un municipio del Tolima con zonas rurales dispersas y zonas urbanas, el equipo de salud destina mayor frecuencia de visitas a las veredas con menor acceso a servicios básicos y con familias en condiciones de mayor vulnerabilidad. Esta decisión reconoce que la equidad no consiste en dar lo mismo a todos, sino en orientar los recursos y los esfuerzos hacia quienes más los necesitan para reducir las brechas en salud existentes en el territorio.
          .tarjeta.clr-paleYellow.p-4.bg2(titulo="Integralidad")
            .row
              .col-lg-auto.d-none.d-lg-block.mb-2
                img(src='@/assets/curso/temas/tema3/img9.svg', alt='')
              .col-lg-12
                p.mb-0 Cuando el equipo visita una familia en un barrio popular de Ibagué, la intervención no se limita a atender un problema puntual de salud. Abarca simultáneamente las condiciones físicas de la vivienda, la situación de salud de cada integrante del hogar, las dinámicas de convivencia familiar y el acceso a los servicios disponibles en el sector, respondiendo a la persona y a su entorno de manera articulada, sin fragmentar la atención en aspectos aislados.
          .tarjeta.clr-paleYellow.p-4.bg2(titulo="Participación social")
            .row
              .col-lg-auto.d-none.d-lg-block.mb-2
                img(src='@/assets/curso/temas/tema3/img10.svg', alt='')
              .col-lg-12
                p.mb-0 En corregimientos del sur del Tolima, las juntas de acción comunal participan activamente en la identificación de las necesidades del sector y en la definición de las prioridades de intervención junto con el equipo de salud. Esta participación garantiza que las acciones respondan a lo que la comunidad reconoce como prioritario, fortalece la apropiación de los compromisos acordados y convierte a las familias en protagonistas reales de las decisiones que afectan su propia salud.
          .tarjeta.clr-paleYellow.p-4.bg2(titulo="Intersectorialidad")
            .row
              .col-lg-auto.d-none.d-lg-block.mb-2
                img(src='@/assets/curso/temas/tema3/img11.svg', alt='')
              .col-lg-12
                p.mb-0 Ante un brote de enfermedades digestivas por agua contaminada en una vereda del norte del Tolima, el equipo de salud coordina de manera inmediata con la empresa de acueducto, la alcaldía municipal y la institución educativa local. Cada actor aporta desde su competencia: la empresa interviene la fuente hídrica, la alcaldía gestiona los recursos y el equipo de salud desarrolla acciones educativas con las familias afectadas, logrando una respuesta integral que ninguna entidad podría alcanzar actuando de forma aislada.
          .tarjeta.clr-paleYellow.p-4.bg2(titulo="Pertinencia territorial")
            .row
              .col-lg-auto.d-none.d-lg-block.mb-2
                img(src='@/assets/curso/temas/tema3/img12.svg', alt='')
              .col-lg-12
                p.mb-0 En comunidades campesinas del Tolima, las actividades educativas y las visitas domiciliarias se programan respetando los tiempos de cosecha, los días de mercado y las festividades locales, para garantizar la presencia de las familias. En los barrios urbanos, las mismas actividades se adaptan a los horarios laborales de los padres y cuidadores. Esta adaptación al contexto de cada territorio garantiza que las intervenciones sean viables, pertinentes y respetuosas de la vida cotidiana de las comunidades.
          .tarjeta.clr-paleYellow.p-4.bg2(titulo="Continuidad")
            .row
              .col-lg-auto.d-none.d-lg-block.mb-2
                img(src='@/assets/curso/temas/tema3/img13.svg', alt='')
              .col-lg-12
                p.mb-0 En cada visita domiciliaria, el equipo retoma los compromisos acordados con la familia en el encuentro anterior y verifica los avances logrados en las condiciones del hogar. Si una familia acordó tapar los tanques de agua y llevar a los niños a sus controles de crecimiento, la visita siguiente confirma el cumplimiento y ajusta las acciones necesarias. Este seguimiento sostenido convierte las intervenciones en un proceso continuo que produce cambios reales y duraderos en la salud de las familias colombianas.
      .col-lg-3.col-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema3/img15.png", alt="alt", style="width:450px;").m-auto
    p.mb-4 La aplicación articulada de estos seis principios en el territorio colombiano convierte cada visita domiciliaria en una intervención coherente, justa y sostenible, que reconoce la diversidad de las familias y responde a las condiciones reales de cada comunidad.
    p.mb-0 La puesta en práctica de estos principios no depende de un solo sector ni de una sola institución. Su aplicación efectiva en el territorio exige la participación coordinada de actores con funciones complementarias, cuya articulación hace posible que la estrategia llegue hasta cada hogar colombiano con pertinencia y continuidad.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Actores del territorio
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema3/img16.svg', alt='')
      .col-lg-9
        p.mb-4 La implementación de la estrategia de entorno hogar saludable se desarrolla mediante la participación articulada de actores que intervienen en la gestión de la salud en el territorio, cada uno con funciones específicas que contribuyen al desarrollo de acciones en el entorno hogar.
        .p-4.tarjeta.bg2
          .row.justify-content-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema3/img17.svg', alt='')
            .col-lg-10
              p.mb-0 En este contexto, la intervención no se limita al sector salud, sino que involucra diferentes sectores e instancias que inciden en las condiciones del entorno, lo que permite abordar las situaciones identificadas desde múltiples dimensiones. Esta participación favorece la coordinación de acciones y el uso eficiente de los recursos disponibles en el territorio.
    p.mb-4 Los actores participan en distintos niveles, desde la planeación y gestión hasta la ejecución de acciones en el entorno familiar, lo que permite una intervención más organizada y coherente con las dinámicas del contexto. De acuerdo con el Ministerio de Salud y Protección Social (MSPS, 2016), esta articulación contribuye al fortalecimiento de la gestión del riesgo y la respuesta frente a las necesidades de la población.
    p.mb-4 En el siguiente esquema se presentan los actores que intervienen en la implementación de la estrategia:
    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img18.svg', alt='')
            .col-lg-9.col-8
              p.mb-0 Entidades territorial de salud.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img19.svg', alt='')
            .col-lg-9.col-8
              p.mb-0 Instituciones prestadoras de servicios de salud.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img20.svg', alt='')
            .col-lg-9.col-8
              p.mb-0 Instituciones educativas.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img21.svg', alt='')
            .col-lg-9.col-8
              p.mb-0 Entidades otros sectores (vivienda, agua, desarrollo social).
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img22.svg', alt='')
            .col-lg-9.col-8
              p.mb-0 Organizaciones comunitarias.
      .col-lg-4.col-10.mb-4
        .tarjeta.bg3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/img23.svg', alt='')
            .col-lg-9.col-8
              p.mb-0 Familias cuidadores.
    p.mb-4 La interacción entre estos actores permite desarrollar acciones complementarias en el territorio, en las cuales se integran capacidades técnicas, institucionales y comunitarias. Este trabajo conjunto facilita la implementación de intervenciones que responden de manera más efectiva a las condiciones identificadas en el entorno hogar.
    p.mb-4 En el territorio colombiano, cada actor cumple una función específica que complementa la de los demás. Su articulación se evidencia en situaciones concretas como las siguientes:
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.bg2
          ul.lista-ul--color
            li 
              i.fas.fa-certificate
              p.mb-0 Las entidades territoriales de salud lideran la planeación y coordinan la respuesta institucional frente a las necesidades identificadas en los hogares del municipio.
            li 
              i.fas.fa-certificate
              p.mb-0 Las instituciones prestadoras de servicios de salud garantizan la atención oportuna de las familias canalizadas durante las visitas domiciliarias y dan continuidad a los procesos de seguimiento.
            li 
              i.fas.fa-certificate
              p.mb-0 Las instituciones educativas refuerzan los mensajes de promoción de la salud con los estudiantes y sus familias, ampliando el alcance de las acciones iniciadas en el hogar. 
            li 
              i.fas.fa-certificate
              p.mb-0 Las entidades de otros sectores como vivienda, agua y desarrollo social intervienen las condiciones estructurales que el sector salud no puede resolver de manera aislada.
            li 
              i.fas.fa-certificate
              p.mb-0 Las organizaciones comunitarias movilizan a la comunidad, facilitan la convocatoria a las actividades de salud y fortalecen las redes de apoyo entre las familias del territorio.
            li 
              i.fas.fa-certificate
              p.mb-0 Las organizaciones comunitarias movilizan a la comunidad, facilitan la convocatoria a las actividades de salud y fortalecen las redes de apoyo entre las familias del territorio.
    p.mb-4 A partir de esta articulación, se consolidan procesos que favorecen la continuidad de las acciones en el territorio, contribuyendo al fortalecimiento de las capacidades locales y a la generación de respuestas sostenibles frente a las situaciones que afectan la salud de las familias.
    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .p-4.tarjeta.bg3
          p.mb-0 La articulación entre los actores del territorio proporciona la estructura institucional y comunitaria que hace posible la estrategia. Para que esa estructura se traduzca en intervenciones pertinentes, es necesario conocer las condiciones reales de los hogares, los determinantes sociales de la salud explican por qué algunas familias colombianas están más expuestas a enfermedades y ofrecen la base para priorizar las acciones con criterio técnico.
      .col-lg-4.co-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema3/img24.svg', alt='')
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
