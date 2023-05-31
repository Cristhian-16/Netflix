export const ContenidoOne = () => {
  return (
    <section className='section-one'>
      <div className='section-one__info'>
        <h1>Disfruta en tu TV</h1>
        <p>
          Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores
          de Blu-ray y más.
        </p>
      </div>
      <div className='section-one__media-container'>
        <video
          className='section-one__video'
          data-uia='nmhp-card-animation-asset-video'
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
        >
          <source
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
            type='video/mp4'
          />
        </video>
        <img
          src='/src/assets/tv.png'
          alt='Tv Publica'
          className='section-one__image'
        />
      </div>
    </section>
  );
};
