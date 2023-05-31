import './Page.css';
import { NavBar, Contacto } from '.';

export const MainContainer = () => {
  return (
    <main className='fondo-image'>
      <div className='container'>
        <NavBar />
      </div>

      <div className='container__page'>
        <Contacto />
      </div>
    </main>
  );
};
