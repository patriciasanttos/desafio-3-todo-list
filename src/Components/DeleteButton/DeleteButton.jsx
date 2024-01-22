import DeleteIcon from "./deleteIcon.svg";

function DeleteButton(props) {
  return <img style={{ cursor: "pointer" }} src={DeleteIcon} onClick={props.onClick} alt="" />;
}

export default DeleteButton;
