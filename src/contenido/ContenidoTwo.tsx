export const ContenidoTwo = () => {
  return (
    <section className='section-two'>
      <div className='download-section__image'>
        <img src='/src/assets/mobile.jpg' alt='Strager Things' />
        <div className='download-section__overlay'>
          <div className='dowload-section__info'>
            <img src='/src/assets/libro.png' alt='Libro de Strager Things' />
            <div className='dowload-section__title'>
              <h3>Stranger Things</h3>
              <p>Descargando....</p>
            </div>
          </div>
          <img
            src='/src/assets/descarga.png'
            alt='Icono de Descarga'
            className='icon'
          />
        </div>
      </div>

      <div className='section-two__title'>
        <h2>Descarga tus series para verlas offline</h2>
        <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
      </div>
    </section>
  );
};
