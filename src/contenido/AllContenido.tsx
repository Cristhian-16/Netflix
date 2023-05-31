import { ContenidoContainer } from './ContenidoContainer';
import { ContenidoFour } from './ContenidoFour';
import { ContenidoOne } from './ContenidoOne';
import { ContenidoThree } from './ContenidoThree';
import { ContenidoTwo } from './ContenidoTwo';
import './Contenido.css';
import { PreguntasFrecuentes } from './PreguntasFrecuentes';

export const AllContenido = () => {
  return (
    <>
      <ContenidoContainer>
        <ContenidoOne />
      </ContenidoContainer>

      <ContenidoContainer>
        <ContenidoTwo />
      </ContenidoContainer>

      <ContenidoContainer>
        <ContenidoThree />
      </ContenidoContainer>

      <ContenidoContainer>
        <ContenidoFour />
      </ContenidoContainer>

      <ContenidoContainer>
        <PreguntasFrecuentes />
      </ContenidoContainer>
    </>
  );
};
