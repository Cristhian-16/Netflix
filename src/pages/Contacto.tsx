import { IconSvg } from '../components/IconSvg';

export const Contacto = () => {
  return (
    <>
      <div className='title_page'>
        <h1>Películas y series ilimitadas y mucho más</h1>
        <p>Disfruta donde quieras. Cancela cuando quieras.</p>
        <p>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>
      </div>

      <div className='form_page'>
        <form>
          <input type='email' placeholder='Email' />
        </form>
        <button className='btn-form'>
          Comenzar
          <IconSvg />
        </button>
      </div>
    </>
  );
};
