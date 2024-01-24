import { useState } from "react";
import "./Modal.scss";

function Modal(props) {
  const [todoInput, setTodoInput] = useState(
    props.selectedTodo ? props.selectedTodo.name : ""
  );

  const onClickNo = () => {
    props.onCloseModal(false);
  };

  const onClickYes = () => {
    if (props.isEdit) {
      if (todoInput == "") {
        alert("Digite uma tarefa");
      } else {
        props.onCloseModal(true, todoInput);
      }
    } else {
      props.onCloseModal(true);
    }
  };

  const onTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div id="modal">
      <p id="title">
        {props.isEdit
          ? "Deseja editar esse item?"
          : "Deseja excluir esse item?"}
      </p>
      {props.isEdit ? (
        <>
          <p id="text">Colocar as descrições das tarefas aqui.</p>
          <div className="input-container">
            <input
              value={todoInput}
              type="text"
              placeholder="Editar Tarefa..."
              onChange={onTodoInputChange}
            />
          </div>
        </>
      ) : (
        <div className="todo-name">{props.selectedTodo.name}</div>
      )}
      <div id="buttons">
        <button id="no" onClick={onClickNo}>
          Não
        </button>
        <button id="yes" onClick={onClickYes}>
          Sim
        </button>
      </div>
    </div>
  );
}

export default Modal;
