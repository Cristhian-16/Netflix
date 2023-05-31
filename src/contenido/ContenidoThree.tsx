export const ContenidoThree = () => {
  return (
    <section className='section-three'>
      <div className='section-three__info'>
        <h2>Disfruta donde quieras</h2>
        <p>
          Películas y series ilimitadas en tu teléfono, tablet, computadora y
          TV.
        </p>
      </div>
      <div className='section-three__video_container'>
        <video
          data-uia='nmhp-card-animation-asset-video'
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
          className='section-three__video'
        >
          <source
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
            type='video/mp4'
          />
        </video>
        <img
          src='/src/assets/tv-2.png'
          alt='Stranger Things'
          className='section-three__video-image'
        />
      </div>
    </section>
  );
};
