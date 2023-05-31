import { NetflixSvg } from '../components/NetflixSvg';
import { WorldSvg } from '../components/WorldSvg';

export const NavBar = () => {
  return (
    <section className='nav-bar'>
      <NetflixSvg />

      <div className='div-inicio__sesion'>
        <div className='select'>
          <WorldSvg />
          <select id='language-select'>
            <option value='Español'>Español</option>
            <option value='English'>English</option>
          </select>
        </div>
        <a href='#'>Iniciar Sesion</a>
      </div>
    </section>
  );
};
