import './Tabela.css'

import { useState } from "react";
import Modal from "./Modal";

function Tabela() {
    const [modal, setModal] = useState(false);
  
    const handleClick = () => {
    let container = document.querySelector('.info');
   
      if(container.style.display === 'block') {
        container.style.display = 'none';
      } else {
        container.style.display = 'block';
      }
    }

    return(
      <div className="elemento">
        <div className="tabela">
          <div className="nome"><p>Teste</p></div>
          <div className="ativo"><p>Ativo</p></div>
          <div className="abrir">
            <img id="abre" className="img_abre" src="../seta.png" alt="v" onClick={handleClick} />
          </div>
          <div className="edit">
            <p><a onClick={() => setModal(true)} >Editar</a></p>
            <Modal
                openModal={modal}
                closeModal={() => setModal(false)}
            ><h1>Modal</h1>
             <p>Modal content.</p>
            </Modal>
         </div>
        </div>
        <div className="info"><p>Teste</p></div>
      </div>
    )
}

export default Tabela