// * 초기 상태값
const initialState = [];
// 빈 배열로 초기화되어 있습니다. 이 배열은 Todolist의 초기 상태를 나타냄

// * action value
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
//ADD_TODO, TOGGLE_STATUS_TODO, DELETE_TODO는 (추가 완료 삭제)
//액션의 타입(type)을 정의한 상수
//이 액션 타입은 나중에 액션 생성자(action creator)에서 사용

// * 액션
//액션 생성자 정의:

//addTodo, toggleStatusTodo, deleteTodo는 액션을 생성하는 함수
// 각 함수는 액션 타입과 페이로드(payload)를 받아서 해당 액션 객체를 반환 
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
};
// addTodo 함수를 호출
// const newTodo = {
//   id: 1,
//   text: '편의점 가기',
//   completed: false
// };

//const action = addTodo(newTodo);
// 액션 객체:
// {
//   type: 'ADD_TODO',
//   payload: {
//     id: 1,
//     text: '편의점 가기',
//     completed: false
//   }
// }
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  }
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}

// * 리듀서
//리듀서는 Action 등의 일거리를 직접 수행하는 놈
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_STATUS_TODO:
      return state.map((todo) => {
        if(todo.id === action.payload) {
          return {...todo, isDone: !todo.isDone};
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};

export default todos;