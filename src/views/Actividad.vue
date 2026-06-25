<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      Actividad(:cuestionario="cuestionario")
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

const bancoPreguntas = [
  [
    '¿Qué se entiende por entorno hogar saludable?',
    [
      'Solo la estructura física de la vivienda.',
      'Un espacio con servicios básicos únicamente.',
      'Condiciones físicas, sociales y conductuales que favorecen la salud.',
      'Un programa institucional de salud.',
    ],
    2,
    'Correcto. El entorno hogar saludable integra condiciones físicas, sociales y comportamentales que influyen en el bienestar, no solo aspectos estructurales.',
  ],
  [
    '¿Cuál es el enfoque principal de la Atención Primaria en Salud (APS)?',
    [
      'Tratamiento especializado.',
      'Prevención y promoción.',
      'Atención de emergencias.',
      'Atención hospitalaria.',
    ],
    1,
    'Correcto. La APS prioriza la promoción de la salud y la prevención de la enfermedad como base del sistema de salud.',
  ],
  [
    '¿Qué permite el análisis del territorio?',
    [
      'Solo conocer la ubicación geográfica.',
      'Identificar enfermedades únicamente.',
      'Definir recursos hospitalarios.',
      'Comprender condiciones y necesidades de la población.',
    ],
    3,
    'Correcto. El análisis territorial permite entender el contexto y orientar intervenciones pertinentes.',
  ],
  [
    '¿Cuál es el propósito de la caracterización?',
    [
      'Aplicar tratamientos médicos.',
      'Identificar necesidades y condiciones de la población.',
      'Medir indicadores económicos.',
      'Evaluar infraestructura hospitalaria.',
    ],
    1,
    'Correcto. La caracterización permite recolectar información clave para la toma de decisiones.',
  ],
  [
    '¿Qué elemento es clave en la priorización de intervenciones?',
    [
      'Magnitud y gravedad del problema.',
      'Preferencia del profesional.',
      'Disponibilidad de tiempo.',
      'Opinión del usuario.',
    ],
    0,
    'Correcto. La priorización se basa en criterios técnicos como magnitud, gravedad e impacto.',
  ],
  [
    '¿Qué caracteriza el enfoque territorial?',
    [
      'Aplicar las mismas acciones en todos los lugares.',
      'Adaptar las intervenciones al contexto.',
      'Centrarse en hospitales.',
      'Ignorar las condiciones sociales.',
    ],
    1,
    'Correcto. El enfoque territorial adapta las acciones según las características del contexto.',
  ],
  [
    '¿Qué es la articulación intersectorial?',
    [
      'Trabajo exclusivo del sector salud.',
      'Atención médica individual.',
      'Coordinación entre diferentes sectores.',
      'Aplicación de normas.',
    ],
    2,
    'Correcto. Permite intervenir los determinantes sociales desde múltiples sectores.',
  ],
  [
    '¿Qué son los determinantes sociales de la salud?',
    [
      'Condiciones que influyen en la salud.',
      'Enfermedades frecuentes.',
      'Medicamentos disponibles.',
      'Protocolos médicos.',
    ],
    0,
    'Correcto. Son factores sociales, económicos y ambientales que afectan la salud.',
  ],
  [
    '¿Cuál es un determinante material?',
    [
      'Actividad física.',
      'Calidad de la vivienda.',
      'Relaciones familiares.',
      'Ingresos económicos.',
    ],
    1,
    'Correcto. Los determinantes materiales incluyen condiciones físicas como la vivienda.',
  ],
  [
    '¿Qué son factores conductuales?',
    [
      'Condiciones del territorio.',
      'Hábitos y comportamientos.',
      'Servicios de salud.',
      'Factores económicos.',
    ],
    1,
    'Correcto. Son prácticas como la alimentación o la actividad física.',
  ],
  [
    '¿Cuál es un factor protector?',
    [
      'Consumo de alcohol.',
      'Hacinamiento.',
      'Mala alimentación.',
      'Redes de apoyo.',
    ],
    3,
    'Correcto. Las redes de apoyo fortalecen el bienestar y reducen riesgos.',
  ],
  [
    '¿Qué permite la cohesión social?',
    [
      'Aumentar conflictos.',
      'Reducir el acceso a servicios.',
      'Generar aislamiento.',
      'Mejorar las relaciones y el bienestar.',
    ],
    3,
    'Correcto. La cohesión social favorece la convivencia y la salud.',
  ],
  [
    '¿Qué es un factor de riesgo?',
    [
      'Una condición que mejora la salud.',
      'Una situación que aumenta la probabilidad de enfermedad.',
      'Un servicio de salud.',
      'Una actividad preventiva.',
    ],
    1,
    'Correcto. Son condiciones que pueden afectar negativamente la salud.',
  ],
  [
    '¿Qué evalúa la calidad de la vivienda?',
    [
      'Ingresos familiares.',
      'Nivel educativo.',
      'Condiciones físicas y ambientales.',
      'Actividad laboral.',
    ],
    2,
    'Correcto. Incluye ventilación, higiene y servicios básicos.',
  ],
  [
    '¿Qué incluye el entorno social?',
    [
      'Solo la vivienda.',
      'Relaciones familiares y vecindario.',
      'Hospitales.',
      'Medicamentos.',
    ],
    1,
    'Correcto. El entorno social integra relaciones y condiciones del entorno cercano.',
  ],
  [
    '¿Cuál es el objetivo de la promoción de la salud?',
    [
      'Aumentar el control sobre la salud.',
      'Curar enfermedades.',
      'Aplicar tratamientos.',
      'Diagnosticar enfermedades.',
    ],
    0,
    'Correcto. Busca fortalecer capacidades para mejorar la salud.',
  ],
  [
    '¿Qué permite la educación en salud?',
    [
      'Diagnosticar enfermedades.',
      'Aplicar tratamientos.',
      'Fortalecer conocimientos y prácticas saludables.',
      'Evaluar hospitales.',
    ],
    2,
    'Correcto. Promueve cambios en hábitos y comportamientos.',
  ],
  [
    '¿Qué implica el acceso a servicios de salud?',
    [
      'Solo disponibilidad.',
      'Uso adecuado de los servicios.',
      'Atención hospitalaria.',
      'Medicamentos gratuitos.',
    ],
    1,
    'Correcto. Incluye la disponibilidad y el uso efectivo de los servicios.',
  ],
  [
    '¿Para qué sirve el plan de acción?',
    [
      'Medir indicadores.',
      'Clasificar la población.',
      'Organizar las intervenciones.',
      'Diagnosticar enfermedades.',
    ],
    2,
    'Correcto. Permite organizar actividades, responsables, recursos y tiempos de acuerdo con las necesidades identificadas.',
  ],
  [
    '¿Qué permite la articulación con actores del territorio?',
    [
      'Eliminar programas.',
      'Reducir acciones.',
      'Integrar recursos y esfuerzos.',
      'Trabajar de forma aislada.',
    ],
    2,
    'Correcto. La articulación mejora la eficiencia y el impacto de las intervenciones.',
  ],
]

const letras = ['a', 'b', 'c', 'd']
const preguntas = bancoPreguntas.map((pregunta, indice) => ({
  id: indice + 1,
  texto: pregunta[0],
  imagen: require(`@/assets/actividad/imagen${(indice % 4) + 1}.png`),
  barajarRespuestas: true,
  opciones: pregunta[1].map((texto, opcion) => ({
    id: letras[opcion],
    texto,
    esCorrecta: opcion === pregunta[2],
  })),
  mensaje_correcto: pregunta[3],
  mensaje_incorrecto:
    'Revise nuevamente el contenido del componente formativo.',
}))

export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos y planeación de la estrategia entorno hogar saludable',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la apropiación de los conceptos y procesos fundamentales de la estrategia de entorno hogar saludable, los determinantes sociales de la salud, las herramientas de caracterización e intervención y los principios del enfoque territorial e intersectorial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas,
      mensaje_final_aprobado:
        'Felicitaciones. Se evidencia una comprensión adecuada de los conceptos y procesos relacionados con la estrategia de entorno hogar saludable, así como la capacidad para identificar determinantes sociales, analizar condiciones del entorno y reconocer la importancia de la promoción de la salud en el ámbito familiar.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
