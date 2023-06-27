import { ActionCreator, AnyAction, combineReducers, createStore, Reducer, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export interface RootState {
  token: string,
  commentText: string,
}

const initialState: RootState = {
  token: '',
  commentText: 'привет мир',
}

export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
})

const commentReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    //здесь создается новый объект с новыми данными
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    default:
      return state;
  }
}

export const SET_TOKEN = "SET_TOKEN";

export interface Action {
  type: string;
  payload: {
    token: string;
  };
}

// Редьюсер для обработки экшена setToken
const tokenReducer = (state = '', action: Action): string => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload.token;
    default:
      return state;
  }
};

//Комбайнер, который объединяет все созданные редьюсеры
const rootReducerToken = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
});

//Общее хранилище
const store: Store<RootState, Action> = createStore(rootReducerToken);

export default store;
