import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, deleteTodo, toggleTodo, setDuplicateItem, setDuplicateEditItem,setDuplicateEditItemId, setDuplicateItemIndex } from "../redux/actions/index";

const ToDo = ({ id, task, completed }) => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(true);
  const { list } = useSelector(state => state.todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(setDuplicateItem(false));
  };

  //toggle status of item
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (e) => {
    setIsShown(!isShown);
    const srcIndex = list.findIndex((item) => item.id === id);

    if (!!list.find((item) => item.task === e.currentTarget.value)) {
      //fetch the index of duplicate item
      let index = list.findIndex((item) => item.task === e.currentTarget.value);
      if (list[index].id !== id) {
        dispatch(setDuplicateItemIndex(index + 1));
        dispatch(setDuplicateEditItem(e.currentTarget.value));
        dispatch(setDuplicateEditItemId(id));
      }
    } else {
      updateToDoItem(srcIndex, e.currentTarget.value);
    }
  };

  const updateToDoItem = (index, value) => {
    let copy = [...list];
    copy[index].task = value;
    console.log(copy);
    dispatch(editTodo(copy));
  };
  const styled = {
    textDecoration: completed ? "line-through" : "none",
   // backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };
  

  return (
    <>
      <div className="textBlock">
        {isShown && <div style={styled} onClick={() => setIsShown(!isShown)}>{task}</div>}
        {!isShown && (
          <input
            type="text"
            onMouseOver={(e) => (e.target.style.fontStyle = "italic")}
            onMouseLeave={(e) => (e.target.style.fontStyle = "normal")}
            onBlur={handleEdit}
            defaultValue={task}
            id={id}
          />
        )}
      </div>

      <div className="actionBlock">
        <span className="mx-2 text-success cursor-ptr">
          <i
            id={id}
            name="todoStatus"
            value={id}
            onClick={(e) => handleToggle(e.currentTarget.id)}
            className="fa fa-check"
            aria-hidden="true"
          ></i>
        </span>
        <span className="mx-2 text-danger cursor-ptr">
          <i
            id={id}
            name="todoDelete"
            value={id}
            onClick={(e) => handleDelete(e.currentTarget.id)}
            className="fa fa-trash"
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </>
  );
};

export default ToDo;
