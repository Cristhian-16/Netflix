import { IconSvg } from '../components/IconSvg';

export const ContactoQuestion = () => {
  return (
    <>
      <div className='title_page title_page_question'>
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
