const schedule = require('node-schedule');

// Definir una lista de estrofas de la canción "Gracias a la vida"
const estrofas = [
    'Gracias a la vida que me ha dado tanto',
    'me dio dos luceros que cuando los abro,',
    'perfecto distingo lo negro del blanco,',
    'y en el alto cielo su fondo estrellado',
    'y en las multitudes el hombre que yo amo.',
    'Gracias a la vida que me ha dado tanto,',
    'me ha dado el oído que en todo su ancho',
    'guarda noche y día grillos y canarios,',
    'martillos, turbinas, ladridos, chubascos,',
    'y la voz tan tierna de mi bien amado.',
    'Gracias a la vida que me ha dado tanto,',
    'me ha dado el sonido y el abecedario,',
    'con él las palabras que pienso y declaro,',
    'madre, amigo, hermano y luz alumbrando',
    'la ruta del alma del que estoy amando.',
    'Gracias a la vida que me ha dado tanto,',
    'me ha dado la marcha de mis pies cansados,',
    'con ellos anduve ciudades y charcos,',
    'playas y desiertos, montañas y llanos,',
    'y la casa tuya, tu calle y tu patio.',
    'Gracias a la vida que me ha dado tanto,',
    'me dio el corazón que agita su marco,',
    'cuando miro el fruto del cerebro humano,',
    'cuando miro al bueno tan lejos del malo,',
    'cuando miro al fondo de tus ojos claros.',
    'Gracias a la vida que me ha dado tanto,',
    'me ha dado la risa y me ha dado el llanto,',
    'así yo distingo dicha de quebranto,',
    'los dos materiales que forman mi canto',
    'y el canto de todos que es mi propio canto.',
    'Gracias a la vida, gracias a la vida,',
    'que me ha dado tanto,',
    'me ha dado la marcha de mis pies cansados,',
    'con ellos anduve ciudades y charcos,',
    'playas y desiertos, montañas y llanos,',
    'y la casa tuya, tu calle y tu patio.',
  ];
  
// Definir el intervalo de tiempo en segundos para mostrar cada estrofa
const intervalo = 5; // Mostrar una estrofa cada 30 segundos

// Definir una tarea programada para mostrar las estrofas cada cierto intervalo de tiempo
let indiceEstrofa = 0;

const tareaProgramada = schedule.scheduleJob(`*/${intervalo} * * * * *`, function(){
  console.log(estrofas[indiceEstrofa]);
  indiceEstrofa++;
  if (indiceEstrofa >= estrofas.length) {
    indiceEstrofa = 0;
  }
});
