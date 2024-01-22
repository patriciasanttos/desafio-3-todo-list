import EditIcon from "./editIcon.svg"

function EditButton(props) {

    return (
        <img style={{cursor:"pointer"}} src={EditIcon} onClick={props.onClick} alt="" />
    )
}

export default EditButton