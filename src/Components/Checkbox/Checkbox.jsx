import { useState } from "react";
import EmptyIcon from "./emptyIcon.svg";
import CheckedIcon from "./checkedIcon.svg";

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const onClickCheckbox = () => {
    setIsChecked(!isChecked);
    props.onCheck(!isChecked);
  };

  return (
    <img
      style={{ marginBottom: isChecked ? "3px" : "" }}
      src={isChecked ? CheckedIcon : EmptyIcon}
      onClick={onClickCheckbox}
      alt="Checkbox"
    />
  );
}

export default Checkbox;
