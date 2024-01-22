import { useState } from "react";
import "./TodoList.scss";
import Checkbox from "../Components/Checkbox/Checkbox";
import EditButton from "../Components/EditButton/EditButton";
import DeleteButton from "../Components/DeleteButton/DeleteButton";
import AddButton from "../Components/AddButton/AddButton";
import Modal from "../Components/Modal/Modal";

function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      name: "Limpar a casa",
      done: true,
    },
  ]);
  const [todoInput, setTodoInput] = useState("");

  const onClickEdit = () => {
    setIsModalOpen(true);
    setIsEdit(true);
  };

  const onClickDelete = () => {
    setIsModalOpen(true);
    setIsEdit(false);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onClickAdd = () => {
    if (todoInput == "") {
      alert("Digite uma tarefa");
    } else {
      setTodoList([
        ...todoList,
        {
          name: todoInput,
          done: false,
        },
      ]);

      setTodoInput("");
    }
  };

  const onTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const onTodoInputKeyUp = (e) => {
    if (e.key === 'Enter') {
      onClickAdd()
    }
  }

  return (
    <div id="todo-list">
      <Modal isOpen={isModalOpen} isEdit={isEdit} onCloseModal={onCloseModal} />
      <div className="title">
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </div>
      <table>
        <thead>
          <tr>
            <th className="left">Tarefas</th>
            <th className="center">Status</th>
            <th className="right">Opções</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item, index) => {
            return (
              <tr>
                <td className="left">{item.name}</td>
                <td className="center">
                  <Checkbox isChecked={item.done} />
                </td>
                <td className="right">
                  <EditButton onClick={onClickEdit} />
                  <DeleteButton onClick={onClickDelete} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="left">
              <input
                value={todoInput}
                type="text"
                placeholder="Nova Tarefa..."
                onChange={onTodoInputChange}
                onKeyUp={onTodoInputKeyUp}
              />
            </td>
            <td className="center"></td>
            <td className="right">
              <AddButton onClick={onClickAdd} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
