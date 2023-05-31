import { AllContenido } from './contenido';
import { Footer } from './footer/Footer';
import { MainContainer } from './pages';

export const PeliculasApp = () => {
  return (
    <>
      <MainContainer />

      {/* Demas Contenido */}
      <AllContenido />

      <Footer />
    </>
  );
};
