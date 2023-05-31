import { FC, useState, ReactNode } from 'react';

type PreguntasItemProps = {
  title: string;
  children: ReactNode;
};

export const PreguntasItem: FC<PreguntasItemProps> = ({ title, children }) => {
  const [modal, setModal] = useState(false);

  const handleTooggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className={`question-item ${modal ? 'expanded' : ''}`}
        onClick={handleTooggleModal}
      >
        <div className='div-container-expanded'>
          <h3>{title}</h3>
          <span>{modal ? 'X' : '+'}</span>
        </div>
        {modal && <div className='answer'>{children}</div>}
      </div>
    </>
  );
};
