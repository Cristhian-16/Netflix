import { WorldSvg } from '../components/WorldSvg';

export const Footer = () => {
  return (
    <div className='section-footer'>
      <div className='section-footer__llama'>
        <p>
          Preguntas ? Llama al <a href='#'>0-800-52352</a>
        </p>

        <div className='section-footer__question'>
          <div className='question-footer'>
            <a href='#'>Preguntas Frecuentes</a>
            <a href='#'>Presa</a>
            <a href='#'>Canjear Tarjetas de Regalo</a>
            <a href='#'>Terminos de uso</a>
            <a href='#'>Informacion coorporativa</a>
            <a href='#'>Avisos legales</a>
          </div>
          <div className='question-footer'>
            <a href='#'>Centro de Ayuda</a>
            <a href='#'>Relaciones con inversionistas</a>
            <a href='#'>Comprar tarjetas de Regalo</a>
            <a href='#'>Privacidad</a>
            <a href='#'>Contactanos</a>
            <a href='#'>Solo en Netflix</a>
          </div>
          <div className='question-footer'>
            <a href='#'>Cuenta</a>
            <a href='#'>Empleo</a>
            <a href='#'>Formas de ver</a>
            <a href='#'>Preferencias de cookies</a>
            <a href='#'>Prueba de Velocidad</a>
          </div>
        </div>

        <div className='div-inicio__sesion footer-button'>
          <div className='select'>
            <WorldSvg />
            <select id='language-select'>
              <option value='Español'>Español</option>
              <option value='English'>English</option>
            </select>
          </div>
        </div>

        <div className='netflix-peru'>
          <p>Netflix, Perú</p>
        </div>
      </div>
    </div>
  );
};
