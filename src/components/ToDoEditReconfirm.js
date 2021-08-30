import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { editTodo,setDuplicateEditItem } from "../redux/actions/index";


const ToDoEditReconfirm = ({
 // updateTaskToList,
  //handleEditDiscard,
  taskItem,
  DuplicateIndex
}) => {
  const dispatch = useDispatch();
  const { list,duplicateEditItem,duplicateEditItemId,duplicateItemIndex } = useSelector(state => state.todos);
  const handleDuplicateEdit = () => {
    let index = list.findIndex((item) => item.id === duplicateEditItemId);
    let copy = [...list];
    copy[index].task = duplicateEditItem;
    dispatch(editTodo(copy));
    dispatch(setDuplicateEditItem(false));
  };

  const handleEditDiscard = () => {
    dispatch(setDuplicateEditItem(false));
  };

  return (
    <div className="card card-body my-3">
      <h5>
        Dupicate task {duplicateEditItem} at position {duplicateItemIndex}, Still you want to Update?
      </h5>
      <div className="row">
        <span
          onClick={() => handleDuplicateEdit()}
          className="mx-2 text-success cursor-ptr"
        >
          Add
        </span>

        <span
         onClick={() => handleEditDiscard()}
          className="mx-2 text-danger cursor-ptr"
        >
          Discard
        </span>
      </div>
    </div>
  );
};
export default ToDoEditReconfirm;
