import { ContactoQuestion } from './ContactoQuestion';
import { PreguntasItem } from './PreguntasItem';

export const PreguntasFrecuentes = () => {
  return (
    <section className='section-question'>
      <h1>Preguntas Frecuentes</h1>
      <div className='question-container'>
        <PreguntasItem title='¿Que es Netflix?'>
          <>
            <p>
              Netflix es un servicio de streaming que ofrece una gran variedad
              de películas, series y documentales premiados en casi cualquier
              pantalla conectada a internet.
            </p>
            <p>
              Todo lo que quieras ver, sin límites ni comerciales, a un costo
              muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las
              semanas se agregan más películas y series!
            </p>
          </>
        </PreguntasItem>
        <PreguntasItem title='¿Cuanto cuesta Netflix?'>
          <p>
            Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o
            dispositivo de streaming, todo por una tarifa plana mensual. Planes
            desde S/24.90 hasta S/44.90 al mes. Sin costos adicionales ni
            contratos.
          </p>
        </PreguntasItem>
        <PreguntasItem title='¿Donde puedo ver Netflix?'>
          <>
            <p>
              Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta
              de Netflix para ver contenido al instante a través de netflix.com
              desde tu computadora personal o en cualquier dispositivo con
              conexión a internet que cuente con la app de Netflix, como smart
              TV, smartphones, tablets, reproductores multimedia y consolas de
              juegos.
            </p>
            <p>
              Además, puedes descargar tus series favoritas con iOS, Android o
              la app para Windows 10. Con la función de descarga, puedes ver
              donde vayas y sin conexión a internet. Lleva Netflix contigo
              adonde sea.
            </p>
          </>
        </PreguntasItem>

        <PreguntasItem title='¿Como cancelo?'>
          <p>
            Netflix es flexible. Sin contratos molestos ni compromisos. Cancela
            la membresía online con solo dos clics. No hay cargos por
            cancelación. Empieza y termina cuando quieras.
          </p>
        </PreguntasItem>
        <PreguntasItem title='¿Que puedo ver en Netflix'>
          <p>
            Netflix tiene un amplio catálogo de películas, series, documentales,
            animes, originales premiados y más. Todo lo que quieras ver, cuando
            quieras.
          </p>
        </PreguntasItem>
        <PreguntasItem title='¿Es Netflix para los niños?'>
          <>
            <p>
              La experiencia de Netflix para niños está incluida en la membresía
              para que los padres tengan el control mientras los peques
              disfrutan series y películas familiares en su propio espacio.
            </p>
            <p>
              Los perfiles para niños incluyen controles parentales protegidos
              por PIN que te permiten restringir el contenido que pueden ver los
              niños en función de la clasificación por edad y bloquear
              determinados títulos que no quieras que los niños vean.
            </p>
          </>
        </PreguntasItem>

        <ContactoQuestion />
      </div>
    </section>
  );
};
