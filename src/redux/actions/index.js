import {
    //ADD_COUNTER,
    //RESET_COUNTER,
    ADD_TODO,
    EDIT_TODO,
    CLEAR_TODO_LIST,
    DELETE_TODO,
    TOGGLE_TODO,
    DUPLICATE_ITEM,
    DUPLICATE_ITEM_INDEX,
    DUPLICATE_EDIT_ITEM,
    DUPLICATE_EDIT_ITEM_ID
  } from "./action.types";

  
export const addTodo = text => {
    return {
      type: ADD_TODO,
      text
    };
  };

  export const editTodo = text => {
    return {
      type: EDIT_TODO,
      text
    };
  };
  
  export const clearTodoList = () => {
    return {
      type: CLEAR_TODO_LIST
    };
  };
  
  export const deleteTodo = id => {
    return {
      type: DELETE_TODO,
      id
    };
  };
  
  export const toggleTodo = id => {
    return {
      type: TOGGLE_TODO,
      id
    };
  };


  export const setDuplicateItem = text => {
    return {
      type: DUPLICATE_ITEM,
      text
    };
  };

  export const setDuplicateEditItem = text => {
    return {
      type: DUPLICATE_EDIT_ITEM,
      text
    };
  };

  export const setDuplicateEditItemId = text => {
    return {
      type: DUPLICATE_EDIT_ITEM_ID,
      text
    };
  };

  export const setDuplicateItemIndex = text => {
    return {
      type: DUPLICATE_ITEM_INDEX,
      text
    };
  };