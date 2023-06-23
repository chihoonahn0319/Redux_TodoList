import { createStore, combineReducers } from 'redux';
//createStore 함수와 combineReducers 함수를 import 합니다.
//createStore 함수는 Redux에서 제공하는 함수로, 스토어를 생성. 
//combineReducers 함수는 여러 개의 리듀서를 하나로 결합
import todos from '../modules/todos';
//todos 모듈을 import 합니다. 
//todos 모듈은 todos.js 파일에 정의된 리듀서와 액션들을 포함

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;