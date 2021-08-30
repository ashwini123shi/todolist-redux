import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, deleteTodo, toggleTodo, setDuplicateItem, setDuplicateEditItem,setDuplicateEditItemId, setDuplicateItemIndex } from "../redux/actions/index";

const ToDo = ({
  todo,
}) => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(true);
  const { list,duplicateEditItem } = useSelector(state => state.todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(setDuplicateItem(false));
  };

  //toggle status of item
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  const updateItem = (e) => {
    handleEdit(todo.id, e.currentTarget.value);
    setIsShown(!isShown);
  };

  const handleEdit = (e) => {
    setIsShown(!isShown);
    const srcIndex = list.findIndex((item) => item.id === todo.id);

    if (!!list.find((item) => item.task === e.currentTarget.value)) {
      //fetch the indx of dupliacte item
      let index = list.findIndex((item) => item.task === e.currentTarget.value);
      console.log('duplicate index' + index);
      if (list[index].id !== todo.id) {
        dispatch(setDuplicateItemIndex(index + 1));
        console.log(duplicateEditItem);
        dispatch(setDuplicateEditItem(e.currentTarget.value));
        dispatch(setDuplicateEditItemId(todo.id));
        
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

  return (
    <>
      <div className={todo.complete ? "textBlock strike" : "textBlock"}>
        {isShown && <div onClick={() => setIsShown(!isShown)}>{todo.task}</div>}
        {!isShown && (
          <input
            type="text"
            onMouseOver={(e) => (e.target.style.fontStyle = "italic")}
            onMouseLeave={(e) => (e.target.style.fontStyle = "normal")}
            onBlur={handleEdit}
            defaultValue={todo.task}
            id={todo.id}
          />
        )}
      </div>

      <div className="actionBlock">
        <span className="mx-2 text-success cursor-ptr">
          <i
            id={todo.id}
            name="todoStatus"
            value={todo.id}
            onClick={(e) => handleToggle(e.currentTarget.id)}
            className="fa fa-check"
            aria-hidden="true"
          ></i>
        </span>
        <span className="mx-2 text-danger cursor-ptr">
          <i
            id={todo.id}
            name="todoDelete"
            value={todo.id}
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
