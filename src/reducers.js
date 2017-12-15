import { TOGGLE_STATUS, SAVE_NEW_TODO, ADD_TODO_CHANGED } from "./actions";

export default function todoList( state, action ){
    let newState = Object.assign( {}, state );
    let todoList = state.todoList;
    let text = "";
    let newTodoItem = {};
    const lastId = todoList[ todoList.length-1 ].id;

    switch(action.type) {
        case TOGGLE_STATUS:
            todoList = newState.todoList.slice();
            for ( let i = 0; i < todoList.length; i++ ) {
                let todo = todoList[ i ];
                let id = action.id;
                if ( todo.id == id ) {
                    todo.status = ( todo.status ) ? 0 : 1;
                    break;
                }
            }
            newState = Object.assign( {}, newState, { todoList } );
            break;
        case ADD_TODO_CHANGED:
            text = action.text;
            newState = Object.assign( {}, newState, { addTodoValue: text });
            break;
        case SAVE_NEW_TODO:
            todoList = newState.todoList.slice();
            newTodoItem.id = lastId+1;
            newTodoItem.key = lastId+1;
            newTodoItem.text = state.addTodoValue;
            newTodoItem.status = 0;
            newState.addTodoValue = "";
            todoList.push( newTodoItem );
            newState = Object.assign( {}, newState, { todoList } );
            break;
        default:
            return state;
    }
    return newState;
}