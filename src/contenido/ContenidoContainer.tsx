import { FC } from 'react';

interface ContenidoContainerProps {
  children?: React.ReactNode;
}

export const ContenidoContainer: FC<ContenidoContainerProps> = ({
  children
}) => {
  return (
    <div className='contenido'>
      <div className='container-contenido'>{children}</div>
    </div>
  );
};
