import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,setDuplicateItem } from "../redux/actions/index";
//component
import ToDoReconfirm from "./ToDoReconfirm";
const ToDoForm = () => {
  const [userInput, setUserInput] = useState(undefined);
  const { list,duplicateItem } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
   if (userInput !== "") {
      const duplicate = list.find((item) => item.task === userInput);
    if (!!duplicate) {
      dispatch(setDuplicateItem(duplicate.task)); 
    } else {
      dispatch(addTodo(userInput)); 
    }
      setUserInput("");
    }
  };
  return (
    <>
      
    <div className="card card-body my-3">
      <div className="input-group">
        <input
          value={userInput || ''}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
         // disabled={isDuplicateItem}
        />
        <div className="input-group-postpend">
          <div
            //disabled={isDuplicateItem}
            onClick={handleSubmit}
            className="input-group-text bg-primary text-white"
          >
            <i className="fa fa-plus "></i>
          </div>
        </div>
      </div>
    </div>
    {!!duplicateItem && (
      <ToDoReconfirm
        taskItem={duplicateItem}
      />
      )}
    </>
  );
};

export default ToDoForm;
