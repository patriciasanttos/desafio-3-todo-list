import "./Modal.scss"

function Modal(props) {
  const onClickNo = () => {
    props.onCloseModal(false)
  }

  const onClickYes = () => {
    props.onCloseModal(true);
    
  }

    return props.isOpen && (
      <div id="modal">
        <p id="title">
          {props.isEdit
            ? "Deseja editar esse item?"
            : "Deseja excluir esse item?"}
        </p>
        <p id="text">Colocar as descrições das tarefas aqui.</p>
        <div id="buttons">
          <button id="no" onClick={onClickNo}>Não</button>
          <button id="yes" onClick={onClickYes}>Sim</button>
        </div>
      </div>
    );
}

export default Modal