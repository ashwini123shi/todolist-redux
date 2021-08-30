import React, { useState } from "react";
//css
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoReconfirm from "./ToDoReconfirm";
import ToDoEditReconfirm from "./ToDoEditReconfirm";

//redux
import { useSelector, useDispatch } from "react-redux";
//import { addTodo,clearTodoList,deleteTodo,toggleTodo,duplicateItem,duplicateEditItem,duplicateItemIndex} from "./redux/actions/index";



const TodoApp = () => {
  
  const { toDoListVal } = useSelector(state => state.todos);
  //const { duplicateItemVal } = useSelector(state => state.todos.duplicateItem);
  //const { duplicateEditItemVal } = useSelector(state => state.todos.duplicateEditItem);
  //const { duplicateItemIndexVal } = useSelector(state => state.todos.duplicateItemIndex);
  const dispatch = useDispatch();
  //State variable for list
 // const [duplicateItem, setDuplicateItem] = useState("");
 // const [duplicateEditItem, setDuplicateEditItem] = useState("");
  const [EditItemId, setEditItemId] = useState("");
 // const [duplicateItemIndex, setduplicateItemIndex] = useState("");
 // const [toDoList, setToDoList] = useState([]);

  //edit item block starts
/*  const handleEdit = (taskId, value) => {
    const srcIndex = toDoList.findIndex((item) => item.id === taskId);

    if (!!toDoList.find((item) => item.task === value)) {
      //fetch the indx of dupliacte item
      let index = toDoList.findIndex((item) => item.task === value);
      if (toDoList[index].id !== taskId) {
        //setduplicateItemIndex(index + 1);
        //setDuplicateEditItem(value); //value being updated is saved
        setEditItemId(taskId); //id being updated is saved
        dispatch(duplicateItemIndex(index + 1));
        dispatch(duplicateEditItem(value));
      }
    } else {
      updateToDoItem(srcIndex, value);
    }
  };
  const updateToDoItem = (index, value) => {
    let copy = [...toDoList];
    copy[index].task = value;
    console.log(copy);
    //setToDoList(copy);
  };

  const handleEditDiscard = (taskItem) => {
    //setDuplicateEditItem(false);
    dispatch(duplicateEditItem(false));
  };
  const handleDuplicateEdit = (item) => {
    let index = toDoList.findIndex((item) => item.id === EditItemId);
    updateToDoItem(index, item);
   // setDuplicateEditItem(false);
    dispatch(duplicateEditItem(false));
  };
*/
  //edit item block ends

  //add item block starts
  /*const addTaskToList = (taskItem) => {
    //set todo list
    setToDoList([
      ...toDoList,
      { id: toDoList.length + 1, task: taskItem, complete: false }
    ]);
  };*/

  /*const addDuplicateTask = (taskItem) => {
   // addTaskToList(taskItem);
    //setDuplicateItem(false);
    dispatch(addTodo(taskItem)); //redux
    dispatch(duplicateItem(false)); //redux
  };

  const addTask = (taskItem) => {
    console.log(toDoListVal);
    const duplicate = toDoListVal.find((item) => item.task === taskItem);
    if (!!duplicate) {
      console.log(duplicate);
     // setDuplicateItem(duplicate.task);
      dispatch(duplicateItem(duplicate.task)); 
    } else {
     // addTaskToList(taskItem);
      dispatch(addTodo(taskItem)); //redux
    }
  };
  //add item block ends
  //clear All items
  const handleClearAll = () => {
   // setToDoList([]);
   // setDuplicateItem(false);
    dispatch(clearTodoList());
    dispatch(duplicateItem(false)); //redux
    
  };
  // delete single item
  const handleDelete = (id) => {
    console.log('delete called'+id);
    console.log(toDoListVal);
    dispatch(deleteTodo(id));
    dispatch(duplicateItem(false));
  };
  //toggle status of item
  const handleToggle = (id) => {
    let mapped = toDoListVal.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    dispatch(toggleTodo(id));
   // setToDoList(mapped);
  };*/

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <Header />
          
          <ToDoForm />

        {/*  {!!duplicateItemVal && (
            <ToDoReconfirm
              addTaskToList={addDuplicateTask}
              handleDiscard={() => dispatch(duplicateItem(false))}
              taskItem={duplicateItemVal}
            />
          )}

          {!!duplicateEditItemVal && (
            <ToDoEditReconfirm
              updateTaskToList={handleDuplicateEdit}
              handleEditDiscard={handleEditDiscard}
              taskItem={duplicateEditItemVal}
              DuplicateIndex={duplicateItemIndexVal}
            />
          )}*/}
          
          <ToDoList
          //  handleToggle={handleToggle}
          //  handleFilter={handleClearAll}
          //  handleDelete={handleDelete}
            //handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
