import {
  ADD_TODO,
  EDIT_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
  DUPLICATE_ITEM,
  DUPLICATE_ITEM_INDEX,
  DUPLICATE_EDIT_ITEM,
  DUPLICATE_EDIT_ITEM_ID

} from "../actions/action.types";

const initalState = {
  counter: 0,
  list: [{ id: 0, task: "list 1", completed: false }],
  duplicateItem:'',
  duplicateEditItem:'',
  duplicateEditItemId:0,
  duplicateItemIndex:''
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, task: action.text, completed: false }
        ],
        duplicateItem: state.duplicateItem,
        duplicateEditItem: state.duplicateEditItem,
        duplicateItemIndex: state.duplicateItemIndex
      };
      case EDIT_TODO:
        return {
          counter: state.counter + 1,
          list: action.text,
          duplicateItem: state.duplicateItem,
          duplicateEditItem: state.duplicateEditItem,
          duplicateItemIndex: state.duplicateItemIndex
        };  
    case CLEAR_TODO_LIST:
      return initalState;
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== Number(action.id))
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === Number(action.id) ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case DUPLICATE_ITEM:
      return {
        ...state,
        duplicateItem: action.text
      };
    case DUPLICATE_EDIT_ITEM:
      return {
        ...state,
        duplicateEditItem:action.text
      };
      case DUPLICATE_EDIT_ITEM_ID:
        return {
          ...state,
          duplicateEditItemId:action.text
        };
    case DUPLICATE_ITEM_INDEX:
      return {
        ...state,
        duplicateItemIndex: action.text
      };
    default:
      return state;
  }
};

export default todos;