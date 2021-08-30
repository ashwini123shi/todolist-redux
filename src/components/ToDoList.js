import React from "react";
import ToDo from "./ToDo";
import ToDoEditReconfirm from "./ToDoEditReconfirm";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList, setDuplicateItem} from "../redux/actions/index";

const ToDoList = () => {

  const dispatch = useDispatch();
  const { list,duplicateEditItem,duplicateItemIndex } = useSelector(state => state.todos);
  const handleClearAll = () => {
    dispatch(clearTodoList());
    dispatch(setDuplicateItem(false)); 
  };

  return (
    <>
      {!!duplicateEditItem && (
        <ToDoEditReconfirm
          //  updateTaskToList={handleDuplicateEdit}
          // handleEditDiscard={handleEditDiscard}
          taskItem={duplicateEditItem}
          DuplicateIndex={duplicateItemIndex}
        />
      )}

      <ol className="list-group my-5 border border-light">
        {list.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item text-capitalize justify-content-between my-2"
          >
            <ToDo
              todo={todo}
            />
          </li>
        ))}
      </ol>
      <button
        className="btn btn-danger btn-block text-capitalize mt-5  mb-5"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </>
  );
};

export default ToDoList;
